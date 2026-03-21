---
name: gestao-pessoas
description: Preparar e conduzir 1:1s, dar feedback, acompanhar desenvolvimento do time
agents: [AECH]
tools: [exec, memory]
---

> **Skill opcional** — relevante se você lidera um time ou gerencia pessoas diretamente.

# Skill: Gestão de Pessoas

Sistema para preparar e conduzir reuniões 1:1, dar feedback, acompanhar desenvolvimento do time.

## Quando usar

- Preparar para reunião 1:1 com direto
- Dar feedback (positivo, desenvolvimento, crítico)
- Acompanhar desenvolvimento técnico/comportamental
- Documentar performance, lacunas, plano de desenvolvimento
- Identificar problemas antecipadamente

## Diretos de  ()

| Nome | Papel | Status | Notas |
|------|-------|--------|-------|
| **[Dev A]** | Dev Sênior | Ativo | [Projeto], sólido, bom mentor |
| **[Dev B]** | Dev Sênior | Ativo | [Projeto], sem 1:1 ainda ⚠️ |
| **[Dev C]** | Dev Pleno | Ativo | [Projeto], crescimento constante |
| **[Dev D]** | Dev | Licença Maternidade | Volta estimada: [data] |
| **[TL]** | Tech Lead | Ativo | [Projeto], distribuição de tarefas |

**Total indireto:** ~24 pessoas (team leads, devs plenos, juniores)

## Como Executar

### Comando: `/1on1 [pessoa]`

Preparar para reunião 1:1 com um direto:

```bash
/1on1 [nome]
/1on1 [Dev B]
```

### Preparação para 1:1

**5 minutos antes:**

```
📋 Preparação 1:1 com [Dev A]
═════════════════════════════

🗓️ Data: 12/03/2026 10:00
⏰ Duração: 30 minutos
📍 Local: Sala 4 / Zoom

📊 Contexto Anterior (1:1 anterior):
  • Objetivo: Liderança técnica em novo gateway
  • Bloqueios: Falta de tempo para mentorar
  • Próximos passos: Reduzir carga de POC

🔍 Observações desde última 1:1:
  ✅ PR #156 muito bem estruturada (code review)
  ✅ Mentorando [Dev C] com sucesso
  ⚠️ Carga de trabalho alta (20h+ em POC)
  🔴 Comunicação: Não aviso quando estava bloqueado em feature X

📝 Tópicos para discussão:
  1. Como tá a carga de trabalho?
  2. Progresso no novo gateway
  3. Feedback: comunicação de bloqueios
  4. Desenvolvimento técnico: próximo nível?
  5. Clima do time [Projeto]

💡 Perguntas abertas:
  • "O que você precisa de mim para desbloquear?"
  • "Que área quer desenvolver mais?"
  • "Algum feedback para o time ou para mim?"
```

### Estrutura de 1:1

**Tempo total: 30-45 minutos**

```
🎯 Estrutura Padrão 1:1
═════════════════════════

0-5 min: Check-in pessoal
  "Como tá você? Tudo bem?"
  (crie espaço para falar de vida, não só trabalho)

5-15 min: O que deu certo?
  "Me conta um win da última semana"
  (reforce comportamentos positivos)

15-25 min: O que não deu?
  "Algum bloqueio? Coisa que não saiu como esperado?"
  "Como posso ajudar?"
  (seja curioso, não crítico)

25-30 min: Próximos passos & desenvolvimento
  "Qual é seu objetivo para próximas 2 semanas?"
  "Em que área você quer crescer?"
  (conecte com plano de carreira)

30-35 min: Feedback & Coaching
  "Tem algo que você quer discutir?"
  (ouça mais do que fale)

35-40 min: Encerre com próxima meta clara
  "Resumindo: vamos focar em X"
  "Próxima 1:1 em [data]"
```

### Comando: `/feedback [pessoa]`

Dar feedback estruturado (positivo, desenvolvimento, crítico):

```bash
/feedback [Dev A]
/feedback [Dev B]
```

**Estrutura de Feedback**

**Feedback Positivo:**
```
✅ Feedback Positivo para [Dev A]
═════════════════════════════

🎯 Comportamento observado:
  "Vi que você estruturou o PR #156 de forma excepcional.
   Diff limpo, commits lógicos, testes bem pensados."

💡 Impacto:
  "Isso ajudou [Dev C] a entender o padrão de autenticação
   de primeira. Você virou referência técnica no projeto."

🔄 Reforço:
  "Pode continuar assim. Quero que mais pessoas aprenda com você."
```

