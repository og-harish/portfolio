export const PERSONAL_INFO = {
  name: "Harish V",
  phone: "9500865039",
  email: "harish.og.official@gmail.com",
  location: "Chennai, TN",
  linkedin: "https://www.linkedin.com/in/harish-v-2b1489341",
  portfolio: "https://harish-portfolio-2026.netlify.app/",
  resumeUrl: "https://drive.google.com/file/d/1V3geeuCO6ogJ593vwcc-YH2ta7O-H2GT/view?usp=drive_link", 
  title: "AI/ML Engineer | Data Analyst | Full Stack Developer",
  summary: "Final-year BCA student with hands-on experience building ML pipelines, NLP-powered dashboards, and full-stack web applications. Proficient in Python, Scikit-learn, React.js, and SQL. Hackathon winner and international conference presenter with a proven track record of delivering impactful, end-to-end AI and data solutions.",
  about: "I am Harish V, an AI/ML Engineer and Data Analyst with a passion for constructing machine learning pipelines and full-stack web applications. Possessing continuous coding practice, I transition academic insights into practical, high-value technical architectures. I enjoy decoding intricate dataset patterns and delivering intuitive, production-grade tools."
};

export const EDUCATION = [
  { 
    period: "2023 – 2026", 
    degree: "Bachelor of Computer Applications (BCA)", 
    institution: "Hindustan College of Arts & Science, Chennai", 
    detail: "Focused on Computer Applications, Machine Learning, and Data Science." 
  }
];

export const SKILLS = {
  frontend: ["React.js", "HTML5", "CSS3", "Responsive WebDesign", "Cross-device Compatibility"],
  backend: ["Python", "Java", "SQL", "REST APIs"],
  tools: ["Git/GitHub", "VS Code", "Netlify", "Google Cloud Run", "Linux"],
  aiPlatforms: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Predictive Analytics", "EDA", "Power BI"],
  creative: ["Canva", "Adobe Premiere Pro"],
  core: ["Debugging", "Problem Solving", "Teamwork", "Fast Learner"]
};

export const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    company: "Gradtwin",
    duration: "4 Months",
    highlights: [
      "Built and evaluated 5+ classification and regression models using Scikit-learn; achieved up to 88% accuracy through iterative preprocessing, EDA, and cross-validation on real-world datasets.",
      "Produced Matplotlib-based visualization reports surfacing actionable data quality insights and communicating model performance to the team."
    ]
  },
  {
    role: "Java Full Stack Intern",
    company: "Pantech Solutions, Chennai",
    duration: "1 Month",
    highlights: [
      "Developed RESTful Java backend modules and responsive HTML/CSS/JS frontend components for a client-facing web application.",
      "Systematically resolved UI-backend integration issues to ensure seamless platform operations."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "2nd Place — HyperLaunch Hackathon",
    event: "Hindustan College of Arts & Science",
    topic: "Designed and pitched 'Career GPS' AI platform in 24 hrs; judged on innovation, technical execution, and real-world impact."
  },
  {
    title: "Research Presenter — BICET 2026",
    event: "Bharath International Conference on Emerging Technologies",
    topic: "Presented 'The Evolution of ML in Diabetes Mellitus' research paper."
  },
  {
    title: "Professional Certifications",
    event: "Pantech Solutions & Gradtwin",
    topic: "Java Full Stack Development | Machine Learning Applied Program (4 Months)"
  }
];

