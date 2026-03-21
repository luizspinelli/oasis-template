---
name: analisar-financas
description: Consultar e analisar dados financeiros via Google Sheets e APIs
agents: [OG]
tools: [exec, google-sheets-api]
---

# Skill: Analisar Finanças

Análise de situação financeira, gastos e projeções usando Google Sheets como fonte de dados.

## Quando usar

- Usuário quer resumo financeiro do mês
- Quer analisar padrões de gastos
- Quer fazer projeção de fluxo de caixa
- Quer comparar despesas mês a mês

## Como executar

### Pré-requisito

Arquivo de credenciais em `scripts/google-credentials.json` para autenticar.

### Ler planilha financeira

**Comando template:**
```bash
node <workspace>/scripts/sheets/read-finances.js \
  --sheet-id "<SHEET_ID>" \
  --month "2026-03"
```

**Resposta esperada:**
```
💰 FINANCEIRO - MARÇO 2026

📊 Resumo:
  Renda: R$ [SEU_SALÁRIO]
  Despesas: R$ [TOTAL_DESPESAS]
  Líquido: R$ [SALDO]

📉 Despesas por Categoria:
  - Moradia: R$ [VALOR]
  - Alimentação: R$ [VALOR]
  - Transportes: R$ [VALOR]
  - Empréstimos: R$ [VALOR]
  - Diversos: R$ [VALOR]

⚠️ Alertas:
  - Alimentação 15% acima média
  - [Compromisso financeiro fixo]
```

### Projetar fluxo de caixa

**Comando template:**
```bash
node <workspace>/scripts/sheets/project-cashflow.js \
  --months 3 \
  --scenario "conservador"
```

**Resposta esperada:**
```
📈 PROJEÇÃO 3 MESES (Conservador)

[Mês 1]: R$ [SALDO]
[Mês 2]: R$ [SALDO]
[Mês 3]: R$ [SALDO]

Tendência: Estável com leve queda em abril (viagem)
Recomendação: Reduzir gastos discricionários em abril-maio
```

## Estrutura de Análise

Sempre que analisar finanças:

1. **Resumo:** renda total vs despesas totais
2. **Categorias:** onde o dinheiro vai
3. **Tendências:** mês a mês, ano a ano
4. **Alertas:** despesas anormais, deadlines de empréstimos
5. **Recomendações:** como otimizar ou economizar

## Exemplos

**User:** "Me faz um resumo financeiro de março"

**OG:**
1. Lê planilha
2. Calcula total por categoria
3. Compara com média histórica
4. Destaca anomalias
5. Oferece insight

---

**User:** "Quanto devo economizar pra viagem?"

**OG:**
1. Lê orçamento de viagem (se houver)
2. Projeta gastos do mês + viagem
3. Calcula quanto precisa de margem
4. Recomenda economia diária/semanal

## Categorias Padrão

- **Moradia:** aluguel, condomínio, IPTU
- **Alimentação:** compras supermercado, restaurantes
- **Transportes:** Uber, combustível, estacionamento, metrô
- **Utilidades:** água, luz, internet, gás
- **Empréstimos:** parcelas e juros
- **Saúde:** farmácia, academia, médico
- **Lazer:** cinema, shows, passeios
- **Educação:** cursos, livros, certificações
- **Diversos:** tudo o que não se encaixa

## Notas

- Sempre questionar gastos acima do seu threshold sem contexto
- Empréstimos devem ser priorizados
- Economias devem ter objetivo (viagem, fundo emergência, etc.)
- Review mensal obrigatório (último dia do mês)

---

_Skill para agentes: OG. Consultar `context/financeiro-status.md` para dados mais recentes._
