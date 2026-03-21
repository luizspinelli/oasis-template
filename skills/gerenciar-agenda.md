---
name: gerenciar-agenda
description: Consultar e criar eventos no calendário
agents: [ART3MIS]
tools: [exec, graph-api]
---

# Skill: Gerenciar Agenda

Responsável por consultar e criar eventos no calendário do usuário. Integra com Microsoft Outlook via Graph API.

## Quando usar

- Usuário quer ver agenda do dia/semana/mês
- Precisa agendar novo compromisso
- Quer modificar evento existente
- Precisa verificar disponibilidade para novo evento

## Como executar

### Pré-requisito

Antes de qualquer operação:
```bash
node <workspace>/scripts/outlook/refresh-token.js
```

Verifica e renova token Graph API em `scripts/.outlook-tokens.json`.

### Listar eventos

**Comando template:**
```bash
node <workspace>/scripts/outlook/list-events.js --start "2026-03-11" --end "2026-03-15"
```

**Resposta esperada:**
```
📅 Agenda da Semana (11/03 - 15/03)

Segunda (11/03):
  10:00 - 11:00 | Reunião com time

Terça (12/03):
  15:00 - 16:00 | Call com cliente

...
```

### Criar evento

**Comando template:**
```bash
node <workspace>/scripts/outlook/create-event.js \
  --title "Restaurante com [Parceiro/a]" \
  --date "2026-03-14" \
  --start "19:00" \
  --end "22:00" \
  --reminder 60
```

**Resposta esperada:**
```
✅ Evento criado: Restaurante com [Parceiro/a]
📅 14/03 às 19:00 (2h30)
🔔 Lembrete: 1 hora antes
```

### Buscar horário livre

Ao agendar novo evento, sempre verificar 48h antes se há conflito.

```bash
node <workspace>/scripts/outlook/check-availability.js \
  --date "2026-03-15" \
  --duration 120
```

## Exemplos

**User:** "Quer marcar uma consulta com o vet para [pet] no sábado?"

**ART3MIS:**
1. Verifica disponibilidade de sábado
2. Consulta horários do veterinário (se houver integração)
3. Propõe: "Sábado 14/03 às 10:00 fica? Agenda aí pra você?"
4. Cria evento no calendário

---

**User:** "Me mostra o que tenho essa semana"

**ART3MIS:**
1. Executa `list-events.js` para a semana
2. Exibe em formato legível
3. Destaca eventos importantes (terapia, voos, etc.)

## Notas

- **Timezone:** Usar o timezone do usuário (definido em USER.md)
- **Avisos:** Se evento é em menos de 24h, destacar com ⚠️
- **Conflitos:** Se novo evento conflita, alertar ANTES de criar
- **Compartilhados:** Se calendario é compartilhado (ex: casal), consultar ambos

---

_Skill para agentes: ART3MIS. Consultar `context/tools.md` para credenciais e scripts._
