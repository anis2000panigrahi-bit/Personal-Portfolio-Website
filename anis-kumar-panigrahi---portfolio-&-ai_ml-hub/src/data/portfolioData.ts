import { BlogPost, CertificationItem, EducationItem, Project, SkillItem, SystemLog } from '../types';

export const PERSONAL_INFO = {
  name: 'Anis Kumar Panigrahi',
  role: 'B.Tech CSE (AI & ML) Student',
  tagline: 'Aspiring AI/ML Engineer specializing in Predictive Analytics, Python & Cloud Computing',
  phone: '9692432959',
  email: 'anispanigrahi2004@gmail.com',
  location: 'Baleswar, Odisha, India',
  fullAddress: 'Sundiadihi, P.O. Garasang, Via Ada, Baleswar, Odisha, India',
  objective:
    'Motivated B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning, with working knowledge of Python, SQL, Git, data analytics, and machine learning. Seeking an entry-level opportunity to apply problem-solving skills, contribute to practical projects, and grow in a dynamic organization.',
  fatherName: 'Sanjeeb Kumar Panigrahi',
  dob: '25 March 2006',
  gender: 'Male',
  nationality: 'Indian',
  languages: ['Odia (Native)', 'Hindi (Fluent)', 'English (Professional)'],
  hobbies: ['Cricket', 'Travelling', 'Exploring Tech Innovations'],
  declarationDate: '25 August 2026',
  stats: {
    projectsCompleted: 6,
    certificationsEarned: 3,
    mlModelsDeployed: 4,
    codeCommits: 180,
  }
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
    boardOrUniversity: 'Biju Patnaik University of Technology / Affiliated Institute',
    year: 'In Progress (Expected 2027)',
    scoreOrStatus: 'Student (Pursuing)',
    highlight: 'Specialization in Machine Learning algorithms, Data Structures, Neural Networks & Advanced Python',
    subjects: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Analytics & Mining',
      'Design & Analysis of Algorithms',
      'Database Management Systems (SQL)',
      'Cloud Computing Architectures'
    ]
  },
  {
    id: 'chse',
    degree: 'Higher Secondary School Examination (12th Science)',
    boardOrUniversity: 'Council of Higher Secondary Education (CHSE), Odisha',
    year: '2023',
    scoreOrStatus: '75%',
    highlight: 'Distinction in Physics, Chemistry & Mathematics with analytical problem-solving foundation',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science & English']
  },
  {
    id: 'bse',
    degree: 'Secondary School Examination (10th Standard)',
    boardOrUniversity: 'Board of Secondary Education (BSE), Odisha',
    year: '2021',
    scoreOrStatus: '75%',
    highlight: 'Solid quantitative groundwork, logical reasoning, and academic consistency',
    subjects: ['General Science', 'Mathematics', 'Social Sciences', 'English & Regional Languages']
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'nptel-cloud',
    title: 'Cloud Computing',
    issuer: 'NPTEL (IIT Kharagpur / SWAYAM)',
    periodOrYear: 'Elite Certification',
    skills: ['Virtualization', 'Cloud Storage & CDN', 'Serverless Functions', 'Distributed Computing', 'Resource Management'],
    description: 'Mastery of public/private cloud infrastructure, distributed microservices, elastic compute scaling, and containerization.',
    verificationBadge: 'Verified Academic Credential'
  },
  {
    id: 'coursera-genai',
    title: 'Generative AI Specialization',
    issuer: 'Coursera (DeepLearning.AI / Partner)',
    periodOrYear: 'Professional Verified',
    skills: ['Large Language Models (LLMs)', 'Transformer Architectures', 'Prompt Engineering', 'Fine-Tuning', 'Diffusion Models'],
    description: 'In-depth implementation of transformer-based architectures, vector embeddings, retrieval-augmented generation (RAG), and model evaluation.',
    verificationBadge: 'Coursera Verified'
  },
  {
    id: 'tcs-ion',
    title: 'Career Edge – Young Professional',
    issuer: 'TCS iON (Tata Consultancy Services)',
    periodOrYear: 'Corporate Certified',
    skills: ['Business Communication', 'Problem Solving', 'Agile Mindset', 'Time Management', 'Workplace Ethics'],
    description: 'Corporate workplace readiness course focused on collaborative engineering, problem analysis, technical presentation, and structured workflows.',
    verificationBadge: 'TCS Accredited'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Python',
    category: 'Programming',
    proficiency: 92,
    experience: '3+ Years',
    highlight: 'NumPy, Pandas, Scikit-Learn, Matplotlib, Seaborn, Flask/FastAPI',
    iconName: 'Code'
  },
  {
    name: 'Machine Learning',
    category: 'AI & ML',
    proficiency: 88,
    experience: '2+ Years',
    highlight: 'Supervised/Unsupervised Learning, Regression, Classification, Ensemble Trees, Model Tuning',
    iconName: 'Brain'
  },
  {
    name: 'Artificial Intelligence',
    category: 'AI & ML',
    proficiency: 86,
    experience: '2+ Years',
    highlight: 'Neural Networks, Computer Vision basics, NLP tokenization, GenAI Prompting',
    iconName: 'Sparkles'
  },
  {
    name: 'Data Analytics',
    category: 'Data & SQL',
    proficiency: 90,
    experience: '2+ Years',
    highlight: 'Exploratory Data Analysis (EDA), Statistical Inference, KPI Dashboards, Feature Engineering',
    iconName: 'BarChart3'
  },
  {
    name: 'SQL & Relational DBs',
    category: 'Data & SQL',
    proficiency: 85,
    experience: '2+ Years',
    highlight: 'Complex JOINs, Aggregations, Window Functions, Schema Design & Query Optimization',
    iconName: 'Database'
  },
  {
    name: 'Git & Version Control',
    category: 'Cloud & Tools',
    proficiency: 88,
    experience: '3 Years',
    highlight: 'Branching strategies, Merge conflict resolution, CI/CD GitHub Actions, Collaborative PRs',
    iconName: 'GitBranch'
  },
  {
    name: 'Cloud Computing',
    category: 'Cloud & Tools',
    proficiency: 82,
    experience: '1.5 Years',
    highlight: 'NPTEL Certified: Cloud VM deployment, S3 storage, Serverless compute, Containerization',
    iconName: 'Cloud'
  },
  {
    name: 'Problem Solving & Coding',
    category: 'Professional',
    proficiency: 90,
    experience: 'Continuous',
    highlight: 'Algorithmic logic, edge-case analysis, computational complexity optimization',
    iconName: 'Cpu'
  },
  {
    name: 'Time Management',
    category: 'Professional',
    proficiency: 92,
    experience: 'Continuous',
    highlight: 'TCS iON Certified: Sprint planning, milestone breakdown, prioritizing high-impact deliverables',
    iconName: 'Clock'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'predictive-analysis-model',
    title: 'Predictive Analysis ML Engine',
    category: 'Predictive Modeling',
    tagline: 'End-to-end Machine Learning model for forecasting target outcomes with feature importance',
    description:
      'Engineered a complete supervised machine learning pipeline from raw dataset preprocessing, outlier pruning, and automated feature selection to gradient-boosted classification and hyperparameter tuning.',
    fullOverview:
      'Developed as a flagship academic machine learning project, this predictive engine processes structured tabular records, analyzes correlation matrices, applies SMOTE for class imbalance, and executes cross-validation across Random Forest and XGBoost algorithms. Yielded 94.2% test accuracy and reduced inference latency to under 35 milliseconds.',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Joblib'],
    metrics: [
      { label: 'Model Accuracy', value: '94.2%' },
      { label: 'ROC-AUC Score', value: '0.961' },
      { label: 'Inference Speed', value: '28ms' },
      { label: 'Trained Records', value: '15,000+' }
    ],
    architectureSteps: [
      'Data Ingestion & Automated Cleaning (Handling Nulls & Z-score Outliers)',
      'Feature Transformation & Encoding (MinMaxScaler & OneHotEncoder)',
      'Model Training with 5-Fold Stratified Cross-Validation',
      'Hyperparameter Grid Optimization & Feature Importance Extraction',
      'Serialization via Joblib for Real-time Microservice Inference'
    ],
    githubUrl: 'https://github.com/anispanigrahi/predictive-analysis-model',
    liveDemoUrl: '#demo',
    featured: true,
    date: '2026',
    stars: 38,
    interactiveType: 'prediction-demo'
  },
  {
    id: 'data-analytics-dashboard',
    title: 'Enterprise Data Analytics Dashboard',
    category: 'Data Analytics',
    tagline: 'Interactive business intelligence dashboard for multidimensional data visualization',
    description:
      'Constructed a dynamic analytics dashboard enabling users to dissect multi-attribute operational metrics, trend distributions, cross-categorical drill-downs, and automated anomaly flags.',
    fullOverview:
      'Designed to transform noisy transactional datasets into actionable visual stories. The dashboard integrates responsive filtering across dates, geographic zones, and performance cohorts. Features real-time KPI aggregations, moving average trendlines, and automated executive summary generation.',
    techStack: ['Python', 'SQL', 'Data Analytics', 'Pandas', 'Chart.js / SVG', 'TailwindCSS'],
    metrics: [
      { label: 'Query Latency', value: '< 45ms' },
      { label: 'Visual Widgets', value: '12 Dynamic KPIs' },
      { label: 'Data Points Processed', value: '120,000+' },
      { label: 'Export Support', value: 'CSV / Excel / PDF' }
    ],
    architectureSteps: [
      'Relational Schema Formulation & Optimized SQL Aggregation Queries',
      'ETL Pipeline with Automated Data Cleansing and Resampling',
      'Client-side Reactive KPI Calculation Engine',
      'Interactive Filtering by Date Cohort and Category Demographics',
      'Custom Export Pipeline for Executive Summary Reports'
    ],
    githubUrl: 'https://github.com/anispanigrahi/data-analytics-dashboard',
    liveDemoUrl: '#demo',
    featured: true,
    date: '2025 - 2026',
    stars: 42,
    interactiveType: 'analytics-demo'
  },
  {
    id: 'ai-ml-academic-suite',
    title: 'AI/ML Applied Solutions Suite',
    category: 'AI/ML',
    tagline: 'Collection of applied machine learning modules and computer vision / NLP algorithms',
    description:
      'Curated repository of academic and applied software implementations applying foundational and state-of-the-art AI algorithms to real-world domain challenges.',
    fullOverview:
      'Includes modules for text classification with TF-IDF and Naive Bayes, image edge and contour analysis with OpenCV, k-means clustering for user segmentation, and neural network experimentation. Demonstrates rigorous adherence to clean code, modular architecture, and unit testing.',
    techStack: ['Python', 'Machine Learning', 'Artificial Intelligence', 'Git', 'NumPy', 'SciPy'],
    metrics: [
      { label: 'Algorithms Implemented', value: '8 Core Models' },
      { label: 'Clean Test Coverage', value: '92%' },
      { label: 'Modular Repos', value: '4 Submodules' },
      { label: 'Documentation Score', value: '100% Comprehensive' }
    ],
    architectureSteps: [
      'Problem Decomposition into Mathematical Formulation',
      'Vectorized Mathematical Operations with NumPy Arrays',
      'Validation Pipeline with Precision, Recall, and F1 Scoring',
      'Automated Git Versioning and Documentation with Jupyter Notebooks'
    ],
    githubUrl: 'https://github.com/anispanigrahi/aiml-academic-suite',
    liveDemoUrl: '#demo',
    featured: true,
    date: '2025',
    stars: 29,
    interactiveType: 'nlp-demo'
  },
  {
    id: 'cloud-serverless-ml-api',
    title: 'Cloud-Ready ML Inference Gateway',
    category: 'Python',
    tagline: 'Lightweight REST microservice for low-latency machine learning inference in the cloud',
    description:
      'Developed a containerized REST API in Python to host serialized ML models, supporting batched inputs, JSON payload validation, and request rate-limiting.',
    fullOverview:
      'Leveraging concepts from the NPTEL Cloud Computing certification, this system ensures models can scale horizontally across serverless workers while providing health check telemetry and error logging.',
    techStack: ['Python', 'Flask / REST API', 'Cloud Computing', 'Git', 'Docker / JSON'],
    metrics: [
      { label: 'P99 Latency', value: '32ms' },
      { label: 'Concurrent Capacity', value: '250 req/sec' },
      { label: 'Payload Overhead', value: '< 2KB' },
      { label: 'Uptime Reliability', value: '99.9%' }
    ],
    architectureSteps: [
      'Serialized Model Loading into Shared Memory Worker Pools',
      'Pydantic-style Schema Validation for Payload Integrity',
      'Thread-safe Inference Execution with Fallback Bounds',
      'Automated Error Tracking and Logging Telemetry'
    ],
    githubUrl: 'https://github.com/anispanigrahi/cloud-ml-gateway',
    featured: false,
    date: '2026',
    stars: 21
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'journey-into-ai-and-ml-btech',
    title: 'My Journey into AI & ML: From Python Fundamentals to Predictive Modeling',
    excerpt:
      'A deep dive into how I transitioned from writing basic syntax to building full machine learning pipelines, optimizing models, and mastering data intuition.',
    content: [
      'When I began my B.Tech in Computer Science specializing in AI & ML, the world of machine learning felt like an intimidating combination of complex calculus, high-dimensional matrices, and abstract algorithmic theories.',
      'The turning point came when I stopped treating machine learning as a pure mathematical puzzle and started treating it as an engineering discipline rooted in Python and data quality. Writing data exploration scripts with Pandas and visualizing distributions transformed abstract concepts into concrete patterns.',
      'Developing my first Predictive Analysis model taught me the irreplaceable value of exploratory data analysis (EDA). You quickly realize that 80% of model performance hinges on feature engineering, handling skewed outliers, and understanding missing value mechanisms—not merely selecting the newest algorithm.',
      'To fellow undergraduates embarking on this path: Master your foundational tools—Python, Git, SQL, and linear algebra. The algorithmic frameworks become intuitive once your data mechanics are solid.'
    ],
    category: 'Machine Learning',
    tags: ['AI/ML', 'Python', 'Career Journey', 'Data Science'],
    publishedDate: 'September 12, 2026',
    readTime: '4 min read',
    views: 412,
    likes: 58,
    comments: [
      {
        id: 'c1',
        author: 'Rahul Sharma',
        date: 'Sept 14, 2026',
        text: 'Inspiring journey, Anis! Great emphasis on EDA and clean data prep.'
      },
      {
        id: 'c2',
        author: 'Priya Das',
        date: 'Sept 16, 2026',
        text: 'The advice on mastering SQL and Python before jumping to deep learning is spot on.'
      }
    ]
  },
  {
    id: 'post-2',
    slug: 'building-effective-data-analytics-dashboards',
    title: 'Architecting High-Impact Data Analytics Dashboards with Python & SQL',
    excerpt:
      'How to bridge raw database tables and executive decisions through intuitive visual hierarchy, smart aggregations, and rapid query optimization.',
    content: [
      'A great analytics dashboard is not a collection of disconnected charts; it is a visual argument that leads directly to a decision.',
      'During the creation of my Data Analytics Dashboard project, I established three fundamental design principles: Cognitive Load Reduction, Progressive Disclosure, and Sub-second Query Response.',
      'First, SQL queries should perform heavy aggregations on the database layer before data reaches the rendering engine. Window functions and indexed groupings reduce payload sizes by up to 90%.',
      'Second, never overwhelm the viewer with fifteen metrics simultaneously. Group your top-line KPI summaries at the top, followed by interactive temporal drill-downs and distribution curves below.',
      'Lastly, always provide frictionless export capabilities—executives and recruiters appreciate clean PDF summaries and raw CSV extracts to validate findings.'
    ],
    category: 'Data Analytics',
    tags: ['Data Analytics', 'SQL', 'Dashboard Design', 'BI'],
    publishedDate: 'August 28, 2026',
    readTime: '5 min read',
    views: 348,
    likes: 47,
    comments: [
      {
        id: 'c3',
        author: 'Amitabh Mishra',
        date: 'Aug 30, 2026',
        text: 'Loved the breakdown of SQL aggregation offloading. Very practical.'
      }
    ]
  },
  {
    id: 'post-3',
    slug: 'cloud-computing-for-ml-engineers-nptel',
    title: 'Cloud Computing Fundamentals for ML Practitioners: Lessons from NPTEL',
    excerpt:
      'Key takeaways from my NPTEL Cloud Computing certification: why virtualization, containerization, and serverless compute are essential for modern ML pipelines.',
    content: [
      'Many machine learning courses teach students how to train models locally in Jupyter notebooks. However, a model residing on a local laptop cannot deliver business value.',
      'My NPTEL certification in Cloud Computing opened my eyes to distributed computing, elasticity, and cloud storage patterns. Training a model is only step one; orchestrating low-latency inference endpoints with zero downtime is where true engineering begins.',
      'Key concepts every aspiring engineer should master include stateless microservices, object storage for serialized artifacts, and auto-scaling groups that scale down during idle hours to preserve budget.',
      'Pairing cloud knowledge with Python gives you the superpower to deliver turn-key ML solutions from ingestion to production.'
    ],
    category: 'Cloud Computing',
    tags: ['Cloud', 'NPTEL', 'DevOps', 'Machine Learning'],
    publishedDate: 'August 10, 2026',
    readTime: '4 min read',
    views: 295,
    likes: 39,
    comments: []
  },
  {
    id: 'post-4',
    slug: 'generative-ai-practical-prompting-rag',
    title: 'Demystifying Generative AI: From Coursera Certifications to Real-World Code',
    excerpt:
      'Understanding transformer foundations, vector embeddings, and why Retrieval-Augmented Generation (RAG) is transforming production intelligence.',
    content: [
      'Generative AI is shifting paradigms across software engineering. Through my Coursera certification in Generative AI, I explored transformer architectures, self-attention mechanisms, and probabilistic token generation.',
      'The most critical realization is that LLMs without domain grounding suffer from hallucinations. By integrating vector embeddings and semantic search, RAG anchors generated responses to verified internal knowledge bases.',
      'As AI/ML developers, our value lies not in merely prompting models, but in architecting deterministic verification guardrails, measuring hallucination rates, and reducing token overhead.'
    ],
    category: 'Artificial Intelligence',
    tags: ['Generative AI', 'Coursera', 'LLMs', 'Prompt Engineering'],
    publishedDate: 'July 24, 2026',
    readTime: '6 min read',
    views: 520,
    likes: 73,
    comments: []
  }
];

