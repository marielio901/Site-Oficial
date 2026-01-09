/* ====== DATA + I18N ====== */
const profile = {
  phone: "+55 38 99130-7746",
  email: "marieliofernandes637@gmail.com",
  location_pt: "Jaíba-MG",
  location_en: "Jaíba, Brazil",
  linkedin: "https://www.linkedin.com/in/mari%C3%A9lio-fernandes-187a6631b/",
  github: "https://github.com/marielio901",
  youtube: "https://www.youtube.com/@Marielio.Fernandes",
};

const i18n = {
  pt: {
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.education": "Formação",
    "nav.certs": "Certificações",
    "nav.skills": "Habilidades",
    "nav.portfolio": "Portfólio",
    "nav.contact": "Contato",
    "hero.location": profile.location_pt,
    "hero.available": "Disponível para Novos Projetos.",
    "hero.name": "MARIÉLIO RODRIGUES FERNANDES",
    "hero.headline": "Cientista de Dados | Data Analytics | Machine Learning | BI & Engenharia de Dados",
    "hero.email": "Email",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "hero.youtube": "YouTube",
    "hero.highlights": "Destaques",
    "sections.about": "Sobre",
    "sections.experience": "Experiência Profissional",
    "sections.education": "Formação Acadêmica",
    "sections.certs": "Certificações",
    "sections.skills": "Habilidades Técnicas",
    "sections.portfolio": "Portfólio",
    "sections.contact": "Contato",
    "about.text": "Sou cientista de dados com foco em eficiência e melhoria contínua, especialista em mensuração de processos e desenho de amostragem para transformar operações em decisões confiáveis. Atuo com modelagem estatística e matemática aplicada, do diagnóstico à validação, usando classificação, predição e testes de consistência para reduzir incerteza e aumentar precisão. Construo soluções analíticas de ponta a ponta. Defino métricas e indicadores, estruturo hipóteses, valido resultados com rigor e entrego sistemas que se encaixam no ecossistema da empresa e geram impacto no dia a dia. Vou além de dashboards e automações superficiais. Meu objetivo é criar produtos de dados e IA que respondem perguntas reais do negócio, geram insights imediatos e evoluem com governança, performance e manutenção sustentável.",
    "about.availability.title": "Disponível para trabalhos",
    "about.availability.subtitle": "Freelancer, consultorias e serviços no Brasil e no exterior",
    "about.availability.freelance": "Freelancers e projetos sob demanda",
    "about.availability.consulting": "Consultorias e apoio estratégico",
    "about.availability.brazil": "Presencial ou remoto em todo o Brasil",
    "about.availability.global": "Remoto para clientes no exterior",
    "about.services.title": "Serviços Prestados",
    "about.services.data_mining": "Data mining",
    "about.services.etl": "ETL/ELT",
    "about.services.analytics": "data analytics",
    "about.services.predictive": "Análise Preditiva",
    "about.services.vision": "Visão computacional",
    "about.services.geoprocessing": "Geoprocessamento",
    "about.services.georeferencing": "Georreferenciamento",
    "about.services.dev": "Desenvolvimento de SaaS, ERP, CRM, dashboards e data apps.",
    "about.services.automation_processes": "Processos de automação",
    "about.services.boots_dev": "Desenvolvimento de Bots",
    "portfolio.hint": "Clique em um projeto para ver detalhes.",
    "contact.phone": "Telefone",
    "contact.email": "Email",
    "contact.location": "Localização",
    "contact.cta": "Falar comigo",
    "contact.copy": "Entre em contato para mais informações!🙂",
    "footer.text": `© 2026 Mariélio Rodrigues Fernandes.`,
    "modal.gallery": "Galeria",
    "modal.stack": "Stack",
    "modal.points": "Pontos relevantes",
    "modal.problem": "Problema e causa",
    "modal.solution": "Solução aplicada",
    "modal.insights": "Insights gerados",
    "modal.links": "Links",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.certs": "Certifications",
    "nav.skills": "Skills",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "hero.location": profile.location_en,
    "hero.available": "Open to opportunities",
    "hero.name": "MARIÉLIO RODRIGUES FERNANDES",
    "hero.headline": "Data Scientist | Data Analytics | Machine Learning | BI & Data Engineering",
    "hero.email": "Email",
    "hero.linkedin": "LinkedIn",
    "hero.github": "GitHub",
    "hero.youtube": "YouTube",
    "hero.highlights": "Highlights",
    "sections.about": "About",
    "sections.experience": "Professional Experience",
    "sections.education": "Education",
    "sections.certs": "Certifications",
    "sections.skills": "Technical Skills",
    "sections.portfolio": "Portfolio",
    "sections.contact": "Contact",
    "about.text": "I'm a data scientist focused on efficiency and process optimization, with hands-on experience across supply chain, inventory, logistics, agricultural operations, and internal solution development. I've worked with SAP and TOTVS (PIMS Cana, Datasul, Fluig), building internal ERPs and Databricks integrations to power Power BI dashboards and Python applications. I'm proficient in SQL, Python, Databricks, and Power BI across the full data lifecycle, and I use my agricultural and industrial domain knowledge to parameterize systems, improve KPIs, and deliver scalable solutions that solve real business problems.",
    "about.availability.title": "Available for work",
    "about.availability.subtitle": "Freelance, consulting, and services in Brazil or abroad",
    "about.availability.freelance": "Freelance and on-demand projects",
    "about.availability.consulting": "Consulting and strategic support",
    "about.availability.brazil": "On-site or remote across Brazil",
    "about.availability.global": "Remote for international clients",
    "about.services.title": "Services Provided",
    "about.services.data_mining": "Data mining",
    "about.services.etl": "ETL/ELT",
    "about.services.analytics": "Data analytics",
    "about.services.predictive": "Predictive analytics",
    "about.services.vision": "Computer vision",
    "about.services.geoprocessing": "Geoprocessing",
    "about.services.georeferencing": "Georeferencing",
    "about.services.dev": "SaaS, ERP, CRM, dashboard, and data app development",
    "about.services.automation_processes": "Automation processes",
    "about.services.boots_dev": "Bot development",
    "portfolio.hint": "Click a project to view details.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.cta": "Get in touch",
    "contact.copy": "Get in touch for more information! 🙂",
    "footer.text": `© 2026 Mariélio Rodrigues Fernandes.`,
    "modal.gallery": "Gallery",
    "modal.stack": "Stack",
    "modal.points": "Key points",
    "modal.problem": "Problem & cause",
    "modal.solution": "Applied solution",
    "modal.insights": "Generated insights",
    "modal.links": "Links",
  }
};

