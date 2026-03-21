# Crons do OASIS

Os crons do OASIS são automações periódicas gerenciadas pelo OpenClaw. Eles rodam em segundo plano — consolidando memória, fazendo backup, gerando resumos e monitorando o sistema — sem precisar de nenhuma interação manual.

---

## Crons Disponíveis

| Nome | Schedule | Horário | Agente | Descrição |
|------|----------|---------|--------|-----------|
| **Consolidar Memória** | `0 3 * * *` | Diário 03h00 | PARZIVAL | Lê os arquivos `memory/*.md` da semana e consolida insights em `MEMORY.md` |
| **Big Picture + Status** | `30 3 * * *` | Diário 03h30 | PARZIVAL | Atualiza `context/bigpicture.md` e `context/status.md` com base nos eventos recentes |
| **Backup Workspace** | `45 3 * * *` | Diário 03h45 | Sistema | `git add -A && git commit && git push` do workspace |
| **Session Cleanup** | `0 4 * * *` | Diário 04h00 | Sistema | Remove sessões inativas do OpenClaw com mais de 2 dias |
| **Resumo Diário** | `30 8 * * 1-5` | Seg–Sex 08h30 | Orquestrador | Resumo do dia: clima, tarefas, eventos e pendências críticas |
| **Recap Semanal** | `0 9 * * 0` | Domingo 09h00 | PARZIVAL | Recapitula a semana, pendências abertas e define foco para a próxima |
| **Health Check** | `0 10 * * *` | Diário 10h00 | Sistema | Verifica disco, memória e uptime — só notifica se crítico |

---

## Como Instalar

Use o script `scripts/setup-crons.js`. Ele lê sua configuração do OpenClaw automaticamente.

### Pré-requisitos

- OpenClaw Gateway rodando (`openclaw gateway status`)
- Node.js instalado

### Instalar todos os crons de uma vez

```bash
node scripts/setup-crons.js --all
```

### Instalar crons específicos

```bash
node scripts/setup-crons.js --memoria
node scripts/setup-crons.js --bigpicture
node scripts/setup-crons.js --backup
node scripts/setup-crons.js --cleanup
node scripts/setup-crons.js --resumo
node scripts/setup-crons.js --recap
node scripts/setup-crons.js --healthcheck
```

### Com canal de notificações (recomendado)

Se você tem um canal `#sistema` no Discord, passe o ID para receber as saídas dos crons:

```bash
node scripts/setup-crons.js --all --sistema 1234567890123456789
```

### Com timezone personalizada

```bash
node scripts/setup-crons.js --all --timezone America/Recife
```

---

## Como Personalizar

### Mudar timezone

Por padrão, todos os crons usam `America/Sao_Paulo`. Para mudar:

```bash
node scripts/setup-crons.js --all --timezone America/Manaus
```

### Mudar horários

Edite diretamente o arquivo `scripts/setup-crons.js` e ajuste o campo `expr` de cada cron:

```js
// Exemplo: mudar Resumo Diário para 7h30 em vez de 8h30
expr: '30 7 * * 1-5'
```

### Adicionar novos crons

Adicione uma nova entrada no array `CRONS` dentro de `setup-crons.js`:

```js
{
  key: 'meu-cron',
  name: 'Meu Cron Customizado',
  expr: '0 12 * * *',
  timeoutSeconds: 60,
  message: `Sua instrução aqui.`
}
```

---

## Como Verificar se Estão Rodando

```bash
openclaw cron list
```

Para ver detalhes de um cron específico:

```bash
openclaw cron list --name "Consolidar Memória"
```

Para remover um cron:

```bash
openclaw cron delete --name "Consolidar Memória"
```

---

## Crons Opcionais (Dependem de Integrações)

Os crons acima são genéricos e funcionam em qualquer OASIS. Mas você pode querer adicionar crons específicos dependendo das suas integrações:

| Integração | Exemplo de Cron | Dependência |
|------------|-----------------|-------------|
| **Garmin Connect** | Snapshot diário de atividades físicas | Token Garmin em `context/tools.md` |
| **Email (Outlook/Gmail)** | Triagem matinal de emails | Microsoft Graph ou Gmail API |
| **Todoist** | Sincronizar pendências com `context/status.md` | Token Todoist em `context/tools.md` |
| **Calendário** | Alertas de eventos do dia seguinte | Cal.com, Google Calendar, etc. |
| **Financeiro** | Resumo semanal de gastos | Planilha Google Sheets configurada |

Para criar esses crons, siga o mesmo padrão do `setup-crons.js` e adicione as instruções específicas para cada integração.

---

## Notas

- Os crons rodam em **sessões isoladas** — não interferem com suas sessões ativas
- O payload de cada cron é uma instrução em linguagem natural para o agente
- Se `--sistema` não for informado, a saída só aparece nos logs do OpenClaw (sem notificação no Discord)
- Os horários são na timezone configurada (default: `America/Sao_Paulo`)
