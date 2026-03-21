---
name: revisar-codigo
description: Code review e análise de pull requests em GitHub/Bitbucket
agents: [AECH]
tools: [exec, github-api, bitbucket-api]
---

# Skill: Revisar Código

Análise de pull requests, code reviews rigorosos e feedback estruturado.

## Quando usar

- Usuário quer revisar PR de projeto
- Quer análise de arquitetura de código
- Quer feedback sobre qualidade/performance
- Quer mentorar outro desenvolvedor

## Áreas de Revisão

### 1. Lógica & Correção

- [ ] Código faz o que deveria fazer?
- [ ] Há edge cases não cobertos?
- [ ] Há loops infinitos ou bottlenecks?
- [ ] Tratamento de erros adequado?

### 2. Segurança

- [ ] SQL injection? (prepared statements?)
- [ ] XSS? (sanitização de input?)
- [ ] Autenticação/autorização correta?
- [ ] Secrets em hardcode? (env vars?)
- [ ] Acesso a arquivos restrito?

### 3. Performance

- [ ] Queries otimizadas? (índices?)
- [ ] N+1 queries? (batch/eager loading?)
- [ ] Caching estratégico?
- [ ] Tamanho de bundle aceitável?
- [ ] Renderização eficiente? (React keys, virtualization?)

### 4. Qualidade & Padrões

- [ ] Naming conventions seguidas?
- [ ] Funções pequenas e focadas? (<50 linhas)
- [ ] DRY (Don't Repeat Yourself)?
- [ ] SOLID principles respeitados?
- [ ] Comentários claros apenas onde necessário?

### 5. Testes

- [ ] Testes unitários cobrindo casos críticos?
- [ ] Testes de integração quando necessário?
- [ ] Coverage acima de 70%?
- [ ] Testes são legíveis e mantíveis?

### 6. Documentação

- [ ] README atualizado?
- [ ] Código complexo comentado?
- [ ] Tipos/interfaces documentadas?
- [ ] Breaking changes notificados?

## Formato de Feedback

**Estrutura AECH de review:**

```
✅ BOAS PRÁTICAS:
- [List 2-3 coisas bem feitas]

🔴 BLOQUEADORES:
- [Issue que impede merge]
- Solução: [Como corrigir]

🟡 RECOMENDAÇÕES:
- [Melhorias não-críticas]
- Prioridade: [baixa/média]

📝 MENTORÍA:
- [Onde aprender mais]
- Recurso: [link ou referência]
```

## Exemplos

**User:** "Revisa essa PR de auth"

**AECH:**
1. Clona branch e lê código
2. Valida lógica de JWT, refresh tokens, CORS
3. Verifica se secrets não estão em hardcode
4. Testa edge cases (logout, expired token, etc.)
5. Dá feedback estruturado com ✅ 🔴 🟡 📝

---

**User:** "Quer feedback de performance nessa query?"

**AECH:**
1. Lê query e plan de execução
2. Verifica índices
3. Analisa join strategy
4. Sugere otimizações se houver
5. Explica trade-offs

## Notas

- Review é **mentoria**, não arrogância
- Sempre explique o **por quê**, não só o quê
- Reconheça boas práticas (reforce comportamentos positivos)
- Tire tempo pra entender contexto (não ignore requirements)
- Bloqueadores devem ser claros e solucionáveis

---

_Skill para agentes: AECH. Consultar `context/tools.md` para GitHub/Bitbucket config._
