import { Project, Experiment, TechItem } from './types';
import profileAvatar from './assets/images/aryan_actual_portrait.jpg';

// Aryan Sharma's original authentic portrait photo
export const PROFILE_AVATAR_URL = profileAvatar;
export const GHIBLI_AVATAR_URL = profileAvatar;
export const ARCANE_AVATAR_URL = profileAvatar;
export const STUDIO_AVATAR_URL = profileAvatar;

export const GITHUB_URL = 'https://github.com/Aryaa1704';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/aryan-sharma-04582b244/';
export const INSTAGRAM_URL = 'https://www.instagram.com/';
export const EMAIL_ADDRESS = 'aryansharma6745@gmail.com';

export const PROJECTS: Project[] = [
  {
    id: 'cultpluse',
    number: '01',
    tag: '[FITNESS TECH / REACT / FULL-STACK PLATFORM]',
    title: 'CultPulse (CultPlus) — Fitness Ecosystem & Studio Workouts',
    description:
      'High-performance full-stack fitness and wellness ecosystem inspired by Cult.fit. Features class & trainer scheduling, live workout streak telemetry, biometric calorie computation, tiered CultPass memberships (Elite / Pro / Home), real-time slot reservation matrices, and interactive workout logs.',
    pipelineTitle: 'WORKOUT TELEMETRY & BOOKING PIPELINE',
    pipelineSteps: ['[USER INGEST]', '[CLASS SCHEDULE]', '[SLOT LOCK]', '[CULT-PASS VERIFY]', '[TELEMETRY LOG]', '[STREAK DISPATCH]'],
    techStack: [
      'React / TypeScript',
      'Node.js / Express',
      'Tailwind CSS',
      'REST API & Webhooks',
      'JWT Authentication',
      'PostgreSQL / Prisma',
      'Biometric Telemetry',
    ],
    githubUrl: 'https://github.com/Aryaa1704/cultpulse',
    liveUrl: 'https://cultpulse.vercel.app',
    stars: 3,
    category: 'backend-cloud',
    metrics: [
      { label: 'WORKOUT MODES', value: 'HIIT / YOGA / BOXING / S&C' },
      { label: 'SLOT LATENCY', value: '< 32ms BOOKING' },
      { label: 'PASS TIERS', value: 'CULT ELITE & PRO' },
      { label: 'TELEMETRY', value: 'CALORIE / BPM / STREAKS' },
    ],
    details:
      'Engineered for high-concurrency studio booking spikes with atomic slot reservations, real-time trainer schedules, biometric burn estimation models, and motivational streak leaderboards.',
  },
  {
    id: 'qualitrack',
    number: '02',
    tag: '[INDUSTRIAL IOT / FASTAPI / DEFECT ANALYTICS]',
    title: 'QualiTrack — Manufacturing Quality Inspection Platform',
    description:
      'Enterprise manufacturing quality inspection and defect analytics platform built with FastAPI, SQLAlchemy ORM, JWT Authentication, and dynamic Chart.js analytics. Ingests assembly inspection telemetry, isolates failure rates, and plots statistical process control (SPC) curves.',
    pipelineTitle: 'QUALITY INSPECTION TELEMETRY FLOW',
    pipelineSteps: ['[ASSEMBLY INGEST]', '[ANOMALY CHECK]', '[DEFECT SEVERITY]', '[YIELD ANALYSIS]', '[DISPATCH ALERT]'],
    techStack: [
      'FastAPI',
      'Python',
      'SQLAlchemy',
      'JWT Authentication',
      'Chart.js',
      'Pydantic',
      'PostgreSQL / SQLite',
    ],
    githubUrl: 'https://github.com/Aryaa1704/qualitrack-enterprise-project',
    liveUrl: 'https://qualitrack-enterprise-project.onrender.com/',
    stars: 3,
    category: 'systems-iot',
    metrics: [
      { label: 'INSPECTION TIME', value: '< 24ms / UNIT' },
      { label: 'DEFECT RECALL', value: '98.7% ACCURACY' },
      { label: 'THROUGHPUT', value: '5,000 UNITS/HR' },
      { label: 'ORM PERSISTENCE', value: 'SQLAlchemy ACID' },
    ],
    details:
      'Designed for industrial smart factories. Features defect categorization, role-based inspection auditing, time-series defect heatmaps, and automated yield threshold alerts.',
  },
  {
    id: 'chargeback-risk',
    number: '03',
    tag: '[FINTECH RISK / GEMINI AGENT / RAZORPAY TRACK]',
    title: 'AI Chargeback Risk & Evidence Response Agent',
    description:
      'Fintech risk-operations application built for the Razorpay AI Builder Track (Track 02: AI Risk Manager). Combines a backend ML chargeback-risk classifier with a bounded Google Gemini investigation agent for automated evidence synthesis and dispute defense.',
    pipelineTitle: 'COGNITIVE FLOW MATRIX',
    pipelineSteps: ['[TXN INGEST]', '[ML RISK SCORER]', '[EVIDENCE AGENT]', '[GEMINI SYNTHESIS]', '[REPRESENTMENT PACK]'],
    techStack: [
      'Google Gemini API',
      'Python',
      'Machine Learning',
      'Risk Forensics',
      'Streamlit',
      'Razorpay AI Track',
      'PDF Synthesis',
    ],
    githubUrl: 'https://github.com/Aryaa1704/AI-Chargeback-Risk-Evidence-Response-Agent',
    liveUrl: 'https://ai-chargeback-risk-evidence-response.onrender.com/',
    youtubeUrl: 'https://youtu.be/ud7P6qilmlc?si=V4iVDrkg7O9IdUI-',
    stars: 2,
    category: 'fintech-trading',
    metrics: [
      { label: 'WIN RATE BOOST', value: '+38% MERCHANT RECOVERY' },
      { label: 'EVIDENCE TRIAGE', value: '180ms PARSE' },
      { label: 'RISK ACCURACY', value: '95.4% CLASSIFIER' },
      { label: 'AUDIT TRACE', value: '100% REGULATORY READY' },
    ],
    details:
      'Automates merchant representment letters using similarity search across previous dispute wins, transaction telemetry logs, and bounded Gemini reasoning.',
  },
  {
    id: 'job-agent',
    number: '04',
    tag: '[AI AGENT / PLAYWRIGHT / RECRUITMENT AUTOMATION]',
    title: 'AI Job Agent — Automated Discovery & Application System',
    description:
      'Autonomous recruitment agent for the Indian job ecosystem (Naukri, Internshala, Foundit, Wellfound). Evaluates candidate resume vectors against live postings, generates ATS-optimized resumes and custom cover letters, and executes headless Playwright applications.',
    pipelineTitle: 'DATA PIPELINE TOPOLOGY',
    pipelineSteps: ['[PORTAL CRAWL]', '[AI MATCHING]', '[ATS RESHAPE]', '[PLAYWRIGHT BOT]', '[TRACKING LOG]'],
    techStack: [
      'Python',
      'Playwright',
      'LLM Agent Swarm',
      'BeautifulSoup',
      'Pydantic',
      'Redis Queues',
      'Google Sheets API',
    ],
    githubUrl: 'https://github.com/Aryaa1704/job-agent',
    liveUrl: 'https://job-agent-swarm.vercel.app',
    stars: 2,
    category: 'ai-agents',
    metrics: [
      { label: 'THROUGHPUT', value: '1,200 JOBS/HR' },
      { label: 'MATCH PRECISION', value: '94.8%' },
      { label: 'EXECUTION SPEED', value: '< 14s / APPLICATION' },
      { label: 'PORTALS SUPPORTED', value: 'NAUKRI / INTERNSHALA / WELLFOUND' },
    ],
    details:
      'Uses headless browser workers managed via async Python queues with auto-captcha recovery and multi-persona resume tuning.',
  },
  {
    id: 'ultron',
    number: '05',
    tag: '[AI / AUTONOMOUS WORKFLOWS / JARVIS]',
    title: 'Ultron — Autonomous AI Assistant & Workflow Engine',
    description:
      'A JARVIS-inspired autonomous AI system orchestrating tasks, calendar scheduling, meeting bookings, code generation, deep research, form filling, and digital workflows from a unified intelligent interface with LLM function-calling capabilities.',
    pipelineTitle: 'AUTONOMOUS WORKFLOW MATRIX',
    pipelineSteps: ['[PROMPT / VOICE]', '[INTENT PARSER]', '[TOOL ORCHESTRATOR]', '[EXECUTION PIPELINE]', '[TELEMETRY LOG]'],
    techStack: [
      'Python',
      'LLM Function Calling',
      'Autonomous Agent Swarm',
      'AsyncIO',
      'System Automation',
      'Streamlit / FastAPI',
      'APIs & Webhooks',
    ],
    githubUrl: 'https://github.com/Aryaa1704/Ultron',
    liveUrl: 'https://ultron-copilot.vercel.app',
    stars: 3,
    category: 'ai-agents',
    metrics: [
      { label: 'AGENT COGNITION', value: 'MULTI-TOOL REASONING' },
      { label: 'EXECUTION SPEED', value: '< 350ms DISPATCH' },
      { label: 'WORKFLOW MODES', value: 'CALENDAR / RESEARCH / CODE' },
      { label: 'AUTONOMY LEVEL', value: 'HUMAN-IN-THE-LOOP' },
    ],
    details:
      'Engineered to act as a personal digital copilot. Features modular tool binders for desktop orchestration, scheduled recurring automations, and LLM-grounded reasoning chains.',
  },
  {
    id: 'binance-bot',
    number: '06',
    tag: '[QUANT / CRYPTO / BINANCE FUTURES API]',
    title: 'Binance USDT-M Futures Automated Trading Engine',
    description:
      'Python CLI algorithmic trading system engineered for Binance USDT-M Futures Testnet. Implements Market & Limit order routing, automated BUY/SELL position management, strict stop-loss and take-profit calculations, parameter sanitization, and structured audit logs.',
    pipelineTitle: 'ORDER DISPATCH & RISK CONTROL TOPOLOGY',
    pipelineSteps: ['[TICK STREAM]', '[ORDER VALIDATOR]', '[LEVERAGE RISK GUARD]', '[BINANCE EXECUTION]', '[POSITION TELEMETRY]'],
    techStack: [
      'Python',
      'Binance Futures API',
      'Argparse CLI',
      'AsyncIO',
      'Algorithmic Trading',
      'Structured JSON Logs',
    ],
    githubUrl: 'https://github.com/Aryaa1704/-Trading-Bot-on-Binance-Futures-Testnet',
    liveUrl: 'https://binance-futures-engine.vercel.app',
    stars: 1,
    category: 'fintech-trading',
    metrics: [
      { label: 'ORDER ROUTING', value: '< 18ms' },
      { label: 'MODES', value: 'MARKET & LIMIT ORDERS' },
      { label: 'RISK CONTROL', value: 'BOUNDED LEVERAGE & SL' },
      { label: 'AUDIT TRACE', value: 'TIMESTAMPED JSON LOGS' },
    ],
    details:
      'Modular trading architecture with defensive error handling, testnet simulation modes, real-time margin tracking, and CLI ergonomics.',
  },
  {
    id: 'intellisignal',
    number: '07',
    tag: '[SIGNAL PROCESSING / DSP / AI FAULT DIAGNOSIS]',
    title: 'INTELLISIGNAL — AI Signal Analysis & Fault Diagnosis',
    description:
      'Integrated hardware-software diagnostics array capturing raw electromagnetic and vibration waveforms, computing Fast Fourier Transforms (FFT), and utilizing 1D convolutional neural networks to isolate micro-transient anomalous signals with sub-millisecond precision.',
    pipelineTitle: 'SPECTRAL TELEMETRY TOPOLOGY',
    pipelineSteps: ['[RF INGESTION]', '[FFT TRANSFORM]', '[CONV1D RESNET]', '[SPECTROGRAM]', '[FAULT LOCALIZATION]'],
    techStack: [
      'Python',
      'PyTorch',
      'SciPy DSP',
      'OpenCV',
      'Signal Intelligence',
      'Matplotlib',
      'NumPy',
    ],
    githubUrl: 'https://github.com/Aryaa1704/intelligent-signal-analysis-fault-diagnosis.',
    liveUrl: 'https://intellisignal-dsp.vercel.app',
    stars: 1,
    category: 'systems-iot',
    metrics: [
      { label: 'FREQUENCY', value: '2412.5 MHz' },
      { label: 'HARMONIC THD', value: '0.003%' },
      { label: 'SAMPLE RATE', value: '10 MS/s' },
      { label: 'CLASSIFIER', value: 'CNN-ResNet1D' },
    ],
    details:
      'Captures real-time RF transients, transforms time-domain arrays into 2D spectrogram matrices, and classifies physical hardware anomalies.',
  },
  {
    id: 'dhaaga',
    number: '08',
    tag: '[JAVA / SPRING BOOT / ENTERPRISE BACKEND]',
    title: 'DHAAGA — Full-Stack E-Commerce Architecture',
    description:
      'Enterprise shopping cart and checkout architecture built with Java, Spring Boot, Spring Security, JWT authentication, Hibernate ORM, JPA, and MySQL. Engineered with layered Clean Architecture, transactional cart management, and payment verification.',
    pipelineTitle: 'SPRING BOOT ENTERPRISE DISPATCH',
    pipelineSteps: ['[REST REQUEST]', '[SPRING SECURITY]', '[JWT FILTER]', '[SERVICE LAYER]', '[HIBERNATE / JPA]', '[MYSQL DB]'],
    techStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Hibernate ORM',
      'JPA',
      'MySQL',
      'JWT Authentication',
      'Maven',
    ],
    githubUrl: 'https://github.com/Aryaa1704/DHAAGA--E--COMMERCE',
    liveUrl: 'https://dhaaga-store.vercel.app',
    stars: 1,
    category: 'backend-cloud',
    metrics: [
      { label: 'FRAMEWORK', value: 'SPRING BOOT 3' },
      { label: 'SECURITY', value: 'STATELESS JWT FILTER' },
      { label: 'DATA PERSISTENCE', value: 'HIBERNATE / JPA' },
      { label: 'TRANSACTIONS', value: 'ACID MYSQL COMPLIANT' },
    ],
    details:
      'Includes role-based access control (RBAC), catalog management, shopping cart state management, checkout transaction workflows, and defensive exception handling.',
  },
  {
    id: 'jwt-task-manager',
    number: '09',
    tag: '[BACKEND / REST API / DUAL-TOKEN AUTH]',
    title: 'Dual-Token JWT Task Manager Microservice',
    description:
      'Production-hardened REST API with dual-token JWT authentication (short-lived access token + httpOnly refresh cookie), Role-Based Access Control (RBAC: user/admin), Bcrypt password hashing, MongoDB document persistence, and full CRUD task orchestration.',
    pipelineTitle: 'AUTHENTICATION EXECUTION MAP',
    pipelineSteps: ['[CLIENT]', '[GATEWAY]', '[JWT AUTH]', '[RBAC GUARD]', '[CONTROLLER]', '[MONGODB]'],
    techStack: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT (Access & Refresh)',
      'Bcrypt',
      'React UI',
    ],
    githubUrl: 'https://github.com/Aryaa1704/backend-development',
    liveUrl: 'https://jwt-taskmanager-api.vercel.app',
    stars: 1,
    category: 'backend-cloud',
    metrics: [
      { label: 'ACCESS TOKEN', value: '15m SHORT-LIVED' },
      { label: 'REFRESH TOKEN', value: '7d HTTPONLY SECURE' },
      { label: 'HASH ROUNDS', value: '12 BCRYPT' },
      { label: 'API LATENCY', value: '< 8ms p99' },
    ],
    details:
      'Zero-trust stateless API architecture with role-based access control, cryptographic token refresh rotation, and rate-limiting bucket algorithms.',
  },
];

