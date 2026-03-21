---
name: recomendar-conteudo
description: Recomenda séries, filmes, jogos, músicas e podcasts personalizados
agents: [HALLIDAY]
tools: [web_search, memory]
command: /assistir
---

# Skill: recomendar-conteudo
**Agente:** HALLIDAY 🎮
**Comando:** `/assistir`, `/ouvir`, `/jogo`

## O que faz
Recomenda séries, filmes, jogos, músicas ou podcasts com base no humor, gosto e contexto atual do usuário.

## Como usar
```
/assistir
/assistir [gênero ou humor]
/ouvir [contexto: trabalho, relaxar, treino]
/jogo [plataforma ou gênero]
```

## Protocolo

### 1. Entender o momento
- "Você quer algo para relaxar, se emocionar, gargalhar ou se desafiar?"
- Considerar estado emocional (se KIRA sinalizou algo em `context/eventos.md`)
- Considerar disponibilidade de tempo (2h? noite inteira? 20min?)

### 2. Considerar histórico
- Consultar `memory/` para o que já foi recomendado e o que gostou
- Consultar `USER.md` seção Estilo de Vida para preferências base
- Evitar recomendar o que já assistiu/jogou recentemente

### 3. Pesquisar
- Usar `web_search` para verificar lançamentos recentes
- Checar onde está disponível (streaming, loja, gratuito)
- Verificar notas/reviews se relevante

### 4. Fazer a recomendação
Formato por tipo:

#### Séries/Filmes
```
🎬 Recomendação: [Nome]

📺 Tipo: [Série/Filme] | Gênero: [gênero]
⏱️ Duração: [X episódios de Xmin / Xh de filme]
📍 Onde: [Netflix, Prime, HBO, etc.]
⭐ Por que você vai gostar: [motivo baseado no gosto do usuário]
🔗 Conexão: "Você gostou de [X] por [motivo]. [Y] tem a mesma vibe."
```

#### Jogos
```
🎮 Recomendação: [Nome]

🕹️ Plataforma: [PC, PS5, Switch, Mobile]
🎯 Gênero: [RPG, Puzzle, FPS, etc.]
⏱️ Tempo: [campanha Xh / sessões de Xmin]
💰 Preço: [R$ X ou gratuito]
⭐ Por que jogar: [motivo]
```

#### Música/Podcast
```
🎵 Recomendação: [Nome/Artista]

🎧 Tipo: [Álbum, Playlist, Podcast]
⏱️ Duração: [Xmin / X episódios]
📍 Onde: [Spotify, YouTube, Apple]
🎯 Contexto ideal: [trabalho, treino, relaxar, cozinhar]
⭐ Por que ouvir: [motivo]
```

### 5. Conexão de gosto
- Sempre explicar POR QUE vai gostar, baseado em algo que já curtiu
- "Você gostou de X pelo motivo Y? Então vai gostar de Z pelo mesmo motivo."
- Isso constrói confiança nas recomendações futuras

## Categorias

| Tipo | Gêneros | Contexto ideal |
|------|---------|---------------|
| **Séries** | Drama, comédia, sci-fi, thriller, animação, documentário | Noite, fim de semana |
| **Filmes** | Ação, drama, comédia, terror, indie | 2h livres |
| **Jogos** | RPG, puzzle, indie, narrativa, multiplayer, ação | Noite, fim de semana |
| **Música** | Por atividade: foco, treino, relaxar, humor, cozinhar | Qualquer momento |
| **Podcasts** | Tecnologia, negócios, saúde, cultura, entretenimento | Commute, treino, tarefas |

## Integrações úteis
- **TMDB** (context/tools.md): busca filmes e séries, notas, sinopses
- **Steam** (context/tools.md): biblioteca do usuário, jogos não jogados
- **Spotify** (context/tools.md): playlists, histórico de escutas
- **Brave Search**: lançamentos, reviews, disponibilidade

## Registro
Registrar em `memory/YYYY-MM-DD.md`:
```
- Recomendação: [tipo] [nome] | Motivo: [por que recomendou] | Feedback: [gostou/não gostou]
```

## Handoffs
- Programa a dois ou com amigos → **SHOTO** (planejar-encontro)
- Custo (jogo, ingresso, assinatura) → **OG**
- Agendar programa → **ART3MIS**
- Estado emocional influenciando escolha → **KIRA**

---

_Skill para: HALLIDAY. Integrações opcionais: TMDB, Steam, Spotify (configurar em context/tools.md)._
