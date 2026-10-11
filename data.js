/* =====================================================================
   NEXTGEN AI — R26-DS-005  |  SITE CONTENT FILE
   ---------------------------------------------------------------------
   ALL website text, team details, documents and milestones live here.
   Edit this file only — every page is rendered from it.
   Fields marked  // EDIT  need your real values before the viva.
   To publish a document: drop the PDF into assets/docs/ (or slides into
   assets/slides/) and set its "file" path. Empty "file" = "Coming soon".
   ===================================================================== */

const SITE = {
  project: {
    id: "R26-DS-005",
    team: "NEXTGEN AI",
    title: "An Agentic AI Framework for Neuro-Marketing Strategy Generation Based on Cognitive and Behavioural Principles",
    shortTitle: "Agentic AI Neuro-Marketing Framework",
    tagline: "Turning four proven principles of consumer psychology into four cooperating AI agents that write marketing strategy for small businesses.",
    institute: "Sri Lanka Institute of Information Technology (SLIIT)",
    faculty: "Faculty of Computing — BSc (Hons) in Information Technology, Specialising in Data Science",
    year: "2026",
    email: "nextgenresearch4@gmail.com", 
    github: "https://github.com/praneesam/Nextgen-ai-website",
  },

  stats: [
    { value: "4", label: "Autonomous AI agents" },
    { value: "4", label: "Behavioural theories modelled" },
    { value: "7", label: "Product categories covered" },
    { value: "1", label: "Integrated FastAPI orchestrator" },
  ],

  /* ------------------------------ RESEARCH DOMAIN ------------------------------ */
  domain: {
    background: [
      "Small and medium-sized enterprises (SMEs) and beginner online sellers increasingly depend on digital channels, yet most cannot afford marketing specialists. The copy they publish is usually generic: it describes the product but ignores how customers actually decide to buy.",
      "Decades of consumer-behaviour research show that purchase decisions are shaped by predictable psychological mechanisms — whether a buyer is thinking fast or slow, the emotions a message carries, the perception that something is scarce, and the fear of losing out. Large language models can now write fluent copy, but on their own they apply none of this knowledge in a controlled, measurable or explainable way.",
      "This project bridges artificial intelligence, psychology and marketing by turning four of these principles into specialised AI agents. Each agent is an independent research study with its own data, models and evaluation; together they form a multi-agent system that produces a psychologically informed marketing strategy from a simple product description.",
    ],

    literature: [
      { theme: "Dual Process Theory", component: "C1", refs: [
        "Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.",
        "Evans, J. St. B. T., & Stanovich, K. E. (2013). Dual-process theories of higher cognition: Advancing the debate. Perspectives on Psychological Science, 8(3), 223–241.",
        "Epstein, S., Pacini, R., Denes-Raj, V., & Heier, H. (1996). Individual differences in intuitive–experiential and analytical–rational thinking styles. Journal of Personality and Social Psychology, 71(2), 390–405.",
        "Rook, D. W., & Fisher, R. J. (1995). Normative influences on impulsive buying behavior. Journal of Consumer Research, 22(3), 305–313.",
        "Voss, K. E., Spangenberg, E. R., & Grohmann, B. (2003). Measuring the hedonic and utilitarian dimensions of consumer attitude. Journal of Marketing Research, 40(3), 310–320.",
        "Hofstede, G. (1980). Culture's Consequences: International Differences in Work-Related Values. Sage.",
      ]},
      { theme: "Emotional Contagion", component: "C2", refs: [
        "Hatfield, E., Cacioppo, J. T., & Rapson, R. L. (1993). Emotional contagion. Current Directions in Psychological Science, 2(3), 96–100.",
        "Sutoyo, R., et al. (2022). PRDECT-ID: Indonesian product reviews dataset for emotions classification tasks. Data in Brief, Elsevier.",
      ]},
      { theme: "Scarcity Principle", component: "C3", refs: [
        "Cialdini, R. B. (2001). Influence: Science and Practice (4th ed.). Allyn & Bacon.",
        "Worchel, S., Lee, J., & Adewole, A. (1975). Effects of supply and demand on ratings of object value. Journal of Personality and Social Psychology, 32(5), 906–914.",
      ]},
      { theme: "Prospect Theory & Loss Aversion", component: "C4", refs: [
        "Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. Econometrica, 47(2), 263–291.",
        "Tversky, A., & Kahneman, D. (1981). The framing of decisions and the psychology of choice. Science, 211(4481), 453–458.",
      ]},
      { theme: "Machine Learning & NLP Methods", component: "All", refs: [
        "Liu, Y., et al. (2019). RoBERTa: A robustly optimized BERT pretraining approach. arXiv:1907.11692.",
        "Sanh, V., Debut, L., Chaumond, J., & Wolf, T. (2019). DistilBERT, a distilled version of BERT. arXiv:1910.01108.",
        "Breiman, L. (2001). Random forests. Machine Learning, 45(1), 5–32.",
        "Guo, C., Pleiss, G., Sun, Y., & Weinberger, K. Q. (2017). On calibration of modern neural networks. Proceedings of ICML.",
        "Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). \"Why should I trust you?\" Explaining the predictions of any classifier. Proceedings of KDD.",
        "Hutto, C. J., & Gilbert, E. (2014). VADER: A parsimonious rule-based model for sentiment analysis of social media text. Proceedings of ICWSM.",
      ]},
    ],

    gaps: [
      { gap: "Generic AI copywriting", detail: "Existing LLM-based marketing tools generate fluent text but do not explicitly model the psychological mechanism behind a purchase decision." },
      { gap: "Single-principle studies", detail: "Behavioural principles such as scarcity or loss framing are usually studied in isolation; few systems combine several principles in one coordinated pipeline." },
      { gap: "No decision-mode awareness", detail: "Tools rarely infer whether a product is bought impulsively (fast, emotional) or deliberately (slow, rational) before choosing a persuasion style." },
      { gap: "Uncontrolled persuasion intensity", detail: "Scarcity and fear-of-missing-out cues are applied without calibration, risking manipulative or untrustworthy messaging." },
      { gap: "Limited validation", detail: "Generated emotional or framed content is seldom verified by a separate classifier before it reaches the user." },
      { gap: "Inaccessible to SMEs", detail: "Psychology-informed marketing remains an expert skill; non-technical small business owners lack an affordable, automated alternative." },
    ],

    problem: "How can the psychological principles that drive consumer decision-making — dual-process reasoning, emotional contagion, scarcity and loss aversion — be operationalised as cooperating AI agents that automatically generate credible, ethically bounded and measurably effective marketing strategies for small businesses without marketing expertise?",

    objectives: {
      main: "To design, implement and evaluate a modular multi-agent AI framework that converts product information into a psychologically optimised marketing strategy by combining four agents, each grounded in a distinct behavioural science theory.",
      specific: [
        "Classify the dominant consumer decision mode (impulsive vs. deliberative) for a product and select a matching persuasion strategy (Component 1).",
        "Select a target emotion for a product category and embed it consistently in generated text and visual suggestions, verified by an emotion classifier (Component 2).",
        "Decide when scarcity cues are suitable and generate urgency messaging calibrated to preserve trust (Component 3).",
        "Reframe gain-based messages as loss-based narratives with controlled FOMO intensity and tone guardrails (Component 4).",
        "Integrate the four agents through a shared schema and an orchestrator that synthesises a final recommendation.",
        "Evaluate each agent empirically using classification metrics, A/B-style comparisons and user studies.",
      ],
    },

    methodology: [
      { step: "Requirement & literature analysis", text: "Reviewed behavioural science and NLP literature; defined SME seller personas and the four research questions per component." },
      { step: "Data collection & validation", text: "Sourced academically validated datasets (consumer-purchase survey mapped to validated instruments, PRDECT-ID, Amazon US Customer Reviews and others) after panel review of earlier datasets." },
      { step: "Model development", text: "Trained and compared classifiers per component (e.g. RoBERTa vs. LR/SVM/DistilBERT) and selected models through documented comparison studies." },
      { step: "Agent design", text: "Wrapped each model with an LLM generation stage, prompt templates and guardrails so every agent exposes a single run(input) → output interface." },
      { step: "Integration", text: "Defined shared Pydantic schemas, then built a FastAPI orchestrator (/generate-strategy) where Component 1's output feeds the downstream agents, plus a final synthesis step." },
      { step: "Evaluation", text: "Measured accuracy/F1 of classifiers, ran controlled message comparisons, and gathered human ratings of persuasion, emotion and trust." },
    ],

    pipeline: {
      input: "Product name, category, description & audience",
      c1: "Dual-System Reasoning Agent",
      branchA: ["Scarcity Optimization Agent"],
      branchB: ["Emotion Propagation Agent", "Loss Framing Agent"],
      output: "Final synthesised marketing recommendation",
    },

    technologies: [
      { group: "Languages & Frameworks", items: ["Python 3.12", "FastAPI", "Flask", "React + Vite", "Gradio"] },
      { group: "Machine Learning", items: ["HuggingFace Transformers", "RoBERTa", "DistilBERT", "scikit-learn", "Random Forest", "LIME", "VADER"] },
      { group: "Large Language Models", items: ["Groq API", "LLaMA 3.1 8B", "gpt-oss-20b", "Grok-3", "Gemini 2.0 Flash"] },
      { group: "Tools & Environment", items: ["Google Colab", "VS Code", "Git & GitHub", "Pydantic", "Jupyter"] },
    ],
  },

  /* -------------------------------- COMPONENTS -------------------------------- */
  components: [
    {
      id: "c1", num: "01", name: "Dual-System Reasoning Agent", theory: "Dual Process Theory",
      owner: "Buwaneka Fernando", ownerId: "IT22250438",
      color: "c1",
      summary: "Infers whether a product is bought through fast, emotional thinking (System 1) or slow, rational thinking (System 2) and recommends the matching persuasion strategy.",
      objective: "To develop an AI agent that distinguishes between fast, emotional and slow, rational decision processes and selects the most appropriate persuasion strategy accordingly.",
      questions: [
        "Can an AI system accurately infer the dominant cognitive processing mode in consumer decision-making?",
        "Does alignment between marketing strategy and cognitive processing mode improve engagement outcomes?",
      ],
      pipeline: [
        "Fine-tuned RoBERTa classifies product text as impulsive or deliberative",
        "Random Forest classifies buyer demographics from validated survey features",
        "Meta-learner stacking fuses both predictions",
        "Temperature Scaling (T = 5.0) calibrates confidence",
        "LLM generates emotional and rational copy; alignment score selects the recommendation",
      ],
      data: ["consumer-purchase.csv — 207 respondents, survey items mapped to Rook & Fisher (1995), Voss et al. (2003), Hofstede (1980), Epstein et al. (1996)", "80 / 20 train–test split"],
      models: ["RoBERTa (selected over LR, SVM, DistilBERT)", "Random Forest", "Stacking meta-learner", "LIME explainability"],
      evaluation: ["Classification accuracy and calibration", "A/B comparison of emotional vs. logical messaging", "Engagement preference across product categories"],
      results: [
        { value: "~91%", label: "RoBERTa classification accuracy" },
        { value: "T = 5.0", label: "Temperature Scaling for calibrated confidence" },
        { value: "≤ 0.95", label: "Confidence cap to prevent overconfidence" },
      ],
    },
    {
      id: "c2", num: "02", name: "Emotion Propagation Agent", theory: "Emotional Contagion",
      owner: "Savindi Pamodya", ownerId: "IT22132482",
      color: "c2",
      summary: "Chooses the emotion a product should evoke and writes copy and visual suggestions that carry it, then verifies the emotion with a classifier.",
      objective: "To design an AI agent that embeds targeted emotional signals into marketing content in order to influence consumer perception and behaviour.",
      questions: [
        "To what extent can AI-generated emotional content influence user perception and engagement?",
        "Which emotional states are most effective across different product categories?",
      ],
      pipeline: [
        "Category-to-emotion map selects a target emotion and alternatives",
        "Prompt built with per-emotion 'convey' and 'avoid' signals",
        "LLM generates a 35–60 word message",
        "Fine-tuned RoBERTa validator checks the emotion; regenerates up to 3 times",
        "Visual suggestions: colour palette, image style, layout mood",
      ],
      data: ["PRDECT-ID — expert-annotated product review emotions (Sutoyo et al., 2022)", "Validated via English back-translation similarity and RoBERTa consistency checks"],
      models: ["Fine-tuned RoBERTa emotion classifier", "Groq gpt-oss-20b", "8 target emotions: joy, excitement, trust, confidence, curiosity, relief, admiration, neutral"],
      evaluation: ["Emotion classification of generated content", "User studies on perceived emotional impact", "Engagement comparison across emotional variations"],
      results: [
        { value: "8", label: "Target emotions supported" },
        { value: "7", label: "Product categories mapped" },
        { value: "3×", label: "Validation-driven regeneration attempts" },
      ],
    },
    {
      id: "c3", num: "03", name: "Scarcity Optimization Agent", theory: "Scarcity Principle",
      owner: "Senadeera K.D.B.S.", ownerId: "IT22640666", // EDIT — confirm
      color: "c3",
      summary: "Decides whether scarcity suits a product, writes limited-stock, time-bound or exclusivity messaging, and calibrates intensity to keep it believable.",
      objective: "To develop an AI agent that strategically incorporates scarcity elements into marketing content to increase perceived urgency while maintaining credibility and trust.",
      questions: [
        "Does AI-driven incorporation of scarcity cues improve conversion intent?",
        "What level of scarcity maximises engagement without reducing trust?",
      ],
      pipeline: [
        "Random Forest suitability filter decides if scarcity is appropriate",
        "RoBERTa extracts customer pain points from negative reviews only",
        "LLM few-shot generation of scarcity copy",
        "VADER trust calibration, red-flag matching and intensity alignment",
      ],
      data: ["Amazon US Customer Reviews", "UCI Online Shoppers Purchasing Intention", "Flipkart Product Reviews", "jaykin01/advertisement-copy (HuggingFace)"],
      models: ["Random Forest", "RoBERTa", "Grok / Gemini LLM", "VADER sentiment"],
      evaluation: ["With vs. without scarcity comparison", "Human evaluation of purchase influence", "Trust and authenticity perception"],
      results: [
        { value: "0.71", label: "Random Forest suitability F1" },
        { value: "0.73", label: "RoBERTa pain-point extraction F1" },
        { value: "4.1–4.2 / 5", label: "Human-rated purchase influence (p = 0.031)" },
      ],
    },
    {
      id: "c4", num: "04", name: "Loss Framing Agent", theory: "Prospect Theory — Loss Aversion",
      owner: "Praneepa Samaraweera", ownerId: "IT22544704", // EDIT
      color: "c4",
      summary: "Rewrites gain-based messages as loss-based ones that highlight what a customer misses by not acting, while guarding against excessive negativity.",
      objective: "To design an AI agent that reframes marketing messages in terms of potential losses rather than gains, within ethical tone boundaries.",
      questions: [
        "Does loss framing outperform gain framing in influencing consumer decisions?",
        "What level of loss emphasis maximises persuasion without causing disengagement?",
      ],
      pipeline: [
        "LLaMA 3.1 8B converts gain messages into loss-framed equivalents",
        "Custom 24-keyword FOMO scoring measures loss emphasis",
        "VADER tone guardrail blocks excessively negative output",
        "DistilBERT validator confirms the message is genuinely loss-framed",
        "LLM-simulated A/B testing compares gain vs. loss framing",
      ],
      data: ["1,001 generated messages across 7 product categories"],
      models: ["LLaMA 3.1 8B (Groq)", "DistilBERT (selected over RoBERTa-Twitter and VADER)", "VADER"],
      evaluation: ["Gain vs. loss A/B comparison", "Tone safety compliance", "Framing classification accuracy"],
      results: [
        { value: "87.5%", label: "DistilBERT framing accuracy" },
        { value: "88.7%", label: "Tone safety compliance" },
        { value: "80.9%", label: "Simulated preference for gain framing" },
      ],
    },
  ],

  /* -------------------------------- MILESTONES -------------------------------- */
  // status: "done" | "current" | "upcoming"     date: EDIT to your real dates
  milestones: [
    { title: "Topic Assessment & Project Charter", date: "February 2026", status: "done", text: "Research topic, team and supervisors approved; scope of the four components defined." },
    { title: "Project Proposal Presentation", date: "March 2026", status: "done", text: "Research problem, gaps, objectives and proposed multi-agent architecture presented to the panel." },
    { title: "Progress Presentation 1 (≈50%)", date: "June 2026", status: "done", text: "Datasets finalised after panel feedback; baseline models and first agent prototypes demonstrated." },
    { title: "Progress Presentation 2 (≈90%)", date: "September 2026", status: "done", text: "All four agents complete; integrated FastAPI orchestrator and React interface demonstrated." },
    { title: "Research Paper & Final Reports", date: "October 2026", status: "current", text: "Individual theses (SLIIT format) and research paper prepared for submission." },
    { title: "Website Submission", date: "October 2026", status: "current", text: "Academic information website documenting the full research journey." },
    { title: "Final Presentation & Viva", date: "November 2026", status: "upcoming", text: "Final demonstration of the integrated system and individual component vivas." },
  ],

  /* -------------------------------- DOCUMENTS -------------------------------- */
  // file: path inside assets/docs/  e.g. "assets/docs/proposal-group.pdf".  "" shows "Coming soon".
  documents: [
    { category: "Initial Stage", items: [
      { title: "Topic Assessment Form", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Project Charter", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
    ]},
    { category: "Project Proposal", items: [
      { title: "Proposal Report — Component 1 (Dual-System)", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Proposal Report — Component 2 (Emotion)", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Proposal Report — Component 3 (Scarcity)", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Proposal Report — Component 4 (Loss Framing)", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
    ]},
    { category: "Progress & Checklists", items: [
      { title: "Status Document 1", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Status Document 2", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Checklist 1", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Checklist 2", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Research Logbooks", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
    ]},
    { category: "Final Stage", items: [
      { title: "Final Thesis — Component 1", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Final Thesis — Component 2", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Final Thesis — Component 3", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Final Thesis — Component 4", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
      { title: "Research Paper", type: "PDF", file: "https://drive.google.com/drive/folders/1KQys_T3S5Ixg07KC7Eop65u_J_TNwuyU?usp=drive_link" },
    ]},
  ],

  /* ------------------------------ PRESENTATIONS ------------------------------ */
  presentations: [
    { title: "Proposal Presentation", date: "March 2026", file: "https://drive.google.com/drive/folders/1DrWMRFNDqd23scE9hXiCN164khnlgr1R?usp=drive_link" },
    { title: "Progress Presentation 1", date: "June 2026", file: "https://drive.google.com/drive/folders/1DrWMRFNDqd23scE9hXiCN164khnlgr1R?usp=drive_link" },
    { title: "Progress Presentation 2", date: "September 2026", file: "https://drive.google.com/drive/folders/1DrWMRFNDqd23scE9hXiCN164khnlgr1R?usp=drive_link" },
    { title: "Final Presentation", date: "November 2026", file: "https://drive.google.com/drive/folders/1DrWMRFNDqd23scE9hXiCN164khnlgr1R?usp=drive_link" },
  ],

  /* ---------------------------------- TEAM ---------------------------------- */
  supervisors: [
    { name: "Mr. Samadhi Rathnayake", role: "Supervisor", org: "Faculty of Computing, SLIIT", email: "samadhi.r@sliit.lk",  photo: "assets/img/team/samadhi.jpeg"},    
    { name: "Ms. Adya Dissanayake", role: "Co-Supervisor", org: "Faculty of Computing, SLIIT", email: "adya.d@sliit.lk", photo: "assets/img/team/adya.jpeg" },     
  ],
  
  team: [
    { name: "Buwaneka Fernando", id: "IT22250438", role: "Dual-System Reasoning Agent", email: "fernandobuwaneka@gmail.com", photo: "assets/img/team/fernando.jpeg" },
    { name: "Savindi Pamodya", id: "IT22132482", role: "Emotion Propagation Agent", email: "savindipamodya@gmail.com", photo: "assets/img/team/widyasekara.jpeg" },
    { name: "Buddima Senadeera", id: "IT22640666", role: "Scarcity Optimization Agent", email: "Buddimasenadeera123@gmail.com", photo: "assets/img/team/senadeera.jpeg" },
    { name: "Praneepa Samaraweera", id: "IT22544704", role: "Loss Framing Agent", email: "praneepasamaraweera1000@gmail.com", photo: "assets/img/team/samaraweera.jpeg" },
  ]
};