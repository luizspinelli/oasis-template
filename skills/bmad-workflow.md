---
name: bmad-workflow
description: Workflow de desenvolvimento ágil baseado no BMAD-METHOD — do briefing ao deploy
agents: [AECH]
tools: [exec, web_search]
references: https://github.com/bmad-code-org/BMAD-METHOD
command: /bmad [projeto]
---

# Skill: BMAD Workflow de Desenvolvimento

Workflow estruturado para desenvolvimento de software, inspirado no [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD). Guia o projeto do briefing ao deploy com agentes especializados.

---

## Os 5 Estágios

### 1️⃣ PM — Product Manager
**Objetivo:** Definir o que será construído.

Perguntas obrigatórias:
- Qual o problema que isso resolve?
- Quem é o usuário?
- Qual o critério de sucesso?
- O que está **fora** do escopo?

Entregável: **PRD (Product Requirements Document)**
```markdown
## PRD — [Nome do Projeto]
**Problema:** ...
**Usuário-alvo:** ...
**Solução proposta:** ...
**Funcionalidades (MVP):**
  - [ ] Feature 1
  - [ ] Feature 2
**Fora do escopo:** ...
**Critério de aceite:** ...
```

---

### 2️⃣ ARCHITECT — Arquiteto
**Objetivo:** Definir como será construído.

Decisões obrigatórias:
- Stack tecnológica e justificativa
- Estrutura de dados / banco
- APIs e integrações externas
- Segurança e autenticação
- Deploy e infraestrutura

Entregável: **Architecture Decision Record (ADR)**
```markdown
## ADR — [Nome do Projeto]
**Stack:** [sua stack — ex: Node.js + TypeScript + PostgreSQL]
**Autenticação:** JWT / Cognito
**Infra:** [sua infra — ex: AWS Lambda + RDS / Vercel + PlanetScale]
**Estrutura de pastas:** ...
**Decisões críticas:**
  - [Decisão] → [Justificativa]
```

---

### 3️⃣ DEV — Developer
**Objetivo:** Implementar em ciclos curtos.

Protocolo por feature:
1. Criar branch `feat/nome-da-feature`
2. Implementar com TDD quando possível
3. Commit semântico: `feat:`, `fix:`, `refactor:`, `test:`
4. PR com descrição clara (o quê + por quê)

Checklist antes de abrir PR:
```
[ ] Testes passando (npm test)
[ ] Lint sem erros (npm run lint)
[ ] Sem console.log de debug
[ ] Variáveis de ambiente documentadas
[ ] README atualizado se necessário
```

---

### 4️⃣ QA — Quality Assurance
**Objetivo:** Validar antes de ir para produção.

Checklist de QA:
```
[ ] Funcionalidades do PRD implementadas?
[ ] Edge cases testados?
[ ] Performance aceitável?
[ ] Mobile/responsivo (se web)?
[ ] Acessibilidade básica?
[ ] Dados sensíveis protegidos?
[ ] Rollback possível?
```

---

### 5️⃣ DEPLOY — Release
**Objetivo:** Colocar em produção com segurança.

Checklist de deploy:
```
[ ] Branch main atualizada
[ ] Variáveis de ambiente configuradas em prod
[ ] Banco migrado (se necessário)
[ ] Monitoring/alertas configurados
[ ] URL de produção testada
[ ] Comunicar stakeholders
```

---

## Como usar no Discord

```
/bmad meu-projeto
```

AECH vai guiar você pelo workflow perguntando as decisões de cada estágio. Você pode pular estágios se já tiver as decisões tomadas.

**Comandos por estágio:**
```
/bmad prd      → Iniciar/revisar PRD
/bmad arch     → Decisões de arquitetura
/bmad dev      → Checklist de desenvolvimento
/bmad qa       → Checklist de QA
/bmad deploy   → Checklist de deploy
/bmad status   → Ver em qual estágio o projeto está
```

---

## Integração com suas ferramentas

| Estágio | Ferramenta | Skill auxiliar |
|---|---|---|
| DEV | GitHub ([seu-usuario]) | `skills/analisar-repo.md` |
| DEV | Bitbucket ([Empresa]) | `skills/revisar-codigo.md` |
| DEPLOY | Vercel | Token em `context/tools.md` |
| DEPLOY | AWS | Config em `~/.aws/credentials` |

---

## Filosofia BMAD

> "Traditional AI tools do the thinking for you, producing average results.
> BMad agents act as expert collaborators who guide you through a structured
> process to bring out your best thinking in partnership with the AI."

O AECH não faz por você — **guia você a tomar as decisões certas**. Cada estágio tem perguntas obrigatórias que forçam clareza antes de avançar.

---

_Skill para: AECH. Referência: [BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)_
