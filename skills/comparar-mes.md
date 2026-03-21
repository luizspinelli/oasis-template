---
name: comparar-mes
description: Compara gastos do mês atual vs anterior por categoria via Google Sheets
agents: [OG]
tools: [exec]
credentials: context/tools.md (API Lambda + Google Sheets)
command: /comparar [mes1] [mes2]
---

# Skill: Comparar Meses

## Quando usar
Quando [Usuário] quiser entender como os gastos mudaram entre meses.

## API
```
GET https://[API_ENDPOINT]
Authorization: Bearer [JWT Cognito]
```

## Como executar
Chamar a API e comparar `todosPorMes[mes1]` vs `todosPorMes[mes2]` por categoria.

```javascript
// Buscar dados
const res = await fetch('https://[API_ENDPOINT]', {
  headers: { Authorization: 'Bearer ' + jwtToken }
});
const data = await res.json();

// Comparar categorias
const mes1 = data.todosPorMes['jan.-26'] || [];
const mes2 = data.todosPorMes['fev.-26'] || [];

// Agrupar por categoria e comparar
```

## Formato da resposta
```
📊 Comparativo: [Mês 1] vs [Mês 2]

| Categoria       | [Mês1]    | [Mês2]    | Δ       |
|-----------------|-----------|-----------|---------|
| Alimentação     | R$ XXX    | R$ XXX    | +R$ XX ⬆️ |
| Transporte      | R$ XXX    | R$ XXX    | -R$ XX ⬇️ |
| ...             |           |           |         |
| **TOTAL**       | R$ X.XXX  | R$ X.XXX  | Δ Total |

💡 Maior aumento: [categoria]
✅ Maior economia: [categoria]
```

## Meses válidos
Formato: `jan.-26`, `fev.-26`, `mar.-26`, etc.