export const GITHUB_REPOSITORIES = [
  {
    name: 'cultpulse',
    description:
      'CultPulse (CultPlus) — High-performance full-stack fitness & wellness ecosystem inspired by Cult.fit. Features class scheduling, live streak tracking, tiered CultPass memberships, and workout telemetry.',
    stars: 3,
    language: 'TypeScript / React',
    url: 'https://github.com/Aryaa1704/cultpulse',
    liveUrl: 'https://cultpulse.vercel.app',
    tag: 'Fitness Tech',
  },
  {
    name: 'qualitrack-enterprise-project',
    description:
      'QualiTrack – Manufacturing Quality Inspection & Defect Analytics Platform built with FastAPI, SQLAlchemy, JWT Auth, and Chart.js.',
    stars: 3,
    language: 'Python / FastAPI',
    url: 'https://github.com/Aryaa1704/qualitrack-enterprise-project',
    liveUrl: 'https://qualitrack-enterprise-project.onrender.com/',
    tag: 'Industrial IoT',
  },
  {
    name: 'AI-Chargeback-Risk-Evidence-Response-Agent',
    description:
      'Fintech risk-operations application for Razorpay AI Builder Track 02. ML risk model + bounded Gemini investigation agent for automated evidence synthesis.',
    stars: 2,
    language: 'Python / Gemini',
    url: 'https://github.com/Aryaa1704/AI-Chargeback-Risk-Evidence-Response-Agent',
    liveUrl: 'https://ai-chargeback-risk-evidence-response.onrender.com/',
    tag: 'Razorpay AI Track',
  },
  {
    name: 'job-agent',
    description:
      'AI Job Agent — Automated Job Discovery & Application System for Indian job market (Naukri, Internshala, Wellfound) using LLMs & Playwright.',
    stars: 2,
    language: 'Python / Playwright',
    url: 'https://github.com/Aryaa1704/job-agent',
    liveUrl: 'https://job-agent-swarm.vercel.app',
    tag: 'Agent Swarm',
  },
  {
    name: 'Ultron',
    description:
      'A JARVIS-inspired autonomous AI assistant that can manage tasks, schedules, meetings, bookings, coding, research, forms, and digital workflows from a single intelligent interface.',
    stars: 3,
    language: 'Python',
    url: 'https://github.com/Aryaa1704/Ultron',
    liveUrl: 'https://ultron-copilot.vercel.app',
    tag: 'Autonomous Agent',
  },
  {
    name: '-Trading-Bot-on-Binance-Futures-Testnet',
    description:
      'Python CLI trading bot for Binance USDT-M Futures Testnet with Market & Limit orders, input validation, structured logging, and risk controls.',
    stars: 1,
    language: 'Python',
    url: 'https://github.com/Aryaa1704/-Trading-Bot-on-Binance-Futures-Testnet',
    liveUrl: 'https://binance-futures-engine.vercel.app',
    tag: 'Quant Trading',
  },
  {
    name: 'intelligent-signal-analysis-fault-diagnosis.',
    description:
      'AI-assisted platform for automated signal analysis and fault diagnosis using DSP, FFT, machine learning, and natural-language diagnostic assistance.',
    stars: 1,
    language: 'Python / PyTorch',
    url: 'https://github.com/Aryaa1704/intelligent-signal-analysis-fault-diagnosis.',
    liveUrl: 'https://intellisignal-dsp.vercel.app',
    tag: 'DSP & ML',
  },
  {
    name: 'DHAAGA--E--COMMERCE',
    description:
      'Full-stack E-Commerce Shopping Cart application with Java, Spring Boot, Spring Security, JWT Authentication, Hibernate, JPA, and MySQL.',
    stars: 1,
    language: 'Java / Spring Boot',
    url: 'https://github.com/Aryaa1704/DHAAGA--E--COMMERCE',
    liveUrl: 'https://dhaaga-store.vercel.app',
    tag: 'Enterprise Java',
  },
  {
    name: 'backend-development',
    description:
      'Secure & scalable REST API with two-token JWT authentication, role-based access control (user/admin), full CRUD on tasks, MongoDB, and Express.',
    stars: 1,
    language: 'JavaScript / Node.js',
    url: 'https://github.com/Aryaa1704/backend-development',
    liveUrl: 'https://jwt-taskmanager-api.vercel.app',
    tag: 'REST API & Auth',
  },
  {
    name: 'REST-API-Development',
    description:
      'FastAPI-based Student Management REST API with JWT authentication, CRUD operations, Pydantic validation, and interactive Swagger documentation.',
    stars: 2,
    language: 'Python / FastAPI',
    url: 'https://github.com/Aryaa1704/REST-API-Development',
    liveUrl: 'https://student-mgmt-api.vercel.app',
    tag: 'FastAPI / Swagger',
  },
  {
    name: 'began',
    description:
      'Image Processing and Pattern Recognition project focused on extracting meaningful information from images and identifying patterns using computer vision.',
    stars: 0,
    language: 'Python / OpenCV',
    url: 'https://github.com/Aryaa1704/began',
    tag: 'Computer Vision',
  },
  {
    name: 'movie-recomadation',
    description:
      'Personalized recommendation engine utilizing content-based filtering techniques and cosine similarity matrices to deliver accurate recommendations.',
    stars: 0,
    language: 'Python / Scikit-Learn',
    url: 'https://github.com/Aryaa1704/movie-recomadation',
    tag: 'Recommendation Engine',
  },
  {
    name: 'mern-stack-internship-assignment',
    description:
      'Full-stack authentication app with two-token JWT system (short-lived access + long-lived httpOnly refresh cookie) and auto token refresh.',
    stars: 0,
    language: 'JavaScript / MERN',
    url: 'https://github.com/Aryaa1704/mern-stack-internship-assignment',
    tag: 'MERN Auth',
  },
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'exp-tensor',
    code: 'EXP_01',
    category: 'TENSOR PROJECTION',
    title: 'Neural Network Latent Projection',
    description:
      'Dimensionality reduction visualization mapping 512-dimension vector embeddings down to interactive 3D cluster coordinates using WebGL shaders.',
    tech: 't-SNE / UMAP / WebGL',
    icon: 'blur_on',
  },
  {
    id: 'exp-waveform',
    code: 'EXP_02',
    category: 'ACOUSTIC / SPECTRAL',
    title: 'Procedural Waveform & Fourier Visualizer',
    description:
      'Pure math-driven real-time audio synthesis engine breaking down multi-sine harmonic resonance curves into distinct Fourier bins in browser canvas.',
    tech: 'Web Audio API / Canvas',
    icon: 'graphic_eq',
  },
  {
    id: 'exp-vision',
    code: 'EXP_03',
    category: 'OPENCV / PERCEPTION',
    title: 'Spatial Bounding Box Object Tracker',
    description:
      'High-performance camera inference stream identifying movement centroids and plotting spatial vectors with zero server dependency.',
    tech: 'TensorFlow.js / Vision',
    icon: 'crop_free',
  },
  {
    id: 'exp-streamer',
    code: 'EXP_04',
    category: 'SSE / GENERATIVE',
    title: 'Real-time LLM Token Streamer',
    description:
      'Server-Sent Events (SSE) pipeline with reactive typing velocity feedback, token entropy calculation, and raw latency tracking.',
    tech: 'FastAPI SSE / Vanilla JS',
    icon: 'stream',
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Python', role: 'PRIMARY', category: 'core', proficiency: 'Advanced', description: 'Async asyncio, NumPy, PyTorch, automation, data engineering.' },
  { name: 'React.js', role: 'UI_SYS', category: 'core', proficiency: 'Advanced', description: 'Next-gen interfaces, motion dynamics, reactive state architectures.' },
  { name: 'FastAPI', role: 'ASYNC_API', category: 'backend', proficiency: 'Advanced', description: 'High-throughput microservices, Pydantic schemas, OpenAPI specs.' },
  { name: 'Node.js', role: 'RUNTIME', category: 'backend', proficiency: 'Advanced', description: 'V8 runtime, event-loop profiling, stream pipes.' },
  { name: 'Express', role: 'SERVER', category: 'backend', proficiency: 'Proficient', description: 'Stateless middleware chains, REST APIs, session hardening.' },
  { name: 'MongoDB', role: 'NOSQL', category: 'database', proficiency: 'Proficient', description: 'Document stores, aggregations, indexing, clustering.' },
  { name: 'PostgreSQL', role: 'RELATIONAL', category: 'database', proficiency: 'Proficient', description: 'ACID transactions, relational schema design, query optimization.' },
  { name: 'Redis', role: 'IN_MEMORY', category: 'database', proficiency: 'Advanced', description: 'Sub-millisecond caches, distributed locks, Pub/Sub streams.' },
  { name: 'Docker', role: 'CONTAINER', category: 'infra', proficiency: 'Proficient', description: 'Multi-stage containerization, isolation, microservice orchestration.' },
  { name: 'LLMs & RAG', role: 'COGNITION', category: 'ai', proficiency: 'Advanced', description: 'Vector embeddings, chunking strategies, tool agents, fine-tuning.' },
  { name: 'Computer Vision', role: 'PERCEPTION', category: 'ai', proficiency: 'Proficient', description: 'OpenCV filters, object tracking, edge detection, optical flow.' },
  { name: 'Machine Learning', role: 'PYTORCH', category: 'ai', proficiency: 'Proficient', description: '1D CNNs, neural classification, feature engineering.' },
  { name: 'Git & CI/CD', role: 'PIPELINE', category: 'infra', proficiency: 'Advanced', description: 'GitHub Actions, automated test suites, zero-downtime releases.' },
];
