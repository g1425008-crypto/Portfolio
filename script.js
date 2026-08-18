import './style.css';

const projects = {
  data: { image: 'data factory.png', alt: 'Data Factory AI training dataset generation pipeline visualization' },
  rag: { image: 'advanced rag.png', alt: 'Advanced RAG systems architecture visualization' },
  transfer: { image: 'transfer learning.png', alt: 'Transfer learning comparison visualization' },
  arjuna: { image: 'arjuna.png', alt: 'ARJUNA reinforcement learning environment visualization' },
  cyber: { image: 'cybergaurd ai.png', alt: 'CyberGuard AI multilingual complaint intelligence platform' },
  compression: { image: 'deep model compression.png', alt: 'Deep model compression visualization' },
};
const github = 'https://github.com/Pruthvi-workspace';
const link = (href, label = 'VIEW ON GITHUB ↗') => `<a class="project-link" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;
const img = (key, cls = '') => `<img class="${cls}" src="/${projects[key].image}" alt="${projects[key].alt}" loading="lazy" decoding="async" />`;
const flow = (items) => `<div class="flow">${items.map(x => `<span>${x}</span>`).join('')}</div>`;
const head = (label, right) => `<div class="section-head reveal"><span>${label}</span><span class="right">${right}</span></div>`;
const lede = (h, p) => `<div class="lead-grid reveal"><h2 class="display">${h}</h2><p>${p}</p></div>`;
const projectImage = (key, tag) =>
  `<div class="project-image">${tag ? `<span class="image-tag">${tag}</span>` : ''}${img(key)}</div>`;

document.querySelector('#app').innerHTML = `
<div class="progress" aria-hidden="true"></div>
<header class="site-nav" id="top">
  <a class="nav-name" href="#top">PRUTHVIRAJ SHINDE</a>
  <nav class="nav-links" aria-label="Primary">
    <a href="#work">WORK</a><a href="#experience">EXPERIENCE</a><a href="#about">ABOUT</a><a href="#research">RESEARCH</a><a href="#contact">CONTACT ↗</a>
  </nav>
  <button class="menu-button" aria-label="Open menu" aria-expanded="false">MENU</button>
</header>
<div class="mobile-menu">
  <a href="#work">WORK</a><a href="#experience">EXPERIENCE</a><a href="#about">ABOUT</a><a href="#research">RESEARCH</a><a href="#contact">CONTACT ↗</a>
</div>

