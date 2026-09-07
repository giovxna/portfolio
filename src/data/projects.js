export const featuredProjects = [
  {
    id: 11,
    tag: 'React • Java',
    title: 'Travel Sisters',
    description:
      'Plataforma que conecta mulheres a empresas de vans de viagem, com motoristas e passageiras mulheres. Projeto em equipe onde atuei no front-end.',
    image: '/travel-sisters.png',
  },
  {
    id: 5,
    tag: 'IA • Educação',
    title: 'EducaLab',
    description:
      'Tutor virtual que adapta a explicação ao nível de quem pergunta. Feito na Imersão IA da Alura com o Google.',
    image: 'https://github.com/user-attachments/assets/a936540f-a123-40a2-ad18-80700a92e2f7',
  },
]

export const allProjects = [
  {
    id: 11,
    tag: 'React • Java',
    title: 'Travel Sisters',
    description:
      'Plataforma que conecta mulheres a empresas de vans de viagem, com motoristas e passageiras mulheres.',
    image: '/travel-sisters.png',
    repo: 'https://github.com/Travel-Sisters',
    size: 'large',
  },
  {
    id: 2,
    tag: 'Java • AWS',
    title: 'Qreate',
    description: 'API REST que gera QR Codes e armazena as imagens no S3.',
    image: null,
    imageFallback: 'Spring Boot + S3',
    repo: 'https://github.com/giovxna/qreate',
    size: 'small',
  },
  {
    id: 3,
    tag: 'C# • .NET',
    title: 'Employee CRUD',
    description: 'Gestão de funcionários em .NET, com camadas separadas e princípios SOLID.',
    image: null,
    imageFallback: '.NET em camadas',
    repo: 'https://github.com/giovxna/employee-crud',
    size: 'small',
  },
  {
    id: 4,
    tag: 'Fullstack • React',
    title: 'Eco.Info',
    description:
      'Plataforma de educação ambiental que transforma dado científico em conteúdo prático e acessível.',
    image: null,
    imageFallback: 'Educação ambiental',
    repo: 'https://github.com/giovxna/eco.info',
    size: 'large',
  },
  {
    id: 5,
    tag: 'IA • Educação',
    title: 'EducaLab',
    description:
      'Tutor virtual que adapta a explicação ao nível de quem pergunta. Feito na Imersão IA da Alura com o Google.',
    image: 'https://github.com/user-attachments/assets/a936540f-a123-40a2-ad18-80700a92e2f7',
    repo: 'https://github.com/giovxna/educa.lab',
    size: 'large',
  },
  {
    id: 6,
    tag: 'Java • Security',
    title: 'Posie',
    description: 'API em Spring com autenticação via JWT e Spring Security.',
    image: null,
    imageFallback: 'JWT + Spring Security',
    repo: 'https://github.com/giovxna/posie',
    size: 'small',
  },
  {
    id: 7,
    tag: 'Python • Dados',
    title: 'Case Economia',
    description:
      'Análise exploratória dos empréstimos públicos da União, procurando padrões e tendências nos dados.',
    image: null,
    imageFallback: 'Análise exploratória',
    repo: 'https://github.com/giovxna/case-economia',
    size: 'small',
  },
  {
    id: 8,
    tag: 'Saúde • Frontend',
    title: 'HealUs',
    description:
      'Plataforma de saúde preventiva com conteúdo sobre sono, autocuidado e hábitos saudáveis.',
    image: 'https://raw.githubusercontent.com/giovxna/heal-us/main/public/assets/images/capa-heal-us.png',
    repo: 'https://github.com/giovxna/heal-us',
    size: 'large',
  },
  {
    id: 9,
    tag: 'Java • MongoDB',
    title: 'Categoriza',
    description: 'API de catálogo de produtos em Spring com MongoDB.',
    image: null,
    imageFallback: 'Spring + MongoDB',
    repo: 'https://github.com/giovxna/categoriza',
    size: 'large',
  },
  {
    id: 10,
    tag: 'Java • Spring',
    title: 'LiterAlura',
    description: 'Catálogo de livros que consome a API Gutendex, com Hibernate e banco H2.',
    image: null,
    imageFallback: 'Catálogo de livros',
    repo: 'https://github.com/giovxna/literalura-challenge',
    size: 'small',
  },
]

