# CUSTOM.md — Como Estender o OASIS

Este guia cobre como criar novos agentes, canais e skills para personalizar o OASIS ao seu contexto.

---

## Parte 1: Guia de Extensão

### Criar Novo Agente

**Quando:** Você tem um pilar de vida ou domínio que os 9 agentes padrão não cobrem (ex: jurídico, nutrição clínica, investimentos avançados, espiritualidade).

**Passos:**

1. **Copiar o template** (Parte 2 deste arquivo) para `agents/NOME.md`
   ```bash
   cp agents/CUSTOM.md agents/MARCO.md   # exemplo: agente jurídico
   ```

2. **Definir a persona** no frontmatter YAML:
   ```yaml
   name: MARCO
   role: Consultor Jurídico
   area: Direito & Compliance
   tone: Formal, preciso, sem ambiguidade
   channels: [juridico, contratos]
   skills: [revisar-contrato, analisar-clausula]
   commands: [/contrato, /clausula, /risco]
   handoff:
     financeiro: OG
     tecnico: AECH
     pessoal: ART3MIS
   ```

3. **Escrever a persona completa** — seguir o padrão dos agentes existentes:
   - Seção `🧠 Quem sou` — 2-3 parágrafos definindo o agente
   - Seção `🎯 Contexto do Usuário` — o que sabe sobre o usuário na sua área
   - Seção `⚡ Comandos` — tabela de comandos
   - Seção `🤝 Handoffs` — quando delegar e para quem
   - Seção `💬 Tom & Estilo` — exemplos de fala
   - Seção `📝 O que sempre registrar` — guia de persistência em `context/eventos.md`

4. **Definir skills** — criar arquivos em `skills/` (ver "Criar Nova Skill" abaixo)

5. **Registrar no PROTOCOL.md** — adicionar o agente em 3 lugares:
   - Tabela "Os 9 Agentes" (agora 10)
   - Tabela "Handoffs Automáticos" (quando delegar para ele)
   - Tabela "Mapa Completo de Canais" (seus canais)

6. **Criar canais Discord** — um canal por domínio:
   ```bash
   # Manual: criar no Discord
   # Ou: adicionar ao setup-discord.sh
   ```

7. **Criar arquivo de canal** — `channels/nome.md` (ver "Criar Novo Canal" abaixo)

8. **Atualizar "O Time OASIS"** — em cada agente existente, a tabela do time mostra todos os agentes. Adicionar o novo agente na tabela de cada arquivo em `agents/`.

---

### Criar Novo Canal

**Quando:** Um agente existente precisa de um canal extra (ex: AECH precisa de `#devops` separado de `#dev`).

**Passos:**

1. **Copiar o template:**
   ```bash
   cp channels/exemplo.md channels/devops.md
   ```

2. **Preencher o arquivo** — definir:
   - Qual agente responde neste canal
   - Escopo do canal (o que entra e o que não entra)
   - Contexto adicional que o agente precisa ao responder aqui

3. **Criar o canal no Discord:**
   - Manual: criar canal de texto no servidor
   - Automático: adicionar ao `scripts/setup-discord.sh`

4. **Registrar no PROTOCOL.md** — adicionar na tabela "Mapa Completo de Canais":
   ```
   | #devops | AECH | 🔧 TRABALHO & TECH |
   ```

5. **Registrar no agente** — adicionar na seção `📱 Canais & Responsabilidades` do agente correspondente.

---

### Criar Nova Skill

**Quando:** Um agente precisa de uma capacidade nova (ex: AECH precisa de `/deploy` para verificar status de deploy).

**Passos:**

1. **Copiar o template:**
   ```bash
   cp skills/CUSTOM.md skills/verificar-deploy.md
   ```

2. **Definir o frontmatter:**
   ```yaml
   name: verificar-deploy
   agent: AECH
   command: /deploy
   triggers: [deploy, status, produção, staging]
   ```

3. **Escrever a lógica** — o corpo da skill define:
   - O que o agente faz quando o comando é invocado
   - Quais ferramentas usa (APIs, scripts, etc.)
   - Formato de saída esperado
   - Erros comuns e como lidar

4. **Registrar no agente** — adicionar na tabela `⚡ Comandos` do agente:
   ```
   | `/deploy [serviço]` | Verifica status de deploy ou inicia novo |
   ```

5. **Registrar no frontmatter do agente** — adicionar na lista `skills:` e `commands:`.

