---
# Template para criar uma skill personalizada
# Copie este arquivo, renomeie para nome-da-skill.md e preencha
# Ex: skills/consultar-clinica.md, skills/pesquisar-imovel.md

name: nome-da-skill
description: Descrição clara do que esta skill faz (1 linha)
agents: [AGENTE1, AGENTE2]   # Quais agentes podem usar esta skill
tools: [exec, web_search]     # Ferramentas necessárias: exec, web_search, web_fetch, message
credentials: context/tools.md # Onde ficam as credenciais (se necessário)
command: /comando [argumento]  # Comando que invoca esta skill no Discord
---

# Skill: [Nome da Skill]

## Quando usar
[Descreva em 1-3 frases quando o agente deve carregar esta skill.
Seja específico — evite "quando o usuário pedir algo relacionado a X"]

Ex: Sempre que o usuário usar `/consultar` ou perguntar sobre disponibilidade
de agenda médica, planos de saúde ou consultas.

---

## Pré-requisitos

[Liste o que precisa estar configurado antes de executar]

- Credencial X em `context/tools.md`
- Script Y em `scripts/`
- Token Z renovado via `node scripts/refresh-token.js`

Se não houver pré-requisitos, remova esta seção.

---

## Como executar

[Instruções passo a passo de como a skill funciona.
Use blocos de código para comandos reais.]

### Passo 1 — [Nome do passo]
```bash
# Comando ou script a executar
node scripts/meu-script.js --argumento valor
```

### Passo 2 — [Nome do passo]
```javascript
// Exemplo de chamada de API
const response = await fetch('https://api.exemplo.com/endpoint', {
  headers: { Authorization: 'Bearer ' + token }
});
```

### Passo 3 — Processar resultado
[Como interpretar o resultado e o que fazer com ele]

---

## Formato da resposta

[Como o agente deve formatar a resposta para o usuário.
Use um exemplo com markdown do Discord.]

```
[Emoji] [Título]

[Seção 1]:
  • Item 1
  • Item 2

[Seção 2]:
  [conteúdo]

[Rodapé ou ação sugerida]
```

---

## Exemplos de uso

```
/comando argumento1
/comando argumento2 argumento3
```

**Exemplo de conversa:**
```
Usuário: /comando exemplo
Agente: [resposta formatada]
```

---

## Tratamento de erros

| Erro | Causa provável | O que fazer |
|---|---|---|
| Token expirado | Refresh necessário | `node scripts/refresh-token.js` |
| API 404 | Recurso não encontrado | Avisar usuário e sugerir alternativa |
| Timeout | Serviço lento | Tentar novamente ou avisar |

---

## Notas

[Informações adicionais relevantes:
- Limitações conhecidas
- Edge cases importantes
- Frequência recomendada de uso
- Custo de API se aplicável]

---

_Skill para: [AGENTES]. Criada em: [DATA]._
