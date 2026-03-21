---
name: planejar-encontro
description: Planeja encontros e programas para casal, família ou amigos
agents: [SHOTO]
tools: [web_search, memory]
command: /casal
---

# Skill: planejar-encontro
**Agente:** SHOTO 🤝
**Comando:** `/casal`, `/amigos`, `/programa-social`

## O que faz
Planeja encontros e programas para o casal, família ou amigos — com sugestões concretas, datas e logística básica.

## Como usar
```
/casal
/casal [ocasião: aniversário, rotina, surpresa]
/amigos [número de pessoas]
/programa-social [ocasião: aniversário, reencontro, rotina]
```

## Protocolo

### 1. Contexto
- Quem? (casal, família, amigos, grupo)
- Quantos? (a dois, pequeno grupo, galera)
- Quando? (hoje, fim de semana, data específica)
- Ocasião? (rotina, aniversário, comemoração, reencontro, sem motivo)

### 2. Tipo de encontro
- Casual vs. especial
- Em casa vs. fora
- Budget: baixo (R$0-50), médio (R$50-200), alto (R$200+)
- Considerar preferências do parceiro(a)/grupo (de USER.md)
- Considerar restrições alimentares (de USER.md)

### 3. Sugestão (3 opções)
Sempre oferecer 3 alternativas de diferentes complexidades:

```
🤝 Programa para [quem] — [ocasião]

1️⃣ Opção simples:
   📍 [Local/Atividade]
   ⏰ [Horário sugerido]
   💰 Custo estimado: R$ [valor]
   ✨ Por que: [motivo]

2️⃣ Opção intermediária:
   📍 [Local/Atividade]
   ⏰ [Horário sugerido]
   💰 Custo estimado: R$ [valor]
   ✨ Por que: [motivo]

3️⃣ Opção especial:
   📍 [Local/Atividade]
   ⏰ [Horário sugerido]
   💰 Custo estimado: R$ [valor]
   ✨ Por que: [motivo]
```

### 4. Facilitação
- O que reservar (restaurante, ingresso, transporte)
- O que levar (presente, comida, bebida)
- O que planejar com antecedência
- Links úteis (cardápio, mapa, contato)

### 5. Lembrete
- Se for data futura: sugerir criar evento no calendário (handoff ART3MIS)
- Se tiver custo relevante: validar com OG

## Tipos de encontro

### 💑 Casal
- **Rotina:** jantar em casa, cozinhar junto, filme, passeio
- **Especial:** restaurante novo, experiência diferente (degustação, show, museu)
- **Surpresa:** algo inesperado baseado nas preferências do parceiro(a)
- **Aniversário:** planejamento com mais antecedência (2+ semanas)
- Considerar: preferências do parceiro(a) (de USER.md seção Parceiro(a))

### 👨‍👩‍👧‍👦 Família
- **Almoço/Jantar:** em casa ou restaurante kid-friendly
- **Visita:** ir até parentes que moram longe
- **Comemoração:** aniversários, datas especiais
- Considerar: idades, preferências alimentares, logística

### 👥 Amigos
- **Casual:** bar, churrasco, jogo de tabuleiro, videogame
- **Atividade:** esporte, trilha, escape room
- **Reencontro:** algo especial para quem faz tempo que não vê
- **Grupo grande:** dividir organização, local acessível para todos

### 🤝 Networking afetivo
- Retomar contato com alguém que faz tempo
- Café, almoço rápido, videochamada
- "Estava lembrando de você" — sem pressão

## Pesquisa
Usar `web_search` para:
- Restaurantes na região (considerar restrições alimentares)
- Eventos locais (shows, exposições, festivais)
- Atividades diferentes (experiências, cursos rápidos)
- Preços e disponibilidade

## Registro
Registrar em `memory/YYYY-MM-DD.md`:
```
- Programa planejado: [tipo] com [quem] | Data: [quando] | Local: [onde]
- Feedback posterior: [como foi, se gostaram]
```

## Handoffs
- Custo do programa → **OG** (validar budget)
- Agendar no calendário → **ART3MIS** (gerenciar-agenda)
- Escolher restaurante/atividade cultural → **HALLIDAY** (recomendar-conteudo)
- Impacto emocional (conflito, tensão antes do encontro) → **KIRA**
- Data especial se aproximando → **lembrar-pessoas** (mesma SHOTO)

---

_Skill para: SHOTO. Usa web_search para pesquisa local. Consulta USER.md para preferências._
