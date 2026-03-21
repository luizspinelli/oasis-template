---
name: planejar-viagem
description: Checklist e processo estruturado de planejamento de viagem
agents: [ART3MIS]
tools: [web_search, web_fetch, exec]
---

# Skill: Planejar Viagem

Estrutura sistemática para planejar viagens desde o inicial até a partida.

## Quando usar

- Usuário quer planejar viagem nova
- Precisa fazer checklist pré-viagem
- Quer otimizar roteiro, hospedagem ou transporte

## Processo de Planejamento

### Fase 1: Visão Geral (1-2 semanas antes)

Fazer perguntas para estruturar a viagem:

1. **Destino(s):** Qual/quais lugares?
2. **Datas:** Entrada/saída, duração total?
3. **Viajantes:** Sozinho? Com parceira? Família?
4. **Budget:** Orçamento total + daily budget?
5. **Interesses:** Cultura? Natureza? Gastronomia? Shopping?
6. **Ritmo:** Relaxado vs lotado de atividades?

**Output:**
```
📍 VIAGEM: [Destino]
📅 [Data entrada] → [Data saída] ([N dias])
👥 Viajantes: [Lista]
💰 Budget: R$ [Total] / ~R$ [Daily]
🎯 Vibe: [Descrição]
```

### Fase 2: Infraestrutura (3-4 semanas antes)

1. **Voos**
   - Pesquisar passagens aéreas
   - Comparar preços (Skyscanner, Decolar, etc.)
   - Reservar com antecedência
   - Salvar confirmação

2. **Hospedagem**
   - Pesquisar Airbnb, hotels, hostels
   - Ler reviews (focar em limpeza + localização)
   - Confirmar check-in/out times
   - Reservar

3. **Transporte Local**
   - Como sair do aeroporto? (Uber, trem, taxi, shuttle)
   - Transporte interno? (metrô, ônibus, carro alugado)
   - Apps necessários (Google Maps, Uber, etc.)

4. **Documentação**
   - Passaporte válido? (mínimo 6 meses após retorno)
   - Visto necessário?
   - Seguro viagem?
   - Vacinas exigidas?

### Fase 3: Roteiro & Atividades (2 semanas antes)

1. **Pontos de interesse**
   - Pesquisar atrações principais
   - Museus, parques, monumentos
   - Restaurantes recomendados
   - Experiências locais

2. **Estruturar dias**
   - Dia 1: Chegada (descanso)
   - Dia 2-N: Atividades (não mais que 3-4 por dia)
   - Último dia: Repouso + volta ao hotel cedo

3. **Reservas antecipadas**
   - Museus/atrações com limite de visitantes (Anne Frank House, etc.)
   - Restaurantes high-end
   - Tours em grupo

### Fase 4: Preparação Final (1 semana antes)

1. **Documentação**
   - Imprimir ou salvar em PDF: voos, hospedagem, seguro
   - Screenshots de confirmações
   - Números de contato (embaixada, hotel, tour operators)

2. **Preparação física**
   - Mala: o que levar?
   - Moeda local: trocar antes ou sacar no destino?
   - Cartão de crédito international? (avisar banco)
   - Adaptador de tomada?
   - Medicamentos?

3. **Comunicação**
   - Avisar familiares sobre itinerário
   - Ativar plano internacional (celular) ou comprar chip local
   - Configurar mapas offline

4. **Listas de Checagem**
   - Documentos
   - Mala
   - Eletrônicos
   - Cuidados da casa (fechar janelas, desligar gás, etc.)

## Exemplos

**User:** "Quero planejar viagem para [destino] em [mês]"

**ART3MIS:**
1. Faz perguntas de fase 1
2. Monta visão geral
3. Estrutura checklist: voos → hospedagem → documentação → roteiro → mala
4. Acompanha cada fase semanalmente

---

**User:** "Me ajuda a montar roteiro de [N] dias em [destino]"

**ART3MIS:**
1. Pesquisa atrações top
2. Recomenda museulibro-estético (Anne Frank, Van Gogh, Rijksmuseum)
3. Sugere bairros (Jordaan, De Pijp)
4. Monta itinerário dia-a-dia
5. Lista restaurantes e cafés

## Ferramentas úteis

- **Voos:** Skyscanner, Decolar, Google Flights, Kayak
- **Hospedagem:** Airbnb, Booking.com, Trivago
- **Atividades:** GetYourGuide, Viator, ToursByLocals
- **Restaurantes:** Google Maps, TripAdvisor, Michelin
- **Documentos:** Google Drive (backup em nuvem)

## Notas

- Sempre fazer backup de reservas em nuvem
- Deixar itinerário com familiares
- Comparar ao menos 3 opções antes de decidir
- Budget: somar hospedagem + voos + comidas + atrações (com margem de 20%)

---

_Skill para agentes: ART3MIS. Consultar `USER.md` para viagens em andamento._
