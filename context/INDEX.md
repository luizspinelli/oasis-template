# INDEX — Mapa de Contextos

> Consulte antes de responder qualquer assunto complexo.
>
> Se o assunto está aqui, leia o arquivo antes de agir.

---

## Core — Carregue sempre (TIER 1)

| Assunto | Arquivo | Quando |
|---------|---------|--------|
| Personalidade do sistema | SOUL.md | Sempre |
| Dados do usuário | USER.md | Sempre |
| Visão geral da vida | context/bigpicture.md | Sempre (contexto cross-pilar) |
| Memória longa | MEMORY.md | Consultas históricas |
| Credenciais | context/tools.md | Antes de usar ferramentas |
| Eventos entre agentes | context/eventos.md | Início de cada sessão |

---

## Por Domínio — Carregue quando relevante (TIER 3)

| Domínio | Arquivo | Agente | Quando |
|---------|---------|--------|--------|
| Visão geral / Pendências | context/status.md | PARZIVAL | Qualquer decisão importante |

> **Nota:** Contextos específicos por domínio (financeiro, viagem, empresa, etc.) devem ser criados conforme necessário pelo usuário. Use `context/status.md` como template base.

---

## Canais → Agentes (TIER 2)

| Canal | Agente | Arquivo | Descrição |
|-------|--------|---------|-----------|
| #geral | PARZIVAL | channels/geral.md | Hub principal, orquestração |
| #basement | PARZIVAL + todos | channels/basement.md | Party mode (todos os agentes) |
| #art3mis | ART3MIS | channels/art3mis.md | Vida pessoal, rotina, agenda, viagens |
| #aech | AECH | channels/aech.md | Trabalho, tech, código, carreira |
| #financeiro | OG | channels/financeiro.md | Finanças, orçamento, dívidas |
| #estudos | ANORAK | channels/estudos.md | Aprendizado, certificações, livros |
| #fitness | DAITO | channels/fitness.md | Saúde física, treino, alimentação |
| #kira | KIRA | channels/kira.md | Saúde mental, bem-estar, estresse |
| #halliday | HALLIDAY | channels/halliday.md | Lazer, hobbies, entretenimento |
| #shoto | SHOTO | channels/shoto.md | Relacionamentos, família, social |
| #sistema | PARZIVAL | channels/sistema.md | Logs, crons, status do sistema |

> **Nota:** `#basement` e `#sistema` são opcionais. Você pode criar canais adicionais copiando `channels/exemplo.md`.

---

## Hierarquia de Carregamento

### Entrada em novo canal:
1. Ler `channels/<nome>.md` → saber qual agente responde
2. Ler `agents/[AGENTE].md` → adotar persona
3. Ler `context/bigpicture.md` → entender contexto geral do momento

### Antes de usar ferramentas:
1. Ler `context/tools.md` → buscar credenciais
2. Nunca improvisar tokens

### Início de sessão:
1. Ler `context/eventos.md` → verificar eventos `⏳` destinados ao agente
2. Processar eventos pendentes e marcar como `✅ lido`

### Dúvida sobre contexto geral:
1. Ler `context/bigpicture.md` → visão geral por pilar
2. Ler `context/status.md` → pendências e projetos
3. Ler `MEMORY.md` → decisões históricas

---

## Referência Rápida

**Não sabe qual agente chamar?**

| Assunto | Agente | Canal | Arquivo |
|---------|--------|-------|---------|
| Pessoal, agenda, rotina | ART3MIS | #art3mis | agents/ART3MIS.md |
| Trabalho, código, carreira | AECH | #dev | agents/AECH.md |
| Números, finanças, budget | OG | #financeiro | agents/OG.md |
| Estudos, certificações | ANORAK | #estudos | agents/ANORAK.md |
| Treino, nutrição, sono | DAITO | #fitness | agents/DAITO.md |
| Saúde mental, estresse | KIRA | #kira | agents/KIRA.md |
| Lazer, hobbies, programas | HALLIDAY | #halliday | agents/HALLIDAY.md |
| Relacionamentos, casal | SHOTO | #shoto | agents/SHOTO.md |
| Visão global, coordenação | PARZIVAL | #geral | agents/PARZIVAL.md |

---

## Atualizar Contexto Quando:

- Nova pendência surgir → adicionar em `context/status.md`
- Pendência resolvida → remover da lista
- Status de um projeto mudar → atualizar `context/status.md`
- Evento importante → adicionar em `USER.md` ou `memory/`
- Algo impacta outros agentes → escrever em `context/eventos.md`
- Mudança relevante em qualquer pilar → atualizar `context/bigpicture.md`

---

**Sempre:** SOUL.md + USER.md + context/bigpicture.md + context/eventos.md (verificar `⏳`)

Veja `AGENTS.md` para entender a hierarquia de tiers.
Veja `agents/PROTOCOL.md` para regras de handoff.
