---
name: consolidar-memoria
description: Revisão semanal dos 8 pilares — consolida memory/, atualiza MEMORY.md e gera OASIS Score
agents: [PARZIVAL]
tools: [memory]
command: /consolidar
---

# Skill: Consolidar Memória Semanal

## Quando usar
- **Todo domingo** (cron automático — configure no timezone do usuário)
- Comando `/consolidar` no #basement ou #geral
- **Fim de mês** (consolidação mensal com análise de tendências)

---

## Passo a Passo

### 1. Ler os arquivos da semana
1. Ler **todos** os `memory/YYYY-MM-DD.md` dos últimos **7 dias**
2. Ler `context/eventos.md` — eventos propagados na semana
3. Ler `context/bigpicture.md` — contexto macro atual
4. Ler `MEMORY.md` — estado anterior para comparação

### 2. Sintetizar por pilar
Para cada um dos **8 pilares**, extrair:

| Pilar | Emoji | Foco |
|-------|-------|------|
| Pessoal | 🏹 | Personal life, family, hobbies, planning |
| Trabalho | 🔧 | Work, leadership, architecture, decisions |
| Finanças | 💰 | Finance, budgets, expenses, income |
| Estudos | 🔮 | Learning, certifications, books, courses |
| Saúde | ⚔️ | Health, exercise, nutrition, sleep |
| Mental | 🌸 | Mental health, stress, wellness, therapy |
| Lazer | 🎮 | Entertainment, games, shows, hobbies |
| Relacionamentos | 🤝 | Relationships, friends, family |

**Para cada pilar, anotar:**
- O que aconteceu de relevante
- Decisões tomadas
- Padrões identificados
- Pendências abertas

### 3. Calcular OASIS Score
Atribuir **nota 1-5** para cada pilar com base nas **interações e progresso** da semana:

| Nota | Critério |
|------|----------|
| 5/5 | Pilar ativo, progresso claro, sem pendências |
| 4/5 | Ativo, pequenas pendências, progresso consistente |
| 3/5 | Neutro — sem progresso nem regressão |
| 2/5 | Pouca atenção, pendências abertas |
| 1/5 | Negligenciado ou com problema identificado |

---

### 4. Atualizar MEMORY.md
Adicionar seção da semana **no topo** de MEMORY.md:

```markdown
## Semana [N] — [Data início] a [Data fim]

### Por Pilar:
- 🏹 **Pessoal:** [resumo 1-2 linhas]
- 🔧 **Trabalho:** [resumo]
- 💰 **Finanças:** [resumo]
- 🔮 **Estudos:** [resumo]
- ⚔️ **Saúde:** [resumo]
- 🌸 **Mental:** [resumo]
- 🎮 **Lazer:** [resumo]
- 🤝 **Relacionamentos:** [resumo]

### Decisões Importantes:
- [lista]

### Pendências para Próxima Semana:
- [lista]
```

---

### 5. Postar OASIS Score
Publicar em #basement com formato:

```
📊 **OASIS Weekly Review — Semana [N]**

🏹 Pessoal       [barra visual] N/5 — [status]
🔧 Trabalho      [barra visual] N/5 — [status]
💰 Finanças      [barra visual] N/5 — [status]
🔮 Estudos       [barra visual] N/5 — [status]
⚔️ Saúde         [barra visual] N/5 — [status]
🌸 Mental        [barra visual] N/5 — [status]
🎮 Lazer         [barra visual] N/5 — [status]
🤝 Relacionam.   [barra visual] N/5 — [status]

💬 **PARZIVAL:** [comentário geral]
```

**Barra visual:**
- 5/5 = `█████`
- 4/5 = `████░`
- 3/5 = `███░░`
- 2/5 = `██░░░`
- 1/5 = `█░░░░`

---

### 6. Limpar context/eventos.md
1. Arquivar eventos `✅ lido`
2. Manter apenas `⏳` ativos

---

## Trigger

- **Cron:** Todo domingo às 13h UTC
- **Manual:** `/consolidar` em qualquer canal
- **Mensal:** Fim de mês com análise de tendências

---

## Integrações

- `memory/YYYY-MM-DD.md` — daily raw data
- `context/eventos.md` — weekly event tracking
- `context/bigpicture.md` — macro context
- `MEMORY.md` — weekly consolidation + history
- `Discord #basement` — OASIS Score publication
