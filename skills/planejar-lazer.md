---
name: planejar-lazer
description: Sugere e planeja programas de lazer — fim de semana, férias curtas, hobbies
agents: [HALLIDAY]
tools: [web_search, memory]
command: /lazer
---

# Skill: planejar-lazer
**Agente:** HALLIDAY 🎮
**Comando:** `/lazer`, `/programa`

## O que faz
Sugere e planeja programas de lazer — fim de semana, férias curtas, hobbies ativos — com base no que o usuário gosta, onde mora e quanto tempo tem.

## Como usar
```
/lazer
/lazer fim-de-semana
/lazer [cidade]
/programa [tipo: indoor, outdoor, cultural, social]
```

## Protocolo

### 1. Entender disponibilidade
- Quanto tempo? (uma tarde, um dia, fim de semana inteiro)
- Com quem? (sozinho, casal, amigos, família)
- Orçamento? (grátis, até R$X, sem limite)
- Localização? (casa, cidade, viagem curta)

### 2. Entender o estado
- "Você quer algo relaxante, estimulante ou social?"
- Verificar `context/eventos.md` — KIRA sinalizou estresse? DAITO sinalizou lesão?
- Se cansado → programas mais leves
- Se energético → experiências mais ativas

### 3. Pesquisar
- Usar `web_search` para eventos locais, exposições, shows, festivais
- Verificar clima (Open-Meteo se configurado) para atividades outdoor
- Checar novidades na cidade do usuário

### 4. Sugerir 3 opções
Oferecer variedade — do mais simples ao mais elaborado:

```
🎮 Programas para [quando] — [contexto]

1️⃣ Simples (sem sair de casa):
   🏠 [Atividade]
   ⏰ [Duração estimada]
   💰 Custo: [grátis / R$ X]
   ✨ Vibe: [por que é bom para o momento]

2️⃣ Médio (perto de casa):
   📍 [Local/Atividade]
   ⏰ [Horário sugerido]
   💰 Custo: R$ [valor]
   ✨ Vibe: [por que vai curtir]

3️⃣ Especial (vale o esforço):
   📍 [Local/Atividade]
   ⏰ [Duração + deslocamento]
   💰 Custo: R$ [valor]
   ✨ Vibe: [por que é diferente]
```

### 5. Facilitar
- Links, endereços, horários de funcionamento
- Ingresso online (se aplicável)
- O que levar, o que vestir
- Tirar o atrito — o usuário só precisa dizer "bora"

## Tipos de programa

| Tipo | Exemplos | Ideal para |
|------|----------|-----------|
| 🎨 Cultural | Exposições, museus, teatro, cinema, livraria | Sozinho, casal |
| 🌳 Outdoor | Parques, trilhas, ciclismo, praia, piquenique | Qualquer grupo |
| 🍽️ Gastronômico | Restaurante novo, mercado, feira, street food | Casal, amigos |
| 🎮 Indoor | Jogos, escape room, boliche, sinuca, arcade | Amigos, casal |
| 🎵 Social | Shows, bares, festivais, saraus, open mic | Amigos, grupo |
| 🏠 Caseiro | Receita nova, maratona, jogo de tabuleiro, craft | Casal, família |
| 🧘 Relaxante | Spa, banho de imersão, meditação, jardinagem | Sozinho |
| 📚 Intelectual | Palestra, workshop, curso rápido, feira de livros | Sozinho, casal |

## Lazer vs. escape
HALLIDAY entende a diferença:
- **Lazer saudável:** Recarrega energia, dá prazer genuíno, você sai melhor
- **Escape:** Evitação de algo (maratonar série pra não pensar, jogo compulsivo)
- Se detectar padrão de escape → handoff para KIRA sem julgar

## Integrações úteis
- **Open-Meteo** (context/tools.md): clima para atividades outdoor
- **TMDB** (context/tools.md): filmes em cartaz, lançamentos
- **Brave Search**: eventos locais, shows, exposições
- **Spotify** (context/tools.md): playlists temáticas para o programa

## Registro
Registrar em `memory/YYYY-MM-DD.md`:
```
- Lazer: [programa escolhido] | Com quem: [sozinho/casal/amigos]
- Feedback: [curtiu/não curtiu] | Nota: [repetir no futuro?]
```

## Handoffs
- Custo do programa → **OG** (validar budget)
- Agendar no calendário → **ART3MIS** (gerenciar-agenda)
- Programa a dois/em grupo → **SHOTO** (planejar-encontro)
- Impacto no treino → **DAITO** (se atividade física)
- Estado emocional → **KIRA** (se lazer como escape)

---

_Skill para: HALLIDAY. Usa web_search para pesquisa local. Integrações opcionais: Open-Meteo, TMDB, Spotify._