**Feedback de Desenvolvimento:**
```
🟡 Feedback de Desenvolvimento para [Dev B]
═════════════════════════════════════════

🎯 Comportamento observado:
  "Notei que quando você tá bloqueado em algo, espera 1-2 dias
   para avisar. Tipo aquela issue de rate limiting na semana passada."

💡 Impacto:
  "Isso deixa o time esperando, e a feature atrasou. Se você
   avisar no dia 1, conseguimos desbloquear junto."

🔧 Sugestão de Ação:
  "Proposta: quando ficar >2h bloqueado, pede help no Slack.
   Quer tentar isso na próxima?"

✅ Reforço:
  "Seu código é sólido. O desafio agora é comunicação."
```

**Feedback Crítico (performance issue):**
```
🔴 Feedback Crítico para [Pessoa]
══════════════════════════════════

⚠️ Comportamento observado:
  "Nos últimos 2 sprints, você não completou as tarefas do backlog.
   Sprint 9: 12/20 pontos | Sprint 10: 10/20 pontos."

💡 Impacto:
  "Isso afeta o timeline do [Projeto]. [Dev C] e [Dev A] precisam fazer
   paralelo e tá sobrecarregado."

🔧 Próximos Passos:
  1. Qual é o bloqueio? Técnico? Pessoal? Clareza?
  2. Precisa ajuda? Pairing com alguém?
  3. Meta clara para próxima sprint: X pontos

⏰ Follow-up:
  "Vamos fazer check-in em 1 semana para ver se desbloqueou."
```

## Plano de Desenvolvimento Individual (PDI)

**Comando:** `/pdi [pessoa]`

Criar/atualizar plano de desenvolvimento:

```bash
/pdi [Dev A]
```

**Template:**

```
📈 PDI - [Dev A] (ano atual)
═════════════════════

🎯 Objetivo 2026:
  Ser Tech Lead de um novo projeto

📊 Competências Atuais:
  ✅ Node.js + TypeScript (sênior)
  ✅ Arquitetura de APIs (avançado)
  ✅ Mentoria técnica (bom)
  🟡 Liderança de time (em desenvolvimento)
  🟡 Visão de negócio (precisa aprender)

🎓 Plano de Desenvolvimento:
  Q1 2026:
    • [ ] Liderança: Curso "Leading Technical Teams" (Udemy)
    • [ ] Negócio: 2h/semana aprendendo sobre o produto
    • [ ] Mentoria: Mentore [Dev C] em mais tópicos

  Q2 2026:
    • [ ] Arquitetura: Decisões arquitetura em novo projeto
    • [ ] Feedback: Feedback 360° do time
    • [ ] Caso de uso: Document case study de projeto

  Q3-Q4 2026:
    • [ ] Liderança de projeto piloto
    • [ ] Revisão final: Pronto para TL?

💼 Responsabilidades:
  : Feedback, oportunidades de liderança, mentorar
  [Dev A]: Estudar, praticar, comunicar progresso

✅ Check-in: A cada 1:1
```

## Documentação

Após cada 1:1, documentar em `memory/1on1-[pessoa]-YYYY-MM-DD.md`:

```
# 1:1 [Dev A] — [data]

**Duração:** 35 minutos

## O que foi bem
- PR #156 excepcional
- Mentorando [Dev C]
- Comunicação melhorou

## Bloqueios
- Carga alta no POC (20h+)
- Precisa tempo para planejar arquitetura

## Próximos passos
1. Reduzir carga de POC ([Dev A] de 100% → 70%)
2. Dedicar 5h/semana para novo gateway
3. Próxima 1:1: 26/03

## Feedback dado
✅ Feedback positivo: PR estrutura impecável
🟡 Dica: Documentar decisões arquitetura no ADR
```

## Frequência Recomendada

- **Diretos:** 1:1 bi-semanal (30-45 min)
- **Indiretos:** 1:1 mensal (20-30 min) via team leads
- **Retrospectiva de performance:** Trimestral
- **PDI review:** Semestral

## Red Flags

Cuidado com:
- 🚩 Pessoa não melhora feedback repetido 2x
- 🚩 Comunicação desapareceu (não informa bloqueios)
- 🚩 Qualidade técnica caindo
- 🚩 Clima com time piorando
- 🚩 Ausências recorrentes sem avisar

**Ação:** Conversa privada + plano de ação + follow-up em 1 semana

## Boas Práticas

- **Escute mais que fale:** 70% do tempo, pessoa fala
- **Seja curioso:** "Por quê?" antes de julgar
- **Documente tudo:** 1:1s são confidenciais, mas rastreável
- **Feedback no mesmo dia:** Não deixa esfriar
- **Reconheça avanços:** Progresso é motivação
- **Seja humano:** Não é máquina, tem vida fora do trabalho

---

_Skill para: AECH. Adaptar com nomes reais do time (ver USER.md). Preencher a tabela de diretos com nomes e status reais._
