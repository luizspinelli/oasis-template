---
name: planejar-sprint
description: Planejar sprint semanal ou quinzenal com priorização e distribuição do backlog
agents: [AECH]
tools: [exec, bitbucket-api]
credentials: scripts/bitbucket-config.json
---

# Skill: Planejar Sprint

Sistema para planejar sprints semanais ou quinzenais da  — priorizar backlog, estimar tarefas, distribuir para o time.

## Quando usar

-  precisa planejar sprint (início de semana/quinzena)
- Revisar backlog e priorizar itens
- Estimar complexidade das tarefas (story points)
- Distribuir tarefas entre membros do time
- Fazer retrospectiva de sprint anterior

## Contexto do Time 

**Diretos de :**
- **[Dev A]** — dev sênior, [Projeto]
- **[Dev B]** — dev sênior, [Projeto]
- **[Dev C]** — dev pleno, [Projeto]
- **[TL]** — tech lead, distribuição de tarefas
- **[Dev D]** — [status]

**Projetos ativos:**
- [Projeto A] — maior vertical
- [Projeto B] — e-commerce
- [Projeto C] — marketplace
- [Projeto SaaS] — produto próprio
- [Projeto D] — logística

## Como Executar

### Comando: `/sprint [semana]`

Planejar sprint da semana especificada:

```bash
# Exemplo: planejar sprint da semana 11 (março 2026)
/sprint 11
```

**Workflow:**

1. **Listar backlog** via Bitbucket API:
```bash
curl -X GET https://api.bitbucket.org/2.0/repositories/[WORKSPACE]/[PROJETO]/issues \
  -u "email:token" \
  -d "state=new&state=open" | jq '.values | sort_by(.priority)'
```

2. **Estimar complexidade** (Fibonacci: 1, 2, 3, 5, 8, 13):
   - **1 ponto:** Bug trivial, documentação rápida
   - **2 pontos:** Tarefa simples, ajuste pequeno
   - **3 pontos:** Feature pequena, sem integração complexa
   - **5 pontos:** Feature média, com integração
   - **8 pontos:** Feature complexa, nova infraestrutura
   - **13 pontos:** Muito complexo, quebrado em sub-tasks

3. **Distribuir entre diretos:**
```
SPRINT 11 (10/03 - 21/03)
═════════════════════════

🎯 Capacity: ~32 pontos (4 devs × 8 pontos/pessoa)

📌 Prioridade Alta (P1)
├─ [P1] [Projeto A]: Sincronização de estoque
   └─ 8 pontos → [TL]
├─ [P1] [Projeto B]: Fix critical bug DB
   └─ 5 pontos → [Dev A]
└─ [P1] [Projeto C]: Validação de pagamento
   └─ 3 pontos → [Dev C]

📌 Prioridade Média (P2)
├─ [P2] [Projeto A]: Relatório de vendas
   └─ 5 pontos → [Dev B]
├─ [P2] [Projeto SaaS]: Melhorias de UI
   └─ 3 pontos → [Dev C]
└─ [P2] [Projeto D]: Integração API
   └─ 5 pontos → [Dev A]

📊 Resumo:
  • Total alocado: 29 pontos
  • Margem: +3 pontos (buffer para suporte/bugs)
  • Taxa de conclusão (prev. anterior): 87%
```

4. **Criar board no Jira/Bitbucket:**
```bash
curl -X POST https://api.bitbucket.org/2.0/repositories/[WORKSPACE]/[PROJETO]/issues \
  -u "email:token" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "[SPRINT 11] Task name",
    "assignee": {"username": "[ASSIGNEE]"},
    "priority": "[HIGH|MEDIUM|LOW]",
    "kind": "task"
  }'
```

## Retrospectiva de Sprint

**Comando:** `/sprint-retro [semana]`

Analisar sprint anterior:

```
🔍 Retrospectiva Sprint 10
═════════════════════════

✅ O que deu certo:
  • [Dev A] entregou 12 pontos (meta: 8)
  • Bug crítico de [Projeto B] resolvido em 2 dias
  • Comunicação com [TL] melhorou

⚠️ O que não deu:
  • [Dev B] não iniciou tarefa de relatório (prioridade confusa)
  • Integração com API de [Projeto A] levou mais do que estimado

🔧 Ações para próxima sprint:
  1. Refinar estimativa de integração com +3 pontos
  2. Confirmar prioridades com [TL] no início
  3. Daily standup 10h (reduzir para 15min)

📊 Dados:
  • Pontos planejados: 32
  • Pontos concluídos: 26 (81%)
  • Velocity média: 28 pontos/sprint
```

## Boas Práticas

- **Planejar segunda-feira:** novo sprint, distribuir tarefas
- **Daily standup:** 15min, sync rápido de bloqueios
- **Mid-sprint check:** quinta-feira, realocar se necessário
- **Retroativa viernes:** review + planning da próxima

## Estimativas Realistas

- **Nunca subestimar:** Se parece "2 pontos", provavelmente é "3"
- **Buffer é amigo:** Sempre deixar 20-30% de margem para suporte
- **Conversar antes:** tarefas >8 pontos devem ser discutidas antes
- **Reestimar a meio:** Se bloqueado ou complexidade mudou, renegociar

---

_Skill para: AECH. Adaptar com nomes reais do time em USER.md. Credenciais em `scripts/bitbucket-config.json`._
