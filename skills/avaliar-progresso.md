---
name: avaliar-progresso
description: Avaliar progresso nos estudos — o que foi estudado, lacunas, próximos passos
agents: [ANORAK]
tools: [memory, exec]
---

# Skill: Avaliar Progresso (Estudos)

Sistema para avaliar progresso nos estudos — rastrear o que foi aprendido, identificar lacunas, planejar próximos passos.

## Quando usar

-  quer revisar progresso em um tema (AWS, Kubernetes, etc)
- Verificar se está no ritmo do roadmap
- Identificar lacunas de conhecimento
- Planejar ajustes no plano de estudo
- Preparação antes de certificação/entrevista

## Contexto de 

- **Disponibilidade:** 2h/semana para estudo
- **Formas de aprendizado:** Vídeos, labs, leitura, hands-on
- **Plano ativo:** AWS Cloud Practitioner (em andamento)
- **Memory:** Notas de estudo em `memory/`

## Como Executar

### Comando: `/progresso [tema]`

Avaliar progresso em um tema de estudo:

```bash
/progresso aws-cloud-practitioner
/progresso kubernetes
/progresso node-typescript
```

### Processo de Avaliação

1. **Ler notas de estudo** em `memory/estudo-[tema]-YYYY-MM-DD.md`
2. **Contabilizar:** horas, tópicos cobertos, labs completados
3. **Comparar com roadmap:** está no ritmo?
4. **Identificar lacunas:** o que faltou?
5. **Propor ações:** próximos passos claros

### Exemplo: AWS Cloud Practitioner

```
📊 Avaliação Progresso: AWS Cloud Practitioner
═════════════════════════════════════════════════

📅 Período: Semana 1-4 (28 dias)
⏱️ Tempo dedicado: 8h (meta: 8h) ✅

🎯 Roadmap Status:
  Semana 1-2: Cloud Concepts (✅ Completo)
  Semana 3-4: Security (✅ Completo)
  Semana 5-6: Technology (⏳ Em andamento)
  Semana 7: Billing (⏸️ Não iniciou)
  Semana 8: Review (⏸️ Não iniciou)

✅ O que foi aprendido:
  ✅ Cloud Concepts:
     - EC2, S3, RDS basics
     - Regiões, AZs, Edge Locations
     - Pricing basics (free tier)
     - Quiz 1: 82% ✅

  ✅ Security:
     - IAM users/roles/policies
     - Security Groups, NACLs
     - Encryption concepts
     - Quiz 2: 78% ✅

  ⏳ Technology (Parcial):
     - Compute: EC2, Lambda (entendi)
     - Storage: S3, EBS (entendi)
     - Database: RDS basics (entendi)
     - Networking: VPC (começou, não terminou)

📚 Labs Completados:
  ✅ Lab 1: EC2 (criar, conectar, terminar)
  ✅ Lab 2: S3 (bucket, upload, bucket policy)
  ✅ Lab 3: IAM (user, role, policy)
  ✅ Lab 4: Security Group (regras inbound/outbound)
  ⏳ Lab 5: VPC (criou, mas não terminou setup)

🔍 Análise de Lacunas:
  🟡 VPC: Precisa completar setup (subnets, routing)
  🟡 DynamoDB: Viu vídeo, mas não fez lab
  🟡 Lambda: Viu vídeo, precisa fazer lab
  🟡 Pricing: Não estudou ainda

📊 Pontos Fortes:
  ✅ EC2 e S3: Domínio bom
  ✅ IAM: Entendimento sólido
  ✅ Ritmo: Mantendo 2h/semana consistente

⚠️ Pontos Fracos:
  🟡 Networking (VPC): Complexo, precisa mais tempo
  🟡 Memorização: Muitos detalhes de pricing
  🟡 Labs: Começando labs, precisa fazer mais

💡 Diagnóstico:
  Estilo de aprendizado: Prático (labs) > Teórico (vídeos)
  Recomendação: Fazer mais labs antes de video (hands-on first)

🔧 Ajustes Recomendados:
  1. Semana 5: Focar em Labs (não só vídeos)
  2. VPC: Dedicar 2h extra para entender bem
  3. Pricing: Estudar próxima semana com exercícios
  4. Ritmo: Está OK (no prazo)

📈 Projeção:
  ✅ Pronto para mock exam: Semana 8 (on-track)
  ✅ Pronto para prova: Semana 9
  🎯 Data recomendada: [DATA + 7 dias]

✨ Confiança: ⭐⭐⭐ (3/5) — OK, mas precisa mais labs

📝 Próximos Passos:
  [ ] Completar Lab 5: VPC setup
  [ ] Fazer Lab 6: DynamoDB
  [ ] Fazer Lab 7: Lambda function
  [ ] Quiz Security (retry, objetivo >85%)
  [ ] Começar Pricing (próxima semana)
```

### Avaliação Detalhada por Tópico

**Comando:** `/progresso-detalhe [tema] [topico]`

```bash
/progresso-detalhe aws-cloud-practitioner ec2
```

**Resposta:**

