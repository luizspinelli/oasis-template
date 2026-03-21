---
name: pesquisar-web
description: Pesquisa na web em tempo real via Brave Search API
agents: [ART3MIS, AECH, OG, ANORAK, DAITO, KIRA, HALLIDAY, SHOTO, PARZIVAL]
tools: [web_search]
command: /buscar
---

# Skill: Pesquisar Web
**Agentes:** Todos (skill compartilhada)
**Comando:** `/buscar [query]`

## O que faz

Pesquisa informações atualizadas na web usando a Brave Search API. Qualquer agente pode usar quando precisa de dados em tempo real.

## Como usar

```
/buscar [query]
/buscar [query] [filtro: noticias, precos, eventos, docs]
```

## Protocolo

### 1. Formatar a query
- Adaptar a busca para resultados relevantes
- Adicionar contexto geográfico quando aplicável (cidade do usuário, de USER.md)
- Incluir ano atual para resultados recentes
- Usar inglês para buscas técnicas, português para buscas locais

### 2. Executar busca
- Usar a tool `web_search` com a query formatada
- API Key: configurada em `context/tools.md` (Brave Search)
- Se a API não estiver configurada, informar o usuário

### 3. Processar resultados
- Filtrar os **5 resultados mais relevantes**
- Priorizar fontes confiáveis e recentes
- Descartar resultados pagos/spam

### 4. Formatar resposta

```
🔍 Resultados para: "[query]"

1️⃣ **[Título]**
   🔗 [URL]
   📝 [Snippet/resumo em 1-2 linhas]

2️⃣ **[Título]**
   🔗 [URL]
   📝 [Snippet]

3️⃣ **[Título]**
   🔗 [URL]
   📝 [Snippet]

💡 Destaque: [qual resultado é mais relevante e por quê]
⚠️ [Se informação pode estar desatualizada, avisar]
```

## Casos de uso por agente

| Agente | Tipo de busca | Exemplo |
|--------|---------------|---------|
| **ART3MIS** | Eventos, agenda, viagem | `/buscar feriados 2026 brasil` |
| **AECH** | Docs, libs, stack overflow | `/buscar next.js app router migration guide` |
| **OG** | Cotações, taxas, investimentos | `/buscar taxa selic atual março 2026` |
| **ANORAK** | Cursos, certificações, materiais | `/buscar AWS SAA-C03 study guide 2026` |
| **DAITO** | Treinos, nutrição, suplementos | `/buscar treino hipertrofia push pull legs` |
| **KIRA** | Saúde mental, técnicas, artigos | `/buscar técnicas de respiração para ansiedade` |
| **HALLIDAY** | Shows, filmes, eventos culturais | `/buscar shows março 2026 [cidade]` |
| **SHOTO** | Restaurantes, presentes, programas | `/buscar restaurantes japoneses [cidade]` |
| **PARZIVAL** | Qualquer busca cross-domínio | `/buscar custo de vida [cidade] 2026` |

## Boas práticas

- **Busca local:** Sempre incluir cidade/região para resultados geolocalizados
- **Busca técnica:** Usar termos em inglês para documentação e código
- **Verificação:** Cruzar informações de múltiplas fontes quando crítico
- **Cache:** Se a mesma busca foi feita recentemente, usar resultado anterior
- **Privacidade:** Não buscar informações pessoais de terceiros

## Configuração

Requer Brave Search API key em `scripts/search-config.json`:
```json
{
  "api_key": "BSA_..."
}
```
Gerar em: brave.com/search/api (2.000 buscas/mês grátis)

## Handoffs

- Resultado financeiro relevante → **OG** (analisar impacto)
- Evento/show encontrado → **HALLIDAY** (recomendar) ou **ART3MIS** (agendar)
- Artigo técnico relevante → **ANORAK** (estudar) ou **AECH** (aplicar)

---

_Skill compartilhada por todos os agentes. Requer Brave Search API (context/tools.md)._
