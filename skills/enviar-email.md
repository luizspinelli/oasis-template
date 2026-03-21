---
name: enviar-email
description: Enviar emails via Outlook/Graph API
agents: [ART3MIS]
tools: [exec, graph-api]
---

# Skill: Enviar Email

Integração com Microsoft Outlook para enviar emails pessoais e profissionais.

## Quando usar

- Usuário quer enviar email pessoal
- Quer responder a confirmação de reserva
- Quer enviar convite ou mensagem importante
- Quer confirmar agendamento

## Como executar

### Pré-requisito

Antes de qualquer operação:
```bash
node <workspace>/scripts/outlook/refresh-token.js
```

Verifica e renova token Graph API em `scripts/.outlook-tokens.json`.

### Enviar Email Básico

**Comando template:**
```bash
node <workspace>/scripts/outlook/send-email.js \
  --to "destinatario@email.com" \
  --subject "Confirmação de Reserva" \
  --body "Confirmo presença no restaurante. Até lá!"
```

**Resposta esperada:**
```
✅ Email enviado!
📧 Para: destinatario@email.com
📝 Assunto: Confirmação de Reserva
🕐 Enviado: 11/03 15:30
```

### Enviar Email com Formatação

**Comando template (HTML):**
```bash
node <workspace>/scripts/outlook/send-email.js \
  --to "destinatario@email.com" \
  --subject "Convite: Café no próximo fim de semana" \
  --html "<p>Oi!</p><p>Que tal marcar um café?</p><p>Abraço,</p><p>[Seu Nome]</p>" \
  --signature true
```

## Padrões de Email

### Email Pessoal (Amigos/Família)

```
Assunto: [Simples, direto — "Oi", "Novidades", "Café no fim de semana?"]

Corpo:
- Abertura calorosa ("Oi!", "E aí?")
- Conteúdo/pergunta (conciso, 3-4 linhas)
- Call-to-action (se aplicável)
- Fechamento quente ("Abraço", "Até!")

Exemplo:
---
Oi Maria!

Que tal gente se encontrar semana que vem? Tem um restaurante novo 
na [cidade] que quer conferir. Você topa?

Me passa sua disponibilidade!

Abraço!
[Seu Nome]
---
```

### Email Profissional ([Empresa]/Clientes)

```
Assunto: [Contexto claro — "Proposta: [Projeto]", "Status: [Sprint]"]

Corpo:
- Saudação formal ("Olá [Nome]")
- Contexto/background
- Ponto principal (bala por bala)
- Call-to-action claro
- Fechamento profissional ("Atenciosamente", "Regards")

Exemplo:
---
Olá [Nome],

Seguem os pontos da última 1:1:

1. Status [Projeto]: [feature 1] finalizada, [feature 2] em QA
2. Demanda [Empresa]: +2 devs aprovados para Q2
3. Arquitetura: [decisão], [métrica] de uptime

Próximos passos: Kick-off do projeto Y quinta-feira 10h. 
Você pode confirmar presença?

Atenciosamente,
[Seu Nome]
[Cargo] — [Empresa]
---
```

### Email de Confirmação (Reservas/Eventos)

```
Assunto: "Confirmação: [Evento/Reserva]"

Corpo:
- Confirmação clara ("Confirmo minha presença")
- Detalhes (data, hora, local)
- Contato caso mude
- Entusiasmo ("Ansioso/a para!")

Exemplo:
---
Olá,

Confirmo minha presença na reserva para 2 pessoas no dia 14/03 às 19h.
Local: Restaurante [Nome] — Rua [Endereço]

Caso necessite, meu contato é [telefone].

Até lá! 🍽️
[Seu Nome]
---
```

## Notas Importantes

- **Tom:** Adapte ao contexto (pessoal = caloroso; profissional = formal)
- **Clareza:** Sempre escreva como se o leitor tivesse 30 segundos
- **Assinatura:** Incluir nome completo em emails profissionais
- **Releitura:** Sempre revisar antes de enviar (evita typos)
- **Timing:** Emails enviados entre 9h-17h têm melhor taxa de resposta

## Modelos Rápidos

**Confirmação de evento:**
```
Confirmo presença. Data: [data]. Horário: [hora]. Local: [local].
Caso mude, aviso com antecedência.
```

**Resposta a convite:**
```
Ótimo! Topo. Qual o endereço e que horas vocês chegam?
```

**Solicitação de informação:**
```
Oi, você teria o número do restaurante ou a confirmação de reserva?
Preciso para avisar a [pessoa].
```

---

_Skill para agentes: ART3MIS. Consultar `context/tools.md` para token Outlook._
