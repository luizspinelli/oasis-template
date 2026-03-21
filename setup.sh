#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo ""
echo "╔══════════════════════════════════════╗"
echo "║       OASIS — Setup Automatizado     ║"
echo "╚══════════════════════════════════════╝"
echo ""

# 1. Node.js
echo -e "${YELLOW}[1/5] Verificando pré-requisitos...${NC}"
if ! command -v node &> /dev/null; then
  echo -e "${RED}Node.js não encontrado. Instale: https://nodejs.org${NC}"
  exit 1
fi
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo -e "${RED}Node.js 18+ necessário. Versão atual: $(node -v)${NC}"
  exit 1
fi
echo -e "${GREEN}✅ Node.js $(node -v)${NC}"

# 2. OpenClaw
echo -e "${YELLOW}[2/5] Verificando OpenClaw...${NC}"
if ! command -v openclaw &> /dev/null; then
  echo "Instalando OpenClaw..."
  npm install -g openclaw
fi
echo -e "${GREEN}✅ OpenClaw instalado${NC}"

# 3. Coletar dados
echo ""
echo -e "${YELLOW}[3/5] Configuração — Dados obrigatórios${NC}"
echo ""
echo "Para criar um bot Discord:"
echo "  1. Acesse: https://discord.com/developers/applications"
echo "  2. New Application → copie o Application ID (Client ID)"
echo "  3. Bot → Reset Token → copie o token"
echo "  4. Em 'Bot → Privileged Gateway Intents':"
echo "     ✓ MESSAGE CONTENT INTENT"
echo "     ✓ SERVER MEMBERS INTENT"
echo ""
read -p "Application ID (Client ID): " CLIENT_ID
if [ -z "$CLIENT_ID" ] || ! [[ "$CLIENT_ID" =~ ^[0-9]+$ ]]; then
  echo -e "${RED}❌ Client ID inválido — deve conter apenas números${NC}"
  exit 1
fi

read -p "Discord Bot Token: " DISCORD_TOKEN
if [ -z "$DISCORD_TOKEN" ]; then
  echo -e "${RED}❌ Bot Token é obrigatório${NC}"
  exit 1
fi

read -p "Discord Server ID (Guild ID): " GUILD_ID
if [ -z "$GUILD_ID" ] || ! [[ "$GUILD_ID" =~ ^[0-9]+$ ]]; then
  echo -e "${RED}❌ Guild ID inválido — deve conter apenas números${NC}"
  exit 1
fi

echo ""
echo "Para obter seu User ID: Discord → Configurações → Avançado → Modo Dev ON → clique no seu nome → Copy ID"
read -p "Seu Discord User ID: " USER_ID
if [ -z "$USER_ID" ] || ! [[ "$USER_ID" =~ ^[0-9]+$ ]]; then
  echo -e "${RED}❌ User ID inválido — deve conter apenas números${NC}"
  exit 1
fi

echo ""
echo "ID do canal #sistema (para heartbeat do bot — pode preencher depois):"
echo "  Ative o Modo Dev no Discord → clique com botão direito no canal → Copy Channel ID"
read -p "Channel ID do #sistema (Enter para pular): " SISTEMA_CHANNEL_ID

echo ""
read -p "Seu nome: " USER_NAME
read -p "Seu email: " USER_EMAIL
read -p "Timezone (ex: America/Sao_Paulo): " TIMEZONE
TIMEZONE=${TIMEZONE:-America/Sao_Paulo}


echo ""
echo -e "${YELLOW}[4/5] Integrações opcionais${NC}"
echo ""
echo -e "${BLUE}OpenAI API Key${NC} — habilita memory search semântico (embeddings) e transcrição de áudio (Whisper)"
echo "  Obtenha em: https://platform.openai.com/api-keys"
read -p "OpenAI API Key (Enter para pular): " OPENAI_API_KEY
echo ""

echo -e "${BLUE}Brave Search API Key${NC} — habilita pesquisa web em tempo real"
echo "  Obtenha em: https://api.search.brave.com (2.000 buscas/mês grátis)"
read -p "Brave Search API Key (Enter para pular): " BRAVE_API_KEY
echo ""

