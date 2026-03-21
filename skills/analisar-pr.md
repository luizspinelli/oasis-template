---
name: analisar-pr
description: Analisar pull requests — diff, comentários, aprovação
agents: [AECH]
tools: [exec, github-api, bitbucket-api]
credentials: scripts/github-config.json, scripts/bitbucket-config.json
---

# Skill: Analisar PR

Sistema para análise de pull requests — revisar diff, comentários, code review e aprovação.

## Quando usar

- Revisar PR de algum dev
- Verificar status de PR em andamento
- Fazer code review técnico
- Aprovar ou solicitar mudanças
- Checar merge readiness

## Fontes de PR

**GitHub (repos pessoais):**
- `/*` — repositórios pessoais
- `[org]/*` — projetos da organização

**Bitbucket (workspace da empresa):**
- `[workspace]/[projeto-a]-*` — [Projeto A]
- `[workspace]/[projeto-b]-*` — [Projeto B]
- `[workspace]/[projeto-c]-*` — [Projeto C]
- `[workspace]/[projeto-d]-*` — [Projeto D]
- `[workspace]/[projeto-e]-*` — [Projeto E]

## Como Executar

### Comando: `/pr [repo] [numero]`

Analisar PR específico:

```bash
/pr /projeto-x 42
/pr [workspace]/[repo] 156
```

### GitHub - Analisar PR

```bash
curl -X GET https://api.github.com/repos/[OWNER]/[REPO]/pulls/[PR_NUMBER] \
  -H "Authorization: token [TOKEN]" | jq '.'
```

**Exemplo de saída:**

```
📋 PR #42: Add authentication middleware
═════════════════════════════════════════

👤 Autor: [Dev A]
📅 Criado: 10/03/2026
🔗 Branch: feat/auth-middleware → main

📊 Estatísticas:
  • Commits: 5
  • Arquivos alterados: 7
  • Linhas +254 -98
  • Conflitos: ❌ Nenhum

✅ Checks:
  • CI/CD: ✅ Passou
  • Tests: ✅ 98% coverage
  • Lint: ✅ ESLint OK
  • Deploy preview: ✅ https://pr-42.example.com

👁️ Reviewers:
  • [Revisor] (requested)
  • [Dev C] (approved)

💬 Comentários:
  • 3 comentários no código
  • 1 sugestão de melhoria
  • 0 bloqueadores
```

### GitHub - Listar diff

```bash
curl -X GET https://api.github.com/repos/[OWNER]/[REPO]/pulls/[PR_NUMBER]/files \
  -H "Authorization: token [TOKEN]" | jq '.[] | {filename, patch}'
```

**Análise de diff:**

```
📝 Arquivo: src/middleware/auth.js (+52 -8)

export const authenticateUser = (req, res, next) => {
+  const token = req.headers['authorization']?.split(' ')[1];
+  if (!token) return res.status(401).json({ error: 'No token' });
+  
   try {
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
-    req.user = decoded;
+    req.user = { ...decoded, verified: true };
   } catch (e) {
     return res.status(403).json({ error: 'Invalid token' });
   }
};

💡 Sugestão: Considerar usar middleware de bearer token parsing
```

### Bitbucket - Analisar PR

```bash
curl -X GET https://api.bitbucket.org/2.0/repositories/[WORKSPACE]/[REPO]/pullrequests/[PR_ID] \
  -u "email:token" | jq '.'
```

## Code Review Checklist

Ao analisar PR, verificar:

- [ ] **Funcionalidade:** O que a PR faz? Bate com a descrição?
- [ ] **Arquitetura:** Segue padrões do projeto? Soluções simples?
- [ ] **Segurança:** Inputs validados? SQL injection? XSS?
- [ ] **Testes:** Cobertura >80%? Edge cases?
- [ ] **Performance:** Queries N+1? Loops desnecessários?
- [ ] **Naming:** Variáveis e funções bem nomeadas?
- [ ] **Documentação:** Código documentado? README atualizado?
- [ ] **Commits:** Histórico limpo? Mensagens claras?

## Aprovação / Solicitar Mudanças

### Aprovar PR

```bash
curl -X POST https://api.github.com/repos/[OWNER]/[REPO]/pulls/[PR_NUMBER]/reviews \
  -H "Authorization: token [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "event": "APPROVE",
    "body": "Looks good! Approved."
  }'
```

### Solicitar mudanças

```bash
curl -X POST https://api.github.com/repos/[OWNER]/[REPO]/pulls/[PR_NUMBER]/reviews \
  -H "Authorization: token [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "event": "REQUEST_CHANGES",
    "body": "Precisa ajustar validação de inputs",
    "comments": [
      {
        "path": "src/auth.js",
        "line": 42,
        "body": "Validar se token não é vazio aqui"
      }
    ]
  }'
```

## Merge & Deploy

**Quando fazer merge:**
- [ ] Todos checks ✅ (CI, tests, lint)
- [ ] Aprovado por pelo menos 1 reviewer
- [ ] Sem conflitos
- [ ] Branch atualizado com main
- [ ] Descrição completa

**Comandos:**

```bash
# Merge via GitHub API
curl -X PUT https://api.github.com/repos/[OWNER]/[REPO]/pulls/[PR_NUMBER]/merge \
  -H "Authorization: token [TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "commit_title": "Merge PR #42: Add authentication middleware",
    "merge_method": "squash"
  }'
```

## Exemplo Completo

```
📋 Análise PR #156 ([workspace]/[repo])
═════════════════════════════════════

🎯 O que faz:
  Sincronização automática de estoque com integradores externos

✅ Pontos positivos:
  • Lógica limpa, fácil de entender
  • Testes bem estruturados (92% coverage)
  • Documentação API atualizada
  • Segurança: validação de entrada OK

⚠️ Pontos para ajustar:
  1. Line 78: Considerar usar Promise.all() em vez de loop
  2. Falta tipo TypeScript em 2 funções
  3. Env var API_TIMEOUT não documentada

✅ Aprovado com 1 sugestão de melhoria

Merge em: ✅
Deploy: Pode em prod (baixo risco)
```

---

_Skill para: AECH. Repositórios: GitHub (pessoais + org) + Bitbucket (empresa). Credenciais em `scripts/github-config.json` e `scripts/bitbucket-config.json`._
