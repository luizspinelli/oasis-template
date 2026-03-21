---
name: comparar-gastos
description: Comparar gastos de uma categoria específica ao longo do tempo
agents: [OG]
tools: [exec]
command: /gastos
---

# Skill: Comparar Gastos

Sistema para comparar gastos de uma categoria específica ao longo do tempo — identificar padrões e tendências.

## Quando usar

-  quer entender gastos em UMA categoria (ex: alimentação)
- Comparar um período vs período (janeiro vs março)
- Identificar padrões (qual mês gasta mais em lazer?)
- Diagnosticar por que categoria explodiu

## Como Executar

### Comando: `/gastos [categoria]`

Ver gastos de uma categoria nos últimos 6 meses:

```bash
/gastos alimentacao
/gastos lazer
/gastos pets
```

**Resposta para `/gastos alimentacao`:**

```
🛒 Alimentação — Últimos 6 Meses
═════════════════════════════════

Mês       | Gasto   | Orçado  | Diferença | Trend | Semanas
──────────┼─────────┼─────────┼───────────┼───────┼─────────
Set 2025  | R$ 1.650| —       | —         | →     | 4.1
Out 2025  | R$ 1.720| —       | —         | ↑     | 4.3
Nov 2025  | R$ 1.890| —       | —         | ↑     | 4.7
Dez 2025  | R$ 2.150| —       | —         | ↑     | 5.4 (feriados!)
Jan 2026  | R$ 1.800| R$ 1.800| 0%        | ↓     | 4.5
Fev 2026  | R$ 1.750| R$ 1.800| -2%       | ↓     | 4.4
Mar 2026  | R$ 1.650| R$ 1.800| -8%       | ↓     | 4.1

📊 Análise:
  • Média últimos 6m: R$ 1.801/mês
  • Pico: Dezembro (R$ 2.150 — festas)
  • Mínimo: Março (R$ 1.650)
  • Variação: R$ 500 (normal)
  • Tendência: ↓ Diminuindo (bom!)

💡 Insight:
  Dezembro tem +20% por causa de festas/viagens
  Atual (março) abaixo da meta ✅
```

### Comando: `/gastos [categoria] [periodo]`

Comparar período específico:

```bash
/gastos alimentacao 01-2026..03-2026
/gastos lazer 2025
/gastos pets 03-2025..03-2026
```

**Resposta:**

```
🛒 Alimentação — Jan 2026 a Mar 2026
════════════════════════════════════

         Jan 2026 | Fev 2026 | Mar 2026 | Média | Min | Max
─────────┼──────────┼──────────┼──────────┼──────┼─────┼────
Semana 1 | R$ 410   | R$ 380   | R$ 350   | R$ 380| 350 | 410
Semana 2 | R$ 480   | R$ 450   | R$ 420   | R$ 450| 420 | 480
Semana 3 | R$ 450   | R$ 480   | R$ 450   | R$ 460| 450 | 480
Semana 4 | R$ 460   | R$ 440   | R$ 430   | R$ 443| 430 | 460

TOTAL    | R$ 1.800 | R$ 1.750 | R$ 1.650 | R$ 1.733

📈 Tendência: Reduzindo (bom!)
   • Jan → Mar: -R$ 150 (-8%)
   • Consistente: variação <R$ 50/semana
```

## Análise Detalhada

### Comando: `/gastos-detalhe [categoria] [mes]`

Ver breakdown detalhado de categoria em um mês:

```bash
/gastos-detalhe alimentacao marco-2026
```

**Resposta:**

```
🛒 Alimentação — Março 2026 (Detalhado)
════════════════════════════════════════

Tipo        | Quantidade | Valor Med | Total
────────────┼────────────┼───────────┼────────
Mercado     | 4x         | R$ 280    | R$ 1.120
Restaurante | 6x         | R$ 75     | R$ 450
Padaria     | 8x         | R$ 15     | R$ 120
Delivery    | 2x         | R$ 30     | R$ 60
Outros      | —          | —         | R$ 200

TOTAL       |            |           | R$ 1.950

📊 % por tipo:
  Mercado (57%): supermercado, essencial ✅
  Restaurante (23%): programas com  💑
  Padaria (6%): café da manhã rotina
  Delivery (3%): dias ocupados
  Outros (10%): almoço no trabalho

💡 Insight:
  Principal: Mercado + Restaurante (80%)
  Variável: Restaurante (tem mais alguns fins de semana)
```

## Comparação Ano vs Ano

### Comando: `/gastos [categoria] --ano-vs-ano`

Comparar mesma categoria: ano passado vs atual:

```bash
/gastos lazer --ano-vs-ano
```

**Resposta:**

```
🎬 Lazer — Ano vs Ano
═════════════════════

Mês      | 2025 | 2026 | Diferença | Análise
─────────┼──────┼──────┼───────────┼─────────────────
Janeiro  | 580  | 650  | +R$ 70    | 2 shows em 26
Fevereiro| 620  | 700  | +R$ 80    | Carnaval
Março    | 550  | 850  | +R$ 300   | 2 shows!
Média 3m | 583  | 733  | +R$ 150   | +26% acima 2025

📈 Tendência: Mais ativo socialmente em 2026
   (Mais shows, programas com )

💡 Recomendação:
   Aumentar orçamento lazer de R$ 700 → R$ 800
   (considerar mais shows/eventos)
```

## Alertas de Overspending

Quando categoria fica >20% acima do orçado:

```
⚠️ Alerta: Lazer em Março
═════════════════════════

🔴 OVER: Lazer
   Orçado: R$ 700
   Realizado: R$ 850
   Excesso: +R$ 150 (+21%)

💡 Causa provável:
   • 2 shows ([artista 1] + [artista 2])
   • Mais programas com  (4x restaurante)

🔧 Ação recomendada:
   [ ] Aumentar orçado para próximo mês?
   [ ] Reduzir outras categorias?
   [ ] Aproveitar o momentum (está bem financeiramente)?

✅ Status: Sem problemas (saldo geral positivo)
   Overspending em lazer é OK se saldo global OK
```

## Detecção de Anomalias

Sistema detecta gastos anormais:

```
🚨 Anomalia Detectada: Pets
════════════════════════════

Mês      | Gasto Normal | Mar 2026 | Diferença
─────────┼──────────────┼──────────┼──────────
Média    | R$ 350       | R$ 520   | +R$ 170 (+49%)

💡 Investigação:
   • Veterinário [pet]: R$ 250 (emergência!)
   • Ração/suplemento: +R$ 50
   • Banho/tosa: +R$ 30

🔧 Ação:
   [ ] Orçado (R$ 350) → (R$ 400)?
   [ ] [Pet] ok de saúde? (acompanhar)
   [ ] Manter orçado alto por 2 meses (segurança)
```

## API Lambda

**Ler dados de categoria:**

```bash
curl -X GET "[definido em USER.md]" \
  -H "categoria=alimentacao&periodo=6m"
```

**Resposta:**

```json
{
  "categoria": "alimentacao",
  "periodo": "6m",
  "gastos": [
    {"mes": "2025-09", "valor": 1650},
    {"mes": "2025-10", "valor": 1720},
    ...
  ],
  "media": 1801,
  "max": 2150,
  "min": 1650,
  "tendencia": "down"
}
```

## Boas Práticas

- **Revisar categorias críticas:** Alimentação + Transportador + Empréstimos
- **Identificar padrões:** Mês com mais gasto? Há padrão?
- **Saudade do passado:** Comparar ano vs ano
- **Anomalias:** Se gasto >20% acima média, investigar
- **Ação:** Não só analisar, mas tomar decisão (aumentar orçado? cortar?)

## Exemplo Completo

```
📊 Análise Mensal — Março 2026
══════════════════════════════

1️⃣ Categorias em Check (todas ok):
   ✅ Alimentação: R$ 1.650 (orçado R$ 1.800) -8%
   ✅ Transporte: R$ 480 (orçado R$ 500) -4%
   🟡 Lazer: R$ 850 (orçado R$ 700) +21% (shows)
   ✅ Saúde: R$ 250 (orçado R$ 400) -37%
   ✅ Educação: R$ 0 (orçado R$ 300) 0%
   🟡 Pets: R$ 520 (orçado R$ 350) +49% (veterinário)

2️⃣ Destaques:
   • Sobre: Lazer (shows), Pets (veterinário)
   • Sob: Alimentação, Educação
   • Saldo mês: +R$ X.Xk ✅

3️⃣ Comparação Histórica:
   • Lazer: +26% vs ano passado (mais ativo ✅)
   • Pets: Veterinário foi exceção (ok 🐶)
   • Alimentação: Reduzindo (ótimo 📉)

4️⃣ Recomendações:
   • Aumentar Lazer orçado: R$ 700 → R$ 800
   • Pets: Manter R$ 400 por 2 meses (segurança)
   • Total novo orçado: R$ 5.200 (vs R$ 5.170 atual)
```

---

_Skill para: OG. Diferença de `comparar-mes.md`: foca em UMA categoria vs múltiplos períodos (não múltiplas categorias vs 2 meses)._