const experience = [
  {
    title_pt: "Analista de Controle de Operações Agrícolas — Grupo SADA | Sada Bio Energia",
    title_en: "Agricultural Operations Control Analyst — Grupo SADA | Sada Bio Energia",
    sub_pt: "Jaíba, MG",
    sub_en: "Jaíba, Brazil",
    meta_pt: "Out/2024 – Atual",
    meta_en: "Oct/2024 – Present",
    icon: "leaf",
    bullets_pt: [
      "Governança de dados do setor agrícola no Microsoft Fabric, integrando e padronizando dados de TOTVS (PIMS Cana/Datasul) e bases operacionais.",
      "Integração com Azure Databricks e arquitetura medallion (Bronze/Silver/Gold) com qualidade, rastreabilidade e consistência.",
      "Publicação e redistribuição no Fabric (OneLake, Lakehouse, Data Warehouse) com pipelines automatizados ao longo do dia.",
      "Dashboards e modelos no Power BI para gestores e áreas parceiras, reduzindo retrabalho e acelerando decisões.",
      "Automações e análises em SQL/Python; KPIs e análises de produção (colheita, preparo de solo, tratos culturais, pragas, logística).",
      "Iniciativas de ML e aplicações com LLM no próprio Fabric, conectando dados governados a casos de uso práticos."
    ],
    bullets_en: [
      "Own data governance for agricultural operations in Microsoft Fabric, integrating and standardizing data from TOTVS (PIMS Cana/Datasul) and operational sources.",
      "Integrate with Azure Databricks and implement a medallion architecture (Bronze/Silver/Gold) with quality, lineage, and consistency.",
      "Publish and redistribute curated datasets in Fabric (OneLake, Lakehouse, Data Warehouse) using automated pipelines throughout the day.",
      "Deliver Power BI dashboards and semantic models for leaders and partner areas, reducing manual rework and speeding up decisions.",
      "Build SQL/Python automations; maintain and evolve operational KPIs and analyses (harvest, soil prep, crop care, pest control, logistics performance).",
      "Drive ML initiatives and LLM-based applications in Fabric, connecting governed data to practical business use cases."
    ]
  },
  {
    title_pt: "Analista de Cadeia de Suprimentos — Sigdo Koppers Brasil (SKIC)",
    title_en: "Supply Chain Analyst — Sigdo Koppers Brasil (SKIC)",
    sub_pt: "Jaíba, MG",
    sub_en: "Jaíba, Brazil",
    meta_pt: "Mar/2023 – Ago/2024",
    meta_en: "Mar/2023 – Aug/2024",
    icon: "package",
    bullets_pt: [
      "Controle operacional de estoque, logística, compras e diligenciamento durante a implantação de usina fotovoltaica de grande porte.",
      "Relatórios estratégicos de movimentações, status de pedidos, recebimentos, distribuição industrial e rastreabilidade.",
      "Desenvolvimento de ERPs internos e data apps (Python/Streamlit) para coleta de campo, requisições, EPIs, combustíveis e estoque.",
      "Integração com SAP HANA e TOTVS Fluig, aumentando rastreabilidade, facilitando inventários e elevando acuracidade dos saldos."
    ],
    bullets_en: [
      "Managed operational control for inventory, logistics, purchasing, and expediting during the rollout of a large-scale solar power plant.",
      "Produced strategic reporting on warehouse movements, purchase order status, receiving, industrial material distribution, and equipment traceability.",
      "Built internal ERPs and data apps (Python/Streamlit) for field data capture, requisitions, PPE, fuel, and inventory control.",
      "Integrated SAP HANA and TOTVS Fluig data to improve traceability, streamline inventories, and increase stock accuracy."
    ]
  },
  {
    title_pt: "Professor & Consultor — Prepara Cursos Lins",
    title_en: "Instructor & Consultant — Prepara Cursos Lins",
    sub_pt: "Jaíba, MG",
    sub_en: "Jaíba, Brazil",
    meta_pt: "Abr/2022 – Mar/2023",
    meta_en: "Apr/2022 – Mar/2023",
    icon: "book-open",
    bullets_pt: [
      "Lecionei programação, administração e gestão de projetos, além de consultoria para empresas parceiras.",
      "Atuação no recrutamento de alunos para empresas associadas, alinhando necessidades do mercado ao desenvolvimento dos estudantes.",
      "Colaboração com vendas via análises de desempenho e estratégias orientadas a dados em reuniões."
    ],
    bullets_en: [
      "Taught programming, business administration, and project management; also delivered consulting for partner companies.",
      "Supported student placement by matching market needs with student development and recruiting for associated companies.",
      "Partnered with sales through performance analysis and data-driven strategies during meetings."
    ]
  }
];