export const PROJECTS = [
  {
    title: "Sales Prediction System with NLP Dashboard",
    description: "An AI-powered sales analytics platform that predicts future sales and automatically generates intelligent business insights using Machine Learning and NLP. Engineered end-to-end ML sales forecasting on 10K+ records and deployed a Streamlit dashboard.",
    tech: ["Python", "Scikit-learn", "Streamlit", "NLP"],
    link: "https://sales-prediction-nlp-mxvtjjzuecftcn6q6po2om.streamlit.app/insights",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    vlogKey: "sales-prediction"
  },
  {
    title: "Career GPS — AI Career Guidance Platform",
    description: "An LLM-powered platform delivering personalized skill roadmaps across 5+ tech tracks; won 2nd Place at HyperLaunch Hackathon for full-stack execution. Includes custom resume parsing, skill gap analysis, and interactive dashboard analytics.",
    tech: ["React.js", "JavaScript", "LLM APIs", "Tailwind"],
    link: "https://job-ready-roadmap.lovable.app/?utm_source=chatgpt.com",
    github: "#",
    image: "https://images.unsplash.com/photo-1484417824460-68e7f8291583?q=80&w=1000&auto=format&fit=crop",
    vlogKey: "career-gps"
  },
  {
    title: "AI Assistant Chatbot",
    description: "Integrated third-party LLM APIs with stateful session management for smooth multi-turn feedback. Engineered structured prompts for educational purposes with high-fidelity responses and rapid streaming rendering.",
    tech: ["React.js", "REST API", "JavaScript", "NLP"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1000&auto=format&fit=crop",
    vlogKey: "ai-assistant-chatbot"
  }
];

export const SERVICES = [
  { title: "Predictive Analytics & ML", icon: "Brain", description: "Designing machine learning models to forecast trends and automate decision processes." },
  { title: "NLP & Chatbot Systems", icon: "Bot", description: "Constructing advanced natural language engines for conversational agents and insight extraction." },
  { title: "Web Application Design", icon: "Layout", description: "Building responsive, modern, high-performance user experiences with React and Tailwind CSS." },
  { title: "Data Visualization & Dashboards", icon: "Database", description: "Creating dynamic intelligence reporting tools and Streamlit-driven analytics panels." }
];

export const CAREER_GPS_VLOG = `
# Career GPS – Complete Project Explanation

An AI-powered career guidance and job-readiness platform designed to help students and freshers understand:
* What skills they currently have
* What career path suits them
* What critical skills they are missing
* How to become job-ready step-by-step

---

## 1. Main Idea of the Project
Most students enter the tech world facing massive disorientation:
* **Confusion**: Don’t know which specific role fits their natural strengths.
* **Knowledge Gap**: Don’t know what concrete skills top-tier companies expect.
* **Lack of Structure**: Do not know how to prepare systematically.

**Career GPS** acts like a **smart career mentor available 24/7**.
The platform operates as an active guide:
1. Collects candidate resumes or inputs.
2. Extracts and analyzes current strengths.
3. Aligns parameters with actual career trajectories.
4. Uncovers missing technical and interpersonal skills.
5. Generates a personalized roadmap and learning recommendations.

---

## 2. Problem Statement
Traditional counseling resources are expensive, lack scale, and fail to track long-term progress. Meanwhile, online checklists are generic and ignore individual backgrounds. Career GPS solves this by automating:
* **Career Direction Confusion**
* **Skill Gap Identification**
* **Tailored Learning Path Generation**
* **ATS-Level Resume Inspection**

---

## 3. Core Objective
> **“To provide personalized, interactive AI-based career guidance and job readiness tracking for modern students and aspiring developers.”**

---

## 4. Target Users
* College Students & Fresh Graduates
* Engineering, BCA, BSc, and MCA Graduates
* Professional Career Switchers
* Enthusiastic Self-taught Developers

---

## 5. Main Features of the Project

### A. Resume Upload & Parser
Users upload standard PDFs, DOCX files, or plain text resumes. The platform executes:
* **Text Extraction**: Uses robust script tools to scan structured and unstructured fields.
* **NLP Processing**: Semantic parsers categorize skills, educational histories, project outputs, and professional experience.

### B. Intelligent Skill Analysis Engine
Checks your existing skill metrics against real industry benchmarks.
* *Example*: If a user targets a **Data Scientist** role but only lists **Python**, the engine points out missing proficiencies like **Machine Learning, Pandas, SQL, Statistics, and Deep Learning**.

### C. Career Recommendation System
An AI classifier matches interests, skills, and background fields against hundreds of job profiles to recommend roles with the strongest semantic fit (e.g., *Frontend Developer, Data Analyst, Cloud Engineer*).

### D. Personalized Roadmap Generator
Outputs a highly structured, interactive **Beginner → Intermediate → Advanced** roadmap.
* *Example*: **Learn Python** ➔ **Master Pandas & NumPy** ➔ **Build Capstone Prototypes** ➔ **Practice LeetCode / Interview Qs** ➔ **Apply with Optimized Resume**.

### E. Interactive Progress Tracking Dashboard
Includes fluid completion meters, progress charts, and readiness scores. Users mark off completed items to visualize their job-readiness in real-time.

### F. Conversational Career Assistant
A specialized chatbot that answers targeted job inquiries, clarifies advanced topics, provides contextual interview questions, and assists in rewriting resume sections.

### G. Job Readiness Score (ATS Aligned)
Calculates a weighted average of profile strength:
* **Resume Quality Score (ATS)**: 80%
* **Technical Skill Coverage**: 70%
* **Hands-on Projects**: 60%
* **Weighted Job Readiness Indicator**: **72%** (Excellent Ready Phase)

---

## 6. System Workflow & Tech Stack

### High-Level Architecture
\`\`\`text
User Uploads Profile/Resume
          ↓
  NLP Parsing Engine
          ↓
  AI Correlation Layer (Detects Skill Gaps)
          ↓
Interactive Roadmap & Dashboard Generated
          ↓
Progress Tracking & Chatbot Guidance
\`\`\`

### Technology Arsenal
* **Frontend**: React.js, Tailwind CSS, Lucide icons, responsive canvas animations.
* **Processing**: NLP Models, Tokenizers, Regression, Sentence Transformers.
* **Hosting / Database**: Firebase integration for profile syncing and local state modules.
`;

export const SALES_PREDICTION_VLOG = `
# Sales Prediction & NLP Insight Platform

An elite AI-powered analytics dashboard that forecasts future sales streams, evaluates product performance, and extracts high-impact business summaries using advanced Machine Learning and Natural Language Processing.

---

## 1. Main Objective of the Project
> **“To accurately predict commercial revenue and automatically translate complex data patterns into plain-English business insights.”**

The system assists business decision-makers with:
* Estimating regional demand curves.
* Minimizing inventory blocks.
* Tracking customer satisfaction vectors from text reviews.

---

## 2. Problem Statement
Commercial entities generate gigabytes of transactional datasets daily. However, standard charts are silent and require technical data scientists to interpret. 

This platform automates the entire analytical lifecycle:
* **Data Ingestion** ➔ **Cleaning** ➔ **ML Regression Forecasting** ➔ **NLP Sentiment & Summary Generation**.

---

## 3. Dataset Composition
The processing engine consumes high-dimensional vectors with keys:
* \`date\` (Time stamp for forecasting)
* \`region\` (Geographic distribution)
* \`product_category\` (Product divisions)
* \`units_sold\` (Volume metric)
* \`revenue\` (Financial performance)
* \`discount_pct\` (Promotion metrics)
* \`customer_reviews\` (Unstructured text input)

---

## 4. Analytical Modules Breakdown

### Module 1: Preprocessing Pipeline
Auto-resolves uncleaned coordinates: fills missing fields, standardizes date formats, drops redundant records, scales numerical weights, and converts textual variables into vectorized arrays.

### Module 2: Exploratory Data Analysis (EDA)
Calculates core performance KPIs and draws lines:
* Regional Sales Distributions.
* Weekly Discount-to-Revenue Margins.
* Seasonal Trend Momentum blocks.

### Module 3: Feature Engineering
Extracts key temporal factors:
* Converted Date patterns: \`Day-of-Week\`, \`Quarter\`, \`Monthly Cycles\`.
* Calculated statistics: Rolling averages, seasonal indicators, and sales velocity indices.

### Module 4: Machine Learning Core
The forecasting layer utilizes:
* **Linear Regression**: Baseline calculation, establishing global mathematical guidelines:
  $$y = mx + b$$
* **Random Forest Regressor**: Handles multi-collinearity and high-dimension categories.
* **XGBoost / Gradient Boosting**: Maximizes speed and accuracy over extreme datasets.
* **LSTM (Time-Series)**: Evaluates complex sequence and recurrence logic.

### Module 5: NLP Insight Extraction Engine
The NLP subsystem ingests customer review strings:
1. **Cleaning**: Strips noise characters and filters stopwords.
2. **Sentiment Scoring**: Ranks reviews on a positive-to-negative spectrum.
3. **Keyword Extraction (TF-IDF)**: Matches words to reveal product issues or successes.
* *Output Example*: *"Electronics sales increased by 18% in Chennai during weekends, but negative screen reviews indicate a minor product batch issue."*

### Module 6: Interactive Streams & Chatbot
Allows corporate owners to query their data directly:
* *"Identify my best product categories in Q3."*
* *"Explain why sales dropped in south region during holidays."*

---

## 5. Advantage & Future Scope
* **Live Streams**: Designed to handle real-world scenarios like predicting e-commerce volume per-second across districts.
* **Actionable Summaries**: Saves hours of corporate briefing by delivering auto-generated briefings.
`;

export const CHATBOT_PROJECT_VLOG = `
# AI Assistant Chatbot Project

A stateful, highly responsive conversational agent that leverages LLM networks and advanced routing logic to deliver instant, customized educational and career mentoring.

---

## 1. Project Concept
The core purpose of this chatbot is to provide contextual, highly customized tutoring. Unlike simple Q&A tools, the conversational agent maintains dynamic session storage and understands advanced programming inquiries.

---

## 2. Key Accomplishments
* **State Management**: Implemented customized context buffers to allow natural multi-turn conversations without losing track of topic historical frames.
* **Prompt Construction**: Fine-tuned structured prompts to yield step-by-step guides, structured code snippets, or conversational checks tailored for technical students.
* **Latency Engineering**: Supported responsive streaming structures to render text fluidly, dropping perceived latency scores and boosting readability.
`;
