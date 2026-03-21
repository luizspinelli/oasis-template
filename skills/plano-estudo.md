---
name: plano-estudo
description: Criar roadmaps e planos de estudo estruturados
agents: [ANORAK]
tools: [web_search, exec]
---

# Skill: Plano de Estudo

Estrutura para criar planos de estudos progressivos, realistas e com milestones claros.

## Quando usar

- Usuário quer aprender novo tópico
- Quer preparar para certificação
- Quer estruturar auto-estudo
- Quer revisar progresso de aprendizado

## Processo de Planejamento

### Fase 1: Diagnóstico

Entender contexto antes de montar roadmap:

- [ ] **Objetivo claro:** O que exatamente quer dominar?
- [ ] **Por quê:** Carreira? Hobby? Necessidade profissional?
- [ ] **Contexto atual:** O que já sabe sobre o tema?
- [ ] **Tempo disponível:** Quanto tempo/semana pode dedicar?
- [ ] **Timeline:** Quando quer estar pronto? (3 meses? 1 ano?)
- [ ] **Estilo:** Lê livro? Assiste vídeo? Pratica?

### Fase 2: Mapa de Conhecimento

Estruturar em camadas (do simples ao complexo):

**Exemplo: AWS Solutions Architect**

```
🔴 FUNDAMENTOS (Semanas 1-2)
  - O que é cloud? (AWS vs Azure vs GCP)
  - Modelos de serviço (IaaS, PaaS, SaaS)
  - Conceitos: regiões, AZs, VPCs

🟡 INTERMEDIÁRIO (Semanas 3-6)
  - EC2: instâncias, tipos, auto-scaling
  - RDS: bancos relacionais, replicação
  - S3: storage, buckets, politicas
  - VPC: subnets, security groups, NACLs

🟢 AVANÇADO (Semanas 7-8)
  - Load balancers (ALB, NLB)
  - Auto-scaling groups
  - CloudFront CDN
  - Route 53 DNS

🔵 EXAME (Semana 9)
  - Practice exams x3
  - Weak points review
  - Pronto para SA Associate
```

### Fase 3: Recursos & Cronograma

Listar materiais e tempo estimado:

```
📚 RECURSO: A Cloud Guru
   ⏱️ Duração: 25 horas (5 semanas, 5h/semana)
   ✅ Cobre: Fundamentos + Intermediário
   💰 Custo: [verificar site]

📖 RECURSO: AWS Whitepapers (oficial)
   ⏱️ Duração: 10 horas (leitura)
   ✅ Cobre: Conceitos avançados
   💰 Custo: Grátis

🧪 RECURSO: Practice Exams (Examtopics)
   ⏱️ Duração: 8 horas (3 exames)
   ✅ Cobre: Validação antes do real
   💰 Custo: [verificar site]
```

### Fase 4: Estrutura Semanal

Template para semana de estudo:

```
SEMANA 3: EC2 Fundamentals

🎯 Objetivo: Entender EC2, tipos de instância, pricing

📅 Segunda (2h):
  - A Cloud Guru: EC2 intro (1h)
  - Anotações em notion (30min)
  - Mão na massa: criar instância (30min)

📅 Quarta (2h):
  - A Cloud Guru: Instance types (1h)
  - Lab: T2 vs M5 performance test (1h)

📅 Sexta (1h):
  - Revisar anotações (30min)
  - Quiz de EC2 (30min)

📊 Checkpoint:
  - [ ] Entendi tipos de instância?
  - [ ] Sei diferenciar T2 vs M5?
  - [ ] Consegui criar/deletar instância?
```

### Fase 5: Validação & Progresso

Checar compreensão regularmente:

- **Quizzes:** Ao final de cada tópico
- **Labs prático:** Aplicar em caso real
- **Ensina alguém:** Melhor forma de validar compreensão
- **Weak points:** Revisar áreas onde errou >1 vez

## Exemplo: AWS Certification Roadmap

```
📚 OBJETIVO: AWS Solutions Architect Associate
⏰ TIMELINE: 9 semanas
🎯 INÍCIO: [Data]
🎓 EXAME: [Data + 8 semanas]

SEMANA 1-2: Fundamentos
  - Conceitos cloud + AWS basics
  - Recurso: A Cloud Guru (5h)
  - Checkpoint: Quiz 80%+

SEMANA 3-4: Compute & Storage
  - EC2, S3, EBS
  - Recurso: A Cloud Guru (8h)
  - Lab: Criar app 3-tier

SEMANA 5-6: Networking & Database
  - VPC, RDS, Route 53
  - Recurso: AWS Whitepapers (6h)
  - Lab: VPC + RDS em HA

SEMANA 7-8: Advanced Topics
  - Auto-scaling, CloudFront, Lambda
  - Recurso: Examtopics (6h)
  - Practice exam #1

SEMANA 9: Review & Exame
  - Weak points (4h)
  - Practice exam #2 #3
  - Exame no fim da semana
```

## Notas Críticas

- **Não sinta pressa.** Aprender bem leva tempo — aceite isto
- **Pratica > teoria.** 30% vídeo, 70% hands-on (especialmente tech)
- **Ativa recall.** Sem olhar anotações, tente responder perguntas
- **Ensina alguém.** Achar uma pessoa e explicar = validação máxima
- **Review periódico.** Cada semana, revise semana anterior (spaced repetition)

---

_Skill para agentes: ANORAK. Consultar `memory/estudos-atual.md` para cursos em progresso._
