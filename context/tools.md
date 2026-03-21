# Tools — Credenciais e Ferramentas

> **IMPORTANTE:** Carregar ANTES de qualquer ação com ferramentas externas.
>
> Sem este arquivo, **não improvise tokens ou caminhos**.

---

## Como Usar

Preencha **apenas as integrações que você usa**. Apague as que não precisar.

Todas as integrações abaixo são **plug-and-play** — basta gerar um token no site e colar no arquivo de config correspondente em `scripts/`.

**NUNCA** compartilhe este arquivo ou os JSONs de config publicamente.

---

## 🐙 GitHub _(opcional)_

**Agente:** AECH 🔧
**Uso:** commits, PRs, issues, repos

```
Config: scripts/github-config.json
```

**Token:** github.com/settings/tokens → Generate new token

**Formato do config:**
```json
{
  "token": "ghp_...",
  "username": "seu-usuario",
  "orgs": ["org1", "org2"]
}
```

---

## 🪣 Bitbucket _(opcional)_

**Agente:** AECH 🔧
**Uso:** repos da empresa, PRs, branches

```
Config: scripts/bitbucket-config.json
```

**Token:** bitbucket.org/account/settings/app-passwords

**Formato do config:**
```json
{
  "email": "seu-email",
  "token": "app-password",
  "workspace": "seu-workspace"
}
```

---

## 📋 Notion _(opcional)_

**Agente:** ART3MIS 🏹 / PARZIVAL 🎯
**Uso:** tarefas, base de conhecimento, notas, projetos

```
Config: scripts/notion-config.json
```

**Token:** notion.so/my-integrations → New integration

---

## 🎯 Linear _(opcional)_

**Agente:** AECH 🔧
**Uso:** issues, sprints, roadmap, status de projetos

```
Config: scripts/linear-config.json
```

**Token:** linear.app/settings/api

---

## 💬 Slack _(opcional)_

**Agente:** AECH 🔧
**Uso:** enviar mensagens, ler notificações, postar relatórios

```
Config: scripts/slack-config.json
```

**Token:** api.slack.com/apps → Create App → Bot Token

---

## 🔍 Brave Search _(opcional)_

**Agente:** Todos (via skill `pesquisar-web`)
**Uso:** pesquisas em tempo real, notícias, eventos

```
Config: scripts/search-config.json
```

**Token:** brave.com/search/api → 2.000 buscas/mês grátis

---

## 🎵 Spotify _(opcional)_

**Agente:** HALLIDAY 🎮
**Uso:** música atual, playlists, histórico

```
Config: scripts/spotify-config.json
```

**Token:** developer.spotify.com/dashboard → Create app

---

## 🏃 Strava _(opcional)_

**Agente:** DAITO ⚔️
**Uso:** atividades físicas, treinos, distâncias

```
Config: scripts/strava-config.json
```

**Token:** developers.strava.com → My API Application

---

## 📦 Vercel _(opcional)_

**Agente:** AECH 🔧
**Uso:** status de deploys, projetos, logs de build

```
Config: scripts/vercel-config.json
```

**Token:** vercel.com/account/tokens → Create

---

## ✅ Todoist _(opcional)_

**Agente:** ART3MIS 🏹
**Uso:** criar tarefas, listar pendências, marcar como concluído

```
Config: scripts/todoist-config.json
```

**Token:** todoist.com/prefs/integrations → API token

---

## 📅 Calendly _(opcional)_

**Agente:** ART3MIS 🏹
**Uso:** ver agenda de reuniões, disponibilidade, eventos agendados

```
Config: scripts/calendly-config.json
```

**Token:** calendly.com/integrations/api_webhooks

---

## 🤖 Telegram Bot _(opcional)_

**Agente:** PARZIVAL 🎯
**Uso:** receber notificações, alertas, resumos diários via Telegram

```
Config: scripts/telegram-config.json
```

**Token:** t.me/BotFather → /newbot (30 segundos)