# 5. Configurar workspace
echo ""
echo -e "${YELLOW}[5/5] Configurando workspace...${NC}"
WORKSPACE="$HOME/.openclaw/workspace"
mkdir -p "$WORKSPACE"/{agents,channels,context,memory,scripts,skills}

# Copiar TODOS os arquivos do framework
cp -r agents/ "$WORKSPACE/agents/"
cp -r channels/ "$WORKSPACE/channels/"
# Remover arquivo de template — não é um canal funcional
rm -f "$WORKSPACE/channels/exemplo.md"
cp -r context/ "$WORKSPACE/context/"
cp -r skills/ "$WORKSPACE/skills/"
cp SOUL.md AGENTS.md MEMORY.md HEARTBEAT.md BOOTSTRAP.md "$WORKSPACE/"
cp scripts/generate-config.js "$WORKSPACE/scripts/"

# Copiar USER.md template completo e preencher dados básicos
cp USER.md "$WORKSPACE/USER.md"
# Substituir placeholders com dados coletados
sed -i "s|\[Seu Nome\]|$USER_NAME|g" "$WORKSPACE/USER.md"
sed -i "s|\[seu-email@dominio.com\]|$USER_EMAIL|g" "$WORKSPACE/USER.md"
sed -i "s|\[UTC offset\] (ex: UTC-3)|$TIMEZONE|g" "$WORKSPACE/USER.md"

# Gerar openclaw.json
# Montar argumentos
GENERATE_ARGS="--token $DISCORD_TOKEN --guild $GUILD_ID --user $USER_ID --workspace $WORKSPACE --timezone $TIMEZONE"
[ -n "$OPENAI_API_KEY" ] && GENERATE_ARGS="$GENERATE_ARGS --openai $OPENAI_API_KEY"
[ -n "$BRAVE_API_KEY" ] && GENERATE_ARGS="$GENERATE_ARGS --brave $BRAVE_API_KEY"
[ -n "$SISTEMA_CHANNEL_ID" ] && GENERATE_ARGS="$GENERATE_ARGS --sistema $SISTEMA_CHANNEL_ID"

if ! node "$WORKSPACE/scripts/generate-config.js" $GENERATE_ARGS; then
  echo -e "${RED}❌ Falha ao gerar openclaw.json${NC}"
  exit 1
fi

echo ""
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║         ✅ OASIS Configurado!        ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""
echo "  Workspace: $WORKSPACE"
echo ""
echo "  O que foi instalado:"
echo "    ✓ 9 agentes (agents/)"
echo "    ✓ 11 canais (channels/)"
echo "    ✓ 33 skills (skills/)"
echo "    ✓ Contextos e ferramentas (context/)"
echo "    ✓ USER.md com seu perfil básico"
echo "    ✓ BOOTSTRAP.md para onboarding guiado"
echo "    ✓ openclaw.json em ~/.openclaw/"
echo ""
# Gerar URL de convite do bot
# Permissões: View Channels (1024) + Send Messages (2048) + Read Message History (65536)
#            + Embed Links (16384) + Attach Files (32768) + Use Slash Commands (2147483648)
BOT_PERMISSIONS=2147599424
INVITE_URL="https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=${BOT_PERMISSIONS}&scope=bot"

echo "  Adicione o bot ao seu servidor Discord:"
echo -e "  ${GREEN}${INVITE_URL}${NC}"
echo ""
echo "  Próximos passos:"
echo "    1. Abra a URL acima no navegador e adicione o bot ao servidor"
echo "    2. Configure a API Key da Anthropic (obrigatório antes de iniciar):"
echo "       export ANTHROPIC_API_KEY=\"sk-ant-...\""
echo "       Obtenha em: https://console.anthropic.com/settings/keys"
echo ""
echo "    3. Execute: openclaw gateway start"
echo "    4. Vá para #geral no Discord"
echo "    5. PARZIVAL vai se apresentar e conduzir o onboarding"
echo "    6. (Opcional) Rode: bash scripts/setup-discord.sh"
echo "       para criar a estrutura de canais automaticamente"
echo "    7. (Opcional) Instale as automações periódicas (crons):"
echo "       node scripts/setup-crons.js --all"
echo "       Para notificações no Discord: node scripts/setup-crons.js --all --sistema <CHANNEL_ID>"
echo "       Veja docs/crons.md para mais detalhes."
echo ""