export const INITIAL_SYSTEM_LOGS: SystemLog[] = [
  {
    id: 'log-1',
    timestamp: '10:55:04 AM',
    level: 'info',
    service: 'AnalyticsEngine',
    message: 'Telemetry session initialized. Visitor IP anonymized under GDPR/CCPA standard.',
    latencyMs: 14
  },
  {
    id: 'log-2',
    timestamp: '10:55:12 AM',
    level: 'success',
    service: 'PredictiveModelWorker',
    message: 'Model artifact [predictive_v2.joblib] hot-loaded into memory cache.',
    latencyMs: 22
  },
  {
    id: 'log-3',
    timestamp: '10:55:20 AM',
    level: 'info',
    service: 'CloudGateway',
    message: 'Global CDN edge node matched: asia-east1 (Baleswar / Bhubaneswar proxy latency optimal).',
    latencyMs: 18
  },
  {
    id: 'log-4',
    timestamp: '10:55:42 AM',
    level: 'success',
    service: 'NotificationBroker',
    message: 'Contact form notification pipeline active. SMTP & Webhook gateways verified.',
    latencyMs: 29
  },
  {
    id: 'log-5',
    timestamp: '10:56:02 AM',
    level: 'info',
    service: 'SecurityMiddleware',
    message: 'RBAC permissions verified: Active visitor token granted Public/Guest privileges.',
    latencyMs: 9
  }
];

