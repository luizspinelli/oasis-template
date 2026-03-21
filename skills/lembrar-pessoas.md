---
name: lembrar-pessoas
description: Monitora pessoas importantes — datas, último contato, ações pendentes
agents: [SHOTO]
tools: [memory]
command: /familia
---

# Skill: lembrar-pessoas
**Agente:** SHOTO 🤝
**Comando:** `/familia`, `/data-especial`

## O que faz
Mantém o radar das pessoas importantes — datas especiais, quando foi o último contato, o que precisa de atenção. Shoto nunca deixa uma data importante passar despercebida.

## Como usar
```
/familia
/familia [pessoa específica]
/data-especial [data ou nome]
```

## Protocolo

### 1. Mapear pessoas próximas
Fontes de contexto:
- `USER.md` → seções Parceiro(a), Família & Pets, Datas Importantes, Amigos
- `memory/` → histórico de interações e programas passados
- Calendário via `gerenciar-agenda` → eventos futuros

### 2. Verificar datas próximas
- Aniversários nos próximos 30 dias
- Datas do relacionamento (namoro, casamento)
- Comemorações recorrentes
- Priorizar por proximidade temporal

### 3. Verificar contato recente
- Há quanto tempo não fala com cada pessoa importante?
- Regras de cadência:
  - **Parceiro(a):** diário (não precisa monitorar)
  - **Família próxima:** semanal a quinzenal
  - **Amigos próximos:** mensal
  - **Família extendida:** trimestral ou em datas especiais
- Se passou muito tempo: sugerir ação proativa

### 4. Sugerir ação
Tipos de ação por contexto:
- **Data se aproximando:** Planejar com antecedência (presente, programa, mensagem)
- **Faz tempo sem contato:** Mensagem espontânea, ligação, convite
- **Pessoa passando por momento difícil:** Mensagem de apoio, visita
- **Data especial chegou:** Parabenizar, surpreender

## Tipos de lembrete

| Tipo | Quando | Ação sugerida |
|------|--------|--------------|
| 🎂 Aniversário | 1 semana antes | Pensar presente, planejar programa |
| 💍 Data de relacionamento | 2 semanas antes | Planejamento especial com parceiro(a) |
| 📞 Contato ausente | Quando cadência quebra | Mensagem, ligação, convite |
| 🎁 Presente necessário | Conforme budget (validar com OG) | Sugestão baseada em preferências |
| 💌 Momento espontâneo | Quando alguém precisa de apoio | Mensagem genuína e simples |

## Formato de saída

### `/familia` (visão geral)
```
🤝 Radar de Pessoas — [mês atual]

📅 Datas próximas:
  ⏰ [DD/MM] (em X dias) — 🎂 [Nome] — [ação sugerida]
  ⏰ [DD/MM] (em X dias) — 💍 [Evento] — [ação sugerida]

📞 Faz tempo que não fala:
  ⚠️ [Nome] — último contato: ~[X semanas] atrás
  ⚠️ [Nome] — último contato: ~[X meses] atrás

✅ Em dia:
  [Nome] — falou recentemente
  [Nome] — encontro marcado para [data]
```

### `/familia [pessoa]` (foco em uma pessoa)
```
🤝 [Nome da pessoa]

📋 Relação: [parentesco/amizade]
🎂 Aniversário: [data]
📞 Último contato: [quando, contexto]
📝 Notas: [coisas relevantes — momento de vida, assuntos pendentes]

💡 Sugestão: [ação baseada no contexto]
```

## Registro
Após consulta, atualizar em `memory/YYYY-MM-DD.md`:
```
- Radar pessoas: [datas próximas identificadas] | [contatos ausentes sinalizados]
- Ação combinada: [o que o usuário decidiu fazer]
```

## Handoffs
- Planejar encontro → **planejar-encontro** (mesma skill SHOTO)
- Agendar lembrete no calendário → **ART3MIS** (gerenciar-agenda)
- Custo de presente/programa → **OG**
- Sugestão de programa/atividade → **HALLIDAY**
- Impacto emocional de relacionamento → **KIRA**

---

_Skill para: SHOTO. Sem credenciais externas — usa USER.md e memory/._