const education = [
  {
    title_pt: "Curso Superior de Tecnólogo em Ciência de Dados",
    title_en: "Associate Degree in Data Science",
    org: "Uniube – Universidade de Uberaba",
    period: "2023 – 2025",
    icon: "brain",
    details_pt: "Foco em Estatística, Machine Learning, Big Data, Data Governance e automação de processos analíticos.",
    details_en: "Focus on Statistics, Machine Learning, Big Data, Data Governance, and automation of analytical processes."
  },
  {
    title_pt: "Curso Técnico em Administração",
    title_en: "Technical Degree in Business Administration",
    org: "Instituto Federal do Sudeste de Minas Gerais",
    period: "2022 – 2023",
    icon: "briefcase",
    details_pt: "Ênfase em processos administrativos e logísticos aplicados à análise operacional.",
    details_en: "Emphasis on administrative and logistics processes applied to operational analysis."
  }
];

const certs = [
  {
    name: "Databricks Fundamentals",
    issuer: "Databricks",
    icon: "layers",
    color: "#ff3621",
    pt: "Emitido em dez/2025",
    en: "Issued Dec/2025"
  },
  {
    name: "Databricks for Data Engineering",
    issuer: "Databricks",
    icon: "database",
    color: "#ff3621",
    pt: "Emitido em dez/2025",
    en: "Issued Dec/2025"
  },
  {
    name: "Introduction to Linux",
    issuer: "The Linux Foundation",
    icon: "terminal",
    color: "#fcc624",
    pt: "Emitido em ago/2025",
    en: "Issued Aug/2025"
  },
];

const skillIcons = {
  "Sistemas Corporativos": "server",
  "Enterprise Systems": "server",
  "Linguagens & Consultas": "code-2",
  "Languages & Querying": "code-2",
  "Análise & Visualização": "bar-chart-3",
  "Analytics & Visualization": "bar-chart-3",
  "Desenvolvimento & Automação": "settings",
  "Development & Automation": "settings",
  "Idiomas": "globe",
  "Languages": "globe"
};

const skills = [
  { title_pt: "Sistemas Corporativos", title_en: "Enterprise Systems", items: ["SAP HANA", "TOTVS (PIMS Cana, Datasul, Fluig)", "Databricks", "Microsoft Fabric"] },
  { title_pt: "Linguagens & Consultas", title_en: "Languages & Querying", items: ["SQL (avançado)", "Python (ETL, automações, modelos, data apps)"] },
  { title_pt: "Análise & Visualização", title_en: "Analytics & Visualization", items: ["Power BI", "Excel Avançado", "Looker Studio"] },
  { title_pt: "Desenvolvimento & Automação", title_en: "Development & Automation", items: ["Streamlit", "Dash", "Flask / Django", "APIs", "Git / GitHub"] },
  { title_pt: "Machine Learning / Deep Learning", title_en: "Machine Learning / Deep Learning", items: ["scikit-learn", "PyTorch", "TensorFlow", "Keras"] },
  { title_pt: "NLP e LLMs", title_en: "NLP & LLMs", items: ["Hugging Face Transformers", "Datasets", "Tokenizers", "Sentence-Transformers", "spaCy", "NLTK", "Gensim", "vLLM", "LangChain", "LlamaIndex"] },
  { title_pt: "Visão Computacional", title_en: "Computer Vision", items: ["OpenCV", "torchvision", "timm", "Detectron2", "ultralytics (YOLO)"] },
  { title_pt: "Séries temporais e Forecast", title_en: "Time Series & Forecast", items: ["Darts", "GluonTS", "statsforecast", "neuralforecast", "sktime"] },
  { title_pt: "Georreferenciamento / Geoprocessamento", title_en: "Georeferencing / Geoprocessing", items: ["Qgis", "GeoPandas", "PyProj", "PostGIS", "Plotly / Mapbox"] },
  { title_pt: "Idiomas", title_en: "Languages", items: ["English: Intermediate (reading & listening), basic speaking", "Español: Intermedio (buena comprensión y lectura), expresión oral avanzada"] },
];

