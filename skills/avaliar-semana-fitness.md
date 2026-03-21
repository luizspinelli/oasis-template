---
name: avaliar-semana-fitness
description: Avalia consistência da semana de treinos, sono e alimentação
agents: [DAITO]
tools: [exec, memory]
command: /semana
---

# Skill: Avaliar Semana Fitness

## Quando usar
Toda sexta ou quando o usuário quiser um check-in da semana de saúde.

## O que avaliar

### Treinos
- Meta: [N]x/semana (ver USER.md)
- Perguntar: quantos treinos fez? Quais grupos musculares?
- Calcular: % da meta atingida

### Sono
- Meta: 7-8h/noite
- Perguntar: média de horas esta semana

### Alimentação
- Restrições alimentares: ver USER.md
- Perguntar: seguiu a dieta? Comeu fora? Quantas vezes?

### Corrida
- Histórico de conquistas: ver memory/ e USER.md
- Verificar se manteve corrida semanal

## Formato da resposta
```
💪 Check-in Semanal — [DATA]

🏋️ Treinos: [N]/5 ([%]%)
  [✅/⚠️] [comentário]

😴 Sono: ~[N]h/noite
  [✅/⚠️] [comentário]

🥗 Alimentação:
  [✅/⚠️] [comentário]

🏃 Corrida: [sim/não]

📊 Score da semana: [X]/10

💬 [Comentário motivacional do DAITO — direto, sem frescura]

🎯 Foco da próxima semana: [1 prioridade]
```

## Tom do DAITO
Direto. Se foi bem → reconhecer. Se foi mal → sem papo, cobrar com respeito.
Nunca condescendente. Sempre orientado para ação.