---

### Remover um Agente Padrão

Se um dos 9 agentes não faz sentido para você (ex: não precisa de ANORAK porque não estuda):

1. **Não deletar o arquivo** — apenas ignore
2. **Ou:** Remover de `PROTOCOL.md` (tabela de agentes e mapa de canais)
3. **Redirecionar handoffs** — se outros agentes delegam para ele, apontar para outro agente ou para PARZIVAL
4. **Remover canal Discord** — opcional, pode deixar inativo

---

### Checklist de Consistência

Após qualquer mudança na estrutura do OASIS, verificar:

- [ ] Agente registrado em `agents/PROTOCOL.md` (tabela + mapa de canais)?
- [ ] Canal criado no Discord?
- [ ] Arquivo `channels/nome.md` existe?
- [ ] Skills referenciadas existem em `skills/`?
- [ ] Handoffs fazem sentido (sem ciclos — A→B→A)?
- [ ] Seção "O Time OASIS" atualizada nos outros agentes?
- [ ] `USER.md` tem os campos que o novo agente referencia?
- [ ] Comandos estão na tabela do agente?
- [ ] Frontmatter YAML está completo (name, role, channels, skills, commands, handoff)?

---

## Parte 2: Template de Agente

_Copie tudo abaixo para criar um novo agente._

```markdown
---
name: NOME_DO_AGENTE
role: Função/Cargo do Agente
area: Área de Especialidade
tone: Como ele fala (ex: Formal e preciso / Empático e motivador / Direto e técnico)
channels: [canal-1, canal-2]
skills: [skill-1, skill-2]
commands: [/cmd1, /cmd2]
handoff:
  financeiro: OG
  tecnico: AECH
  pessoal: ART3MIS
---

# [NOME_DO_AGENTE].md — Persona & Contexto

**Nome:** [Nome]
**Pronomes:** [pronomes]
**Emoji:** [emoji]
**Tom:** [descrição do tom]

## Apresentação
"[Como o agente se apresenta ao assumir um canal]"

---

## 🗺️ O Time OASIS

[Tabela com todos os agentes — copiar de qualquer agente existente e adicionar o novo]

---

## ⏱️ Recarregamento por Tempo

> Se a última mensagem foi há mais de 1h, recarregar:
> `context/INDEX.md` → `USER.md` → `context/bigpicture.md` → `context/tools.md`

---

## 📚 Antes de tudo — Carregar o Index

> **Sempre** consultar `context/INDEX.md` antes de responder qualquer assunto complexo.

---

## ⚙️ Antes de qualquer ação com ferramentas

> **Sempre** ler `context/tools.md` antes de usar qualquer integração.

---

## 🌍 Big Picture

> 📄 Carregar: `context/bigpicture.md`

---

## 🧠 Quem sou

[Descreva a persona em 2-3 parágrafos]

**Especialidades:**
- [Especialidade 1]
- [Especialidade 2]
- [Especialidade 3]

**Não atuo em:**
- [O que este agente NÃO faz]

---

## 🎯 Contexto do Usuário

[O que este agente sabe sobre o usuário na sua área]

**Situação atual:**
- [Item 1]
- [Item 2]

**Metas:**
- [Meta 1]

---

## ⚡ Comandos

| Comando | O que faz |
|---|---|
| `/cmd1 [arg]` | Descrição do comando 1 |
| `/cmd2 [arg]` | Descrição do comando 2 |

---

## 🤝 Handoffs

| Situação | Vai para |
|---|---|
| Impacto financeiro | **OG** |
| Impacto técnico | **AECH** |
| Impacto na agenda | **ART3MIS** |

---

## 💬 Tom & Estilo

**Como fala:** [Descrição do tom]

**Exemplos:**
> "[Exemplo 1]"
> "[Exemplo 2]"

**Nunca faz:**
- [Comportamento a evitar]

---

## 📝 O que sempre registrar

Quando detecta algo relevante, escreve em `context/eventos.md`:
- [Tipo de evento 1]
- [Tipo de evento 2]

**Formato:**
| [data] [hora] | AGENTE | DESTINATÁRIOS | Descrição do evento | ⏳ |

---

## 📱 Canais

| Canal | Foco |
|---|---|
| `#canal-1` | [Descrição] |
| `#canal-2` | [Descrição] |
```

---

_Este guia faz parte do framework OASIS. Consulte o README.md para visão geral do sistema._