const projects = [
  {
    id: "cargovision",
    title_pt: "CargoVision — Monitoramento Logístico e SLA",
    title_en: "CargoVision — Logistics & SLA Monitoring",
    desc_pt: "Dashboard em Python/Flask + SQL para monitorar entregas e SLA com GeoMaps; regressão logística (classificação) e XGBoost para predição de entregas.",
    desc_en: "Python/Flask + SQL dashboard to track deliveries and SLA with GeoMaps; logistic regression for classification and XGBoost to predict deliveries.",
    stack: ["Python", "Flask", "SQL", "GeoMaps", "Regressao Logistica", "XGBoost"],
    tags: ["Supply Chain", "BI", "Monitoring"],
    image: "portfólio/cargovision/capa - CargoVision.png",
    images: [
      "portfólio/cargovision/capa - CargoVision.png",
      "portfólio/cargovision/cargovision 2.png",
      "portfólio/cargovision/cargovision 3.png",
      "portfólio/cargovision/cargovision 4.png",
      "portfólio/cargovision/cargovision 5.png"
    ],
    links: []
  },
  {
    id: "solaristech",
    title_pt: "Solaristech — Usinas FV + Clima + ML",
    title_en: "Solaristech — Solar Plants + Weather + ML",
    desc_pt: "Plataforma para pequenos e médios produtores de usina fotovoltaica acompanharem produção (kWh/R$), perdas e clima com API e modelos preditivos.",
    desc_en: "Platform for small and midsize photovoltaic producers to track production (kWh/$), losses, and weather via API with predictive models.",
    stack: ["Python", "Flask", "Open-Meteo", "PostgreSQL", "Machine Learning"],
    tags: ["Energy", "ML", "Data Apps"],
    image: "portfólio/Solaristech/Capa Solaristech.png",
    images: [
      "portfólio/Solaristech/Capa Solaristech.png",
      "portfólio/Solaristech/2.png",
      "portfólio/Solaristech/3.png",
      "portfólio/Solaristech/4.png",
      "portfólio/Solaristech/5.png",
      "portfólio/Solaristech/6.png",
      "portfólio/Solaristech/7.png",
      "portfólio/Solaristech/8.png"
    ],
    links: []
  },
  {
    id: "colheita-milho",
    title_pt: "Colheita de Milho",
    title_en: "Corn Harvest",
    desc_pt: "Dashboard que acompanha safra de milho, produção e ganhos, reunindo indicadores e insights de alta performance para apoiar decisões e aumentar a rentabilidade nas próximas safras.",
    desc_en: "Dashboard that tracks corn harvests, production, and earnings, bringing together high-performance indicators and insights to support decisions and increase profitability in upcoming seasons.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    tags: ["Agribusiness", "Analytics", "Dashboards"],
    image: "portfólio/Colheita de Milho/1.png",
    images: [
      "portfólio/Colheita de Milho/1.png",
      "portfólio/Colheita de Milho/2.png",
      "portfólio/Colheita de Milho/3.png",
      "portfólio/Colheita de Milho/4.png"
    ],
    links: []
  },
  {
    id: "controle-vendas",
    title_pt: "Controle de Vendas",
    title_en: "Sales Control",
    desc_pt: "DataApp em dashboard para acompanhar vendas de uma concessionária: visão por estado, performance por vendedor e variação de preços conforme a tabela FIPE.",
    desc_en: "Dashboard data app to track dealership sales: state-level view, seller performance, and price variation based on FIPE table data.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    tags: ["Sales", "Analytics", "Dashboards"],
    image: "portfólio/Controle de Vendas/1.png",
    images: [
      "portfólio/Controle de Vendas/1.png",
      "portfólio/Controle de Vendas/2.png"
    ],
    links: []
  },
  {
    id: "finance-hanna",
    title_pt: "Finance Hanna",
    title_en: "Finance Hanna",
    desc_pt: "CRM para gestão de contas a pagar e a receber, com alertas de atraso, registro de pagamentos e dashboard para monitorar as rotinas do financeiro em tempo real.",
    desc_en: "CRM for managing accounts payable and receivable, with overdue alerts, payment logging, and a dashboard to monitor finance routines in real time.",
    stack: ["Python", "Flask", "Dashboards", "Operações Financeiras", "Controle Fiscal"],
    tags: ["Finance", "CRM", "Dashboards"],
    image: "portfólio/Finance Hanna/1.png",
    images: [
      "portfólio/Finance Hanna/1.png",
      "portfólio/Finance Hanna/2.png",
      "portfólio/Finance Hanna/3.png",
      "portfólio/Finance Hanna/4.png",
      "portfólio/Finance Hanna/5.png",
      "portfólio/Finance Hanna/6.png"
    ],
    links: []
  },
  {
    id: "smarttank",
    title_pt: "SmartTank",
    title_en: "SmartTank",
    desc_pt: "MicroSaaS para gestão de combustíveis em empreiteiras e indústrias, com controle de estoque, alertas de reposição, inventários e fechamento mensal.",
    desc_en: "MicroSaaS for fuel management in contractors and industries, with inventory control, restock alerts, inventories, and monthly closing.",
    stack: ["Python", "Flask", "SQL", "SaaS", "Gestao de Estoque"],
    tags: ["SaaS", "Inventory", "Operations"],
    image: "portfólio/SmartTank/1.png",
    images: [
      "portfólio/SmartTank/1.png",
      "portfólio/SmartTank/2.png",
      "portfólio/SmartTank/3.png"
    ],
    links: []
  },
];

