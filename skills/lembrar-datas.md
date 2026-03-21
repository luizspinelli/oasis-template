---
name: lembrar-datas
description: Gerenciar datas importantes via Outlook Calendar e Microsoft To Do
agents: [ART3MIS]
tools: [exec, microsoft-graph-api]
credentials: scripts/.outlook-tokens.json
---

# Skill: Lembrar Datas

Sistema de gerenciamento de datas importantes (aniversários, compromissos, eventos) via Outlook Calendar e Microsoft To Do.

## Quando usar

-  precisa lembrar de datas importantes (aniversários, eventos, compromissos)
- Criar lembretes recorrentes (aniversários anuais)
- Sincronizar datas do USER.md com o calendário Outlook
- Gerar aviso antecipado (1 semana, 1 dia antes)

## Datas Críticas (carregar de USER.md)

> As datas abaixo são exemplos. Preencher com as datas reais da seção "Datas Importantes" do `USER.md`.

| Data | Evento | Frequência | Notas |
|------|--------|-----------|-------|
| [DD/MM] | 🎂 Aniversário do usuário | Anual | [notas] |
| [DD/MM] | 💍 Aniversário de casamento | Anual | Planejamento antecipado |
| [DD/MM] | 🎂 Aniversário parceiro(a) | Anual | Surpreender com programa |
| [DD/MM] | 🎂 Aniversário [familiar 1] | Anual | Contato familiar |
| [DD/MM] | 🎂 Aniversário [familiar 2] | Anual | Contato familiar |
| [DD/MM] | 🎂 Aniversário [amigo 1] | Anual | [contexto da amizade] |
| [DD/MM] | 🎂 Aniversário [amigo 2] | Anual | [contexto da amizade] |

## Como Executar

### Comando: `/lembrete [data] [texto]`

Criar novo lembrete via Microsoft To Do:

```bash
curl -X POST https://graph.microsoft.com/v1.0/me/todo/lists/[LIST_ID]/tasks \
  -H "Authorization: Bearer [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "[TEXTO]",
    "dueDateTime": {
      "dateTime": "[ISO_DATE]",
      "timeZone": "America/Sao_Paulo"
    },
    "isReminderOn": true,
    "reminderMinutesBeforeStart": 1440
  }'
```

**Exemplo:**
- `/lembrete 2026-04-05 Aniversário  — programar com `
- Resultado: Tarefa criada em Microsoft To Do com lembrete 24h antes

### Comando: `/datas`

Listar todas as datas importantes do mês/próximos 30 dias:

```bash
curl -X GET https://graph.microsoft.com/v1.0/me/events \
  -H "Authorization: Bearer [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "startDateTime": "[TODAY]",
    "endDateTime": "[TODAY + 30 dias]"
  }'
```

**Exemplo de saída:**

```
📅 Próximas Datas Importantes:

⏰ 05/04 (23 dias) — 🎂 Aniversário 
   → Lembrete: 1 semana antes (29/03)
   
⏰ 17/04 (35 dias) — 💍 Aniversário de Casamento
   → Lembrete: 2 semanas antes (03/04)
   
⏰ 27/04 (45 dias) — 🎂 Aniversário 
   → Lembrete: 1 semana antes (20/04)
```

## Sincronizar com Calendário

**Rotina automática:**
- Ler `USER.md` → listar todas datas de `Datas Importantes`
- Para cada data: verificar se existe evento em Outlook
- Se não existir: criar evento recorrente (anual)
- Se existir: verificar se está configurado lembrete correto

**Script de sincronização:**

```bash
# Sincronizar datas de USER.md com Outlook
python3 scripts/sync-outlook-dates.py \
  --source USER.md \
  --calendar "Datas Importantes" \
  --token scripts/.outlook-tokens.json
```

## Formato de Resposta

**Confirmação de lembrete criado:**

```
✅ Lembrete criado!

📌 Evento: [TEXTO]
📅 Data: [DATA no timezone do usuário]
⏰ Aviso: 24 horas antes
📱 Status: Sincronizado com Outlook
```

**Erro (token expirado):**

```
⚠️ Token do Outlook expirado

Re-autorizar em:
https://login.microsoftonline.com/common/oauth2/v2.0/authorize?...

Token pode ser renovado manualmente em:
scripts/.outlook-tokens.json
```

## Notas Críticas

- **Timezone:** Sempre usar `America/Sao_Paulo` (UTC-3)
- **Aviso antecipado:** Para aniversários: 1 semana | Para eventos grandes: 2 semanas
- **Renovar token:** Se erro 401 → token expirado, reautor via Graph API
- **Sincronizar USER.md:** Quando  adiciona nova data em USER.md, atualizar Outlook automaticamente

---

_Skill para: ART3MIS. Credenciais em `scripts/.outlook-tokens.json`._
