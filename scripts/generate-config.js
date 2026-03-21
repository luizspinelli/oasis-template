#!/usr/bin/env node

/**
 * generate-config.js
 *
 * Gera ~/.openclaw/openclaw.json com base em argumentos
 *
 * Uso:
 *   node scripts/generate-config.js \
 *     --token BOT_TOKEN \
 *     --guild GUILD_ID \
 *     --user USER_ID \
 *     --workspace /path/to/workspace \
 *     --timezone America/Sao_Paulo \
 *     --openai sk-...  (opcional) \
 *     --brave BSA...   (opcional) \
 *     --sistema CHANNEL_ID (opcional — ID do canal #sistema para heartbeat)
 */

const fs = require('fs');
const path = require('path');

const args = {};
process.argv.slice(2).forEach((arg, i, arr) => {
  if (arg.startsWith('--')) {
    const key = arg.slice(2);
    const value = arr[i + 1];
    if (value && !value.startsWith('--')) args[key] = value;
  }
});

const required = ['token', 'guild', 'user', 'workspace'];
const missing = required.filter(k => !args[k]);
if (missing.length > 0) {
  console.error('Argumentos obrigatorios faltando:', missing.map(m => '--' + m).join(', '));
  process.exit(1);
}

const timezone = args.timezone || 'America/Sao_Paulo';
const hasOpenAI = !!args.openai;
const hasBrave = !!args.brave;
const sistemaChannelId = args.sistema || null;

const config = {
  agents: {
    defaults: {
      model: {
        primary: 'anthropic/claude-sonnet-4-6',
        fallbacks: ['anthropic/claude-haiku-4-5']
      },
      workspace: args.workspace,
      userTimezone: timezone,
      compaction: {
        mode: 'safeguard',
        reserveTokens: 8000,
        keepRecentTokens: 20000,
        memoryFlush: {
          enabled: true,
          softThresholdTokens: 150000
        }
      },
      maxConcurrent: 4,
      ...(hasOpenAI && {
        memorySearch: {
          enabled: true,
          provider: 'openai',
          model: 'text-embedding-3-small',
          sources: ['memory'],
          sync: {
            onSessionStart: true,
            onSearch: true,
            watch: true
          },
          query: {
            maxResults: 10,
            minScore: 0.5
          }
        }
      }),
      heartbeat: {
        every: '1h',
        activeHours: {
          start: '08:00',
          end: '22:00',
          timezone
        },
        ...(sistemaChannelId && {
          target: 'discord',
          to: `channel:${sistemaChannelId}`
        })
      },
      contextPruning: {
        mode: 'cache-ttl',
        ttl: '2h',
        keepLastAssistants: 5,
        softTrimRatio: 0.4,
        hardClearRatio: 0.85,
        tools: { deny: ['exec', 'web_search'] }
      },
      timeoutSeconds: 300,
      subagents: { runTimeoutSeconds: 600 }
    },
    list: [
      'parzival', 'art3mis', 'aech', 'og', 'anorak',
      'daito', 'kira', 'halliday', 'shoto'
    ].map(id => ({ id, workspace: args.workspace }))
  },
  tools: {
    exec: {
      security: 'full',
      ask: 'off'
    },
    ...(hasBrave && {
      web: { search: { provider: 'brave' } }
    }),
    ...(hasOpenAI && {
      media: {
        audio: {
          enabled: true,
          models: [
            {
              provider: 'openai',
              model: 'gpt-4o-mini-transcribe',
              capabilities: ['audio']
            }
          ]
        }
      }
    })
  },
  browser: {
    headless: true
  },
  commands: {
    native: 'auto',
    nativeSkills: 'auto',
    restart: true,
    ownerDisplay: 'raw'
  },
  session: {
    dmScope: 'per-channel-peer'
  },
  messages: {
    ackReactionScope: 'group-mentions'
  },
  channels: {
    discord: {
      enabled: true,
      token: args.token,
      groupPolicy: 'allowlist',
      streaming: 'off',
      dmPolicy: 'allowlist',
      allowFrom: [args.user],
      guilds: {
        [args.guild]: {
          requireMention: false,
          users: [args.user]
        }
      }
    }
  },
  gateway: {
    port: 18789,
    mode: 'local',
    bind: 'loopback'
  },
  ...((hasOpenAI || hasBrave) && {
    env: {
      vars: {
        ...(hasOpenAI && { OPENAI_API_KEY: args.openai }),
        ...(hasBrave && { BRAVE_API_KEY: args.brave })
      }
    }
  })
};

const configDir = path.join(process.env.HOME || process.env.USERPROFILE, '.openclaw');
const configPath = path.join(configDir, 'openclaw.json');

if (!fs.existsSync(configDir)) fs.mkdirSync(configDir, { recursive: true });

try {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
  console.log('Configuracao gerada com sucesso!');
  console.log('   Arquivo: ' + configPath);
  console.log('');
  const enabled = [];
  if (hasOpenAI) enabled.push('Memory Search + Audio (OpenAI)');
  if (hasBrave) enabled.push('Brave Search');
  if (enabled.length) console.log('   Opcoes ativas: ' + enabled.join(', '));
} catch (err) {
  console.error('Erro ao escrever arquivo:', err.message);
  process.exit(1);
}