<main>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-copy reveal">
      <p class="eyebrow">AI ENGINEER · DATA SCIENTIST · BUILDER</p>
      <h1 id="hero-title">I BUILD<br><em class="serif">AI</em></h1>
      <p class="hero-intro">I'm Pruthviraj — an AI &amp; Data Science engineer building intelligent systems across machine learning, generative AI, retrieval, deep learning and research.</p>
      <div class="hero-meta">
        <div><span class="k">BASED IN</span><strong>BANGALORE / INDIA</strong></div>
        <div><span class="k">EDUCATION</span><strong>CSE — DATA SCIENCE</strong></div>
        <div><span class="k">NOW</span><strong>2023 — 2027</strong></div>
      </div>
    </div>
    <figure class="hero-visual reveal">
      <img src="/hero.png" alt="Editorial portrait of Pruthviraj Shinde" fetchpriority="high" decoding="async">
      <figcaption>PRUTHVIRAJ / 2026</figcaption>
    </figure>
    <div class="hero-bottom">
      <a class="scroll-hint" href="#about"><i></i>SCROLL TO EXPLORE</a>
      <a class="arrow-link" href="${github}" target="_blank" rel="noreferrer">GITHUB ↗</a>
    </div>
  </section>

  <section class="statement" id="about">
    <div class="wrap">
      ${head('01 / ABOUT', 'WHO I AM')}
      ${lede('I BUILD SYSTEMS,<br>NOT JUST MODELS.', 'I work across AI, data and engineering — turning experiments into useful systems and exploring what happens when intelligent models meet real-world problems.')}
    </div>
  </section>

  <section class="manifesto">
    <div class="wrap">
      <div class="manifesto-grid reveal">
        <h2 class="display">FROM DATA<br>TO <em class="serif">DECISIONS.</em></h2>
        <div class="manifesto-list">
          <div class="manifesto-item"><b>01</b><strong>EXPLORE</strong></div>
          <div class="manifesto-item"><b>02</b><strong>BUILD</strong></div>
          <div class="manifesto-item"><b>03</b><strong>QUESTION</strong></div>
          <p>Curiosity starts the experiment. Engineering makes it useful. Research asks whether it actually works.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="work-intro" id="work">
    <div class="wrap">
      ${head('02 / SELECTED WORK', 'THE LAB')}
      ${lede('THINGS<br>I\'VE<br>BUILT.', 'From training-data infrastructure and retrieval systems to deep-learning experiments and autonomous environments.')}
    </div>
  </section>

  <section class="project project-data">
    <div class="wrap">
      <div class="project-head reveal">
        <div class="project-number">01</div>
        <div class="project-title"><h3>DATA<br>FACTORY</h3><p>AI INFRASTRUCTURE / DATA ENGINEERING</p></div>
      </div>
      ${projectImage('data', 'AI TRAINING DATASET GENERATION PIPELINE')}
      <div class="project-caption reveal">
        <p class="lede">A modular production-ready pipeline that transforms raw documents into structured AI training datasets.</p>
        <div class="project-details">
          <div><div class="detail-label">ARCHITECTURE</div>${flow(['LOAD', 'CLEAN', 'CHUNK', 'GENERATE', 'QUALITY CONTROL', 'EXPORT'])}</div>
          <div><div class="detail-label">SYSTEM NOTES</div><div class="detail-copy">PyMuPDF · Trafilatura · recursive / fixed / paragraph / sentence chunking · LLM-powered QA · summarization · classification · toxicity, bias, diversity and coherence checks.</div><div class="tech-list"><span>Pydantic v2</span><span>Click CLI</span><span>Python SDK</span><span>Streamlit</span></div></div>
          <div><div class="detail-label">VERIFIED SIGNAL</div><div class="detail-copy"><strong>57 PASSING TESTS</strong> — 22 unit / 35 end-to-end · LLM token-cost tracking · MIT licensed</div></div>
          ${link('https://github.com/pruthvirajshunde1111-ctrl/AI-training-database')}
        </div>
      </div>
    </div>
  </section>

  <section class="statement">
    <div class="wrap">
      ${head('THE STARTING POINT', '01 → 02')}
      <h2 class="display reveal">DATA IS THE<br>STARTING<br>POINT.</h2>
    </div>
  </section>

  <section class="project project-rag">
    <div class="wrap">
      <div class="project-head reveal">
        <div class="project-number">02</div>
        <div class="project-title"><h3>ADVANCED<br>RAG SYSTEMS</h3><p>RETRIEVAL · AGENTS · EVALUATION</p></div>
      </div>
      ${projectImage('rag', 'ENTER THE SYSTEM')}
      <div class="project-caption reveal">
        <p class="lede">A collection of advanced retrieval and agentic architectures exploring how AI systems retrieve, reason, evaluate and correct themselves.</p>
        <div class="project-details">
          <div class="tech-list"><span>LangChain</span><span>LangGraph</span><span>ChromaDB</span><span>FAISS</span><span>Groq</span><span>nomic-embed-text</span><span>RAGAS</span></div>
          <div class="rag-flow"><div>QUERY</div><div>↓ &nbsp; RETRIEVE</div><div>↓ &nbsp; REASON</div><div>↓ &nbsp; EVALUATE</div><div>↓ &nbsp; CORRECT</div></div>
          <div class="detail-copy">Five experiments: Agentic Design Patterns · Hybrid Search RAG · Corrective RAG · RAG + RAGAS · Self-Adaptive RAG.</div>
          ${link('https://github.com/pruthvirajshunde1111-ctrl/RAG-PROJECTS')}
        </div>
      </div>
    </div>
  </section>

  <section class="project project-research">
    <div class="wrap">
      <div class="project-head reveal">
        <div class="project-number">03</div>
        <div class="project-title"><h3>TRANSFER<br>LEARNING<br>STUDY</h3><p>DEEP LEARNING / COMPUTER VISION / RESEARCH</p></div>
      </div>
      <div class="project-layout reveal">
        <div class="project-image">${img('transfer')}</div>
        <div class="project-details">
          <p class="lede">A comparative study of Standard Fine-Tuning and Adaptive Fine-Tuning on ImageNet-pretrained models using CalTech-101.</p>
          <div class="research-stats">
            <div class="stat"><strong>RESNET-50</strong><small>~23.7M PARAMETERS</small></div>
            <div class="stat"><strong>DENSENET-121</strong><small>~7.1M PARAMETERS</small></div>
            <div class="stat"><strong>ALL FOUR COMBINATIONS &gt;95%</strong><small>TOP-1 ACCURACY</small></div>
            <div class="stat"><strong>6× FEWER</strong><small>TRAINABLE PARAMETERS · RESNET-50 AFT</small></div>
          </div>
          <div class="detail-copy">Adaptive fine-tuning uses importance-based gradient masking with the top 25% filters by mean absolute activation. CalTech-101 · 70 / 10 / 20 split · seed 42 · Macro-F1 / Top-1 Accuracy.</div>
          ${link('https://github.com/Pruthvi-workspace/Transfer-learning-')}
        </div>
      </div>
    </div>
  </section>

  <section class="transition">
    <div class="wrap">
      <p class="eyebrow reveal">FROM MODELS TO SYSTEMS</p>
      ${lede('BUT MODELS ARE ONLY PART OF THE SYSTEM.', 'THE NEXT QUESTION:<br>HOW DO THEY <em class="serif">ACT?</em>')}
    </div>
  </section>

  <section class="project project-arjuna">
    <div class="wrap">
      <div class="project-head reveal">
        <div class="project-number">04</div>
        <div class="project-title"><h3>ARJUNA</h3><p>REINFORCEMENT LEARNING / AI INFRASTRUCTURE</p></div>
      </div>
      <div class="project-layout reveal">
        <div class="project-copy">
          <h4>AUTONOMOUS PERCEPTION &amp; AUTO-CURRICULUM RL ENVIRONMENT</h4>
          <p>An OpenEnv-compliant FastAPI environment designed to test reinforcement-learning generalization and automatic curriculum progression.</p>
          ${flow(['OBSERVE', 'DECIDE', 'ACT', 'REWARD', 'LEARN'])}
          <div class="logic">
            <div class="logic-row"><span>&lt;0.35</span><span>DISCARD</span></div>
            <div class="logic-row"><span>0.35–0.50</span><span>REQUEST_RESCAN</span></div>
            <div class="logic-row"><span>≥0.50</span><span>LOG_AND_CONTINUE</span></div>
            <div class="logic-row"><span>EASY → MEDIUM → HARD</span><span>AUTO CURRICULUM</span></div>
          </div>
          <div class="detail-copy">FastAPI · OpenEnv · 14 offline scenario bundles · 3-step episodes: IDENTIFY / TRIAGE / DECIDE · CSV audit logging · zero network calls. The zero-shot Llama-3/Groq baseline became stuck at Medium tier.</div>
          ${link('https://github.com/Pruthvi-workspace/Arjuna-Env')}
        </div>
        <div class="project-image">${img('arjuna')}</div>
      </div>
    </div>
  </section>

  <section class="project project-cyber">
    <div class="wrap">
      <div class="project-head reveal">
        <div class="project-number">05</div>
        <div class="project-title"><h3>CYBERGUARD<br>AI</h3><p>NLP / MULTILINGUAL AI / SOCIAL IMPACT</p></div>
      </div>
      <div class="project-layout reveal">
        <div class="project-image"><span class="image-tag">LANGUAGE + ACCESSIBILITY + IMPACT</span>${img('cyber')}</div>
        <div class="project-copy">
          <h4>MULTILINGUAL AI COMPLAINT INTELLIGENCE</h4>
          <p>A production-oriented AI complaint registration platform supporting voice and text workflows across 22 Indian languages.</p>
          ${flow(['VOICE / TEXT', 'LANGUAGE', 'AI UNDERSTANDING', 'CLASSIFICATION', 'STRUCTURED COMPLAINT'])}
          <div class="research-stats">
            <div class="stat"><strong>22</strong><small>INDIAN LANGUAGES</small></div>
            <div class="stat"><strong>95%</strong><small>CLASSIFICATION ACCURACY</small></div>
            <div class="stat"><strong>~70%</strong><small>REDUCTION IN MANUAL DATA ENTRY TIME</small></div>
          </div>
          <div class="tech-list"><span>Streamlit</span><span>Gemini AI</span><span>Supabase</span><span>TTS</span><span>STT</span><span>SMTP</span></div>
          ${link('https://github.com/Pruthvi-workspace/CyberGuard-AI')}
        </div>
      </div>
    </div>
  </section>

  <section class="project project-compression">
    <div class="wrap">
      <div class="project-head reveal">
        <div class="project-number">06</div>
        <div class="project-title"><h3>DEEP MODEL<br>COMPRESSION</h3><p>MLOPS / EDGE AI / MODEL OPTIMIZATION</p></div>
      </div>
      ${projectImage('compression')}
      <div class="project-caption reveal">
        <p class="lede">Exploring how deep learning models can become smaller, faster and more deployment-ready.</p>
        <div class="project-details">${link('https://github.com/Pruthvi-workspace/Deep-model-Compression')}</div>
      </div>
    </div>
  </section>

  <section class="other-work">
    <div class="wrap">
      ${head('07 / OTHER WORK', 'TEXT ONLY')}
      <div class="other-row reveal">
        <span class="num">07</span>
        <h3>ML-BASED DIABETES<br>RISK PREDICTION</h3>
        ${link('https://github.com/Pruthvi-workspace/Diabetes-Early-Prediction-Using-ML', 'VIEW PROJECT ↗')}
      </div>
      <div class="project-caption reveal">
        <p class="lede">An XGBoost-based early diabetes risk prediction system combining model probability with rule-based clinical thresholds.</p>
        <div class="project-details">
          <div class="tech-list"><span>XGBoost</span><span>Streamlit</span><span>Hybrid Risk Scoring</span></div>
          <div class="detail-copy">~90% model accuracy</div>
        </div>
      </div>
    </div>
  </section>

  <section class="reflection">
    <div class="wrap">
      ${head('WHAT THE PROJECTS HAVE TAUGHT ME', 'REFLECTION')}
      <h2 class="display reveal">GOOD AI IS A<br>CONVERSATION<br>BETWEEN <em class="serif">PARTS.</em></h2>
      <div class="reflection-lines">
        <div class="reflection-line reveal">DATA IS NEVER JUST DATA.</div>
        <div class="reflection-line reveal">MODELS ARE NEVER THE WHOLE PRODUCT.</div>
        <div class="reflection-line reveal">RETRIEVAL CHANGES HOW SYSTEMS REASON.</div>
        <div class="reflection-line reveal">EXPERIMENTS NEED EVALUATION.</div>
        <div class="reflection-line reveal">GOOD AI NEEDS GOOD ENGINEERING.</div>
        <div class="reflection-line reveal">AND I'M STILL <em class="serif">BUILDING.</em></div>
      </div>
    </div>
  </section>

  <section class="experience" id="experience">
    <div class="wrap">
      ${head('03 / EXPERIENCE', 'WHERE I\'VE WORKED')}
      <h2 class="display reveal">WHERE I'VE<br>WORKED.</h2>
      <div class="timeline">
        <article class="timeline-item reveal">
          <small>MAY 2025 — JUL 2025<br>MUMBAI / INDIA</small>
          <div>
            <h3>TATA POWER</h3>
            <h4>AI INTERN</h4>
            <p>Automated RFQ analysis and vendor evaluation through an AI-powered PDF extraction pipeline with Excel auto-filling dashboards. Integrated Azure OpenAI with Retrieval-Augmented Generation for context-aware RFQ insights.</p>
            <div class="tech-list"><span>Azure OpenAI</span><span>RAG</span><span>PDF extraction</span><span>Excel automation</span></div>
            <a class="arrow-link" href="https://drive.google.com/file/d/1PGHSKMC8JjjN9YWWVHrlk3xhtV8VlW74/view" target="_blank" rel="noreferrer">CERTIFICATE ↗</a>
          </div>
          <div class="metric">~70%<small>TIME REDUCTION</small></div>
        </article>
        <article class="timeline-item reveal">
          <small>APR 2025 — JUL 2025<br>BANGALORE / INDIA</small>
          <div>
            <h3>GOCRAKIT</h3>
            <h4>ML INTERN</h4>
            <p>Developed an AI + RAG-based resume extraction and mentor recommendation system. Designed NLP- and LLM-powered resume parsing pipelines and explored AI Coach workflows involving personalization, feedback loops and automated decision support.</p>
            <div class="tech-list"><span>RAG</span><span>NLP</span><span>LLMs</span><span>Recommendation Systems</span></div>
            <a class="arrow-link" href="https://drive.google.com/file/d/1pg3PC5hYOu6sZYsqIUnEfyMfaDWzEnUX/view" target="_blank" rel="noreferrer">CERTIFICATE ↗</a>
          </div>
          <div class="metric">~35%<small>RELEVANCE IMPROVEMENT</small></div>
        </article>
      </div>
    </div>
  </section>

  <section class="about" id="about-me">
    <div class="wrap">
      ${head('04 / BEYOND THE CODE', 'THE PERSON')}
      <div class="two-col reveal">
        <h2 class="display">I LIKE TO<br>UNDERSTAND<br><em class="serif">WHY.</em></h2>
        <div>
          <p>I like building things, but I also like understanding why they work.</p>
          <div class="interest-list">
            <span>READING FICTION</span><span>SUSPENSE / THRILLER FILMS</span><span>CRICKET</span><span>KABADDI</span><span>BADMINTON</span><span>WRITING</span><span>ENTREPRENEURSHIP</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="education">
    <div class="wrap">
      ${head('05 / EDUCATION', 'FOUNDATIONS')}
      <div class="two-col reveal">
        <h2 class="edu-school">VIDYASHILP<br><em class="serif">UNIVERSITY</em></h2>
        <div class="edu-meta">
          <div><span>DEGREE</span><strong>B.Tech (Hons.)</strong></div>
          <div><span>FIELD</span><strong>Computer Science &amp; Engineering</strong></div>
          <div><span>SPECIALIZATION</span><strong>Data Science</strong></div>
          <div><span>MINOR</span><strong>Finance</strong></div>
          <div><span>PERIOD</span><strong>2023 — 2027</strong></div>
          <div><span>CGPA</span><strong>8.41 / 10</strong></div>
        </div>
      </div>
    </div>
  </section>

  <section class="capabilities">
    <div class="wrap">
      ${head('06 / CAPABILITIES', 'THE TOOLS I THINK WITH')}
      <h2 class="display reveal">THE TOOLS<br>I THINK WITH.</h2>
      <div class="capability-grid reveal-stagger">
        <div class="capability"><h3>AI / MACHINE LEARNING</h3><p>Python · Scikit-learn · TensorFlow · PyTorch · XGBoost · Transformers · GANs · Random Forest · ResNet-50 · DenseNet-121 · Transfer Learning · Fine-Tuning</p></div>
        <div class="capability"><h3>GENAI / LLM</h3><p>LangChain · LangGraph · LangFlow · RAG · Azure OpenAI · Gemini · Prompt Engineering · LLM API Integration</p></div>
        <div class="capability"><h3>SEARCH</h3><p>ChromaDB · FAISS · BM25 · Hybrid Search · HuggingFace Embeddings · RAGAS</p></div>
        <div class="capability"><h3>DATA</h3><p>Pandas · NumPy · Matplotlib · Seaborn · Power BI · Tableau · Excel · EDA · Feature Engineering</p></div>
        <div class="capability"><h3>BACKEND</h3><p>FastAPI · REST API Design · Streamlit · Pydantic · Click CLI</p></div>
        <div class="capability"><h3>CLOUD / TOOLS</h3><p>AWS · Azure · Google Cloud · Git · GitHub · Jupyter · VS Code · Docker</p></div>
        <div class="capability"><h3>CORE CS</h3><p>Data Structures · Algorithms · DBMS · Operating Systems · OOP · Deep Learning</p></div>
      </div>
    </div>
  </section>

  <section class="research" id="research">
    <div class="wrap">
      ${head('07 / RESEARCH', 'QUESTIONS IN PROGRESS')}
      <h2 class="display reveal">I'M INTERESTED IN WHAT HAPPENS WHEN AI <em class="serif">DECIDES.</em></h2>
      <div class="research-bottom reveal">
        <p>This is an interest and research direction — a place to stay curious about the questions behind the systems.</p>
        <div class="research-keywords"><span>LEGAL AI</span><span>FAIRNESS</span><span>INTERPRETABILITY</span><span>RESPONSIBLE AI</span><span>MULTIMODAL AI</span></div>
      </div>
    </div>
  </section>

  <div class="marquee-wrap" aria-label="Currently exploring">
    <div class="marquee"><span>CURRENTLY EXPLORING →</span><span>LLM SYSTEMS</span><span>AGENTIC AI</span><span>RAG</span><span>MULTIMODAL AI</span><span>RESEARCH</span><span>SYSTEM DESIGN</span><span>MODEL OPTIMIZATION</span><span>AI PRODUCTS</span><span>CURRENTLY EXPLORING →</span><span>LLM SYSTEMS</span><span>AGENTIC AI</span><span>RAG</span><span>MULTIMODAL AI</span><span>RESEARCH</span><span>SYSTEM DESIGN</span><span>MODEL OPTIMIZATION</span><span>AI PRODUCTS</span></div>
  </div>

  <section class="contact" id="contact">
    <div class="wrap">
      ${head('LET\'S TALK', 'THE NEXT CHAPTER')}
      <h2 class="display reveal">LET'S BUILD <em class="serif">SOMETHING.</em></h2>
      <p class="reveal">If you're working on an interesting AI problem, research idea, product or system — I'd like to hear about it.</p>
      <div class="contact-links reveal">
        <a href="https://www.linkedin.com/in/pruthviraj-shinde-32027728a/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
        <a href="${github}" target="_blank" rel="noreferrer">GITHUB ↗</a>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <span>PRUTHVIRAJ SHINDE</span><span>AI / DATA / RESEARCH / BUILDING</span><span>2026 · <a href="#top">BACK TO TOP ↑</a></span>
