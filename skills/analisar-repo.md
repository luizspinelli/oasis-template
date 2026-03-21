---
name: analisar-repo
description: Analisa atividade recente de repositório GitHub ou Bitbucket
agents: [AECH]
tools: [exec]
credentials: scripts/github-config.json, scripts/bitbucket-config.json
command: /repo [nome]
---

# Skill: Analisar Repositório

## Quando usar
Quando [Usuário] quiser ver o status de um repo — commits recentes, PRs abertos, branches ativas.

## Credenciais
- GitHub: `scripts/github-config.json` (ver context/tools.md)
- Bitbucket: `scripts/bitbucket-config.json` (ver context/tools.md)

## Como detectar a plataforma
- Se mencionar projetos da empresa → **Bitbucket** (workspace: [workspace])
- Se mencionar [projetos pessoais] → **GitHub** (user: [seu-usuario])

## GitHub — Consultar repo
```bash
TOKEN=$(node -e "console.log(require('./scripts/github-config.json').token)")

# Commits recentes
curl -s "https://api.github.com/repos/[seu-usuario]/REPO/commits?per_page=5" \
  -H "Authorization: Bearer $TOKEN" | \
  node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));d.forEach(c=>console.log(c.commit.author.date.slice(0,10),'|',c.commit.message.split('\n')[0]))"

# PRs abertos
curl -s "https://api.github.com/repos/[seu-usuario]/REPO/pulls?state=open" \
  -H "Authorization: Bearer $TOKEN" | \
  node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));d.forEach(p=>console.log('#'+p.number,'|',p.title,'|',p.user.login))"
```

## Bitbucket — Consultar repo
```bash
CREDS=$(node -e "const c=require('./scripts/bitbucket-config.json');console.log(c.email+':'+c.token)")

# Commits recentes
curl -s "https://api.bitbucket.org/2.0/repositories/[WORKSPACE]/[REPO]/commits?pagelen=5" \
  -u "$CREDS" | \
  node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'));(d.values||[]).forEach(c=>console.log(c.date.slice(0,10),'|',c.message.split('\n')[0]))"
```

## Formato da resposta
```
📦 Repo: [nome] ([plataforma])

📝 Últimos commits:
  [data] — [mensagem]
  ...

🔀 PRs abertos: [N]
  #[num] — [título] (@autor)

🌿 Branches ativas: [lista]
```
