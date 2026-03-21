---
name: criar-orcamento
description: Criar ou atualizar orçamento mensal por categoria
agents: [OG]
tools: [exec]
command: /orcamento
---

# Skill: Criar Orçamento

Sistema para criar ou atualizar orçamento mensal por categoria na planilha financeira.

## Quando usar

-  quer criar novo orçamento para um mês
- Ajustar limite de categoria (ex: mais para lazer)
- Revisar orçamento vs realizado
- Rebalancear entre categorias

## Categorias de Orçamento

Categorias existentes na planilha:

| Categoria | Exemplo | Limite Sugerido |
|-----------|---------|-----------------|
| **Alimentação** | Mercado, restaurantes | R$ 1.500-2.000 |
| **Transporte** | Uber, combustível, metrô | R$ 400-600 |
| **Lazer** | Cinema, shows, programas | R$ 500-800 |
| **Saúde** | Academia, farmácia, médico | R$ 300-500 |
| **Educação** | Cursos, livros, certificações | R$ 200-400 |
| **Vestuário** | Roupas, sapatos, acessórios | R$ 200-300 |
| **Casa** | Manutenção, móveis, limpeza | R$ 200-400 |
| **Pets** | Ração, veterinário, banho | R$ 300-400 |
| **Assinaturas** | Netflix, Spotify, etc | R$ 100-150 |
| **Outros** | Miscelânea | R$ 200-300 |

**FIXA (não orçamento):**
- Salário: [seu salário mensal]
- Empréstimos: [definido em USER.md]

## Como Executar

### Comando: `/orcamento [mes]`

Ver orçamento de um mês:

```bash
/orcamento 03-2026
/orcamento atual
```

**Resposta:**

```
📊 Orçamento Março 2026
═══════════════════════

Categoria         | Orçado    | Realizado | % Usado | Status
──────────────────┼───────────┼───────────┼─────────┼────────
Alimentação       | R$ 1.800  | R$ 1.650  |  91%   | ✅
Transporte        | R$ 500    | R$ 480    |  96%   | ✅
Lazer             | R$ XXX    | R$ XXX    | 121%   | ⚠️ OVER
Saúde             | R$ 400    | R$ 250    |  62%   | ✅
Educação          | R$ 300    | R$ 0      |   0%   | 💤
Vestuário         | R$ 250    | R$ 120    |  48%   | ✅
Casa              | R$ 300    | R$ 180    |  60%   | ✅
Pets              | R$ XXX    | R$ XXX    | 109%   | ⚠️ OVER
Assinaturas       | R$ 120    | R$ 120    | 100%   | ✅
Outros            | R$ 250    | R$ 180    |  72%   | ✅

💰 RESUMO:
  • Total Orçado: R$ 5.170
  • Total Realizado: R$ 4.670
  • Saldo: +R$ 500 (sob orçamento ✅)
  • Categories over: Lazer, Pets (ajustar próx mês?)
```

### Comando: `/orcamento [categoria] [valor]`

Ajustar limite de uma categoria:

```bash
/orcamento lazer 800
/orcamento pets 400
```

**Resposta:**

```
✅ Orçamento atualizado!

📝 Lazer: R$ 700 → R$ 800 (+R$ 100)
   (ajuste começa em: próxima atualização de dados)

💾 Alteração salva em: Orçamentos sheet
```

## API Lambda

**Ler orçamento atual:**

```bash
curl -X GET "[definido em USER.md]" \
  -H "month=2026-03"
```

**Resposta:**

```json
{
  "month": "2026-03",
  "orcamentos": {
    "alimentacao": 1800,
    "transporte": 500,
    "lazer": 700,
    "saude": 400,
    "educacao": 300,
    "vestuario": 250,
    "casa": 300,
    "pets": 350,
    "assinaturas": 120,
    "outros": 250
  },
  "total": 5170
}
```

**Atualizar orçamento:**

```bash
curl -X PUT "[definido em USER.md]" \
  -H "Content-Type: application/json" \
  -d '{
    "month": "2026-03",
    "action": "update_orcamento",
    "categoria": "lazer",
    "valor": 800
  }'
```

## Formato de Resposta

**Confirmação de atualização:**

```
✅ Orçamento Atualizado!

📋 Categoria: Lazer
💰 Novo limite: R$ 800/mês
📅 Vigência: 2026-03 em diante
🔔 Alerta: Se passar de R$ 800, aviso automático
```

## Boas Práticas

- **Revisar mensalmente:** Não deixar ficar estático
- **Respeitar realizado:** Se sempre gasta mais em X, aumenta limit
- **Buffer:** Sempre manter 10-15% de margem
- **Ajustes sazonais:** Mais lazer em férias, menos educação se não há cursos
- **Família:** Conversar com  sobre categorias compartilhadas (alimentação)

## Exemplo de Processo

```
📊 Planejamento Orçamento Abril 2026
═══════════════════════════════════════

1️⃣ REVISAR Março
   ✅ Sob orçamento: +R$ 500
   ⚠️ Over: Lazer (+15%), Pets (+9%)
   💤 Não usado: Educação (0%)

2️⃣ ANÁLISE
   • Lazer: Teve 2 shows → R$ 700 insuficiente
   • Pets: [pet] precisa veterinário (extra)
   • Educação: Sem cursos este mês

3️⃣ AJUSTES PROPOSTOS
   • Lazer: R$ 700 → R$ 800
   • Pets: R$ 350 → R$ 380 (+ veterinário)
   • Educação: R$ 300 → R$ 250 (reduz, sem curso)

4️⃣ APLICAR
   /orcamento lazer 800
   /orcamento pets 380
   /orcamento educacao 250

5️⃣ CONFIRMAR
   Total Abril: R$ 5.170 → R$ 5.200
   +R$ 30 (ainda sob limite)
```

---

_Skill para: OG. API: [definido em USER.md]_
