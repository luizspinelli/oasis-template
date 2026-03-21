---
name: resumir-conteudo
description: Resumir artigo, vídeo, livro ou documentação técnica
agents: [ANORAK]
tools: [web_fetch, web_search]
---

# Skill: Resumir Conteúdo

Sistema para resumir artigos, vídeos, livros ou documentação técnica — extraindo pontos-chave, aplicação prática e o que aprofundar.

## Quando usar

-  encontrou um artigo interessante e quer entender rápido
- Quer resumo de um vídeo técnico
- Precisa ler documentação extensa e quer o essencial
- Quer saber se vale a pena investir tempo em um recurso

## Como Executar

### Comando: `/resumo [url ou título]`

Resumir conteúdo (URL ou pesquisar por título):

```bash
/resumo https://example.com/article
/resumo "Monorepo Best Practices"
/resumo "Clean Code"
```

### Opção 1: URL (Web Fetch)

```bash
/resumo https://martinfowler.com/articles/microservices.html
```

**Processo:**
1. Fetch conteúdo da URL
2. Extrair texto principal
3. Estruturar resumo
4. Oferecer insights

**Resposta:**

```
📄 Resumo: Microservices Architecture
═════════════════════════════════════

🔗 Fonte: martinfowler.com
👤 Autor: Martin Fowler
📅 Data: 2014
⏱️ Tempo leitura original: ~15 minutos

📌 Resumo Executivo (1 parágrafo):
Microservices é um estilo arquitetural que estrutura uma aplicação
como um conjunto de serviços pequenos, independentes, que comunicam
via HTTP/APIs. Cada serviço é deployável, escalável e mantível
independentemente.

🎯 Pontos Principais:
  1. Decomposição: quebra monólito em serviços menores
  2. Autonomia: cada serviço tem DB próprio
  3. Resilência: falha em um serviço ≠ falha total
  4. Escalabilidade: escala apenas o serviço que precisa
  5. Complexidade operacional: mais serviços = mais overhead

✅ Quando usar:
  • Equipe grande (>20 devs)
  • Necessidade de escalar independentemente
  • Domínios bem definidos
  • Stack heterogênea

❌ Quando evitar:
  • Startup pequena (overhead demais)
  • Domínios acoplados
  • Team não tem maturidade operacional

💡 Aplicação Prática (para ):
  • [Projeto]: Considerar serviço de "pedidos" independente?
  • Separar "estoque" de "pagamento" em 2 serviços?
  • Evitar para projetos pequenos (overhead demais)

🔍 Conceitos para Aprofundar:
  • Service discovery
  • Circuit breakers
  • Distributed transactions
  • API Gateway pattern

📚 Próximos Passos:
  [ ] Ler artigo completo (15 min)
  [ ] Assistir vídeo: "Microservices Patterns" (Udemy)
  [ ] Fazer lab: Deploy 2 serviços Node.js com Docker Compose
```

### Opção 2: Título (Web Search + Fetch)

```bash
/resumo "Kubernetes in Production"
```

**Processo:**
1. Buscar título na web
2. Encontrar artigos top
3. Fazer fetch dos melhores
4. Consolidar resumo

**Resposta:**

```
📚 Resumo: Kubernetes in Production
═══════════════════════════════════

🔍 Pesquisa: Encontrados 342 resultados
   Top 3 selecionados para análise

🎯 Consenso entre fontes:
  1. Resource management: CPU/memory limits essencial
  2. Health checks: liveness + readiness probes
  3. Monitoring: Prometheus + Grafana
  4. Logging: ELK stack ou similar
  5. Security: RBAC, network policies

✅ Práticas Recomendadas:
  • Usar namespaces (isolamento)
  • ConfigMaps para configuração
  • Secrets para credenciais
  • Persistent volumes para dados
  • HPA (auto-scaling) for load

❌ Armadilhas Comuns:
  • Não definir resource requests/limits
  • Health checks inadequados
  • Logging não estruturado
  • Secrets em ambiente variables

💡 Para [Projeto]:
  • Migrar para K8s? (considerar complexidade)
  • Atualmente: Docker Compose OK
  • Quando crescer: K8s seria benefício

📚 Recursos Recomendados:
  ✅ "Kubernetes in Action" (livro)
  ✅ Linux Academy: Kubernetes essentials
  ✅ Hands-on: Kubernetes documentation labs
```

### Opção 3: Livro (Sumário + Insights)

```bash
/resumo "Clean Code"
```

**Resposta:**

