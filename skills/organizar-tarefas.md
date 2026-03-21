---
name: organizar-tarefas
description: Criar e gerenciar tarefas via Microsoft To Do e Graph API
agents: [ART3MIS]
tools: [exec, graph-api]
---

# Skill: Organizar Tarefas

Integração com Microsoft To Do para criar, listar e marcar tarefas como concluídas.

## Quando usar

- Usuário quer adicionar tarefa
- Quer ver tarefas pendentes
- Quer marcar tarefa como concluída
- Quer priorizar tarefas

## Como executar

### Pré-requisito

Antes de qualquer operação:
```bash
node <workspace>/scripts/outlook/refresh-token.js
```

### Listar tarefas

**Comando template:**
```bash
node <workspace>/scripts/outlook/list-tasks.js --list "Pessoal"
```

**Resposta esperada:**
```
📋 Tarefas Pessoal (pendentes)

🔴 Críticas:
  - Comprar passagem aérea [14/03]
  - Confirmar reserva [destino] [data]

🟡 Importantes:
  - Separar mala
  - Revisar documentos

🟢 Normal:
  - Pagar conta de água
  - Abastecer carro
```

### Adicionar tarefa

**Comando template:**
```bash
node <workspace>/scripts/outlook/create-task.js \
  --list "Pessoal" \
  --title "Reservar viagem [destino]" \
  --due "2026-03-11" \
  --priority high
```

**Resposta esperada:**
```
✅ Tarefa adicionada: Reservar viagem [destino]
📍 Lista: Pessoal
📅 Vencimento: 11/03 (hoje!)
🔴 Prioridade: Alta
```

### Marcar como concluída

**Comando template:**
```bash
node <workspace>/scripts/outlook/complete-task.js \
  --list "Pessoal" \
  --title "Reservar viagem [destino]"
```

## Estrutura de Listas

Padrão de listas sugeridas:

- **Pessoal:** tarefas rotina (compras, pagamentos, etc.)
- **Trabalho:** projetos, deliverables
- **Viagem:** checklist pré-viagem (documentos, mala, etc.)
- **Fitness:** goals e rastreamento
- **Estudos:** cursos, certificações em progresso

## Exemplos

**User:** "Adiciona aí uma tarefa de comprar passagem"

**ART3MIS:**
1. Cria tarefa em "Pessoal" com data crítica
2. Confirma adição
3. Remete sobre viagem (se houver contexto)

---

**User:** "Mostra minhas tarefas"

**ART3MIS:**
1. Executa `list-tasks.js` de "Pessoal"
2. Exibe agrupado por prioridade
3. Destaca vencidas (vermelho)
4. Oferece ajuda para priorizar

## Priorização

Regra ART3MIS para priorizar tarefas:

🔴 **Crítica:** vence hoje ou amanhã, impacta vida pessoal
🟡 **Importante:** vence esta semana, tem impacto
🟢 **Normal:** pode esperar, nice-to-have

Revisar prioridades toda segunda-feira.

## Notas

- Tarefas com data fixa marcam data de vencimento
- To Do integra com Outlook calendar (visualizar juntos)
- Sync automático entre dispositivos (Outlook web, app, Teams)
- Marcar como concluída dá sensação de progresso (importante!)

---

_Skill para agentes: ART3MIS. Consultar `context/tools.md` para tokens._
