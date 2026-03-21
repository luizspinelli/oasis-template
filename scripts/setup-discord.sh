#!/bin/bash
# =============================================================
# OASIS — Discord Server Setup
# Cria as categorias e canais dos 9 agentes OASIS automaticamente
# =============================================================

set -e

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo "🎮 OASIS — Discord Server Setup"
echo "================================"
echo ""

# Coletar credenciais via argumentos ou interativo
while [[ "$#" -gt 0 ]]; do
  case $1 in
    --token) DISCORD_TOKEN="$2"; shift ;;
    --guild) GUILD_ID="$2"; shift ;;
  esac
  shift
done

# Tentar ler do openclaw.json se não passados como argumento
if [ -z "$DISCORD_TOKEN" ] || [ -z "$GUILD_ID" ]; then
  OPENCLAW_JSON="$(dirname "$0")/../openclaw.json"
  if [ -f "$OPENCLAW_JSON" ]; then
    DISCORD_TOKEN="${DISCORD_TOKEN:-$(python3 -c "import json;d=json.load(open('$OPENCLAW_JSON'));print(d.get('discord',{}).get('botToken',''))" 2>/dev/null)}"
    GUILD_ID="${GUILD_ID:-$(python3 -c "import json;d=json.load(open('$OPENCLAW_JSON'));print(d.get('discord',{}).get('guildId',''))" 2>/dev/null)}"
  fi
fi

# Interativo se ainda vazio
if [ -z "$DISCORD_TOKEN" ]; then
  read -p "🤖 Bot Token: " DISCORD_TOKEN
fi
if [ -z "$GUILD_ID" ]; then
  read -p "🏠 Guild ID (ID do servidor): " GUILD_ID
fi

echo ""
echo "Verificando conexão com o servidor..."

CHECK=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bot $DISCORD_TOKEN" \
  "https://discord.com/api/v10/guilds/$GUILD_ID")

if [ "$CHECK" != "200" ]; then
  echo -e "${RED}❌ Erro: Token ou Guild ID inválido (HTTP $CHECK)${NC}"
  echo "   → Verifique o Bot Token em discord.com/developers"
  echo "   → O bot precisa estar no servidor com permissão 'Manage Channels'"
  exit 1
fi

echo -e "${GREEN}✅ Conectado ao servidor!${NC}"
echo ""

# Função para criar categoria; retorna o ID
create_category() {
  local name="$1"
  local result
  result=$(curl -s -X POST \
    "https://discord.com/api/v10/guilds/$GUILD_ID/channels" \
    -H "Authorization: Bot $DISCORD_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"$name\",\"type\":4}")
  echo "$result" | python3 -c "import sys,json;d=json.load(sys.stdin);print(d.get('id',''))" 2>/dev/null
}

# Função para criar canal de texto; exibe ✅ ou ❌
create_channel() {
  local name="$1"
  local topic="$2"
  local parent_id="$3"
  local http_code
  http_code=$(curl -s -o /dev/null -w "%{http_code}" -X POST \
    "https://discord.com/api/v10/guilds/$GUILD_ID/channels" \
    -H "Authorization: Bot $DISCORD_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"name\":\"$name\",\"type\":0,\"topic\":\"$topic\",\"parent_id\":\"$parent_id\"}")
  if [ "$http_code" = "200" ] || [ "$http_code" = "201" ]; then
    echo -e "     ${GREEN}✅ #${name}${NC}"
  else
    echo -e "     ${RED}❌ #${name} (HTTP $http_code)${NC}"
  fi
}

echo "📁 Criando categorias e canais..."
echo ""

# ── HUB ──────────────────────────────────────────────────────
echo "  🎯 OASIS — HUB"
CAT_HUB=$(create_category "🎯 OASIS — HUB")
create_channel "geral"    "Hub central — PARZIVAL (orquestrador)" "$CAT_HUB"
create_channel "basement" "The Basement — todos os agentes disponíveis (party mode)" "$CAT_HUB"

# ── VIDA PESSOAL (ART3MIS) ───────────────────────────────────
echo "  🏹 VIDA PESSOAL (ART3MIS)"
CAT_ART3MIS=$(create_category "🏹 VIDA PESSOAL (ART3MIS)")
create_channel "art3mis" "Agenda, família, rotina, viagens, vida pessoal" "$CAT_ART3MIS"

# ── TRABALHO & TECH (AECH) ───────────────────────────────────
echo "  🔧 TRABALHO & TECH (AECH)"
CAT_AECH=$(create_category "🔧 TRABALHO & TECH (AECH)")
create_channel "aech" "Código, projetos, arquitetura, liderança, negócios" "$CAT_AECH"

# ── FINANÇAS (OG) ────────────────────────────────────────────
echo "  💰 FINANÇAS (OG)"
CAT_OG=$(create_category "💰 FINANÇAS (OG)")
create_channel "financeiro" "Budget, empréstimos, gastos, planejamento financeiro" "$CAT_OG"

# ── ESTUDOS (ANORAK) ─────────────────────────────────────────
echo "  🔮 ESTUDOS (ANORAK)"
CAT_ANORAK=$(create_category "🔮 ESTUDOS (ANORAK)")
create_channel "estudos" "Certificações, roadmaps, livros, planos de aprendizado" "$CAT_ANORAK"

# ── SAÚDE FÍSICA (DAITO) ─────────────────────────────────────
echo "  ⚔️ SAÚDE FÍSICA (DAITO)"
CAT_DAITO=$(create_category "⚔️ SAÚDE FÍSICA (DAITO)")
create_channel "fitness" "Treinos, alimentação, saúde, performance, hábitos" "$CAT_DAITO"

# ── SAÚDE MENTAL (KIRA) ──────────────────────────────────────
echo "  🌸 SAÚDE MENTAL (KIRA)"
CAT_KIRA=$(create_category "🌸 SAÚDE MENTAL (KIRA)")
create_channel "kira" "Bem-estar, estresse, equilíbrio emocional, burnout" "$CAT_KIRA"

# ── LAZER (HALLIDAY) ─────────────────────────────────────────
echo "  🎮 LAZER (HALLIDAY)"
CAT_HALLIDAY=$(create_category "🎮 LAZER (HALLIDAY)")
create_channel "halliday" "Hobbies, programas, lazer, recomendações culturais" "$CAT_HALLIDAY"

# ── RELACIONAMENTOS (SHOTO) ──────────────────────────────────
echo "  🤝 RELACIONAMENTOS (SHOTO)"
CAT_SHOTO=$(create_category "🤝 RELACIONAMENTOS (SHOTO)")
create_channel "shoto" "Vida social, amizades, família, relacionamentos" "$CAT_SHOTO"

# ── SISTEMA ──────────────────────────────────────────────────
echo "  ⚙️ SISTEMA"
CAT_SISTEMA=$(create_category "⚙️ SISTEMA")
create_channel "sistema" "Logs, crons, status do OpenClaw" "$CAT_SISTEMA"

echo ""
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ OASIS Discord configurado com sucesso!${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo ""
echo "  9 agentes · 10 categorias · 11 canais criados"
echo ""
echo "  Próximo passo: inicie o OpenClaw e vá para #geral"
echo "  O agente PARZIVAL vai se apresentar e iniciar o onboarding."
echo ""
