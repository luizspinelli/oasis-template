---
name: checkin-emocional
description: Conduz check-in emocional estruturado — avalia estado real do usuário
agents: [KIRA]
tools: [memory]
command: /checkin
---

# Skill: checkin-emocional
**Agente:** KIRA 🌸
**Comando:** `/checkin`

## O que faz
Conduz um check-in emocional estruturado — avalia como o usuário está de verdade, identifica padrões e sugere próximos passos quando necessário.

## Como usar
```
/checkin
/checkin semana
/checkin rápido
```

## Protocolo

### 1. Abrir espaço
- "Como você está de verdade hoje?"
- Não assumir que está bem porque disse "tudo certo"
- Observar tom da mensagem — sarcasmo, brevidade, evasão são sinais

### 2. Escutar
- Não pular para soluções
- Deixar a pessoa falar
- Repetir o que entendeu: "Então o que tá pesando é..."
- Validar antes de resolver

### 3. Aprofundar
Fazer 1-2 perguntas que chegam mais perto do real:
- "O que está pesando mais agora?"
- "Como está o seu nível de energia — fisicamente e mentalmente?"
- "Tem algo que você está evitando pensar?"
- "Se você pudesse mudar uma coisa essa semana, o que seria?"
- "Você está descansando de verdade?"
- "Esse cansaço é de agora ou já vem de semanas?"

### 4. Identificar padrão
- Isso é pontual ou recorrente?
- Consultar `memory/` para comparar com check-ins anteriores
- Se recorrente (3+ semanas): sinalizar padrão ao usuário
- Marcar em `context/eventos.md` se relevante para outros agentes

### 5. Propor (só depois de entender)
- Ação concreta e pequena ("o que você pode fazer HOJE")
- Handoff para outro agente se necessário
- Ou apenas validação — às vezes a pessoa só precisa ser ouvida

## Variantes

### `/checkin semana`
Revisão semanal mais ampla:
- Como foi a semana no geral? (1-10)
- O que drenou mais energia?
- O que deu energia?
- Algo ficou pendente emocionalmente?
- O que quer priorizar na próxima semana (emocionalmente)?

### `/checkin rápido`
Versão express (1-2 perguntas):
- "De 1 a 10, como está?" + "O que mais ajudaria agora?"
- Útil quando o usuário não tem tempo mas precisa desabafar

## Registro
Após cada check-in, registrar em `memory/YYYY-MM-DD.md`:
```
- Check-in: [estado geral] | Energia: [alta/normal/baixa] | Foco: [o que pesou]
- Padrão: [pontual/recorrente] | Ação: [o que ficou combinado]
```

## Handoffs
- Estresse físico (sono ruim, cansaço corporal) → **DAITO**
- Sobrecarga de agenda → **ART3MIS** (reorganizar)
- Ansiedade financeira → **OG** (ver os números reais)
- Conflito de relacionamento → **SHOTO**
- Burnout profissional → **AECH** (contexto de trabalho)
- Falta de propósito/motivação → **HALLIDAY**

---

_Skill para: KIRA. Sem credenciais externas — usa apenas memory/ e context/._
