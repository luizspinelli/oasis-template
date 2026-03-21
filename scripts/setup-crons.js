#!/usr/bin/env node

/**
 * setup-crons.js — Instala os crons do OASIS no OpenClaw
 *
 * Uso:
 *   node scripts/setup-crons.js --all
 *   node scripts/setup-crons.js --memoria --bigpicture
 *   node scripts/setup-crons.js --all --sistema 1234567890 --timezone America/Recife
 *
 * Argumentos:
 *   --all           Instala todos os crons
 *   --memoria       Instala: Consolidar Memória
 *   --bigpicture    Instala: Atualizar Big Picture + Status
 *   --backup        Instala: Backup Workspace
 *   --cleanup       Instala: Session Cleanup
 *   --resumo        Instala: Resumo Diário
 *   --recap         Instala: Recap Semanal
 *   --healthcheck   Instala: Health Check Sistema
 *   --sistema <id>  Channel ID do #sistema para delivery das notificações
 *   --timezone <tz> Timezone dos crons (default: America/Sao_Paulo)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// ─── Configuração ──────────────────────────────────────────────────────────────

const HOME = process.env.HOME || process.env.USERPROFILE;
const OPENCLAW_CONFIG_PATH = path.join(HOME, '.openclaw', 'openclaw.json');
const DEFAULT_TIMEZONE = 'America/Sao_Paulo';
const DEFAULT_API_URL = 'http://localhost:18789';

// ─── Definição dos Crons ───────────────────────────────────────────────────────

const CRONS = [
  {
    key: 'memoria',
    name: 'Consolidar Memória',
    expr: '0 3 * * *',
    timeoutSeconds: 120,
    message: `Você é PARZIVAL. Execute a consolidação diária de memória do OASIS:
1. Leia os arquivos memory/YYYY-MM-DD.md da última semana
2. Extraia: aprendizados chave, decisões tomadas, padrões identificados, objetivos que avançaram
3. Atualize MEMORY.md com o que é relevante para persistência longa (use APPEND, nunca sobrescreva)
4. Atualize a data em 'Última Atualização' no MEMORY.md
5. Responda com NO_REPLY`,
  },
  {
    key: 'bigpicture',
    name: 'Atualizar Big Picture + Status',
    expr: '30 3 * * *',
    timeoutSeconds: 180,
    message: `Você é PARZIVAL. Atualize os arquivos de contexto com base nos eventos do dia/semana.

1. context/bigpicture.md:
- Leia os arquivos memory/YYYY-MM-DD.md dos últimos 7 dias
- Leia context/bigpicture.md atual
- Identifique o que mudou em qualquer pilar de vida
- Atualize as seções relevantes (não apague — edite só o que mudou)
- Atualize o campo 'Última atualização' no topo

2. context/status.md:
- Leia context/status.md atual
- Marque pendências concluídas ([ ] → [x])
- Adicione novos projetos ou eventos que surgiram
- Atualize projetos com status real
- Atualize 'Última atualização' no rodapé

Responda com NO_REPLY.`,
  },
  {
    key: 'backup',
    name: 'Backup Workspace',
    expr: '45 3 * * *',
    timeoutSeconds: 60,
    message: `Execute o backup do workspace OASIS para o GitHub. Passos:
1. cd ~/.openclaw/workspace
2. git add -A
3. git commit -m "backup: $(date '+%Y-%m-%d %H:%M')" ou exit 0 se nada mudou
4. git push origin main (se remote configurado)
Se o remote não estiver configurado, apenas faça o commit local e informe. Não exponha tokens ou secrets no output. Responda com NO_REPLY se tudo correr bem, ou informe o erro se falhar.`,
  },
  {
    key: 'cleanup',
    name: 'Session Cleanup',
    expr: '0 4 * * *',
    timeoutSeconds: 120,
    message: `Limpe sessões inativas do OpenClaw. Passos:
1. Leia ~/.openclaw/agents/main/sessions/sessions.json
2. Para cada sessão, verifique o campo 'updatedAt' (timestamp em ms)
3. Se a sessão está inativa há mais de 2 dias (172800000ms), apague o arquivo .jsonl correspondente e remova a entrada do sessions.json
4. Salve o sessions.json atualizado
5. Responda NO_REPLY se nenhuma sessão foi removida, ou liste quantas foram limpas`,
  },
  {
    key: 'resumo',
    name: 'Resumo Diário',
    expr: '30 8 * * 1-5',
    timeoutSeconds: 150,
    message: `Gere o resumo do dia. Inclua:
1. Clima na sua cidade: curl -s 'wttr.in/SUA_CIDADE?format=%c+%t+(sensação+%f),+vento+%w,+umidade+%h'
2. Tarefas do dia (se Todoist configurado em context/tools.md)
3. Eventos do dia (se calendário configurado)
4. Qualquer pendência crítica do context/status.md ou HEARTBEAT.md
Formate de forma direta e concisa. Só mencione o que realmente existe.`,
  },
  {
    key: 'recap',
    name: 'Recap Semanal',
    expr: '0 9 * * 0',
    timeoutSeconds: 90,
    message: `Você é PARZIVAL. Gere o recap semanal:
1. Leia os arquivos memory/ da semana (YYYY-MM-DD.md dos últimos 7 dias)
2. Leia context/status.md para pendências abertas
3. Resuma: o que foi feito, o que ficou pendente, foco da próxima semana
4. Destaque eventos importantes da próxima semana
Formate de forma clara e motivadora. Seja conciso.`,
  },
  {
    key: 'healthcheck',
    name: 'Health Check Sistema',
    expr: '0 10 * * *',
    timeoutSeconds: 30,
    message: `Verifique a saúde do sistema OASIS. Execute e relate apenas se houver problema:
1. df -h / | tail -1 — disco (alertar se >80%)
2. free -h | grep Mem — memória (alertar se >85%)
3. uptime -p — uptime
Se tudo normal, responda NO_REPLY. Só envie mensagem se houver algo crítico.`,
  },
];

// ─── Utilitários ───────────────────────────────────────────────────────────────

/**
 * Lê a configuração do OpenClaw para obter a URL da API e o token de autenticação.
 * @returns {{ apiUrl: string, token: string }}
 */