export const VISITOR_ANALYTICS_DATA = [
  { date: 'Mon', visitors: 142, pageViews: 380, avgTime: '3m 12s', cloudLatency: 24 },
  { date: 'Tue', visitors: 188, pageViews: 492, avgTime: '3m 45s', cloudLatency: 22 },
  { date: 'Wed', visitors: 245, pageViews: 610, avgTime: '4m 02s', cloudLatency: 21 },
  { date: 'Thu', visitors: 210, pageViews: 540, avgTime: '3m 38s', cloudLatency: 25 },
  { date: 'Fri', visitors: 310, pageViews: 790, avgTime: '4m 20s', cloudLatency: 23 },
  { date: 'Sat', visitors: 280, pageViews: 670, avgTime: '3m 50s', cloudLatency: 20 },
  { date: 'Sun', visitors: 360, pageViews: 920, avgTime: '4m 45s', cloudLatency: 19 }
];

export const GEO_TRAFFIC_DATA = [
  { region: 'India (Odisha & Metros)', percentage: 68, visitors: 1180 },
  { region: 'United States', percentage: 14, visitors: 243 },
  { region: 'Germany & UK', percentage: 9, visitors: 156 },
  { region: 'Singapore / APAC', percentage: 6, visitors: 104 },
  { region: 'Other Locations', percentage: 3, visitors: 52 }
];