const projectPoints = {
  cargovision: {
    pt: {
      problem: [
        "Baixa visibilidade de entregas e risco de descumprimento de SLA.",
        "Dados logísticos dispersos dificultavam priorização e resposta rápida."
      ],
      solution: [
        "Dashboard Flask + SQL com geolocalização e métricas de SLA.",
        "Modelos de classificação e previsão para estimar risco de atraso."
      ],
      insights: [
        "Rotas e transportadoras com maior probabilidade de atraso.",
        "Alertas antecipados para replanejar expedições críticas."
      ]
    },
    en: {
      problem: [
        "Low visibility into deliveries and SLA breach risk.",
        "Fragmented logistics data limited fast prioritization."
      ],
      solution: [
        "Flask + SQL dashboard with geospatial tracking and SLA metrics.",
        "Classification and forecasting models to estimate delay risk."
      ],
      insights: [
        "Routes and carriers with higher delay probability.",
        "Early warnings to replan critical dispatches."
      ]
    }
  },
  solaristech: {
    pt: {
      problem: [
        "Falta de visão integrada de geração, perdas e clima.",
        "Dificuldade para comparar kWh/R$ e antecipar quedas de produção."
      ],
      solution: [
        "Plataforma com integração climática e dados operacionais.",
        "Modelos preditivos para projeção de geração e perdas."
      ],
      insights: [
        "Impacto do clima na geração e na receita.",
        "Janelas de manutenção e ajustes para reduzir perdas."
      ]
    },
    en: {
      problem: [
        "No integrated view of generation, losses, and weather.",
        "Hard to compare kWh/$ and anticipate production drops."
      ],
      solution: [
        "Platform integrating weather data and operational metrics.",
        "Predictive models to project generation and losses."
      ],
      insights: [
        "Weather impact on generation and revenue.",
        "Maintenance windows to reduce losses."
      ]
    }
  },
  "colheita-milho": {
    pt: {
      problem: [
        "Dados de safra dispersos dificultavam análise de produtividade e ganhos.",
        "Decisões para próximas safras sem histórico consolidado."
      ],
      solution: [
        "Dashboard com indicadores de safra, produtividade e rentabilidade.",
        "Comparativos por período e área para apoiar decisões."
      ],
      insights: [
        "Áreas com melhor desempenho e gargalos recorrentes.",
        "Variações de produtividade por safra."
      ]
    },
    en: {
      problem: [
        "Harvest data was scattered, limiting productivity and earnings analysis.",
        "Next-season decisions lacked consolidated history."
      ],
      solution: [
        "Dashboard with harvest, productivity, and profitability indicators.",
        "Comparisons by period and area to support decisions."
      ],
      insights: [
        "Best-performing areas and recurring bottlenecks.",
        "Productivity variations across seasons."
      ]
    }
  },
  "controle-vendas": {
    pt: {
      problem: [
        "Vendas e preços sem visão unificada por estado e vendedor.",
        "Diferenças frente à tabela FIPE sem monitoramento."
      ],
      solution: [
        "Data app com KPIs por estado/vendedor e comparação com FIPE.",
        "Dashboards de variação de preço e performance."
      ],
      insights: [
        "Estados e vendedores com maior performance.",
        "Modelos com maior desvio de preço versus FIPE."
      ]
    },
    en: {
      problem: [
        "Sales and prices lacked a unified view by state and seller.",
        "Deviations from FIPE table prices were not monitored."
      ],
      solution: [
        "Data app with KPIs by state/seller and FIPE comparisons.",
        "Dashboards for price variance and performance."
      ],
      insights: [
        "Top-performing states and sellers.",
        "Models with the largest price deviations vs FIPE."
      ]
    }
  },
  "finance-hanna": {
    pt: {
      problem: [
        "Contas a pagar/receber controladas manualmente, com risco de atraso.",
        "Baixa visibilidade do fluxo financeiro no dia a dia."
      ],
      solution: [
        "CRM financeiro com alertas de vencimento e registro de pagamentos.",
        "Dashboard em tempo real para acompanhar rotinas."
      ],
      insights: [
        "Ciclos com maior atraso e prioridades de cobrança.",
        "Gargalos de caixa e evolução do saldo."
      ]
    },
    en: {
      problem: [
        "Accounts payable/receivable tracked manually, increasing delay risk.",
        "Low day-to-day visibility into cash flow."
      ],
      solution: [
        "Finance CRM with due-date alerts and payment logging.",
        "Real-time dashboard to track routines."
      ],
      insights: [
        "Cycles with higher delays and collection priorities.",
        "Cash bottlenecks and balance trends."
      ]
    }
  },
  smarttank: {
    pt: {
      problem: [
        "Controle de combustíveis manual e suscetível a perdas.",
        "Reposição tardia e inventários lentos."
      ],
      solution: [
        "MicroSaaS com estoque, alertas de reposição e inventários.",
        "Fechamento mensal automatizado."
      ],
      insights: [
        "Padrões de consumo por unidade/equipamento.",
        "Pontos de reposição ideais e desvios de consumo."
      ]
    },
    en: {
      problem: [
        "Fuel control was manual and prone to losses.",
        "Late restocking and slow inventory cycles."
      ],
      solution: [
        "MicroSaaS with stock control, restock alerts, and inventories.",
        "Automated monthly closing."
      ],
      insights: [
        "Consumption patterns by unit/equipment.",
        "Ideal reorder points and consumption deviations."
      ]
    }
  }
};