function readOpenClawConfig() {
  if (!fs.existsSync(OPENCLAW_CONFIG_PATH)) {
    console.error(`❌ Arquivo de configuração não encontrado: ${OPENCLAW_CONFIG_PATH}`);
    console.error('   Certifique-se de que o OpenClaw está instalado e configurado.');
    process.exit(1);
  }

  let config;
  try {
    config = JSON.parse(fs.readFileSync(OPENCLAW_CONFIG_PATH, 'utf8'));
  } catch (err) {
    console.error(`❌ Erro ao ler ${OPENCLAW_CONFIG_PATH}: ${err.message}`);
    process.exit(1);
  }

  // O gateway pode estar em diferentes campos dependendo da versão do OpenClaw
  const apiUrl = config.gatewayUrl || config.gateway?.url || DEFAULT_API_URL;
  const token = config.gatewayToken || config.gateway?.token || config.token || '';

  return { apiUrl: apiUrl.replace(/\/$/, ''), token };
}

/**
 * Faz uma requisição HTTP/HTTPS e retorna uma Promise com a resposta.
 * @param {string} url
 * @param {object} options - Opções do http.request
 * @param {string|null} body - Corpo da requisição (JSON)
 * @returns {Promise<{ status: number, data: string }>}
 */
function request(url, options, body = null) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

/**
 * Monta o payload do cron para a API do OpenClaw.
 * @param {object} cron - Definição do cron
 * @param {string} timezone
 * @param {string|null} sistemaChannelId
 * @returns {object}
 */