</footer>`;

/* ── Scroll progress bar ───────────────────────────────────────────── */
const progress = document.querySelector('.progress');
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
};

/* ── Scroll spy (active nav link) ──────────────────────────────────── */
const nav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.nav-links a')];
const spyTargets = navLinks.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
const updateSpy = () => {
  const pos = scrollY + innerHeight * .35;
  let current = '';
  spyTargets.forEach(sec => { if (sec.offsetTop <= pos) current = `#${sec.id}`; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));
};

/* ── Magnetic links ────────────────────────────────────────────────── */
const magneticEls = [...document.querySelectorAll('.arrow-link, .project-link, .scroll-hint')];
magneticEls.forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * .14}px, ${(e.clientY - (r.top + r.height / 2)) * .22}px)`;
  });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
});

/* ── Hero title line-mask reveal ───────────────────────────────────── */
const hero = document.querySelector('.hero');
const title = hero.querySelector('h1');
if (title) {
  title.innerHTML = title.innerHTML.split('<br>')
    .map((line, i) => `<span class="line"><span class="words" style="--d:${i * .12}s">${line}</span></span>`)
    .join('');
}
requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('ready')));

/* ── Shared scroll handlers ────────────────────────────────────────── */
const onScroll = () => { updateProgress(); updateSpy(); };
window.addEventListener('scroll', onScroll, { passive: true });
updateProgress();
updateSpy();

nav.addEventListener('mouseenter', () => nav.classList.toggle('scrolled', window.scrollY > 24));
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

/* ── Section reveal observer ───────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .1, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));

/* ── Mobile menu ───────────────────────────────────────────────────── */
const menu = document.querySelector('.mobile-menu'), button = document.querySelector('.menu-button');
button.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? 'CLOSE' : 'MENU';
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'MENU';
}));