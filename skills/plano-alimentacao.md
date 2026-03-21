---
name: plano-alimentacao
description: Criar plano alimentar personalizado com base em objetivo fitness
agents: [DAITO]
tools: [web_search, exec]
---

# Skill: Plano de Alimentação

Sistema para criar plano alimentar personalizado com base em objetivo fitness — estruturado com macros, refeições práticas e custo estimado.

## Quando usar

- Quer novo plano alimentar (bulk, cut, manutenção)
- Adequar nutrição ao treino atual
- Encontrar receitas que se encaixem no macro
- Estimar custo semanal/mensal de alimentação

## Como Executar

> **Antes de executar:** Consulte `USER.md` para dados pessoais (peso, altura, idade, restrições alimentares, objetivo atual, frequência de treino).

### Comando: `/dieta`

Ver plano alimentar padrão (manutenção):

```bash
/dieta
```

### Comando: `/dieta [objetivo]`

Criar plano para objetivo específico:

```bash
/dieta bulk
/dieta cut
/dieta manutenção
```

### Processo: Calcular Macros

1. **Ler dados do usuário** em `USER.md` (peso, altura, idade, frequência de treino, restrições)
2. **Calcular TMB** (Taxa Metabolismo Basal) — fórmula Harris-Benedict
3. **Calcular TDEE** (Total Daily Energy Expenditure) com fator de atividade
4. **Distribuir macros** por objetivo:
   - BULK: surplus +300-500 kcal | Proteína 2.0g/kg, Carb 5g/kg, Gordura 1.0g/kg
   - CUT: deficit 300-500 kcal | Proteína 2.2g/kg, Carb 3g/kg, Gordura 0.8g/kg
   - MANUTENÇÃO: TDEE sem ajuste | Proteína 1.6g/kg, Carb 4g/kg, Gordura 1.0g/kg
5. **Estruturar refeições** ao longo do dia (6 refeições sugeridas)
6. **Estimar custo** mensal dos alimentos

### Exemplo de Saída

```
💪 Plano Alimentar: BULK (Ganho de Massa)
═══════════════════════════════════════════

👤 Dados: [conforme USER.md]
  • Peso: Xkg | Altura: Xcm | Idade: X anos
  • Atividade: X treinos/semana
  • Restrições: [conforme USER.md]

📊 Cálculos:
  TMB → TDEE → META (surplus +300 kcal)

🎯 Macros do dia:
  • Proteína: Xg/dia
  • Carboidrato: Xg/dia
  • Gordura: Xg/dia

🍽️ Estrutura de Refeições
  Café da manhã / Lanche 1 / Almoço / Pré-treino / Pós-treino / Jantar

❌ EVITAR: [restrições do usuário conforme USER.md]

💰 Custo Estimado: R$ X/mês
```

## Planos Pré-Configurados

### CUT (Perda de Gordura)
```
Deficit 300-500 kcal abaixo do TDEE
Proteína elevada (2.2g/kg) para preservar massa
Resultado esperado: -0.3 a -0.5kg/semana
```

### MANUTENÇÃO
```
TDEE sem ajuste
Objetivo: manter peso e ganhar força progressivamente
```

### BULK (Ganho de Massa)
```
Surplus 300-500 kcal acima do TDEE
Alta ingestão de carboidratos para energia e recuperação
Resultado esperado: +0.3 a +0.5kg/semana
```

## Dicas Gerais

- **Proteína barata:** frango, ovos, peixe, whey
- **Carboidrato de qualidade:** arroz + feijão (combinação completa), batata doce, aveia
- **Hidratação:** 35ml por kg de peso corporal/dia
- **Consistência > Perfeição:** bater 80% dos macros já é sucesso
- **Check-in semanal:** peso na mesma condição (manhã em jejum)

---

_Skill para: DAITO. Dados personalizados: consultar USER.md antes de executar._