function buildCronPayload(cron, timezone, sistemaChannelId) {
  const payload = {
    name: cron.name,
    schedule: {
      kind: 'cron',
      expr: cron.expr,
      tz: timezone,
    },
    payload: {
      kind: 'agentTurn',
      message: cron.message,
      timeoutSeconds: cron.timeoutSeconds,
    },
    sessionTarget: 'isolated',
  };

  // Adiciona delivery se o canal #sistema foi informado
  if (sistemaChannelId) {
    payload.delivery = {
      mode: 'announce',
      channel: 'discord',
      to: `channel:${sistemaChannelId}`,
    };
  }

  return payload;
}

/**
 * Instala um cron via API do OpenClaw.
 * @param {object} cron
 * @param {string} apiUrl
 * @param {string} token
 * @param {string} timezone
 * @param {string|null} sistemaChannelId
 */
async function installCron(cron, apiUrl, token, timezone, sistemaChannelId) {
  const payload = buildCronPayload(cron, timezone, sistemaChannelId);
  const body = JSON.stringify(payload);

  const urlObj = new URL(`${apiUrl}/api/v1/crons`);
  const options = {
    hostname: urlObj.hostname,
    port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
    path: urlObj.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  try {
    const { status, data } = await request(urlObj.toString(), options, body);

    if (status >= 200 && status < 300) {
      console.log(`✅ ${cron.name} (${cron.expr} ${timezone})`);
    } else {
      let msg = data;
      try { msg = JSON.parse(data)?.error || JSON.parse(data)?.message || data; } catch {}
      console.error(`❌ ${cron.name} — HTTP ${status}: ${msg}`);
    }
  } catch (err) {
    console.error(`❌ ${cron.name} — Erro de conexão: ${err.message}`);
    console.error('   Verifique se o OpenClaw Gateway está rodando: openclaw gateway status');
  }
}

// ─── Parse de argumentos ───────────────────────────────────────────────────────

function parseArgs(argv) {
  const args = argv.slice(2);
  const result = {
    all: false,
    timezone: DEFAULT_TIMEZONE,
    sistema: null,
    keys: [],
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--all') {
      result.all = true;
    } else if (arg === '--timezone' && args[i + 1]) {
      result.timezone = args[++i];
    } else if (arg === '--sistema' && args[i + 1]) {
      result.sistema = args[++i];
    } else if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const cron = CRONS.find((c) => c.key === key);
      if (cron) {
        result.keys.push(key);
      } else {
        console.warn(`⚠️  Argumento desconhecido: ${arg} (ignorado)`);
      }
    }
  }

  return result;
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv);

  // Seleciona os crons a instalar
  let selected;
  if (args.all) {
    selected = CRONS;
  } else if (args.keys.length > 0) {
    selected = CRONS.filter((c) => args.keys.includes(c.key));
  } else {
    console.log('OASIS — Setup de Crons');
    console.log('');
    console.log('Uso:');
    console.log('  node scripts/setup-crons.js --all');
    console.log('  node scripts/setup-crons.js --memoria --bigpicture --backup');
    console.log('  node scripts/setup-crons.js --all --sistema <channel_id>');
    console.log('  node scripts/setup-crons.js --all --timezone America/Recife');
    console.log('');
    console.log('Crons disponíveis:');
    CRONS.forEach((c) => {
      console.log(`  --${c.key.padEnd(12)} ${c.name} (${c.expr})`);
    });
    process.exit(0);
  }

  if (selected.length === 0) {
    console.error('❌ Nenhum cron selecionado.');
    process.exit(1);
  }

  // Lê configuração do OpenClaw
  const { apiUrl, token } = readOpenClawConfig();

  console.log(`\nOASIS — Instalando ${selected.length} cron(s)`);
  console.log(`  API:      ${apiUrl}`);
  console.log(`  Timezone: ${args.timezone}`);
  if (args.sistema) {
    console.log(`  Sistema:  channel:${args.sistema}`);
  }
  console.log('');

  // Instala cada cron sequencialmente
  for (const cron of selected) {
    await installCron(cron, apiUrl, token, args.timezone, args.sistema);
  }

  console.log('\nConcluído. Para verificar: openclaw cron list');
}

main().catch((err) => {
  console.error(`\n❌ Erro inesperado: ${err.message}`);
  process.exit(1);
});