export const projectDetails = {
  11: {
    title: 'Travel Sisters',
    intro:
      'Plataforma que conecta mulheres a empresas de vans de viagem. Motoristas e passageiras são todas mulheres, e a proposta é que a viagem seja segura de ponta a ponta.',
    mainImage: '/travel-sisters.png',
    repo: 'https://github.com/Travel-Sisters',
    info: {
      Contexto: 'Projeto em equipe',
      Função: 'Frontend',
      Período: '2023 - 2024',
      Stack: 'React, JavaScript, Java, Spring',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'Viajar de van é barato e prático, mas para muitas mulheres a conta inclui um cálculo que os homens não fazem: com quem eu vou estar dentro desse veículo pelas próximas horas. Esse receio limita deslocamento e escolha.',
      },
      {
        title: 'A Solução',
        body: 'A Travel Sisters funciona como intermediária entre empresas de vans e passageiras, com um recorte simples: só mulheres participam do processo, tanto na direção quanto entre as passageiras. Trabalhei principalmente no front-end da plataforma, onde fui a maior contribuidora do repositório.',
      },
    ],
    features: [
      'Conexão entre passageiras e empresas de vans de viagem',
      'Motoristas e passageiras exclusivamente mulheres',
      'Front-end em React consumindo API própria em Java e Spring',
      'Projeto desenvolvido em equipe de cinco pessoas',
    ],
    gallery: [],
  },
  2: {
    title: 'Qreate',
    intro:
      'API REST que gera QR Codes sob demanda, guarda as imagens no S3 e devolve a URL pública. Construída com Clean Architecture.',
    mainImage: null,
    imageFallback: 'Spring Boot + S3',
    repo: 'https://github.com/giovxna/qreate',
    info: {
      Contexto: 'Projeto pessoal',
      Função: 'Backend',
      Período: '2025',
      Stack: 'Java 21, Spring Boot, AWS S3, Docker',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'Gerar QR Code é simples. O que não é simples é fazer isso como serviço: guardar os arquivos em algum lugar durável, devolver um link estável e manter o código organizado o suficiente para trocar de provedor de armazenamento sem reescrever tudo.',
      },
      {
        title: 'A Solução',
        body: 'Separei o domínio da infraestrutura usando Ports & Adapters. A regra de negócio não sabe que existe S3, ela conversa com uma porta de armazenamento. O adaptador da AWS fica na borda, e trocá-lo por outro provedor é questão de escrever uma implementação nova.',
      },
    ],
    features: [
      'Geração de QR Code em PNG 200x200 a partir de qualquer texto',
      'Upload automático para bucket S3 com retorno da URL pública',
      'Clean Architecture com Ports & Adapters',
      'Empacotamento com Docker e build via Maven',
    ],
    gallery: [],
  },
  3: {
    title: 'Employee CRUD',
    intro:
      'Sistema de gestão de funcionários em C# e .NET, organizado em camadas e seguindo os princípios SOLID.',
    mainImage: null,
    imageFallback: '.NET em camadas',
    repo: 'https://github.com/giovxna/employee-crud',
    info: {
      Contexto: 'Projeto pessoal',
      Função: 'Backend',
      Período: '2025',
      Stack: 'C#, .NET',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'Um CRUD é o exercício mais comum que existe, e por isso mesmo costuma virar um arquivo único com tudo dentro. Eu queria usá-lo para praticar separação de responsabilidades de verdade.',
      },
      {
        title: 'A Solução',
        body: 'Dividi o projeto em camadas de API, Application e Communication, cada uma com uma responsabilidade só. As regras de negócio ficam isoladas dos contratos de entrada e saída, o que deixa o teste e a manutenção bem mais diretos.',
      },
    ],
    features: [
      'Operações de criar, listar, atualizar e remover funcionários',
      'Arquitetura em camadas: API, Application e Communication',
      'Aplicação prática dos princípios SOLID',
      'Contratos de request e response isolados do domínio',
    ],
    gallery: [],
  },
  4: {
    title: 'Eco.Info',
    intro:
      'Plataforma de educação ambiental que transforma dado científico complexo em conteúdo prático, visual e acionável.',
    mainImage: null,
    imageFallback: 'Educação ambiental',
    repo: 'https://github.com/giovxna/eco.info',
    info: {
      Contexto: 'Imersão Dev',
      Função: 'Fullstack',
      Período: '2025',
      Stack: 'React, Node.js, PostgreSQL',
    },
    sections: [
      {
        title: 'O Desafio',
        body: '30% dos brasileiros descartam resíduos incorretamente e a maioria das pessoas desconhece ações simples que reduzem o impacto ambiental. O problema raramente é falta de vontade, é falta de informação em formato utilizável.',
      },
      {
        title: 'A Solução',
        body: 'Um portal que pega dado científico e devolve ação concreta. Pensado desde o primeiro commit em acessibilidade e velocidade, porque conteúdo que não carrega ou que exclui parte das pessoas não educa ninguém.',
      },
    ],
    features: [
      'SPA em React com roteamento dinâmico',
      'API REST com Node.js e PostgreSQL',
      'Acessibilidade WCAG AA',
      'Score Lighthouse 90+ em performance',
    ],
    gallery: [],
  },
  5: {
    title: 'EducaLab',
    intro:
      'Tutor virtual que adapta a explicação ao nível de quem está perguntando. Desenvolvido na Imersão IA da Alura em parceria com o Google.',
    mainImage: 'https://github.com/user-attachments/assets/a936540f-a123-40a2-ad18-80700a92e2f7',
    repo: 'https://github.com/giovxna/educa.lab',
    info: {
      Contexto: 'Imersão IA Alura + Google',
      Função: 'Desenvolvimento',
      Período: '2025',
      Stack: 'IA generativa, Web',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'O acesso à educação de qualidade no Brasil é desigual: bons professores, material didático e método não chegam em todo lugar. E conteúdo complexo explicado de um jeito só não atende estudantes em níveis diferentes.',
      },
      {
        title: 'A Solução',
        body: 'Um tutor que reformula a explicação conforme o repertório de quem pergunta, em vez de repetir a mesma resposta. A ideia não é substituir professor, é dar a quem não tem acesso alguém disponível para explicar de novo, de outro jeito, quantas vezes precisar.',
      },
    ],
    features: [
      'Explicações adaptadas ao nível de conhecimento do usuário',
      'Uso de IA generativa aplicada a um problema social concreto',
      'Interface web simples, pensada para baixa barreira de entrada',
      'Projeto desenvolvido durante a Imersão IA Alura + Google',
    ],
    gallery: [],
  },
  6: {
    title: 'Posie',
    intro: 'API em Java e Spring com autenticação e autorização via JWT e Spring Security.',
    mainImage: null,
    imageFallback: 'JWT + Spring Security',
    repo: 'https://github.com/giovxna/posie',
    info: {
      Contexto: 'Projeto pessoal',
      Função: 'Backend',
      Período: '2025',
      Stack: 'Java, Spring, Spring Security, JWT',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'Autenticação é a parte que mais se copia de tutorial e menos se entende. Eu queria montar o fluxo inteiro do zero para saber o que cada peça do Spring Security está fazendo.',
      },
      {
        title: 'A Solução',
        body: 'Implementei o ciclo completo de emissão e validação de token JWT, com os filtros do Spring Security configurados na mão em vez de herdados de um template. Cada rota declara explicitamente o que exige.',
      },
    ],
    features: [
      'Emissão e validação de tokens JWT',
      'Filtros de segurança configurados manualmente no Spring Security',
      'Controle de acesso por rota',
      'API REST em Java com Spring',
    ],
    gallery: [],
  },
  7: {
    title: 'Case Economia',
    intro:
      'Análise exploratória das operações de empréstimo público da União, em busca de padrões e tendências que ajudem a entender essa carteira.',
    mainImage: null,
    imageFallback: 'Análise exploratória',
    repo: 'https://github.com/giovxna/case-economia',
    info: {
      Contexto: 'Análise de dados',
      Função: 'Analytics',
      Período: '2025',
      Stack: 'Python, Jupyter, Pandas',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'A base de operações da União vem crua, com inconsistências e sem um recorte pronto. Antes de qualquer conclusão, era preciso entender o que cada coluna significa e o que dá para afirmar com segurança.',
      },
      {
        title: 'A Solução',
        body: 'Um notebook que percorre o caminho inteiro: leitura e entendimento da base, limpeza e preparação, visualizações para expor padrões e, só no fim, as conclusões. A ordem importa, porque insight tirado de base suja é chute com gráfico.',
      },
    ],
    features: [
      'Leitura e entendimento da base de operações da União',
      'Limpeza e preparação dos dados',
      'Visualizações para identificar padrões e tendências',
      'Conclusões documentadas no próprio notebook',
    ],
    gallery: [],
  },
  8: {
    title: 'HealUs',
    intro:
      'Plataforma de saúde preventiva com conteúdo sobre sono, autocuidado, hábitos saudáveis e funcionamento do corpo.',
    mainImage:
      'https://raw.githubusercontent.com/giovxna/heal-us/main/public/assets/images/capa-heal-us.png',
    repo: 'https://github.com/giovxna/heal-us',
    info: {
      Contexto: 'Projeto acadêmico',
      Função: 'Frontend',
      Período: '2025',
      Stack: 'HTML, CSS, JavaScript',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'Informação sobre saúde preventiva existe de sobra na internet, mas espalhada, em linguagem técnica ou misturada com desinformação. Falta um lugar que junte o básico de forma confiável e aplicável.',
      },
      {
        title: 'A Solução',
        body: 'Um portal organizado por tema, com recomendações que a pessoa consegue aplicar no mesmo dia. O foco é prevenção: hábito pequeno e constante rende mais do que mudança radical que não se sustenta.',
      },
    ],
    features: [
      'Conteúdo organizado por temas de bem-estar',
      'Recomendações práticas para o dia a dia',
      'Interface pensada para leitura confortável',
      'Projeto com foco em saúde preventiva',
    ],
    gallery: [],
  },
  9: {
    title: 'Categoriza',
    intro: 'API de catálogo de produtos construída com Java, Spring e MongoDB.',
    mainImage: null,
    imageFallback: 'Spring + MongoDB',
    repo: 'https://github.com/giovxna/categoriza',
    info: {
      Contexto: 'Projeto pessoal',
      Função: 'Backend',
      Período: '2024',
      Stack: 'Java, Spring, MongoDB',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'Catálogo de produto é um caso clássico de dado que não cabe bem em tabela rígida: cada categoria tem atributos próprios e o formato muda com o tempo.',
      },
      {
        title: 'A Solução',
        body: 'Usei MongoDB justamente por causa disso, com uma API em Spring expondo os endpoints de produto e categoria. Foi o projeto onde saí do banco relacional por padrão e escolhi a persistência pela forma do dado.',
      },
    ],
    features: [
      'API REST de produtos e categorias',
      'Persistência em MongoDB',
      'Construída com Java e Spring',
      'Endpoints documentados no repositório',
    ],
    gallery: [],
  },
  10: {
    title: 'LiterAlura',
    intro:
      'Catálogo de livros que consome a API Gutendex, com persistência via Hibernate e banco H2.',
    mainImage: null,
    imageFallback: 'Catálogo de livros',
    repo: 'https://github.com/giovxna/literalura-challenge',
    info: {
      Contexto: 'Desafio Alura',
      Função: 'Backend',
      Período: '2024',
      Stack: 'Java, Spring Boot, Hibernate, H2',
    },
    sections: [
      {
        title: 'O Desafio',
        body: 'Consumir uma API externa parece trivial até você precisar mapear a resposta dela para o seu próprio modelo, lidar com campos ausentes e ainda guardar tudo localmente sem duplicar registro.',
      },
      {
        title: 'A Solução',
        body: 'A aplicação busca livros na Gutendex, converte a resposta para entidades próprias e persiste com Hibernate num H2. O modelo interno é meu, não um espelho do JSON da API, o que deixa a troca de fonte de dados possível.',
      },
    ],
    features: [
      'Busca de livros por título via API Gutendex',
      'Listagem de autores com seus detalhes',
      'Suporte a livros em múltiplos idiomas',
      'Persistência com Hibernate e banco H2',
    ],
    gallery: [],
  },
}