```
📖 Resumo: Clean Code (Robert C. Martin)
═════════════════════════════════════════

📊 Informações:
  • Páginas: 464
  • Ano: 2008
  • Tempo leitura: ~15-20 horas
  • Dificuldade: ⭐⭐ (intermediário)
  • Relevância para : ⭐⭐⭐⭐ (ALTA)

🎯 Capítulos Principais:
  1. Names — Nomes claros, significativos
  2. Functions — Funções pequenas, propósito único
  3. Comments — Código fala por si
  4. Formatting — Consistência visual
  5. Error Handling — Exceções, não códigos de erro
  6. Boundaries — Separação de responsabilidades
  7. Testing — TDD, testes unitários
  8. Classes — SRP, LOW, DIP
  9. Systems — Arquitetura limpa

💡 Principais Conceitos:
  ✅ Clean Code = fácil de ler, entender, manter
  ✅ Nomes importam: use nouns/verbs clara
  ✅ Funções: <20 linhas, 1 responsabilidade
  ✅ DRY: não repita código
  ✅ SOLID: princípios de design

✅ Para Aplicar AGORA ():
  1. Revisar nomes em projeto [Projeto]
  2. Refatorar funções >30 linhas
  3. Adicionar testes para funções críticas
  4. Code review com time focando "limpeza"

❌ Críticas:
  • Alguns exemplos em Java ( usa Node.js)
  • Muito prescritivo (nem sempre 100% aplicável)
  • Longa (não é rápido de ler)

✨ Vale a Pena Ler?
  ✅ SIM — Top 5 livros de código para dev sênior
  📝 Quando? Semana que vem, 2-3h por semana

🔗 Alternativa Rápida:
  • Resumo do livro em 30 min (Medium article)
  • Aplicar princípios agora, ler depois (prático)
```

## Estrutura de Resposta

Toda resposta segue este template:

```
📄/📖/🎥 Título
═════════════════════

[Metadados: fonte, autor, data, tempo]

📌 Resumo Executivo (1 parágrafo)

🎯 Pontos Principais (5-7 bullets)

✅ Quando usar / Aplicável?

❌ Limitações / Quando evitar

💡 Aplicação Prática para 

🔍 Conceitos para Aprofundar

📚 Próximos Passos

⏱️ Tempo investimento
```

## Dicas de Resumo Rápido

Para artigos longos (>20min), oferece "versão rápida":

```
⚡ Versão Rápida (5 minutos):

Só 3 coisas que você precisa saber:

1️⃣ [Conceito principal]
2️⃣ [Como aplicar]
3️⃣ [Por que importa]

[Decisão]: Vale ler completo? [SIM|NÃO|TALVEZ]
```

## Comando Especial: `/resumo-livro [titulo]`

Para livros, oferece opções:

```
/resumo-livro "Clean Code"
```

**Resposta:**

```
📖 Clean Code — 3 Opções de Resumo
═════════════════════════════════════

1️⃣ RESUMO RÁPIDO (5 min)
   Apenas 3-5 pontos principais
   
2️⃣ RESUMO MÉDIO (15 min)
   Todos capítulos, insights
   [← Você está aqui]
   
3️⃣ RESUMO COMPLETO (30 min)
   Capítulo por capítulo, exemplos, críticas
   
Qual você quer?
```

## Exemplo Completo

```
🎥 Resumo: Event Sourcing (YouTube)
══════════════════════════════════════

🔗 Fonte: https://youtube.com/...
👤 Presenter: Greg Young
⏱️ Duração: 1h (resumo: 10 min)
📅 Ano: 2016

📌 O que é:
Event Sourcing é um padrão onde você armazena todas as mudanças
de estado como uma sequência imutável de eventos, em vez de
apenas o estado final.

🎯 Conceitos:
  1. Event Store: log de todos os eventos
  2. Event Handler: processa eventos
  3. Snapshots: cache de estado para performance
  4. Event Versioning: evoluir schema de eventos

✅ Quando usar:
  • Auditoria completa necessária
  • Temporal queries ("estado em tal data?")
  • Debugging: replay events
  • Integração com múltiplos sistemas

❌ Complexidade:
  • Eventual consistency (eventual)
  • Mais discos (armazena tudo)
  • Mental model diferente

💡 Para [Projeto]:
  • Pedidos: event sourcing seria ideal!
  • Auditoria, replay, integração externa
  • Considerar para próxima iteração

📚 Aprofundar:
  • Ler: "Building Event-Driven Microservices"
  • Lab: Event sourcing com Node.js + PostgreSQL
```

---

_Skill para: ANORAK. Tools: web_fetch (URLs), web_search (títulos/tópicos)._
