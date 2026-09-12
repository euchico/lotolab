# Roadmap – LotoLab 

## Visão geral

LotoLab é uma aplicação web para consulta, análise estatística e exploração das loterias oficiais brasileiras.

Objetivos:
* Estudo de Análise de Software;
* Desenvolvimento Full Stack (.NET e Angular);

* portfólio;
* uso pessoal;
* aprendizado de arquitetura;
* SQL Server;
* ADO.NET;
* ETL;
* Angular;
* testes;
* Docker;
* CI/CD.

A evolução será incremental.

A primeira modalidade implementada será a **Lotofácil**.

---

# Princípio

Etapas de desenvolvimento:

```text
• Conceito
↓
• Implementação
↓
• Teste
↓
• Revisão
↓
• Refatoração
```

O objetivo não é implementar rapidamente todas as funcionalidades.

O objetivo é construir uma primeira modalidade completa e compreender as decisões técnicas utilizadas.

---

# v0.1 – Fundação

## Objetivo

Criar a estrutura inicial da aplicação e comprovar a comunicação entre frontend e backend.

## Backend

Criar:

```text
LotoLab.Domain
LotoLab.Application
LotoLab.Infrastructure
LotoLab.Api
```

Configurar referências entre projetos.

Estrutura conceitual:

```text
Domain
  ↑
Application

Domain + Application
  ↑
Infrastructure

Application + Infrastructure
  ↑
Api
```

## Frontend

Criar:

```text
LotoLab.Web
```

Utilizar:

* Angular 22;
* Angular Material.

## Primeiro endpoint

Criar:

```http
GET /api/health
```

Exemplo:

```json
{
  "status": "ok"
}
```

## Integração

Angular deverá chamar:

```http
GET /api/health
```

e apresentar o resultado.

## Aprendizado

Estudar:

* Solution;
* projetos .NET;
* referências entre projetos;
* Clean Architecture;
* Web API;
* Controllers;
* HTTP;
* Angular;
* services;
* Dependency Injection;
* CORS.

## Critério de conclusão

```text
Angular
   ↓
ASP.NET Core
   ↓
GET /api/health
   ↓
Resposta exibida no frontend
```

---

# v0.2 — SQL Server e ADO.NET

## Objetivo

Adicionar persistência utilizando SQL Server sem ORM.

## Implementar

* SQL Server local;
* connection string;
* `Microsoft.Data.SqlClient`;
* conexão através de ADO.NET;
* primeiro script SQL;
* primeira tabela;
* primeiro repository;
* primeiro SELECT;
* primeiro INSERT.

## Banco

Criar estrutura para scripts:

```text
database/
└── scripts/
    └── 001_initial_schema.sql
```

## Conceitos

Estudar:

* banco relacional;
* tabelas;
* PK;
* FK;
* constraints;
* índices;
* connection string;
* SqlConnection;
* SqlCommand;
* SqlParameter;
* SqlDataReader;
* transações;
* SQL Injection;
* Repository.

## Critério de conclusão

API consegue:

```text
conectar
   ↓
inserir
   ↓
consultar
```

dados no SQL Server sem Entity Framework.

---

# v0.3 — Modelagem inicial da Lotofácil

## Objetivo

Introduzir o primeiro conceito real do domínio.

## Modelar

Inicialmente:

```text
Lottery
Contest
DrawNumber
```

ou estruturas equivalentes após análise do arquivo oficial da Caixa.

A modelagem final deve ser definida somente após observar os dados reais.

## Investigar

Identificar quais informações oficiais estão disponíveis:

* número do concurso;
* data;
* dezenas;
* arrecadação;
* ganhadores;
* rateios;
* acumulados;
* próximo prêmio;
* local;
* município/UF dos ganhadores;
* outros campos relevantes.

## Regra

Não criar estruturas genéricas para todas as loterias antes de entender a Lotofácil.

## Critério de conclusão

O domínio consegue representar corretamente um concurso real da Lotofácil.

---

# v0.4 — ETL histórico

## Objetivo

Carregar o histórico oficial da Lotofácil no SQL Server.

## Pipeline

```text
Extract
   ↓
Transform
   ↓
Validate
   ↓
Load
```

