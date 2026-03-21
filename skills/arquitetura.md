---
name: arquitetura
description: Discutir e documentar decisões de arquitetura via ADR
agents: [AECH]
tools: [web_search, exec]
---

# Skill: Arquitetura

Sistema para documentar decisões de arquitetura — Architecture Decision Records (ADR) com contexto, decisão e consequências.

## Quando usar

- Escolher entre abordagens técnicas para novo serviço/feature
- Documentar decisão de arquitetura para referência futura
- Pesquisar padrões e benchmarks antes de decisão
- Revisar ADR anterior e avaliar se ainda é válida

## Stack Principal de 

- **Linguagem:** Node.js + TypeScript
- **Frontend:** React, Angular
- **Backend:** APIs REST/GraphQL, microserviços
- **Banco:** PostgreSQL, Redis (cache)
- **Cloud:** AWS (Lambda, EC2, RDS, S3)
- **Containerização:** Docker, Kubernetes
- **Padrões:** SOLID, DDD, Event-Driven

## Como Executar

### Comando: `/arquitetura [serviço]`

Iniciar discussão de arquitetura para novo serviço:

```bash
/arquitetura gateway-integradores
/arquitetura api-pedidos-v2
```

### 1. Pesquisar Padrões

Antes de decidir, pesquisar:

```bash
# Buscar padrões relevantes
web_search "microserviços API gateway Node.js TypeScript"
web_search "event-driven architecture PostgreSQL Redis comparison"
```

**Resultado esperado:** Artigos, benchmarks, exemplos de implementação

### 2. Estrutura de ADR (Architecture Decision Record)

Cada decisão deve ser documentada em `architecture/adr/ADR-NNN-[titulo].md`:

```markdown
# ADR-001: Usar API Gateway em vez de Load Balancer

**Data:** 2026-03-12
**Status:** ✅ Aceito
**Autores:** [Responsáveis técnicos]
**Afetados:** [Projeto A], [Projeto B], [Projeto C]

## Contexto

Temos [N] projetos ([Projeto A], [Projeto B], ...) com
múltiplos serviços backend. Atualmente usando load balancer NGINX.
Problema: não conseguimos fazer rate limiting, autenticação centralizada,
nem versionamento de API.

## Decisão

Implementar **API Gateway** (AWS API Gateway + Node.js middleware).

Opções consideradas:
1. Kong (OSS) — complexo, overhead operacional
2. AWS API Gateway — vendor lock-in, mas integração fácil
3. Node.js middleware customizado — controle total, mas manutenção
4. Apigee — caro, enterprise

**Escolhida:** AWS API Gateway + middleware Node.js customizado

## Consequências

✅ **Positivas:**
  • Autenticação centralizada (OAuth2, JWT)
  • Rate limiting por cliente/projeto
  • Logging e monitoring built-in
  • Suporta múltiplas versões de API
  • Integração com AWS (Lambda, DynamoDB)

❌ **Negativas:**
  • Custo AWS (estimado +$200/mês)
  • Vendor lock-in (AWS)
  • Latência adicional (~50ms)
  • Overhead de código customizado

🔧 **Mitigation:**
  • Cache em Redis para reduzir latência
  • Usar IAC (Terraform) para evitar lock-in
  • Benchmarks mensais de custo

## Implementação

**Timeline:**
- Semana 1-2: Prototipo Gateway em Lambda
- Semana 3-4: Integração com 2 serviços ([Projeto A], [Projeto B])
- Semana 5+: Rollout gradual para outros projetos

**Responsável:** [Responsável técnico]

## Referências

- AWS API Gateway: https://docs.aws.amazon.com/apigateway
- Kong vs AWS: https://konghq.com/blog/...
- Benchmarks de latência: https://...
```

### 3. Exemplo de Decisão

```
🏗️ ADR-002: PostgreSQL vs MongoDB para novo serviço
═════════════════════════════════════════════════════

📋 Contexto:
  Novo serviço de eventos para [Projeto A] (pedidos, entregas, devoluções).
  Precisa armazenar >100k documentos/dia, queries rápidas, relatórios complexos.

🎯 Opções:
  1. PostgreSQL (relacional) — queries complexas, ACID, conhecido
  2. MongoDB (NoSQL) — escalável, flexible schema, mas queries N+1
  3. DynamoDB (managed NoSQL) — AWS-native, serverless
  4. Firestore (Firebase) — managed, mas lock-in Google

📌 Decisão: PostgreSQL + Redis
  • Dados transacionais em PG (ACID é crítico)
  • Cache em Redis (eventos recentes acessados frequentemente)
  • JSON columns em PG para flexibilidade

✅ Bônus: Time já conhece PG, menos custo que DynamoDB

⚠️ Risk: Escalabilidade (sharding futuro?)
   Mitigation: Monitoramento de queries lentas, índices agressivos
```

### 4. Revisão de ADR

**Comando:** `/adr-review [numero]`

Avaliar se ADR anterior ainda é válida:

```bash
/adr-review 001  # Revisar ADR-001
```

**Checklist:**
- [ ] Contexto ainda é válido?
- [ ] Consequências previstas aconteceram?
- [ ] Algo mudou (requisitos, tecnologia)?
- [ ] Precisa refatorar ou aceitar trade-off?

## Checklist de Decisão

Antes de committar numa arquitetura:

- [ ] **Requisitos claros?** Escalabilidade, latência, custo?
- [ ] **Pesquisou alternativas?** Pelo menos 3 opções?
- [ ] **Time conhece a tecnologia?** Ou precisa treinar?
- [ ] **Custo estimado?** AWS, operacional, manutenção?
- [ ] **Documentado?** ADR com contexto, decisão, consequências?
- [ ] **Trade-offs aceitos?** Time concorda com prós/contras?
- [ ] **Plan B?** Como refatorar se der ruim?

## Boas Práticas

- **Tomar decisão junto com time:** não ser ditador
- **Documentar o PORQUÊ:** não só o O QUÊ
- **Considerar não-funcionais:** latência, escalabilidade, custo, manutenção
- **Revisar ADR periodicamente:** a cada 6 meses
- **Aprender com erros:** se ADR foi ruim, documentar por quê

## Exemplo de Resposta

```
🔍 Análise de Arquitetura: Novo serviço de Webhooks
═════════════════════════════════════════════════════

📌 Problema:
  [Projeto A] precisa enviar notificações em tempo real para integradores

🎯 Opções analisadas:
  1. Lambda + SQS + EventBridge
  2. Node.js service + Bull (Redis queue)
  3. Apache Kafka (overkill)
  4. RabbitMQ

📊 Comparação:
  ┌─────────────┬──────────┬──────────┬─────────────┐
  │             │ Lambda   │ Bull     │ RabbitMQ    │
  ├─────────────┼──────────┼──────────┼─────────────┤
  │ Custo       │ Baixo    │ Médio    │ Médio       │
  │ Latência    │ >1s      │ <100ms   │ <100ms      │
  │ Confiab.    │ Excelente│ Boa      │ Excelente   │
  │ Manutenção  │ Baixa    │ Média    │ Alta        │
  └─────────────┴──────────┴──────────┴─────────────┘

💡 Recomendação: Node.js + Bull (Redis)
  ✅ Latência baixa
  ✅ Team já conhece Node.js
  ✅ Custo moderado
  ⚠️ Escalabilidade: 1000 req/s (suficiente hoje)

🔧 ADR será documentado em: architecture/adr/ADR-XXX.md
```

---

_Skill para: AECH. Stack: Node.js + TypeScript + AWS + PostgreSQL. Padrões: SOLID, DDD, Event-Driven._