/* ====== STATE ====== */
const STORAGE_KEY = "cv_lang";
let lang = localStorage.getItem(STORAGE_KEY) || "pt";
if (!["pt", "en"].includes(lang)) lang = "pt";

function t(key) {
  return (i18n[lang] && i18n[lang][key]) ? i18n[lang][key] : key;
}

/* ====== APPLY I18N ====== */
function applyI18n() {
  document.documentElement.lang = lang === "pt" ? "pt-br" : "en";

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Button label
  const langBtn = document.getElementById("langBtn");
  const langSpan = langBtn.querySelector("span");
  langSpan.textContent = (lang === "pt") ? "EN" : "PT";
  langBtn.title = (lang === "pt") ? "Switch to English" : "Mudar para Português";

  // Footer
  document.getElementById("footerText").textContent = t("footer.text");

  // Profile fields
  document.getElementById("phoneText").textContent = profile.phone;
  document.getElementById("emailText").textContent = profile.email;

  document.getElementById("contactPhone").textContent = profile.phone;
  const emailLink = document.getElementById("contactEmail");
  emailLink.textContent = profile.email;
  emailLink.href = `mailto:${profile.email}`;

  document.getElementById("contactLocation").textContent = lang === "pt" ? profile.location_pt : profile.location_en;

  // Buttons links
  document.getElementById("btnLinkedIn").href = profile.linkedin;
  document.getElementById("btnGitHub").href = profile.github;
  document.getElementById("btnYouTube").href = profile.youtube;
  document.getElementById("btnEmail").href = `mailto:${profile.email}`;

  document.getElementById("contactLinkedIn").href = profile.linkedin;
  document.getElementById("contactGitHub").href = profile.github;
  document.getElementById("contactYouTube").href = profile.youtube;
  const contactMail = document.getElementById("contactMail");
  if (contactMail) {
    contactMail.href = `mailto:${profile.email}`;
  }

  // Footer social links
  document.getElementById("footerLinkedIn").href = profile.linkedin;
  document.getElementById("footerGitHub").href = profile.github;
  document.getElementById("footerYouTube").href = profile.youtube;
  document.getElementById("footerEmail").href = `mailto:${profile.email}`;

  // Render sections that depend on language
  renderExperience();
  renderEducation();
  renderCerts();
  renderSkills();
  renderProjects();

  // Re-initialize Lucide icons after rendering
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ====== RENDERERS ====== */
function renderExperience() {
  const root = document.getElementById("experienceList");
  root.innerHTML = "";
  experience.forEach(item => {
    const card = document.createElement("article");
    card.className = "timeline__card";

    const header = document.createElement("div");
    header.className = "timeline__header";

    const iconWrap = document.createElement("div");
    iconWrap.className = "timeline__icon";
    iconWrap.innerHTML = `<i data-lucide="${item.icon}" class="timeline__icon-lucide"></i>`;

    const textWrap = document.createElement("div");

    const title = document.createElement("div");
    title.className = "timeline__title";
    title.textContent = lang === "pt" ? item.title_pt : item.title_en;

    const sub = document.createElement("div");
    sub.className = "timeline__sub";
    sub.innerHTML = `<i data-lucide="map-pin" style="width:12px;height:12px;"></i> ${lang === "pt" ? item.sub_pt : item.sub_en}`;

    const meta = document.createElement("div");
    meta.className = "timeline__meta";
    meta.innerHTML = `<i data-lucide="calendar" style="width:12px;height:12px;"></i> ${lang === "pt" ? item.meta_pt : item.meta_en}`;

    textWrap.appendChild(title);
    textWrap.appendChild(sub);
    textWrap.appendChild(meta);

    header.appendChild(iconWrap);
    header.appendChild(textWrap);

    const ul = document.createElement("ul");
    ul.className = "timeline__bullets";
    const bullets = lang === "pt" ? item.bullets_pt : item.bullets_en;
    bullets.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });

    card.appendChild(header);
    card.appendChild(ul);
    root.appendChild(card);
  });
}

function renderEducation() {
  const root = document.getElementById("educationList");
  root.innerHTML = "";
  education.forEach(ed => {
    const card = document.createElement("article");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "skill-card__header";

    const iconWrap = document.createElement("div");
    iconWrap.className = "skill-card__icon";
    iconWrap.innerHTML = `<i data-lucide="${ed.icon}" class="skill-card__lucide"></i>`;

    const title = document.createElement("div");
    title.className = "skill-card__title";
    title.textContent = lang === "pt" ? ed.title_pt : ed.title_en;

    header.appendChild(iconWrap);
    header.appendChild(title);

    const sub = document.createElement("div");
    sub.className = "timeline__sub";
    sub.style.marginTop = "12px";
    sub.innerHTML = `<i data-lucide="building" style="width:12px;height:12px;"></i> ${ed.org}`;

    const meta = document.createElement("div");
    meta.className = "timeline__meta";
    meta.innerHTML = `<i data-lucide="calendar" style="width:12px;height:12px;"></i> ${ed.period}`;

    const p = document.createElement("p");
    p.className = "muted";
    p.style.marginTop = "12px";
    p.style.fontSize = "13px";
    p.textContent = lang === "pt" ? ed.details_pt : ed.details_en;

    card.appendChild(header);
    card.appendChild(sub);
    card.appendChild(meta);
    card.appendChild(p);
    root.appendChild(card);
  });
}

