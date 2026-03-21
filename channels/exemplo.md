# Exemplo de arquivo de canal
# Copie este arquivo, renomeie para o nome do seu canal e preencha.
# Ex: channels/financeiro.md, channels/dev.md, channels/fitness.md

# ─────────────────────────────────────────────
# OBRIGATÓRIO — Qual agente responde neste canal
# ─────────────────────────────────────────────

# 🤖 Agente Responsável: ART3MIS
# Opções: ART3MIS, AECH, OG, ANORAK, DAITO
# > Carregar: agents/ART3MIS.md

# ─────────────────────────────────────────────
# NOME DO CANAL
# ─────────────────────────────────────────────

# Canal 🏠・pessoal
# (use o mesmo nome e emoji do seu servidor)

# ─────────────────────────────────────────────
# ESCOPO — O que é tratado aqui
# ─────────────────────────────────────────────

## Escopo
# Liste os assuntos deste canal. O agente vai focar nesses temas.
# - Assunto 1
# - Assunto 2
# - Assunto 3

# ─────────────────────────────────────────────
# CONTEXTO ESPECÍFICO (opcional)
# ─────────────────────────────────────────────

# Informações que o agente deve sempre ter em mente neste canal.
# Ex: metas do mês, projetos ativos, regras específicas.

## Contexto
# [Adicionar contexto relevante para este canal]

# ─────────────────────────────────────────────
# SKILLS ATIVAS (opcional)
# ─────────────────────────────────────────────

# Skills que são carregadas automaticamente neste canal
# (além das skills invocadas por /comando)

## Skills automáticas
# - skills/[nome].md — [quando usar]

# ─────────────────────────────────────────────
# HANDOFFS (opcional)
# ─────────────────────────────────────────────

# Para onde redirecionar assuntos que não são deste canal
## Handoffs
# - Assunto financeiro → #financeiro (OG)
# - Assunto técnico → #dev (AECH)

# ─────────────────────────────────────────────
# FERRAMENTAS (obrigatório se usar integrações)
# ─────────────────────────────────────────────

## 🛠️ Ferramentas
# > Antes de qualquer ação com ferramentas: carregar `context/tools.md`

# ─────────────────────────────────────────────
# EXEMPLO PREENCHIDO
# ─────────────────────────────────────────────

# # 🤖 Agente Responsável: OG
# > Carregar: agents/OG.md
#
# # Canal 💳・financeiro
#
# ## Escopo
# - Controle de gastos mensais
# - Análise de orçamento por categoria
# - Planejamento financeiro
# - Dívidas e metas de quitação
#
# ## Contexto
# - Planilha: [sua ferramenta] (ver context/tools.md)
# - Dashboard: [opcional]
# - Meta: quitar dívidas até [data]
#
# ## 🛠️ Ferramentas
# > Antes de qualquer ação: carregar `context/tools.md`