```
🔍 Progresso Detalhado: EC2
═════════════════════════════

📊 Status:
  Compreensão: ⭐⭐⭐⭐ (4/5) — Bom
  Prática: ⭐⭐⭐ (3/5) — Razoável
  Confiança: ⭐⭐⭐ (3/5) — OK

📚 O que foi estudado:
  ✅ Tipos de instância (t2, m5, c5)
  ✅ Criação/terminação de instância
  ✅ Security groups
  ✅ Elastic IP
  ⏳ Auto-scaling (apenas teórico)
  ❌ Launch templates (não estudou)

🧪 Labs:
  ✅ Lab 1: Criar instância (SSH, terminar)
  ⏳ Lab 2: Security group (apenas inbound)
  ❌ Lab 3: Auto-scaling (não fez)

🔍 Questionário (10 perguntas):
  Acertos: 8/10 (80%) ✅
  Erros comuns:
    • T2 unlimited pricing (confundiu)
    • Diferença t2 vs m5 (precisa revisar)

📖 Materiais:
  ✅ Udemy: Video 1-3 assistidos
  ❌ AWS docs: EC2 user guide (não leu)
  ⏳ Udemy: Advanced EC2 (próximo)

💡 Diagnóstico:
  • Compreensão básica sólida
  • Prática pode melhorar (fazer mais labs)
  • Auto-scaling: conceitual, precisa lab

🔧 Ajustes:
  [ ] Revisar t2 unlimited pricing
  [ ] Fazer Lab 3: Auto-scaling
  [ ] Ler AWS docs: Instance types
  [ ] Retry quiz (objetivo: 90%)

⏱️ Tempo investido: 3.5h
   Tempo recomendado: 3h (OK, um pouco acima)
```

## Avaliação de Confiança Pré-Prova

**Comando:** `/progresso-confianca [tema]`

```bash
/progresso-confianca aws-cloud-practitioner
```

**Resposta:**

```
🎯 Avaliação de Confiança: Pronto para Prova?
═════════════════════════════════════════════════

📊 Checklist de Preparação:
  ✅ Completou todos capítulos? SIM
  ✅ Fez todos labs? NÃO (85%)
  ✅ Passou em todos quizzes >80%? NÃO (1 quiz 78%)
  ✅ Fez mock exam? NÃO (próxima semana)
  ✅ Confortável com tópicos fracos? PARCIAL

🎯 Confiança Geral: ⭐⭐⭐ (60%) — Precisando de mais

📈 Recomendação:
  🟡 AGUARDE 1-2 SEMANAS antes de agendar prova

📋 Antes de Agendar:
  [ ] Completar todos labs
  [ ] Retry quizzes fracos (objetivo >85%)
  [ ] Fazer mock exam (objetivo >85%)
  [ ] Revisar tópicos onde errou >2x no quiz

⏰ Estimativa:
  • 1 semana: Labs + quiz retries
  • 1 semana: Mock exam + review
  • Data recomendada: [DATA + 14 dias]

✨ Quando alcançar:
  ✅ Todos labs feitos
  ✅ Todos quizzes >85%
  ✅ Mock exam >85%
  → PRONTO PARA PROVA! 🚀
```

## Histórico de Progresso

Sistema mantém histórico em `memory/progresso-[tema].md`:

```
# Progresso: AWS Cloud Practitioner

## Semana 1-2 (Cloud Concepts)
- Data: 2026-03-01 a 2026-03-14
- Status: ✅ Completo
- Horas: 4h
- Quiz: 82%
- Labs: 2/2

## Semana 3-4 (Security)
- Data: 2026-03-15 a 2026-03-28
- Status: ✅ Completo
- Horas: 4h
- Quiz: 78% → Retry: 85% ✅
- Labs: 2/2

[Continue...]
```

## Formato de Resposta

Toda avaliação segue:

```
📊 Avaliação Progresso: [Tema]
═════════════════════════════════

📅 Período: [datas]
⏱️ Horas dedicadas: [X]h (meta: [X]h)
🎯 Progresso roadmap: [%]

✅ O que foi aprendido:
[tópicos completados]

⏳ Em andamento:
[tópicos parciais]

❌ Lacunas:
[tópicos faltando]

📈 Análise:
[diagnóstico]

🔧 Próximos Passos:
[ações claras]

✨ Confiança:
[avaliação 1-5 stars]
```

## Boas Práticas

- **Revisar semanal:** Todo domingo
- **Documentar:** Notas após cada estudo
- **Labs é crucial:** Não só vídeos/leitura
- **Retry em falhas:** Quando <80% em quiz
- **Honesto consigo mesmo:** Não disfarçar lacunas
- **Ajustar plano:** Se atrasado, rebalancear

## Exemplo Completo

```
📋 Avaliação Completa — AWS Cloud Practitioner
═══════════════════════════════════════════════════

Semana: 1-4 (28 dias)
Ritmo: 2h/semana (meta ✅)

🎯 Status Geral: ⏳ Em bom ritmo (66% completo)

Tópicos:
  Cloud Concepts: ✅ 100%
  Security: ✅ 100%
  Technology: ⏳ 50% (VPC pending)
  Billing: ❌ 0%
  Review: ❌ 0%

Próxima meta: Semana 5-6, completar Technology + Billing
Prova recomendada: Semana 9 (8 dias)

Mantendo ritmo? ✅ SIM, no prazo!
```

---

_Skill para: ANORAK. Memory: `memory/progresso-[tema].md`, `memory/estudo-[tema]-YYYY-MM-DD.md`._
