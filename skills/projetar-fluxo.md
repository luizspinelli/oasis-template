---
name: projetar-fluxo
description: Projetar fluxo de caixa futuro — receitas vs despesas
agents: [OG]
tools: [exec]
command: /projecao
---

# Skill: Projetar Fluxo de Caixa

Sistema para projetar fluxo de caixa futuro — receitas esperadas vs despesas fixas e variáveis.

## Quando usar

-  quer ver projeção financeira para próximos meses
- Planejar grande compra ou investimento
- Verificar quando consegue quitar empréstimo
- Entender saúde financeira futura

## Base de Cálculo

**Receitas (mensais):**
- Salário: [seu salário fixo]
- Freelance: [variável — consultar histórico]

**Despesas Fixas (mensais):**
- Empréstimos: [definido em USER.md] (instituições, valores, datas de vencimento)

**Despesas Variáveis (estimadas por categoria):**
- [definido em USER.md] (alimentação, transporte, lazer, saúde, educação, vestuário, casa, pets, assinaturas, outros)

**Total estimado:** calcular a partir dos valores em USER.md

## Como Executar

### Comando: `/projecao [meses]`

Projetar fluxo de caixa para N meses:

```bash
/projecao 3
/projecao 6
/projecao 12
```

**Resposta para `/projecao 6`:**

```
📈 Projeção Fluxo de Caixa — 6 Meses
═══════════════════════════════════════

Mês      | Receita | Despesa | Saldo   | Acumulado | Status
─────────┼─────────┼─────────┼─────────┼───────────┼─────────
Março    | R$ X.Xk| R$ X.Xk | +R$ X.Xk| R$ X.Xk | ✅
Abril    | R$ X.Xk| R$ X.Xk | +R$ X.Xk| R$ X.Xk | ✅
Maio     | R$ X.Xk| R$ X.Xk | +R$ X.Xk| R$ X.Xk | ✅
Junho    | R$ X.Xk| R$ X.Xk | +R$ X.Xk| R$ X.Xk | ✅
Julho    | R$ X.Xk| R$ X.Xk | +R$ X.Xk| R$ X.Xk | ✅
Agosto   | R$ X.Xk| R$ X.Xk | +R$ X.Xk| R$ X.Xk | ✅

💰 Resumo:
  • Saldo positivo todos os meses ✅
  • Total acumulado em 6 meses: R$ X.Xk
  • Margem média: R$ X.Xk/mês

⏳ Estimativas importantes:
  • Viagem [destino] ([mês]): ~R$ [valor estimado]
  • Férias/extra: não estimado
  • Freelance: não considerado (variável)
```

### Projeção com Eventos

Se há eventos/compras planejadas:

```bash
/projecao 6 --com-viagem
/projecao 12 --considerar-freelance
```

**Exemplo com viagem:**

```
📈 Projeção com Eventos (6 meses)
═══════════════════════════════════

Mês      | Receita | Despesa | Evento    | Saldo   | Acumulado
─────────┼─────────┼─────────┼───────────┼─────────┼──────────
Março    | X.Xk   | X.Xk    | —         | +X.Xk  | X.Xk
Abril    | X.Xk   | X.Xk    | Viagem Xk  | +X.Xk  | X.Xk
Maio     | X.Xk   | X.Xk    | —         | +X.Xk  | X.Xk
Junho    | X.Xk   | X.Xk    | —         | +X.Xk  | X.Xk
Julho    | X.Xk   | X.Xk    | —         | +X.Xk  | X.Xk
Agosto   | X.Xk   | X.Xk    | —         | +X.Xk  | X.Xk

⚠️ Alerta: Saldo baixo em abril (viagem)
   Sugestão: Economizar agora ou considerar freelance

💡 Cenário otimista (com freelance R$ X.Xk/mês):
   Abril saldo: +6.5k (confortável)
```

## API Lambda

**Ler dados financeiros históricos:**

```bash
curl -X GET "[API definida em USER.md]" \
  -H "action=fluxoAnual"
```

**Resposta:**

```json
{
  "fluxoAnual": {
    "2026": {
      "janeiro": {"receita": 21800, "despesa": 9138, "saldo": 12662},
      "fevereiro": {"receita": 21800, "despesa": 9150, "saldo": 12650},
      "marco": {"receita": 21800, "despesa": 9140, "saldo": 12660},
      ...
    }
  }
}
```

## Cenários de Projeção

OG pode calcular 3 cenários:

**1. Cenário Base (conservador):**
- Receita: Só salário 
- Despesas: Média histórica
- Freelance: Não considerado
- Eventos: Apenas viagem confirmada

**2. Cenário Otimista:**
- Receita: Salário + freelance médio [definido em USER.md]
- Despesas: Mesma base
- Eventos: Planejados

**3. Cenário Pessimista:**
- Receita: Só salário 
- Despesas: +10% (margem de erro)
- Eventos: Todos planejados + Buffer emergencial

**Exemplo:**

```
📊 3 Cenários — Projeção 12 Meses
══════════════════════════════════

Cenário        | Saldo Mensal | Acumulado 12m | Risk Level
───────────────┼──────────────┼───────────────┼────────────
🟢 Otimista    | +R$ X.Xk    | R$ X.Xk       | Baixo
🟡 Base        | +R$ X.Xk    | R$ X.Xk       | Médio
🔴 Pessimista  | +R$ X.Xk    | R$ X.Xk       | Médio-alto

💡 Recomendação: Seguir Base, mas preparar para Pessimista
   (manter buffer de emergência sempre disponível)
```

## Análise de Empréstimos

Projetar quando consegue quitar empréstimos:

```bash
/projecao 24 --pagar-emprestimo
```

**Resposta:**

```
💳 Simulação: Aumentar pagamento de empréstimos
════════════════════════════════════════════════

Status Atual:
  • [Instituição 1]: R$ [valor]/mês (saldo: ~R$ [saldo]) [definido em USER.md]
  • [Instituição 2]: R$ [valor]/mês (saldo: ~R$ [saldo]) [definido em USER.md]
  • [Instituição 3]: R$ [valor]/mês (saldo: ~R$ [saldo]) [definido em USER.md]
  • Total: ~R$ [total] ([N] meses restantes)

🎯 Cenário: Quitar [maior dívida] em [prazo]

Para quitar [instituição] em 12 meses:
  • Necessário por mês: R$ [valor calculado]
  • Extra por mês: R$ [diferença] ✅

📊 Impacto:
  • Saldo mensal reduz de R$ X.Xk → R$ X.Xk
  • Em [data]: [Instituição] = R$ 0 ✅
  • Libera R$ [valor]/mês no período seguinte

💡 Recomendação: Acelerar a dívida com maior taxa de juros
```

## Alertas Automáticos

Sistema alerta quando:
- 🔴 Projeção indica saldo negativo
- 🟡 Saldo cai abaixo do limite emergencial [definido em USER.md]
- 🔵 Saldo acumula acima do teto [definido em USER.md] (considerar investir/poupar)

## Boas Práticas

- **Revisar projeção mensal:** Primeira semana de cada mês
- **Atualizar gastos:** Inserir dados reais não só estimados
- **Considerar eventos:** Viagens, compras grandes, emergências
- **Freelance:** Se receber, adicionar à projeção
- **Empréstimos:** Priorizar quitar a dívida com maior taxa de juros

---

_Skill para: OG. API: [definido em USER.md]_
