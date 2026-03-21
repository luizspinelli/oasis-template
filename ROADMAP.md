# Roadmap

Direção futura do projeto OASIS. Sugestões e contribuições são bem-vindas via [Issues](https://github.com/SEU-USUARIO/oasis-template/issues).

---

## ✅ v0.3 — Lançamento Inicial

- [x] 5 agentes com frontmatter estruturado (ART3MIS, AECH, OG, ANORAK, DAITO)
- [x] 14 skills modulares com invocação por `/comando`
- [x] Workflow BMAD para desenvolvimento (`/bmad`)
- [x] Templates para canais e agentes customizados
- [x] Onboarding conversacional (`BOOTSTRAP.md`)
- [x] Setup automatizado (`setup.sh`)

---

## ✅ v0.4 — Sistema Completo (8 Pilares)

- [x] **9 agentes** — PARZIVAL (orquestrador) + 8 especialistas, universo Ready Player One
- [x] **8 pilares mapeados** — Vida Pessoal, Trabalho, Finanças, Estudos, Saúde Física, Saúde Mental, Lazer, Relacionamentos
- [x] **The Basement** — canal multi-agente (`#basement`) com todos os agentes disponíveis
- [x] **33 skills** cobrindo todos os pilares de vida
- [x] **19 integrações plug-and-play** — Open-Meteo, WakaTime, Readwise, Oura, TMDB, Steam + 13 anteriores
- [x] **28 arquivos de canal** — contexto por canal para todos os agentes e pilares
- [x] **`setup-discord.sh`** — cria toda estrutura Discord automaticamente
- [x] **PROTOCOL.md reescrito** — handoffs, mapa de canais, regras de propagação
- [x] **📡 Sistema de Propagação** — `context/eventos.md` fila de eventos entre agentes
- [x] **🧠 Memória Inteligente** — skill `consolidar-memoria` + OASIS Score semanal (1-5 por pilar)
- [x] **Revisão completa de dados pessoais** — zero dados pessoais, zero referências quebradas

---

## 🔨 Próximas Melhorias

- [ ] **`examples/`** — workspaces pré-configurados por perfil (developer, estudante, empreendedor, casal)
- [ ] **Skill `criar-agente`** — guia interativo para criar agente personalizado via conversa
- [ ] **`.env.example`** — todas as variáveis de ambiente documentadas

---

## 🔭 Planejado

- [ ] **Banco vetorial para memória** — ChromaDB ou SQLite vector para busca semântica em memórias de longo prazo (trigger: quando `memory/` ultrapassar ~50 arquivos)
- [ ] **`npx oasis-life install`** — instalador via npm (sem clonar repo manualmente)
- [ ] **Módulos opcionais** por domínio:
  - `oasis-finance` — Google Sheets + dashboard web
  - `oasis-tech` — GitHub + Bitbucket + Vercel + BMAD completo
  - `oasis-fitness` — Garmin/Strava + plano de treino
  - `oasis-study` — Notion + Readwise + calendário de estudos
- [ ] **Slash commands nativos no Discord** — proxy para autocomplete de `/comandos`
- [ ] **Multi-usuário** — workspace compartilhado entre casal/equipe
- [ ] **Sub-agentes v1** — SORRENTO, IR0K e F'NALE como primeiros especializados

---

## 🌐 Sub-Agentes — Especialistas por Domínio

> Evolução natural do sistema: cada agente principal pode ter sub-agentes especializados abaixo dele.

```
PARZIVAL 🎯 (orquestrador)
├── ART3MIS 🏹 — Vida Pessoal
│     └── SORRENTO ⚖️  — Jurídico, contratos, burocracia
├── AECH 🔧 — Trabalho & Tech
│     └── IR0K 🔐 — Segurança, infra, DevSecOps
├── DAITO ⚔️ — Saúde Física
│     └── F'NALE ⚡ — Produtividade, foco, execução
└── ... (expansível por domínio)
```

Cada sub-agente herda o tom do agente pai, mas tem expertise mais profunda e canais dedicados.

### Sub-agentes planejados

| Sub-Agente | Pai | Área | Quando invocar |
|---|---|---|---|
| **SORRENTO** ⚖️ | ART3MIS | Jurídico & Burocracia | Contratos, IR, documentos, compliance |
| **IR0K** 🔐 | AECH | Segurança & Infra | DevSecOps, senhas, vulnerabilidades |
| **F'NALE** ⚡ | DAITO | Produtividade & Foco | Deep work, GTD, eliminação de distrações |

---

## 💡 Ideias futuras (sem prazo)

- [ ] **Novos agentes** — MARCO (jurídico/burocracia), SOFIA (nutrição), PAULO (produtividade)
- [ ] **Dashboard web** — visualização do estado do sistema OASIS em tempo real
- [ ] **CLI interativa** — `oasis status`, `oasis agent`, `oasis skill`
- [ ] **Site de documentação** — docs.oasis-life.dev
- [ ] **Galeria da comunidade** — agentes e skills criados por outros usuários
- [ ] **OASIS Hub** — servidor Discord público para usuários trocarem agentes e skills

---

## 🤝 Como contribuir

Tem uma ideia? Abra uma [Discussion](https://github.com/SEU-USUARIO/oasis-template/discussions) ou [Issue](https://github.com/SEU-USUARIO/oasis-template/issues).

Quer implementar algo? Veja [CONTRIBUTING.md](CONTRIBUTING.md).
