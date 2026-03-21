---
name: roadmap-certificacao
description: Criar roadmap detalhado para uma certificação específica
agents: [ANORAK]
tools: [web_search, exec]
---

# Skill: Roadmap de Certificação

Sistema para criar roadmap detalhado para uma certificação — estruturado semana a semana, com recursos recomendados e marcos de avaliação.

## Quando usar

-  quer estudar para uma certificação (AWS, Kubernetes, etc)
- Estruturar plano de 3-6 meses
- Identificar recursos (cursos, livros, simulados)
- Acompanhar progresso e marcos de avaliação

## Contexto de 

- **Disponibilidade:** 2h/semana para estudo
- **Experiência:** Dev sênior, +5 anos, conhece cloud/arquitetura
- **Foco:** AWS Cloud Practitioner e Solutions Architect
- **Estilo:** Prático, labs hands-on (não só vídeos)

## Como Executar

### Comando: `/roadmap [certificacao]`

Criar roadmap para uma certificação:

```bash
/roadmap aws-cloud-practitioner
/roadmap aws-solutions-architect
/roadmap kubernetes
```

**Processo:**

1. **Pesquisar syllabus da certificação**
2. **Mapear tópicos**
3. **Estruturar em 8-12 semanas**
4. **Selecionar recursos**
5. **Definir marcos de avaliação**

### Exemplo: AWS Cloud Practitioner

```
🏆 Roadmap: AWS Certified Cloud Practitioner
═════════════════════════════════════════════

📊 Resumo:
  • Duração: 8 semanas
  • Tempo/semana: 2h
  • Hora de prova: 1h 30min
  • Taxa de aprovação: ~70%
  • Confiança: Alto (você sabe cloud basics)

📚 Syllabus (tópicos cobrados):
  □ Cloud Concepts (26%)
  □ Security & Compliance (25%)
  □ Technology (33%)
  □ Billing & Pricing (16%)

═══════════════════════════════════════════════

SEMANA 1-2: Cloud Concepts (4h)
────────────────────────────────

📚 Conteúdo:
  • O que é AWS? Região, AZ, Edge Locations
  • Modelo de pagamento (pay-as-you-go)
  • EC2 basics, S3, RDS
  • Shared Responsibility Model

📖 Recursos:
  ✅ [AWS Skill Builder] AWS Certified Cloud Practitioner
  ✅ [Udemy] Ultimate AWS Cloud Practitioner (Stephane Maarek)
  ✅ [A Cloud Guru] AWS Certified Cloud Practitioner

🧪 Prática:
  • Lab 1: Criar e configurar instância EC2
  • Lab 2: Criar bucket S3 e fazer upload
  • Lab 3: Database RDS (criar, conectar)

📝 Quiz:
  • AWS official practice exam (20 perguntas)
  • Meta: >75%

═══════════════════════════════════════════════

SEMANA 3-4: Security & Compliance (4h)
──────────────────────────────────────────

📚 Conteúdo:
  • IAM (Identity & Access Management)
  • Security Groups, NACLs
  • Encryption (at rest, in transit)
  • Compliance (HIPAA, SOC 2, PCI)
  • AWS Organizations

📖 Recursos:
  ✅ A Cloud Guru (IAM module)
  ✅ AWS official training (compliance)
  ✅ Medium: "IAM Best Practices"

🧪 Prática:
  • Lab 1: Criar usuário IAM com permissões
  • Lab 2: Security Group regras (inbound/outbound)
  • Lab 3: CloudTrail logging

📝 Quiz:
  • Practice exam (20 perguntas)
  • Meta: >80%

═══════════════════════════════════════════════

SEMANA 5-6: Technology (6h)
─────────────────────────────

📚 Conteúdo:
  • Compute: EC2, Lambda, ECS, Fargate
  • Networking: VPC, CloudFront, Route 53
  • Storage: S3, EBS, Glacier, EFS
  • Database: RDS, DynamoDB, ElastiCache
  • Messaging: SQS, SNS
  • Monitoring: CloudWatch

📖 Recursos:
  ✅ A Cloud Guru (comprehensive module)
  ✅ Linux Academy: AWS essentials
  ✅ Official AWS whitepapers (skim)

🧪 Prática:
  • Lab 1: VPC com subnets pública/privada
  • Lab 2: Lambda function + API Gateway
  • Lab 3: DynamoDB table + queries
  • Lab 4: CloudFront distribution

📝 Quiz:
  • Practice exam (30 perguntas)
  • Meta: >80%

═══════════════════════════════════════════════

SEMANA 7: Billing & Pricing (2h)
──────────────────────────────────

📚 Conteúdo:
  • EC2 pricing (on-demand, reserved, spot)
  • Storage pricing (S3, EBS)
  • Data transfer costs
  • AWS Cost Calculator
  • Budgets & Alarms

📖 Recursos:
  ✅ AWS Pricing page (oficial)
  ✅ A Cloud Guru (pricing module)

🧪 Exercícios:
  • Exercício 1: Calcular custo (3 EC2 + 100GB S3)
  • Exercício 2: Reserved instance savings

📝 Mini-quiz:
  • 15 perguntas
  • Meta: >80%

═══════════════════════════════════════════════

SEMANA 8: Review & Mock Exam (2h)
───────────────────────────────────

📚 Revisão:
  • Flash cards (Anki): todos tópicos
  • Resumo 1 página por tópico
  • Repassar labs

🧪 Mock Exam:
  • 65 perguntas (simulado oficial)
  • 90 minutos (como prova real)
  • Meta: >85%

📊 Diagnóstico:
  • Erros frequentes? Revisar tópico
  • Lacunas? Estudar mais semana 8
  • Confiante? Agendar prova!

═══════════════════════════════════════════════

🎯 Marcos de Avaliação:
  ✅ Semana 2: Cloud concepts (quiz >75%)
  ✅ Semana 4: Security (quiz >80%)
  ✅ Semana 6: Technology (quiz >80%)
  ✅ Semana 7: Pricing (quiz >80%)
  ✅ Semana 8: Mock exam >85% → Prova!

💡 Dica:
  • Fazer labs é crucial (não só vídeos)
  • Praticar com oficiais da AWS
  • Focar em tópicos que acerta <70% no quiz
  • Passar 1 dia antes da prova descansando (não estudar)

📝 Recursos:
  • Total: ~18-20h estudo + labs
  • Custo: Udemy (R$ 30-60) + AWS labs (grátis)
```