function renderCerts() {
  const root = document.getElementById("certsList");
  root.innerHTML = "";
  certs.forEach(c => {
    const card = document.createElement("article");
    card.className = "card cert-card";
    card.style.setProperty('--cert-color', c.color);

    // Badge de verificado
    const verifiedBadge = document.createElement("div");
    verifiedBadge.className = "cert-card__verified";
    verifiedBadge.innerHTML = `<i data-lucide="shield-check" class="cert-card__verified-icon"></i>`;

    const header = document.createElement("div");
    header.className = "cert-card__header";

    const iconWrap = document.createElement("div");
    iconWrap.className = "cert-card__icon";
    iconWrap.style.background = `linear-gradient(135deg, ${c.color}25 0%, ${c.color}10 100%)`;
    iconWrap.innerHTML = `<i data-lucide="${c.icon}" class="cert-card__lucide" style="color: ${c.color};"></i>`;

    header.appendChild(iconWrap);

    const textWrap = document.createElement("div");
    textWrap.style.flex = "1";

    const title = document.createElement("div");
    title.className = "cert-card__title";
    title.textContent = c.name;

    textWrap.appendChild(title);
    header.appendChild(textWrap);

    const issuerWrap = document.createElement("div");
    issuerWrap.className = "cert-card__issuer";
    issuerWrap.innerHTML = `<i data-lucide="building-2" style="width:14px;height:14px;"></i> <span>${c.issuer}</span>`;

    const dateWrap = document.createElement("div");
    dateWrap.className = "cert-card__date";
    dateWrap.innerHTML = `<i data-lucide="calendar-check" style="width:14px;height:14px;"></i> <span>${lang === "pt" ? c.pt : c.en}</span>`;

    const meta = document.createElement("div");
    meta.className = "cert-card__meta";
    meta.appendChild(issuerWrap);
    meta.appendChild(dateWrap);

    card.appendChild(verifiedBadge);
    card.appendChild(header);
    card.appendChild(meta);
    root.appendChild(card);
  });
}

function renderSkills() {
  const root = document.getElementById("skillsList");
  root.innerHTML = "";
  skills.forEach(g => {
    const card = document.createElement("article");
    card.className = "card skill-card";

    const header = document.createElement("div");
    header.className = "skill-card__header";

    const titleText = lang === "pt" ? g.title_pt : g.title_en;
    const iconName = skillIcons[titleText] || "cpu";

    const iconWrap = document.createElement("div");
    iconWrap.className = "skill-card__icon";
    iconWrap.innerHTML = `<i data-lucide="${iconName}" class="skill-card__lucide"></i>`;

    const title = document.createElement("div");
    title.className = "skill-card__title";
    title.textContent = titleText;

    header.appendChild(iconWrap);
    header.appendChild(title);

    const badges = document.createElement("div");
    badges.className = "badges";
    g.items.forEach(s => {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = s;
      badges.appendChild(b);
    });

    card.appendChild(header);
    card.appendChild(badges);
    root.appendChild(card);
  });
}

function renderProjects() {
  const root = document.getElementById("projectsGrid");
  root.innerHTML = "";

  projects.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "card project";
    btn.type = "button";
    btn.setAttribute("aria-label", lang === "pt" ? p.title_pt : p.title_en);

    const imgWrap = document.createElement("div");
    imgWrap.className = "project__img";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = lang === "pt" ? p.title_pt : p.title_en;
    img.src = p.image ? encodeURI(p.image) : "";
    img.onerror = () => {
      imgWrap.innerHTML = `<div class="muted" style="display:grid;place-items:center;height:100%;text-align:center;padding:20px;"><i data-lucide="image-off" style="width:32px;height:32px;margin-bottom:8px;opacity:0.5;"></i><span style="font-size:11px;">Preview</span></div>`;
      if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    imgWrap.appendChild(img);

    const head = document.createElement("div");
    head.className = "project__head";

    const left = document.createElement("div");

    const title = document.createElement("div");
    title.className = "project__title";
    title.textContent = lang === "pt" ? p.title_pt : p.title_en;

    const desc = document.createElement("div");
    desc.className = "project__desc";
    desc.textContent = lang === "pt" ? p.desc_pt : p.desc_en;

    left.appendChild(title);
    left.appendChild(desc);

    const go = document.createElement("div");
    go.className = "project__go";
    go.innerHTML = `<i data-lucide="arrow-up-right" class="project__go-icon"></i>`;

    head.appendChild(left);
    head.appendChild(go);

    const tags = document.createElement("div");
    tags.className = "badges";
    tags.style.marginTop = "12px";
    p.tags.slice(0, 3).forEach(tag => {
      const b = document.createElement("span");
      b.className = "badge";
      b.textContent = tag;
      tags.appendChild(b);
    });

    btn.appendChild(imgWrap);
    btn.appendChild(head);
    btn.appendChild(tags);

    btn.addEventListener("click", () => openModal(p));
    root.appendChild(btn);
  });
}

