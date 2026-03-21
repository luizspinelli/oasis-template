---
name: plano-treino
description: Montar e revisar planos de treino personalizados
agents: [DAITO]
tools: [exec]
---

# Skill: Plano de Treino

Estrutura para criar planos de treino periodizados, progressivos e adaptados ao objetivo.

## Quando usar

- Usuário quer novo programa de treino
- Quer ajustar programa atual
- Quer revisar progresso e periodizar
- Quer dicas de técnica e execução

## Estrutura de Plano

### 1. Diagnóstico Inicial

Antes de montar plano, entender:

- [ ] **Objetivo:** Ganho de massa? Perda de peso? Performance? Saúde geral?
- [ ] **Experiência:** Iniciante? Intermediário? Avançado?
- [ ] **Frequência realista:** 3x? 4x? 5x por semana? (seja honesto!)
- [ ] **Lesões/Restrições:** Dor nas costas? Ombro? Joelho?
- [ ] **Equipamento:** Academia? Casa? O quê tem disponível?
- [ ] **Timeline:** Quanto tempo até meta? (3 meses? 1 ano?)

### 2. Periodização

Dividir em blocos de 4-6 semanas:

**Bloco 1 (Força Base):**
- Foco: Compound movements, força pura
- Rep range: 4-6 reps x 4-5 séries
- Volume: Moderado
- Intensidade: Alta

**Bloco 2 (Hipertrofia):**
- Foco: Ganho de massa muscular
- Rep range: 8-12 reps x 3-4 séries
- Volume: Alto
- Intensidade: Média-alta

**Bloco 3 (Finalização):**
- Foco: Refinamento, resistência muscular
- Rep range: 12-15+ reps x 2-3 séries
- Volume: Moderado
- Intensidade: Média

**Deload (semana 5):**
- Reduz volume em 50%
- Mantém intensidade (permite recuperação)

### 3. Estrutura Semanal

**Opção A: Upper/Lower (4 dias)**
- Segunda: Lower (perna e glúteo)
- Terça: Upper (peito e costas)
- Quinta: Lower (perna com foco diferente)
- Sexta: Upper (ombro e braços)

**Opção B: Push/Pull/Legs (3 dias)**
- Segunda: Leg (quadríceps, isquio, glúteo)
- Quarta: Push (peito, ombro, tríceps)
- Sexta: Pull (costas, bíceps)

**Opção C: Full Body (3 dias)**
- Segunda, Quarta, Sexta: Todos grupos musculares

### 4. Estrutura de Treino

Para cada sessão:

```
🔥 TREINO LOWER - [Data]
⏰ Duração: 60 minutos
🎯 Foco: Força de perna, hipertrofia de quadríceps

Aquecimento (5-10min):
  - Esteira ou bike: 5min
  - Mobilidade dinâmica: 5min

Exercício Principal:
  1. Back Squat → 4x5 reps @ [peso]
  2. Rest: 2-3 minutos entre séries

Exercício Secundário:
  2. Leg Press → 4x8-10 reps @ [peso]
  3. Rest: 2 minutos

Acessórios:
  3. Leg Curl → 3x10 reps
  4. Leg Extension → 3x12 reps
  5. Calf Raise → 3x15 reps

Finalização:
  - Foam roll perna: 5min
  - Alongamento estático: 5min

📊 Notas:
  - Senti força em squat? Próxima semana +5kg
  - Cansaço ligeiro, mas controlado ✅
```

### 5. Progressão & Tracking

Regra de ouro:

- **A cada semana:** tenta adicionar +1 rep ou +5kg (pequenos incrementos)
- **A cada 4 semanas:** revisa se progrediu (força, volume, tempo)
- **Red flag:** se não progrediu em 2 semanas, analisa: técnica? descanso? alimentação?

## Exemplos

**User:** "Quero ganhar massa, tenho 3 meses"

**DAITO:**
1. Faz diagnóstico (frequência, experiência, lesões)
2. Monta plano em 3 blocos (6 semanas cada)
3. Define progressão por semana
4. Estrutura nutrição alinhada
5. Acompanha semanalemente com check-ins

---

**User:** "Tô cansado, reduza meu treino por uma semana"

**DAITO:**
1. Faz deload automático (reduz volume em 50%)
2. Mantém exercícios e intensidade (apenas menos séries/reps)
3. Texto motivacional: "Descanso é treino também"

## Notas Críticas

- **Progressão lenta > explosão seguida de pausa.** Consistência bate qualquer gênio do treino
- **Treinar cansado (20min) > não treinar.** Algo sempre bate nada
- **Nutrição é 50% da fórmula.** Treino sem proteína não ganha massa
- **Sono é treino.** 7-9 horas TODAS as noites, sem exceção
- **Escuta seu corpo.** Dor diferente de queimação? Para e rest day

---

_Skill para agentes: DAITO. Consultar `memory/treino-atual.md` para programa em andamento._
