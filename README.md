# OASIS

[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](CHANGELOG.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![OpenClaw](https://img.shields.io/badge/powered%20by-OpenClaw-purple.svg)](https://openclaw.ai)
[![Discord](https://img.shields.io/badge/platform-Discord-5865F2.svg)](https://discord.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Personal Life Management Framework** — 9 agentes de IA especializados para gerenciar todos os pilares da sua vida, rodando no seu servidor Discord.

> Inspirado no [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD) — BMAD organiza seu desenvolvimento de software, OASIS organiza sua **vida**.

---

## O que é o OASIS?

OASIS é um **framework instalável** de agentes de IA que vivem no seu Discord. Você clona, personaliza com seus dados, e tem um time de 9 especialistas que conhecem você — sua rotina, seus projetos, suas metas, suas finanças — e respondem de acordo.

Não é um chatbot genérico. Cada agente tem personalidade, especialidade e contexto. Eles se comunicam entre si, delegam tarefas e mantêm memória compartilhada.

```
Você manda mensagem no #financeiro  →  OG analisa seu orçamento
Você manda mensagem no #fitness     →  DAITO monta seu treino
Você manda mensagem no #kira        →  KIRA faz um check-in emocional
Você manda mensagem no #geral       →  PARZIVAL coordena o que for preciso
```

---

## Para quem?

- **Profissionais que querem organizar a vida** — Trabalho, finanças, saúde, relacionamentos gerenciados por agentes especializados
- **Desenvolvedores que querem um sistema extensível** — Crie seus próprios agentes, skills e canais
- **Qualquer pessoa que queira ir além do chatbot genérico** — Contexto persistente, memória compartilhada, personalidade real

---

## Por que OASIS?

| | Chatbot Genérico | OASIS |
|---|---|---|
| **Contexto** | Esquece tudo a cada conversa | Memória persistente (USER.md, MEMORY.md) |
| **Especialização** | Um bot genérico para tudo | 9 agentes, cada um expert no seu pilar |
| **Personalidade** | Tom padronizado | Cada agente tem tom, vibe e estilo próprio |
| **Extensibilidade** | Fechado | Crie agentes, skills e canais livremente |
| **Privacidade** | Dados na nuvem de terceiros | Seu servidor Discord, seus dados |
| **Coordenação** | Sem | Agentes delegam entre si automaticamente |

---

## Os 9 Agentes

| Agente | Pilar | Personalidade | Canais |
|--------|-------|--------------|--------|
| **PARZIVAL** 🎯 | Orquestrador Master | Estratégico, visão global, coordena o time | #geral, #basement |
| **ART3MIS** 🏹 | Vida Pessoal & Rotina | Organizada, direta, acolhedora | #art3mis |
| **AECH** 🔧 | Trabalho & Tech | Técnico, objetivo, sem enrolação | #aech |
| **OG** 💰 | Finanças | Analítico, conservador, números | #financeiro |
| **ANORAK** 🔮 | Estudos | Curioso, metódico, exigente | #estudos |
| **DAITO** ⚔️ | Saúde Física | Intenso, motivador, zero desculpa | #fitness |
| **KIRA** 🌸 | Saúde Mental | Empática, acolhedora, presente | #kira |
| **HALLIDAY** 🎮 | Lazer & Propósito | Filosófico, entusiasmado, cultura pop | #halliday |
| **SHOTO** 🤝 | Relacionamentos | Empático, atento, valoriza conexões | #shoto |

Cada agente cobre um pilar da vida — juntos, cobrem **tudo**.

---

## Como funciona?

```
Discord Channel #fitness
        ↓
channels/fitness.md  →  "Agente: DAITO"
        ↓
agents/DAITO.md      →  Persona completa do Daito
        ↓
USER.md              →  Seu perfil (rotina, metas, restrições)
        ↓
Resposta personalizada ⚔️
```

### Coordenação entre agentes

Quando um assunto cruza pilares, os agentes delegam automaticamente:

```
Você no #fitness menciona que tá estressado do trabalho
        ↓
DAITO: "Isso parece burnout. Leva pro #kira — KIRA te ajuda."
        ↓
Você vai pro #kira → KIRA assume
```

As regras de delegação estão em `agents/PROTOCOL.md`.

---

## Instalação

### Pré-requisitos

| Dependência | Para quê | Como obter |
|---|---|---|
| **Node.js 18+** | Executar OpenClaw e scripts | [nodejs.org](https://nodejs.org) |
| **OpenClaw** | Motor dos agentes | `npm install -g openclaw` |
| **Conta Discord** | Interface dos agentes | [discord.com](https://discord.com) |
| **Discord Bot** | Conectar ao servidor | [discord.com/developers](https://discord.com/developers/applications) |
| **Anthropic API Key** | Modelo de linguagem (Claude) | [console.anthropic.com](https://console.anthropic.com) |
| **OpenAI API Key** _(opcional)_ | Memory search (embeddings) + transcrição de áudio (Whisper) | [platform.openai.com](https://platform.openai.com/api-keys) |
| **Brave Search API Key** _(opcional)_ | Pesquisa web em tempo real | [api.search.brave.com](https://api.search.brave.com) |

### Setup em 3 passos

```bash
# 1. Clone o template
git clone https://github.com/luizspinelli/oasis-template
cd oasis-template

# 2. Rode o setup interativo
bash setup.sh

# 3. Inicie o OpenClaw
openclaw gateway start
```

O `setup.sh` vai:
- Verificar pré-requisitos (Node.js 18+, OpenClaw, Anthropic API Key)
- Coletar seu Discord Bot Token, Guild ID e User ID
- Copiar **todo o framework** para `~/.openclaw/workspace/` (agentes, canais, skills, contextos)
- Gerar o `~/.openclaw/openclaw.json` configurado
- Criar `USER.md` com seu perfil básico pre-preenchido
- Copiar `BOOTSTRAP.md` para onboarding guiado na primeira sessão

```bash
# 4. (Opcional) Criar toda a estrutura de canais no Discord automaticamente
bash scripts/setup-discord.sh
```

### Onboarding

Ao iniciar, o agente lê o `BOOTSTRAP.md` e conduz o onboarding conversacional — perguntando sobre você, seus projetos e configurando o `USER.md` no seu ritmo.

---

## Automações com Crons

O OASIS inclui um conjunto de **crons pré-configurados** que mantêm o sistema funcionando sozinho — sem você precisar lembrar de fazer nada manualmente.

### Como funcionam

Os crons são tarefas agendadas que rodam no OpenClaw em horários definidos. Cada cron dispara um agente com uma instrução específica e entrega o resultado no canal Discord configurado.

### Crons incluídos

| Cron | Quando | O que faz |
|------|--------|-----------|
| 🧠 **Consolidar Memória** | Diário — 3h | PARZIVAL extrai aprendizados dos arquivos `memory/` e consolida no `MEMORY.md` |
| 🗺️ **Atualizar Big Picture** | Diário — 3h30 | PARZIVAL atualiza `context/bigpicture.md` e `context/status.md` com base nos eventos do dia |
| 💾 **Backup Workspace** | Diário — 3h45 | Faz `git commit + push` do workspace inteiro |
| 🧹 **Session Cleanup** | Diário — 4h | Remove sessões inativas do OpenClaw (>2 dias) |
| 🌅 **Resumo Diário** | Seg–Sex — 8h30 | Clima, tarefas do dia, eventos e pendências críticas |
| 📊 **Recap Semanal** | Domingo — 9h | PARZIVAL recapitula a semana: o que foi feito, o que ficou, foco da próxima |
| ❤️ **Health Check** | Diário — 10h | Verifica disco, memória e uptime — só avisa se algo estiver crítico |

### Instalar

```bash
# Instalar todos os crons de uma vez
node scripts/setup-crons.js --all --timezone America/Sao_Paulo --sistema SEU_CHANNEL_ID

# Ou instalar individualmente
node scripts/setup-crons.js --memoria --bigpicture --backup
```

> Veja `docs/crons.md` para documentação completa, personalização e crons opcionais.

---

## Recursos Opcionais

### 🧠 Memory Search (OpenAI Embeddings)

Com uma OpenAI API Key configurada, os agentes ganham **busca semântica na memória** — em vez de ler arquivos linha a linha, eles encontram exatamente o que é relevante para cada conversa.

Configure em `openclaw.json`:

```json
"memorySearch": {
  "enabled": true,
  "provider": "openai",
  "model": "text-embedding-3-small",
  "sources": ["memory"],
  "sync": { "onSessionStart": true, "watch": true }
}
```

### 🎙️ Transcrição de Áudio (Whisper)

Com OpenAI configurado, mensagens de voz enviadas no Discord são transcritas automaticamente antes de chegar ao agente.

```json
"tools": {
  "media": {
    "audio": {
      "enabled": true,
      "models": [{ "provider": "openai", "model": "gpt-4o-mini-transcribe", "capabilities": ["audio"] }]
    }
  }
}
```

### 🔍 Brave Search

Com uma Brave API Key, os agentes conseguem buscar informações em tempo real na web.

```json
"tools": {
  "web": { "search": { "provider": "brave" } }
},
"env": {
  "vars": { "BRAVE_API_KEY": "sua-key" }
}
```

Veja o `openclaw.json.example` para a configuração completa.

---

## Personalização

O OASIS foi feito para ser adaptado. Três formas de personalizar:

### 1. Preencher seu perfil
Edite `USER.md` com seus dados — é a fonte de verdade que todos os agentes consultam. Tem seções para identidade, parceiro(a), finanças, saúde, rotina e mais.

### 2. Criar novos agentes, canais e skills
Siga o guia completo em [`agents/CUSTOM.md`](agents/CUSTOM.md):
- **Novo agente:** Template pronto com frontmatter, persona, comandos e handoffs
- **Novo canal:** Copie `channels/exemplo.md` e vincule ao agente
- **Nova skill:** Copie `skills/CUSTOM.md` e registre no agente

### 3. Configurar integrações
Edite `context/tools.md` com seus tokens — 19 integrações plug-and-play disponíveis.

---

## Estrutura de Canais Sugerida

```
🎯 OASIS — HUB
  👋 geral        ← PARZIVAL (orquestrador, visão global)
  🎯 basement     ← PARZIVAL + todos (party mode) [opcional]

🏹 ART3MIS — VIDA PESSOAL
  🏹 art3mis      ← rotina, agenda, organização pessoal, viagens

🔧 AECH — TRABALHO & TECH
  🔧 aech         ← trabalho, código, carreira, projetos

💰 OG — FINANÇAS
  💰 financeiro   ← budget, gastos, dívidas, investimentos

🔮 ANORAK — ESTUDOS
  📚 estudos      ← cursos, certificações, livros

⚔️ DAITO — SAÚDE FÍSICA
  🏋️ fitness      ← treino, nutrição, performance

🌸 KIRA — SAÚDE MENTAL
  🌸 kira         ← bem-estar, estresse, equilíbrio emocional

🎮 HALLIDAY — LAZER
  🎮 halliday     ← hobbies, entretenimento, propósito

🤝 SHOTO — RELACIONAMENTOS
  🤝 shoto        ← família, casal, amigos, vida social

⚙️ SISTEMA
  ⚙️ sistema      ← logs, crons, status do sistema [opcional]
```

> **Dica:** Comece com os 9 canais principais (um por agente). Adicione `#basement` e `#sistema` conforme necessário. Quer mais canais? Copie `channels/exemplo.md` e personalize.
---

## Estrutura do Projeto

```
oasis-template/
├── setup.sh                    # Setup interativo
├── openclaw.json.example       # Exemplo de configuração completo
├── BOOTSTRAP.md                # Onboarding conversacional (auto-deleta após uso)
├── SOUL.md                     # Personalidade base do sistema
├── USER.md                     # Seu perfil (preenchido no onboarding)
├── MEMORY.md                   # Memória compartilhada dos agentes
├── AGENTS.md                   # Como o sistema funciona
│
├── agents/                     # Os 9 agentes
│   ├── PARZIVAL.md, ART3MIS.md, AECH.md, OG.md ...
│   ├── PROTOCOL.md             # Regras de handoff entre agentes
│   └── CUSTOM.md               # Guia de extensão + template
│
├── channels/                   # Contexto por canal Discord (11 canais)
│   └── exemplo.md              # Template para criar canal novo
│
├── context/                    # Contextos globais
│   ├── INDEX.md, bigpicture.md, tools.md, eventos.md, status.md
│
├── skills/                     # Skills modulares (33 incluídas)
│   └── CUSTOM.md               # Template para criar skill
│
└── scripts/
    ├── generate-config.js      # Gera openclaw.json
    └── setup-discord.sh        # Cria categorias e canais no Discord
```

---

## Skills & Comandos

| Comando | Agente | O que faz |
|---|---|---|
| `/status` | PARZIVAL | Visão geral de todos os pilares |
| `/hoje` | PARZIVAL | Prioridades do dia |
| `/agenda [período]` | ART3MIS | Consulta ou cria eventos |
| `/tarefas` | ART3MIS | Lista e organiza pendências |
| `/viagem [destino]` | ART3MIS | Planeja viagem completa |
| `/resumo [mês]` | OG | Análise financeira do mês |
| `/pr [repo]` | AECH | Revisa pull request |
| `/treino` | DAITO | Monta treino da semana |
| `/checkin` | KIRA | Check-in emocional |
| `/plano [tema]` | ANORAK | Cria plano de estudos |
| `/lazer` | HALLIDAY | Sugestão de programa |

---

## Hierarquia de Contexto

```
TIER 1 — Sempre (toda sessão)
  └── SOUL.md + USER.md + memory/hoje.md

TIER 2 — Por canal
  └── channels/<nome>.md → agents/<AGENTE>.md

TIER 3 — Sob demanda
  └── context/tools.md (antes de usar ferramentas)
  └── context/status.md (visão geral dos projetos)
```

---

## Integrações Plug-and-Play

Configure em `context/tools.md`:

| Integração | Uso |
|---|---|
| 🐙 GitHub | Commits, PRs, issues |
| 🪣 Bitbucket | Repos da empresa |
| 📋 Notion | Tarefas e base de conhecimento |
| 🎯 Linear | Issues e sprints |
| 💬 Slack | Mensagens e notificações |
| 🔍 Brave Search | Pesquisa em tempo real |
| 🎵 Spotify | Música e playlists |
| 🏃 Strava | Atividades físicas |
| 📦 Vercel | Status de deploys |
| ✅ Todoist | Tarefas pessoais |
| 📅 Calendly | Agenda de reuniões |
| 🔔 Sentry | Monitoramento de erros |
| 🌤️ Open-Meteo | Clima (grátis, sem key) |
| ⏱️ WakaTime | Tempo de código |
| 📖 Readwise | Highlights de livros |
| 💍 Oura Ring | Sono, recovery e HRV |
| 🎬 TMDB | Filmes e séries |
| 🎮 Steam | Biblioteca de jogos |

---

## Contribuindo

Pull requests são bem-vindos! Veja [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Licença

MIT — use, modifique, compartilhe.

---

*OASIS — porque sua vida merece um time de especialistas.*
