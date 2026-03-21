---
name: buscar-programa
description: Pesquisa eventos, shows, restaurantes e programas para o fim de semana em SP
agents: [ART3MIS]
tools: [web_search]
command: /programa [data]
---

# Skill: Buscar Programa

## Quando usar
Quando o usuário quiser sugestões de programa para o fim de semana.

## Perfil
- **Região:** [sua cidade] + SP toda
- **Gosto:** Shows, cinema, teatro, stand-up, exposições, restaurantes novos
- **[Parceiro/a]:** [gostos e preferências]
- **Orçamento:** Aberto — mandar o que for interessante
- **Restrições alimentares:** ver USER.md
- **Já agendado:** [eventos já agendados]

## Como executar
1. Identificar a data (fim de semana mais próximo se não especificado)
2. Fazer 2-3 buscas: eventos culturais SP + restaurantes novos [sua região] + shows/exposições
3. Filtrar pelo perfil acima
4. Retornar 3-5 sugestões rankeadas

## Formato da resposta
```
🎭 Programas para [DATA]

1. **[Nome]** — [Tipo]
   📍 [Local] | 💰 [Preço] | ⏰ [Horário]
   Por quê: [razão curta]

2. ...

💡 Combinação sugerida: [programa] + [restaurante]
```