## Extract

Ler o arquivo oficial disponibilizado pela Caixa.

## Transform

Converter dados externos para modelos internos.

## Validate

Validar pelo menos:

* concurso válido;
* data válida;
* quantidade correta de dezenas;
* dezenas dentro do intervalo permitido;
* ausência de dezenas duplicadas;
* campos obrigatórios.

## Load

Persistir concursos no SQL Server.

## Idempotência

A execução repetida não deve duplicar concursos.

## Resultado esperado

Exemplo:

```text
Importação Lotofácil

Lidos:       3.775
Válidos:     3.775
Inseridos:   3.775
Ignorados:   0
Rejeitados:  0

Status: concluído
```

## Conceitos

Estudar:

* ETL;
* parsing;
* validação;
* transformação;
* idempotência;
* transações;
* integração externa;
* processamento em lote.

---

# v0.5 — Consulta de concursos pela API

## Objetivo

Expor o histórico através da Web API.

## Endpoints iniciais

Exemplo:

```http
GET /api/lotofacil/contests
```

```http
GET /api/lotofacil/contests/{number}
```

Posteriormente:

```http
GET /api/lotofacil/contests/latest
```

## Implementar

* Repository;
* Application service/use case;
* DTO;
* Controller;
* paginação quando necessária.

## Conceitos

Estudar:

* DTO;
* Repository;
* use case;
* Dependency Injection;
* REST;
* status HTTP;
* paginação.

## Critério de conclusão

Um concurso real armazenado no banco pode ser consultado pela API.

---

# v0.6 — Histórico no Angular

## Objetivo

Consumir a API real no frontend.

## Criar

Página:

```text
Resultados
```

Apresentar:

* concurso;
* data;
* dezenas;
* prêmio;
* situação;
* detalhes disponíveis.

## Componentes

Utilizar Angular Material quando apropriado:

* MatTable;
* MatPaginator;
* MatButton;
* MatIcon;
* MatProgressSpinner;
* MatTooltip.

## Estados

Implementar:

* carregando;
* sucesso;
* vazio;
* erro.

## Critério de conclusão

Usuário consegue navegar pelos concursos da Lotofácil no navegador.

---

# v0.7 — Detalhes do concurso

## Objetivo

Criar uma tela dedicada a um concurso.

## Exibir

Conforme dados disponíveis:

* número;
* data;
* dezenas;
* ordem do sorteio;
* arrecadação;
* ganhadores;
* rateios;
* acumulado;
* próximo prêmio;
* localização dos ganhadores.

## URL sugerida

```text
/lotofacil/concursos/3500
```

## Critério de conclusão

Cada concurso possui uma página navegável e compartilhável.

---

# v0.8 — Atualização manual

## Objetivo

Permitir atualização de novos concursos sem importação completa.

## Fonte

Estudar endpoint JSON atualmente utilizado pelo portal da Caixa.

## Fluxo

```text
Usuário
   ↓
Atualizar resultados
   ↓
API
   ↓
Fonte oficial Caixa
   ↓
Transform
   ↓
Validate
   ↓
SQL Server
```

## Regra

Não executar atualização automática nesta etapa.

## Resiliência

Tratar:

* indisponibilidade;
* resposta inválida;
* mudança no JSON;
* concurso já existente;
* timeout.

## Critério de conclusão

Um novo concurso pode ser importado manualmente.

---

# v0.9 — Dashboard

## Objetivo

Criar a primeira visão analítica do sistema.

## Apresentar

* último concurso;
* dezenas;
* data;
* prêmio;
* quantidade de ganhadores;
* próximo concurso;
* resumo estatístico básico.

## Angular Material

Possíveis componentes:

* cards;
* toolbar;
* chips;
* icons;
* buttons;
* tooltips.

Cards devem ser usados apenas quando ajudarem a organização.

---

# v0.10 — Análise básica de concursos

## Objetivo

Implementar as primeiras regras estatísticas.

## Calcular

### Pares e ímpares

Exemplo:

```text
8 ímpares
7 pares
```

### Soma

Exemplo:

```text
Soma = 196
```

### Números primos

### Sequências

Exemplo:

```text
03 04 05
```

