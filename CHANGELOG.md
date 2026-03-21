# Changelog

Todas as mudanças notáveis do projeto são documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [1.1.0] — 2026-03-21 — Simplificação & Hardening

### Canais
- Reduzido de 28 para **11 canais** — 1 por agente + `#sistema` + `#basement`
- Removidos canais muito específicos (dev, trabalho, freelance, rh, gestao-pessoas, reunioes, projetos, casal, familia, games, rotina, viagem, etc.)
- Adicionados disclaimers de "canal opcional" em canais contextuais

### Config OpenClaw (`openclaw.json.example`)
- Adicionado `agents.list` com os 9 agentes
- Adicionado `contextPruning` (cache-ttl 2h, deny exec+web_search)
- Adicionado `userTimezone`, `timeoutSeconds: 300`, `subagents.runTimeoutSeconds: 600`
- Adicionado `heartbeat.target/to` com placeholder de channel ID
- Adicionado bloco completo `models.providers.openai` (Whisper)
- Adicionado `browser.headless`, `messages.ackReactionScope`, `session.dmScope`
- `gateway.http.chatCompletions` adicionado (desabilitado por padrão)

### Setup (`setup.sh` + `generate-config.js`)
- `setup.sh` agora coleta o channel ID do `#sistema` para heartbeat
- `setup.sh` não copia `channels/exemplo.md` para o workspace (é só referência)
- `generate-config.js` atualizado: suporte a `--sistema`, gera `agents.list`, `contextPruning`, `browser`, `messages`, `session`

### Infraestrutura
- Adicionado `memory/.gitkeep` para documentar o diretório no repositório
- `_bmad/` e `_bmad-output/` adicionados ao `.gitignore`

---

## [1.0.0] — 2026-03-12 — Release Inicial

### Sistema
- 9 agentes especializados cobrindo 8 pilares de vida + 1 orquestrador
- Protocolo de handoff automático entre agentes (`agents/PROTOCOL.md`)
- Hierarquia de contexto em 3 Tiers (SOUL.md, USER.md, MEMORY.md)
- Propagação assíncrona de eventos via `context/eventos.md`

### Agentes
- **PARZIVAL** 🎯 — Orquestrador Master (visão global, coordena o time)
- **ART3MIS** 🏹 — Vida Pessoal & Rotina (agenda, viagens, organização)
- **AECH** 🔧 — Trabalho & Tech (código, arquitetura, liderança, freelance)
- **OG** 💰 — Finanças (budget, gastos, dívidas, investimentos)
- **ANORAK** 🔮 — Estudos (aprendizado, certificações, planos de estudo)
- **DAITO** ⚔️ — Saúde Física (treino, nutrição, sono, performance)
- **KIRA** 🌸 — Saúde Mental (bem-estar emocional, estresse, equilíbrio)
- **HALLIDAY** 🎮 — Lazer & Propósito (hobbies, jogos, cultura, propósito)
- **SHOTO** 🤝 — Relacionamentos (casal, família, amigos, vida social)

### Infraestrutura
- 33 skills modulares com invocação via `/comando`
- 28 arquivos de canal (contexto por canal Discord)
- 19 integrações plug-and-play (GitHub, Notion, Spotify, Strava, etc.)
- Setup interativo (`setup.sh`) + criação automática de canais Discord (`setup-discord.sh`)
- Onboarding conversacional via `BOOTSTRAP.md`

### Templates
- `agents/CUSTOM.md` — Guia de extensão + template de agente personalizado
- `channels/exemplo.md` — Template para criar canal Discord
- `skills/CUSTOM.md` — Template para criar skill modular
- `USER.md` — Template completo de perfil do usuário

### Documentação
- README.md posicionado como framework adotável
- SOUL.md com personalidade base genérica e personalizável
- AGENTS.md com documentação do sistema de carregamento de contexto
- CONTRIBUTING.md com guia de contribuição