---

## 🔔 Sentry _(opcional)_

**Agente:** AECH 🔧
**Uso:** monitorar erros em produção, alertas, status de issues

```
Config: scripts/sentry-config.json
```

**Token:** sentry.io/settings/account/api/auth-tokens

---

## 🌤️ Open-Meteo _(gratuito, sem API key)_

**Agente:** ART3MIS 🏹
**Uso:** clima atual e previsão para qualquer cidade

```bash
GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto
```

Não precisa de token nem config — acesso direto.

---

## ⏱️ WakaTime _(opcional)_

**Agente:** AECH 🔧
**Uso:** tempo de código por linguagem, projeto e dia

```
Config: scripts/wakatime-config.json
```

**Token:** wakatime.com/settings/api-key

**Exemplo de chamada:**
```bash
GET https://wakatime.com/api/v1/users/current/summaries?start=today&end=today
Authorization: Basic base64(API_KEY:)
```

---

## 📖 Readwise _(opcional)_

**Agente:** ANORAK 🔮
**Uso:** highlights de livros, artigos e Kindle

```
Config: scripts/readwise-config.json
```

**Token:** readwise.io/access-token

**Exemplo de chamada:**
```bash
GET https://readwise.io/api/v2/highlights/?page_size=20
Authorization: Token TOKEN
```

---

## 💍 Oura Ring _(opcional)_

**Agente:** DAITO ⚔️
**Uso:** sono, recovery score, HRV, temperatura corporal

```
Config: scripts/oura-config.json
```

**Token:** cloud.ouraring.com/user/api-tokens

**Exemplo de chamada:**
```bash
GET https://api.ouraring.com/v2/usercollection/sleep?start_date=today
Authorization: Bearer TOKEN
```

---

## 🎬 TMDB _(gratuito)_

**Agente:** HALLIDAY 🎮
**Uso:** busca de filmes e séries, onde assistir, lançamentos

```
Config: scripts/tmdb-config.json
```

**Token:** themoviedb.org/settings/api (gratuito)

**Exemplo de chamada:**
```bash
GET https://api.themoviedb.org/3/search/movie?query={titulo}
Authorization: Bearer TOKEN
```

---

## 🎮 Steam _(gratuito)_

**Agente:** HALLIDAY 🎮
**Uso:** biblioteca de jogos, horas jogadas, conquistas

```
Config: scripts/steam-config.json
```

**Token:** steamcommunity.com/dev/apikey (gratuito)

**Exemplo de chamada:**
```bash
GET https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=API_KEY&steamid=STEAM_ID&include_appinfo=true
```

---

## 💳 Planilha Financeira _(recomendado para OG)_

**Agente:** OG 💰
**Uso:** rastreamento de gastos, orçamentos, investimentos

**Opções:**
- Google Sheets → `scripts/sheets-config.json`
- Notion → `scripts/notion-config.json` (veja seção Notion acima)
- Airtable → `scripts/airtable-config.json`
- API própria → configurar endpoint em `USER.md` seção Financeiro

Qualquer plataforma serve — OG integra com a que você usar.

---

## ➕ Adicionar Nova Integração

Use este formato para documentar novas integrações:

```markdown
## [Emoji] [Nome do Serviço] _(opcional)_

**Agente:** [AGENTE] [emoji]
**Uso:** [o que o agente faz com esta integração]

Config: scripts/[servico]-config.json

**Token:** [onde gerar → link]
```

---

## 🔐 Segurança

- Todos os tokens devem estar em `scripts/*.json` — **nunca em arquivos .md**
- `.gitignore` já exclui `scripts/*.json` — verifique antes de fazer push
- Se compartilhar este template, confirme que `scripts/*.json` não está incluído
- Regenere qualquer token comprometido imediatamente
- Use Personal Access Tokens em vez de senhas quando possível
- Este arquivo (`tools.md`) documenta ONDE e COMO obter tokens — os tokens em si ficam nos JSONs