### Repetição

Comparar com concurso anterior.

Exemplo:

```text
9 dezenas repetidas
```

## Local

Regras puramente matemáticas devem preferencialmente ficar no Domain.

## Testes

Criar testes unitários para cada regra.

---

# v0.11 — Estatísticas das dezenas

## Objetivo

Calcular estatísticas históricas.

## Frequência

Exemplo:

```text
dezena 01 → 2.118 ocorrências
```

## Percentual

```text
dezena 01 → 56,1%
```

## Atraso

Quantidade de concursos desde a última ocorrência.

## Filtros

Permitir futuramente:

```text
últimos 10
últimos 25
últimos 50
últimos 100
todos
```

## Importante

Frequência e atraso são estatísticas históricas.

Não apresentar esses dados como previsão.

---

# v0.12 — Analisar jogo

## Objetivo

Permitir que o usuário informe uma combinação.

## Lotofácil

Exibir grade:

```text
01 02 03 04 05
06 07 08 09 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
```

Usuário seleciona suas dezenas.

## Analisar

* pares;
* ímpares;
* soma;
* primos;
* sequências;
* distribuição;
* repetição em relação ao último concurso;
* outros indicadores adicionados posteriormente.

## Critério

A análise não precisa ser persistida nesta versão.

---

# v0.13 — Probabilidades

## Objetivo

Ensinar e calcular a probabilidade matemática das apostas.

## Implementar

* combinação;
* número total de combinações;
* probabilidade da aposta simples;
* probabilidades para apostas com mais dezenas;
* faixas de premiação quando aplicável.

## Conceitos

Estudar:

```text
fatorial
combinação
C(n, k)
espaço amostral
probabilidade
```

## Interface

Exemplo:

```text
Chance:
1 em X
```

Apresentar explicação do cálculo.

---

# v0.14 — Gerador simples

## Objetivo

Gerar jogos aleatórios válidos.

## Primeira versão

Usuário informa:

```text
quantidade de jogos
```

Sistema retorna combinações válidas.

## Regra

A geração deve utilizar aleatoriedade apropriada para o objetivo do projeto.

Não utilizar estatísticas históricas ainda.

---

# v0.15 — Gerador condicionado

## Objetivo

Adicionar critérios escolhidos pelo usuário.

## Exemplos

Gerar jogo com:

```text
7 a 9 números ímpares
```

ou:

```text
soma entre 180 e 220
```

ou:

```text
3 a 6 números primos
```

ou:

```text
evitar sequências maiores que 4
```

## Princípio

As condições servem para filtrar o espaço de combinações.

Não afirmar que elas aumentam a probabilidade matemática de uma combinação individual.

---

# v0.16 — Comparação de jogos

## Objetivo

Permitir comparar múltiplas combinações.

## Comparar

* dezenas iguais;
* diferenças;
* soma;
* pares;
* ímpares;
* primos;
* sequências;
* critérios estatísticos.

---

# v0.17 — Exportações

## Possibilidades

* CSV;
* JSON;
* Excel.

Começar pelo formato mais simples.

Não adicionar bibliotecas de Excel até existir necessidade concreta.

---

# v0.18 — Docker

## Objetivo

Containerizar a aplicação para aprendizado e padronização.

## Backend

Criar Dockerfile para API.

## SQL Server

Utilizar imagem oficial do SQL Server para desenvolvimento.

## Docker Compose

Ambiente futuro:

```text
LotoLab.Api
     ↓
SQL Server
```

Angular pode continuar rodando separadamente durante desenvolvimento inicialmente.

## Conceitos

Estudar:

* imagem;
* container;
* porta;
* network;
* volume;
* environment variable;
* build context.

---

# v0.19 — CI

## Objetivo

Criar o primeiro pipeline no GitHub Actions.

## Backend

```text
restore
   ↓
build
   ↓
test
```

## Frontend

```text
npm ci
   ↓
build
   ↓
test
```

quando os testes estiverem configurados.

## Regra

CI deve validar o projeto.

Deploy automático ficará para etapa posterior.

---

# v0.20 — Deploy

## Objetivo

Disponibilizar a aplicação publicamente.

Arquitetura possível:

```text
Angular
   ↓
Vercel
```

```text
ASP.NET Core
   ↓
Render ou alternativa
```

```text
SQL Server
   ↓
Azure SQL ou alternativa compatível
```

## Configuração

Utilizar variáveis de ambiente para:

* connection strings;
* URLs;
* configurações específicas de ambiente.

Nunca versionar credenciais.

---

# v1.0 — Lotofácil

A versão 1.0 representa a primeira modalidade funcional do LotoLab.

## Meta mínima

* histórico oficial importado;
* consulta de concursos;
* detalhe do concurso;
* atualização manual;
* dashboard;
* análise básica;
* estatísticas;
* análise de jogo;
* probabilidades;
* gerador simples;
* gerador condicionado;
* frontend responsivo;
* API pública funcional;
* SQL Server;
* deploy;
* testes relevantes;
* CI básico.

A Lotofácil passa então a servir como referência arquitetural para as demais modalidades.

---

# Pós-v1.0 — Novas modalidades

Adicionar uma modalidade de cada vez.

Ordem possível:

```text
Mega-Sena
Quina
Dupla Sena
Lotomania
Timemania
Dia de Sorte
Super Sete
+Milionária
```

A ordem poderá mudar conforme interesse e complexidade.

---

# Refatoração para múltiplas modalidades

Somente após implementar uma segunda modalidade será possível identificar com mais segurança:

```text
o que realmente é comum
```

e:

```text
o que pertence especificamente a cada loteria
```

Esse será o momento adequado para avaliar abstrações compartilhadas.

Evitar desenhar essa generalização antecipadamente.

---

# Futuro — Fechamentos e desdobramentos

## Objetivo

Estudar ferramentas combinatórias mais avançadas.

Pode incluir:

* fechamentos;
* desdobramentos;
* cobertura de combinações;
* filtros combinatórios.

Essa etapa deve ser tratada separadamente das estatísticas históricas.

---

# Futuro — Usuários

Somente introduzir autenticação quando existirem funcionalidades que realmente precisem de identidade.

Possibilidades:

* jogos salvos;
* favoritos;
* estratégias;
* histórico;
* análises salvas.

Nessa etapa estudar:

* ASP.NET Core Identity;
* autenticação;
* autorização;
* JWT ou cookies;
* segurança.

Não antecipar essa infraestrutura.

---

# Futuro — Histórico de importações

Criar controle de execução do ETL.

Exemplo:

```text
ImportId
Source
Lottery
StartedAt
FinishedAt
RecordsRead
RecordsInserted
RecordsUpdated
RecordsRejected
Status
Error
```

Interface futura:

```text
Importação Lotofácil

Origem:      Caixa
Lidos:       3.775
Inseridos:   3.775
Rejeitados:  0
Status:      Concluído
```

---

# Futuro — Observabilidade

Conforme o projeto crescer, estudar:

* logging estruturado;
* métricas;
* health checks;
* tracing;
* monitoramento.

Não implementar infraestrutura avançada de observabilidade na fase inicial.

---

# Futuro — Testes de integração

Adicionar testes reais entre:

```text
Application
Infrastructure
SQL Server
```

quando repositories e ETL estiverem maduros.

Avaliar posteriormente ferramentas de containers para testes somente se houver benefício educacional claro.

---

# Definição de prioridade

Usar estas categorias:

## Obrigatório

Necessário para avançar para a etapa seguinte.

## Recomendável

Melhora qualidade ou aprendizado, mas não bloqueia o progresso.

## Opcional

Pode ser estudado futuramente.

---

# Regra de escopo

Antes de incluir uma nova funcionalidade:

```text
Ela é necessária para concluir a etapa atual?
```

Se não:

```text
registrar no roadmap
e não implementar agora.
```

---

# Meta principal

Antes de adicionar várias modalidades, concluir uma cadeia funcional completa:

```text
Fonte oficial da Caixa
        ↓
ETL
        ↓
SQL Server
        ↓
ADO.NET
        ↓
Application
        ↓
ASP.NET Core API
        ↓
Angular
        ↓
Usuário
```

Essa cadeia representa o principal objetivo técnico da primeira fase do LotoLab.