/* ====== MODAL ====== */
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalGallery = document.getElementById("modalGallery");
const modalSlides = document.getElementById("modalSlides");
const modalDots = document.getElementById("modalDots");
const modalLinksBlock = document.getElementById("modalLinksBlock");
const modalPointsBlock = document.getElementById("modalPointsBlock");
const modalPointProblem = document.getElementById("modalPointProblem");
const modalPointSolution = document.getElementById("modalPointSolution");
const modalPointInsights = document.getElementById("modalPointInsights");
const modalPointProblemList = document.getElementById("modalPointProblemList");
const modalPointSolutionList = document.getElementById("modalPointSolutionList");
const modalPointInsightsList = document.getElementById("modalPointInsightsList");
const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");

let currentSlides = [];
let currentSlideIndex = 0;

function getProjectImages(project) {
  if (Array.isArray(project.images) && project.images.length) return project.images;
  if (project.image) return [project.image];
  return [];
}

function updateSlider() {
  if (!currentSlides.length) return;
  modalSlides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  const dots = modalDots.querySelectorAll(".slider__dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("is-active", idx === currentSlideIndex);
  });

  const multi = currentSlides.length > 1;
  modalGallery.dataset.multi = multi ? "true" : "false";
  sliderPrev.disabled = !multi;
  sliderNext.disabled = !multi;
}

function setSlide(index) {
  if (!currentSlides.length) return;
  currentSlideIndex = Math.max(0, Math.min(index, currentSlides.length - 1));
  updateSlider();
}

function stepSlide(delta) {
  if (currentSlides.length < 2) return;
  currentSlideIndex = (currentSlideIndex + delta + currentSlides.length) % currentSlides.length;
  updateSlider();
}

function renderSlider(images, title) {
  currentSlides = images;
  currentSlideIndex = 0;
  modalSlides.innerHTML = "";
  modalDots.innerHTML = "";

  if (!images.length) {
    modalGallery.hidden = true;
    return;
  }

  modalGallery.hidden = false;
  images.forEach((src, idx) => {
    const slide = document.createElement("div");
    slide.className = "slider__slide";

    const img = document.createElement("img");
    img.loading = idx === 0 ? "eager" : "lazy";
    img.alt = `${title} ${idx + 1}`;
    img.src = encodeURI(src);
    img.onerror = () => {
      const fallback = document.createElement("div");
      fallback.className = "slider__fallback";
      fallback.textContent = "Preview";
      slide.innerHTML = "";
      slide.appendChild(fallback);
    };

    slide.appendChild(img);
    modalSlides.appendChild(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider__dot";
    dot.setAttribute("aria-label", `Go to image ${idx + 1}`);
    dot.addEventListener("click", () => setSlide(idx));
    modalDots.appendChild(dot);
  });

  updateSlider();
}

function getProjectPoints(project) {
  const entry = projectPoints[project.id];
  if (!entry) return null;
  return lang === "pt" ? entry.pt : entry.en;
}

function renderPointList(listEl, items) {
  listEl.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listEl.appendChild(li);
  });
}

function openModal(project) {
  const projectTitle = lang === "pt" ? project.title_pt : project.title_en;
  const projectDesc = lang === "pt" ? project.desc_pt : project.desc_en;
  document.getElementById("modalTitle").textContent = projectTitle;
  document.getElementById("modalDesc").textContent = projectDesc;

  const stack = document.getElementById("modalStack");
  stack.innerHTML = "";
  project.stack.forEach(s => {
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = s;
    stack.appendChild(b);
  });

  const images = getProjectImages(project);
  renderSlider(images, projectTitle);

  const points = getProjectPoints(project) || { problem: [], solution: [], insights: [] };
  const problemItems = Array.isArray(points.problem) ? points.problem : [];
  const solutionItems = Array.isArray(points.solution) ? points.solution : [];
  const insightsItems = Array.isArray(points.insights) ? points.insights : [];
  const hasPoints = problemItems.length || solutionItems.length || insightsItems.length;
  modalPointsBlock.hidden = !hasPoints;
  modalPointProblem.hidden = problemItems.length === 0;
  modalPointSolution.hidden = solutionItems.length === 0;
  modalPointInsights.hidden = insightsItems.length === 0;
  renderPointList(modalPointProblemList, problemItems);
  renderPointList(modalPointSolutionList, solutionItems);
  renderPointList(modalPointInsightsList, insightsItems);

  const links = document.getElementById("modalLinks");
  links.innerHTML = "";
  const projectLinks = (project.links || []).filter(l => {
    const label = (l.label || "").toLowerCase();
    return label !== "demo" && label !== "github";
  });
  modalLinksBlock.hidden = projectLinks.length === 0;
  projectLinks.forEach(l => {
    const a = document.createElement("a");
    a.className = "btn btn--social";
    a.href = l.url;
    a.innerHTML = `<i data-lucide="external-link" class="btn__icon"></i><span>${l.label}</span>`;
    if (l.url.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    links.appendChild(a);
  });

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Re-initialize icons in modal
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
sliderPrev.addEventListener("click", () => stepSlide(-1));
sliderNext.addEventListener("click", () => stepSlide(1));
document.addEventListener("keydown", (e) => {
  if (modal.getAttribute("aria-hidden") !== "false") return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") stepSlide(-1);
  if (e.key === "ArrowRight") stepSlide(1);
});

/* ====== INIT ====== */
document.getElementById("langBtn").addEventListener("click", () => {
  lang = (lang === "pt") ? "en" : "pt";
  localStorage.setItem(STORAGE_KEY, lang);
  applyI18n();
});

function init() {
  applyI18n();
}
init();