### Roadmap: AWS Solutions Architect (Associate)

```
🏆 Roadmap: AWS Solutions Architect Associate
═════════════════════════════════════════════════

📊 Resumo:
  • Duração: 12 semanas
  • Tempo/semana: 3h (mais denso)
  • Taxa de aprovação: ~65%
  • Dificuldade: ⭐⭐⭐ (vs Cloud Practitioner ⭐)

📚 Syllabus:
  □ Design Resilient Architectures (34%)
  □ Design Performant Architectures (24%)
  □ Design Secure Applications & Architectures (26%)
  □ Design Cost-Optimized Architectures (16%)

(Roadmap similar à Cloud Practitioner, mas com 12 semanas)

Semana 1-3: Resilient Architectures (9h)
Semana 4-6: Performance (9h)
Semana 7-9: Security (9h)
Semana 10-11: Cost Optimization (6h)
Semana 12: Review + Mock exam (3h)

Total: 36h estudo + labs
```

## Boas Práticas

- **Combinar aprendizagem:** Vídeo + labs + reading
- **Fazer labs hands-on:** Não só assistir videos
- **Praticar com exams oficiais:** Pelo menos 2 mock exams
- **Manter ritmo:** 2h/semana consistente > 10h uma vez por mês
- **Passar ANTES de estudar:** Estudar demais reduz confiança

## Exemplo Completo

```
🚀 Começando AWS Cloud Practitioner
════════════════════════════════════

1️⃣ Semana 1-2: Cloud Concepts
   • Assistir: Udemy Cloud Practitioner (seções 1-2)
   • Lab: EC2 + S3
   • Quiz: 20 perguntas (objetivo >75%)

2️⃣ Semana 3-4: Security
   • Assistir: A Cloud Guru IAM module
   • Lab: Usuário IAM, Security Groups
   • Quiz: 20 perguntas (objetivo >80%)

[Continue com roadmap...]

🎯 Objetivo Final: Passar em [DATA]
```

---

_Skill para: ANORAK. Certificações-alvo: AWS Cloud Practitioner, AWS Solutions Architect. Disponibilidade: 2h/semana._
