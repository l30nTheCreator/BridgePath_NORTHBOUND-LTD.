const STORAGE_KEYS = {
  accounts: "bridgepathAccounts",
  session: "bridgepathSession"
};

const schools = [
  "University of Washington",
  "Princeton University",
  "Massachusetts Institute of Technology",
  "Harvard University",
  "Stanford University",
  "Yale University",
  "University of Pennsylvania",
  "California Institute of Technology",
  "Duke University",
  "Brown University",
  "Johns Hopkins University",
  "Northwestern University",
  "Columbia University",
  "Cornell University",
  "University of Chicago",
  "University of California, Berkeley",
  "University of California, Los Angeles",
  "Rice University",
  "Dartmouth College",
  "Vanderbilt University",
  "University of Notre Dame",
  "University of Michigan",
  "Georgetown University",
  "University of North Carolina at Chapel Hill",
  "Carnegie Mellon University",
  "Emory University",
  "University of Virginia",
  "Washington University in St. Louis",
  "University of California, Davis",
  "University of California, San Diego",
  "University of Southern California",
  "University of Florida",
  "University of Texas at Austin",
  "Georgia Institute of Technology",
  "New York University",
  "Boston University",
  "Northeastern University",
  "University of Illinois Urbana-Champaign",
  "University of Wisconsin-Madison",
  "University of Toronto",
  "University of Waterloo",
  "University of British Columbia",
  "McGill University",
  "University of Alberta"
];

const majors = [
  "Business",
  "Finance",
  "Economics",
  "Accounting",
  "Marketing",
  "Entrepreneurship",
  "Computer Science",
  "Data Science",
  "Statistics",
  "Applied Math",
  "Engineering",
  "Information Systems",
  "Cognitive Science",
  "Design",
  "Psychology",
  "International Relations",
  "Public Policy",
  "Communication"
];

const industries = [
  "Finance",
  "Consulting",
  "Data Analytics",
  "Product Management",
  "Software Engineering",
  "Quant",
  "Marketing & Growth",
  "Entrepreneurship",
  "Accounting",
  "UX / Product Design"
];

const state = {
  currentUser: null,
  profile: {
    school: "University of Washington",
    stage: "Freshman Spring",
    major: "Business",
    industry: "Finance",
    hours: 8,
    status: "F-1 International Student"
  },
  range: "week",
  weekOffset: 0,
  tasksDone: new Set(["finance-week-resume-v1"]),
  alumniStatuses: {}
};

const industryTemplates = {
  Finance: {
    phase: "Foundation",
    milestone: "Resume v1",
    target: 20,
    skills: ["Excel", "accounting", "market awareness"],
    week: [
      ["resume-v1", "Build finance resume v1", "Turn coursework, club work, and projects into a one-page finance resume.", "Resume", 80],
      ["excel-basics", "Finish Excel basics", "Practice shortcuts, lookup formulas, pivot tables, and simple modeling.", "Technical Skills", 75],
      ["alumni-outreach", "Reach out to 3 finance alumni", "Prioritize banking, corporate finance, investment clubs, and search funds.", "Networking", 70],
      ["market-brief", "Write one market brief", "Prepare a short stock, sector, or macro note to use in coffee chats.", "Experience", 55]
    ],
    month: [
      ["resume-review", "Get two resume reviews", "Ask one upperclassman and one career center coach for feedback.", "Resume", 85],
      ["alumni-ten", "Contact 10 finance alumni", "Track cold, replied, chatted, and referral potential statuses.", "Networking", 80],
      ["finance-project", "Complete one finance mini project", "Build a company profile, comps table, or market update.", "Experience", 75],
      ["technical-base", "Learn accounting and valuation basics", "Cover three statements, valuation language, and interview-style explanations.", "Technical Skills", 75]
    ],
    quarter: [
      ["interview-base", "Finish technical interview base", "Accounting, valuation, behavioral stories, and market awareness.", "Interview", 90],
      ["alumni-twenty", "Reach 20 alumni conversations", "Aim for 6 strong relationships and 2 referral potential contacts.", "Networking", 90],
      ["application-list", "Create internship target list", "Track freshman, sophomore, diversity, search fund, and local finance roles.", "Pipeline", 80],
      ["leadership-proof", "Add one leadership proof point", "Own an event, investment memo, student org project, or analysis deliverable.", "Experience", 75]
    ]
  },
  Consulting: {
    phase: "Case Basics",
    milestone: "First case practice",
    target: 18,
    skills: ["case math", "structured thinking", "story bank"],
    week: [
      ["resume-v1", "Build consulting resume v1", "Frame leadership, impact, and problem-solving experience with metrics.", "Resume", 80],
      ["market-sizing", "Practice one market sizing case", "Use a simple structure and record weak spots after the case.", "Technical Skills", 70],
      ["alumni-outreach", "Reach out to 3 consultants", "Prioritize strategy, operations, and campus ambassador contacts.", "Networking", 70],
      ["industry-note", "Read one consulting industry report", "Collect two insights and one question for coffee chats.", "Research", 55]
    ],
    month: [
      ["resume-review", "Get two resume reviews", "Ask a consultant, upperclassman, or career advisor for feedback.", "Resume", 85],
      ["case-four", "Complete four cases", "Alternate market sizing, profitability, market entry, and product cases.", "Technical Skills", 80],
      ["alumni-ten", "Contact 10 consulting alumni", "Track outreach, follow-up, and firm-office fit.", "Networking", 80],
      ["client-project", "Join one consulting-style project", "Choose a project with client, research, or operations exposure.", "Experience", 75]
    ],
    quarter: [
      ["case-twelve", "Complete twelve cases", "Build comfort with structure, math, synthesis, and recommendation.", "Technical Skills", 90],
      ["alumni-eighteen", "Reach 18 alumni conversations", "Identify firms, offices, and teams that fit your background.", "Networking", 90],
      ["story-bank", "Create behavioral story bank", "Prepare leadership, conflict, failure, and teamwork stories.", "Interview", 80],
      ["application-list", "Create internship target list", "Include sophomore programs, boutiques, and campus roles.", "Pipeline", 80]
    ]
  },
  "Data Analytics": {
    phase: "Portfolio Setup",
    milestone: "First portfolio project",
    target: 16,
    skills: ["Python", "SQL", "data storytelling"],
    week: [
      ["resume-v1", "Build analytics resume v1", "Highlight coursework, tools, and measurable project outcomes.", "Resume", 80],
      ["python-basics", "Finish Python data basics", "Practice pandas, charts, joins, and cleaning messy data.", "Technical Skills", 75],
      ["alumni-outreach", "Reach out to 3 data alumni", "Target analysts in product, finance, operations, and growth teams.", "Networking", 70],
      ["dataset-scope", "Pick one business dataset", "Choose a dataset connected to decisions, not only visualization.", "Experience", 60]
    ],
    month: [
      ["portfolio-one", "Publish one analytics project", "Show question, method, insight, and recommendation.", "Experience", 85],
      ["sql-basics", "Complete SQL basics", "Practice joins, aggregations, subqueries, and window functions.", "Technical Skills", 80],
      ["alumni-eight", "Contact 8 data alumni", "Ask about role differences across analyst titles.", "Networking", 75],
      ["resume-review", "Get two resume reviews", "Focus on tools, impact, and project clarity.", "Resume", 85]
    ],
    quarter: [
      ["portfolio-two", "Publish two portfolio projects", "Make one business-facing and one technical project.", "Experience", 90],
      ["alumni-sixteen", "Reach 16 alumni conversations", "Identify teams that hire international underclassmen.", "Networking", 90],
      ["analytics-interview", "Practice analytics interviews", "SQL, metrics, product sense, and data storytelling.", "Interview", 85],
      ["application-list", "Create internship target list", "Include campus labs, startups, and local analyst roles.", "Pipeline", 75]
    ]
  },
  "Product Management": {
    phase: "Product Story",
    milestone: "First product teardown",
    target: 16,
    skills: ["product sense", "metrics", "user research"],
    week: [
      ["resume-v1", "Build product resume v1", "Frame campus, project, and technical work around user problems and impact.", "Resume", 80],
      ["product-teardown", "Write one product teardown", "Pick a product, define user pain, and suggest one measurable improvement.", "Experience", 70],
      ["alumni-outreach", "Reach out to 3 product alumni", "Target APMs, PM interns, founders, and product analysts.", "Networking", 70],
      ["metrics-practice", "Practice product metrics", "Define activation, retention, conversion, and north-star metrics.", "Technical Skills", 65]
    ],
    month: [
      ["resume-review", "Get two resume reviews", "Ask one PM and one upperclassman for feedback.", "Resume", 85],
      ["product-project", "Ship one product mini project", "Prototype a workflow, landing page, or research-backed feature spec.", "Experience", 85],
      ["alumni-eight", "Contact 8 product alumni", "Learn PM paths across startups, big tech, and campus programs.", "Networking", 75],
      ["user-interviews", "Run five user interviews", "Collect notes that can support your product story.", "Research", 70]
    ],
    quarter: [
      ["portfolio-two", "Create two portfolio artifacts", "Include one teardown and one shipped or prototyped feature.", "Experience", 90],
      ["alumni-sixteen", "Reach 16 alumni conversations", "Identify referral potential and warm teams.", "Networking", 90],
      ["pm-interview", "Practice PM interviews", "Product design, execution, metrics, and behavioral stories.", "Interview", 85],
      ["application-list", "Create internship target list", "Include APM, product analyst, startup, and campus roles.", "Pipeline", 75]
    ]
  },
  "Software Engineering": {
    phase: "Technical Base",
    milestone: "First GitHub project",
    target: 14,
    skills: ["data structures", "GitHub", "systematic practice"],
    week: [
      ["resume-v1", "Build technical resume v1", "Highlight coursework, projects, tools, and measurable technical impact.", "Resume", 80],
      ["coding-three", "Practice three coding problems", "Focus on arrays, strings, hash maps, and clear explanations.", "Technical Skills", 70],
      ["alumni-outreach", "Reach out to 3 engineering alumni", "Prioritize interns and new grads in Seattle or campus tech teams.", "Networking", 70],
      ["github-scope", "Scope one GitHub project", "Pick a small app with a clear user problem and visible README.", "Experience", 65]
    ],
    month: [
      ["resume-review", "Get two resume reviews", "Ask one SWE and one career center coach for technical resume feedback.", "Resume", 85],
      ["github-ship", "Ship one GitHub project", "Include screenshots, setup instructions, and what you built.", "Experience", 85],
      ["alumni-eight", "Contact 8 engineering alumni", "Ask about recruiting timeline, referrals, and interview expectations.", "Networking", 75],
      ["coding-twelve", "Practice twelve coding problems", "Track patterns, mistakes, and retry dates.", "Technical Skills", 80]
    ],
    quarter: [
      ["interview-base", "Finish technical interview base", "Arrays, strings, trees, recursion, and behavioral stories.", "Interview", 90],
      ["alumni-fourteen", "Reach 14 alumni conversations", "Identify teams open to sophomore or freshman candidates.", "Networking", 90],
      ["portfolio-two", "Ship two technical projects", "Make one full-stack or data-backed project and one smaller tool.", "Experience", 90],
      ["application-list", "Create internship target list", "Include freshman programs, startups, labs, and campus tech roles.", "Pipeline", 75]
    ]
  },
  Quant: {
    phase: "Math + Coding Base",
    milestone: "Probability drill set",
    target: 14,
    skills: ["probability", "Python", "mental math"],
    week: [
      ["resume-v1", "Build quant resume v1", "Surface math, coding, research, competition, and technical coursework.", "Resume", 80],
      ["probability-drill", "Complete probability drills", "Practice expected value, Bayes, distributions, and estimation.", "Technical Skills", 80],
      ["coding-three", "Practice three Python problems", "Focus on clean implementation and explaining tradeoffs.", "Technical Skills", 70],
      ["alumni-outreach", "Reach out to 3 quant alumni", "Target quant research, trading, risk, and data science paths.", "Networking", 65]
    ],
    month: [
      ["resume-review", "Get two technical resume reviews", "Ask one quant/data alum and one technical peer for feedback.", "Resume", 85],
      ["project-one", "Build one statistical project", "Use markets, sports, simulation, or alternative data.", "Experience", 85],
      ["alumni-eight", "Contact 8 quant or trading alumni", "Ask about interview prep, math depth, and firm differences.", "Networking", 75],
      ["interview-drills", "Practice interview drills", "Combine probability, brainteasers, coding, and market intuition.", "Interview", 85]
    ],
    quarter: [
      ["project-two", "Publish two technical artifacts", "Show modeling assumptions, code quality, and conclusions.", "Experience", 90],
      ["alumni-fourteen", "Reach 14 alumni conversations", "Map quant, trading, risk, and data internship routes.", "Networking", 90],
      ["mock-interviews", "Complete four mock interviews", "Cover probability, coding, mental math, and behaviorals.", "Interview", 90],
      ["application-list", "Create internship target list", "Include prop shops, banks, asset managers, and research labs.", "Pipeline", 80]
    ]
  },
  "Marketing & Growth": {
    phase: "Growth Portfolio",
    milestone: "First campaign audit",
    target: 15,
    skills: ["analytics", "copy", "experimentation"],
    week: [
      ["resume-v1", "Build growth resume v1", "Frame campus marketing, content, analytics, and community work with metrics.", "Resume", 80],
      ["campaign-audit", "Write one campaign audit", "Analyze audience, funnel, message, channel, and experiment ideas.", "Experience", 70],
      ["alumni-outreach", "Reach out to 3 growth alumni", "Target growth, brand, product marketing, and startup operators.", "Networking", 70],
      ["analytics-basics", "Review funnel metrics", "Practice CAC, conversion, retention, LTV, and simple experiment design.", "Technical Skills", 65]
    ],
    month: [
      ["resume-review", "Get two resume reviews", "Ask one marketer and one upperclassman for feedback.", "Resume", 85],
      ["growth-project", "Run one small growth experiment", "Test content, landing copy, campus community, or newsletter growth.", "Experience", 85],
      ["alumni-eight", "Contact 8 growth alumni", "Ask how they built proof before their first internship.", "Networking", 75],
      ["portfolio-page", "Create a portfolio page", "Show campaign thinking, screenshots, metrics, and learnings.", "Experience", 75]
    ],
    quarter: [
      ["portfolio-two", "Create two growth artifacts", "Include one audit and one experiment or campaign project.", "Experience", 90],
      ["alumni-fifteen", "Reach 15 alumni conversations", "Find startups and teams that value student-led growth proof.", "Networking", 90],
      ["interview-base", "Practice growth interviews", "Metrics, funnel diagnosis, creative strategy, and behaviorals.", "Interview", 85],
      ["application-list", "Create internship target list", "Include startups, creator platforms, brand teams, and campus roles.", "Pipeline", 75]
    ]
  },
  Entrepreneurship: {
    phase: "Founder Proof",
    milestone: "Problem interview sprint",
    target: 12,
    skills: ["customer discovery", "MVP scoping", "pitching"],
    week: [
      ["resume-v1", "Build founder-style resume v1", "Show ownership, experiments, building, leadership, and measurable traction.", "Resume", 75],
      ["problem-interviews", "Run five problem interviews", "Ask about pain, current alternatives, willingness to pay, and urgency.", "Experience", 80],
      ["alumni-outreach", "Reach out to 3 founder alumni", "Target student founders, startup operators, and investors.", "Networking", 65],
      ["mvp-scope", "Scope one MVP test", "Define the smallest test that proves demand or behavior.", "Experience", 70]
    ],
    month: [
      ["pitch-v1", "Create pitch deck v1", "Cover problem, user, solution, market, traction, and next experiment.", "Experience", 85],
      ["resume-review", "Get two founder resume reviews", "Ask one founder and one operator for feedback.", "Resume", 80],
      ["alumni-eight", "Contact 8 startup alumni", "Ask about customer discovery, fundraising, and first hires.", "Networking", 75],
      ["mvp-test", "Run one MVP test", "Measure signups, replies, deposits, waitlist, or repeat usage.", "Experience", 85]
    ],
    quarter: [
      ["traction-proof", "Show one traction proof point", "Use interviews, waitlist, revenue, pilots, or active users.", "Experience", 90],
      ["alumni-twelve", "Reach 12 founder/operator chats", "Find mentors, pilot users, and potential advisors.", "Networking", 85],
      ["business-model", "Draft business model", "Estimate pricing, acquisition channel, cost, and willingness to pay.", "Research", 85],
      ["competition-pitch", "Practice final pitch", "Prepare story, demo flow, objections, and ask.", "Interview", 80]
    ]
  },
  Accounting: {
    phase: "CPA + Internship Base",
    milestone: "Accounting resume v1",
    target: 15,
    skills: ["Excel", "accounting", "professional communication"],
    week: [
      ["resume-v1", "Build accounting resume v1", "Highlight accounting coursework, Excel, reliability, and detail-oriented work.", "Resume", 80],
      ["excel-basics", "Finish Excel accounting basics", "Practice lookup formulas, pivot tables, reconciliations, and formatting.", "Technical Skills", 70],
      ["alumni-outreach", "Reach out to 3 accounting alumni", "Target audit, tax, advisory, and corporate accounting paths.", "Networking", 70],
      ["firm-research", "Research Big 4 and regional firms", "Note service lines, visa considerations, and sophomore opportunities.", "Research", 60]
    ],
    month: [
      ["resume-review", "Get two resume reviews", "Ask one accounting alum and one career center coach for feedback.", "Resume", 85],
      ["alumni-eight", "Contact 8 accounting alumni", "Ask about firm culture, recruiting season, and service line fit.", "Networking", 75],
      ["course-plan", "Map accounting course sequence", "Connect coursework to internship timing and CPA eligibility.", "Research", 80],
      ["interview-base", "Practice behavioral interview stories", "Prepare teamwork, detail, deadline, and client-service examples.", "Interview", 75]
    ],
    quarter: [
      ["application-list", "Create internship target list", "Include Big 4, regional firms, corporate finance, and campus roles.", "Pipeline", 85],
      ["alumni-fifteen", "Reach 15 alumni conversations", "Identify referral potential before recruiting season.", "Networking", 90],
      ["technical-proof", "Complete accounting technical review", "Cover statements, accruals, revenue, audit, tax, and Excel.", "Technical Skills", 85],
      ["leadership-proof", "Add one reliability proof point", "Own a club finance, treasurer, tax volunteer, or operations role.", "Experience", 75]
    ]
  },
  "UX / Product Design": {
    phase: "Portfolio Base",
    milestone: "First case study",
    target: 14,
    skills: ["Figma", "user research", "case studies"],
    week: [
      ["resume-v1", "Build design resume v1", "Frame design, research, product, and collaboration experience.", "Resume", 75],
      ["case-study-scope", "Scope one UX case study", "Pick a real user problem and define research, flow, and outcome.", "Experience", 75],
      ["alumni-outreach", "Reach out to 3 design alumni", "Target product designers, UX researchers, and design PMs.", "Networking", 70],
      ["figma-basics", "Practice Figma basics", "Build components, variants, auto layout, and a clean prototype.", "Technical Skills", 70]
    ],
    month: [
      ["portfolio-one", "Publish one case study", "Show problem, research, iterations, final flow, and impact.", "Experience", 85],
      ["resume-review", "Get two portfolio reviews", "Ask one designer and one product-minded peer for feedback.", "Resume", 85],
      ["alumni-eight", "Contact 8 design alumni", "Ask about portfolio expectations and interview process.", "Networking", 75],
      ["usability-test", "Run three usability tests", "Capture what changed after feedback.", "Research", 75]
    ],
    quarter: [
      ["portfolio-two", "Create two portfolio case studies", "Include one mobile/web product and one service or workflow problem.", "Experience", 90],
      ["alumni-fourteen", "Reach 14 design alumni", "Identify teams and internships friendly to early students.", "Networking", 90],
      ["design-interview", "Practice design interviews", "Portfolio walkthrough, app critique, whiteboard, and behaviorals.", "Interview", 85],
      ["application-list", "Create internship target list", "Include design labs, startups, product teams, and campus roles.", "Pipeline", 75]
    ]
  }
};

const alumni = [
  ["a1", "Ethan Zhang", "EZ", "University of Washington", "Investment Banking Summer Analyst", "Evercore", "Finance", "Finance", "Foster IB prep, Seattle-to-NYC banking path", "Cold"],
  ["a2", "Iris Chen", "IC", "University of Washington", "Corporate Finance Intern", "Amazon", "Finance", "Economics", "Seattle finance, F-1 friendly search strategy", "Replied"],
  ["a3", "Marcus Liu", "ML", "University of Michigan", "Associate Consultant", "Bain", "Consulting", "Business", "Case prep and sophomore recruiting timeline", "Cold"],
  ["a4", "Serena Wang", "SW", "New York University", "Data Analyst", "Spotify", "Data Analytics", "Data Science", "Portfolio projects and analytics interview prep", "Chatted"],
  ["a5", "Kevin Xu", "KX", "Boston University", "Product Manager Intern", "Notion", "Product Management", "Computer Science", "Product sense, startup recruiting, project framing", "Cold"],
  ["a6", "Rachel Li", "RL", "University of Washington", "Software Engineering Intern", "Microsoft", "Software Engineering", "Computer Science", "Seattle tech network and technical referrals", "Referral Potential"],
  ["a7", "Grace Huang", "GH", "University of Pennsylvania", "Private Equity Summer Analyst", "Blackstone", "Finance", "Finance", "Wharton finance pipeline and early networking", "Cold"],
  ["a8", "Daniel Park", "DP", "University of Toronto", "Quant Research Intern", "RBC Capital Markets", "Quant", "Statistics", "Canadian quant path and probability interview prep", "Cold"],
  ["a9", "Lina Wu", "LW", "University of Waterloo", "Software Engineering Intern", "Shopify", "Software Engineering", "Computer Science", "Co-op style technical recruiting and project depth", "Cold"],
  ["a10", "Maya Chen", "MC", "University of British Columbia", "Growth Marketing Intern", "Duolingo", "Marketing & Growth", "Marketing", "Growth experiments and content analytics", "Replied"],
  ["a11", "Jason Yu", "JY", "Stanford University", "Founder Associate", "Pear VC", "Entrepreneurship", "Entrepreneurship", "Founder proof, MVP testing, and investor conversations", "Cold"],
  ["a12", "Nora Li", "NL", "Carnegie Mellon University", "Product Designer Intern", "Figma", "UX / Product Design", "Design", "Portfolio case studies and design systems", "Cold"],
  ["a13", "Felix Wang", "FW", "University of Texas at Austin", "Audit Intern", "Deloitte", "Accounting", "Accounting", "Accounting recruiting and Big 4 service-line fit", "Cold"],
  ["a14", "Amy Zhou", "AZ", "Columbia University", "Strategy Intern", "McKinsey", "Consulting", "Economics", "NYC consulting network and behavioral story bank", "Follow Up"],
  ["a15", "Ryan Sun", "RS", "Georgia Institute of Technology", "Data Scientist Intern", "Delta", "Data Analytics", "Industrial Engineering", "Analytics projects and operations data storytelling", "Cold"]
].map(([id, name, initials, school, role, company, industry, major, fit, status]) => ({
  id,
  name,
  initials,
  school,
  role,
  company,
  industry,
  major,
  fit,
  status
}));

const viewTitles = {
  dashboard: "Dashboard",
  profile: "Student Profile",
  roadmap: "Personalized Roadmap",
  network: "Alumni Recommendations",
  coffee: "Coffee Chat Generator",
  progress: "Progress Dashboard",
  thanks: "Special Thanks"
};

const stageBoost = {
  "Freshman Spring": "foundation-first",
  "Sophomore Fall": "recruiting ramp",
  "Sophomore Spring": "application-ready"
};

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getAccounts() {
  const raw = localStorage.getItem(STORAGE_KEYS.accounts);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    localStorage.removeItem(STORAGE_KEYS.accounts);
    return {};
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(accounts));
}

function validatePassword(password) {
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Z]/.test(password)) return "Password needs at least one uppercase letter.";
  if (!/[a-z]/.test(password)) return "Password needs at least one lowercase letter.";
  if (!/[0-9]/.test(password)) return "Password needs at least one number.";
  return "";
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function profileKey() {
  return state.currentUser ? `bridgepathState:${state.currentUser}` : "bridgepathState:guest";
}

function saveState() {
  localStorage.setItem(profileKey(), JSON.stringify({
    profile: state.profile,
    range: state.range,
    weekOffset: state.weekOffset,
    tasksDone: Array.from(state.tasksDone),
    alumniStatuses: state.alumniStatuses
  }));
}

function loadStateForUser(email) {
  const saved = localStorage.getItem(`bridgepathState:${email}`) || localStorage.getItem("bridgepathState");
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(state.profile, parsed.profile || {});
    state.range = parsed.range || state.range;
    state.weekOffset = Number(parsed.weekOffset || 0);
    state.tasksDone = new Set(parsed.tasksDone || Array.from(state.tasksDone));
    state.alumniStatuses = parsed.alumniStatuses || {};
  } catch {
    localStorage.removeItem(`bridgepathState:${email}`);
  }
}

function getTemplate() {
  return industryTemplates[state.profile.industry] || industryTemplates.Finance;
}

function getSchoolSignal() {
  const school = state.profile.school;
  const west = ["University of Washington", "Stanford University", "University of California, Berkeley", "University of California, Los Angeles", "University of Southern California", "California Institute of Technology", "University of British Columbia"];
  const nyc = ["Columbia University", "New York University", "Cornell University", "University of Pennsylvania", "Princeton University", "Yale University"];
  const boston = ["Harvard University", "Massachusetts Institute of Technology", "Boston University", "Northeastern University"];
  const canada = ["University of Toronto", "University of Waterloo", "University of British Columbia", "McGill University", "University of Alberta"];
  const midwest = ["University of Michigan", "Northwestern University", "University of Chicago", "University of Illinois Urbana-Champaign", "University of Wisconsin-Madison", "Washington University in St. Louis"];

  if (canada.includes(school)) {
    return {
      title: "Canada + U.S. recruiting angle",
      text: `${school} adds a Canada cross-border networking angle, so the plan includes alumni who can explain U.S. recruiting and visa-sensitive timing.`,
      task: "Add two Canada-to-U.S. alumni to your outreach list."
    };
  }
  if (west.includes(school)) {
    return {
      title: "West Coast campus signal",
      text: `${school} gives this plan a stronger technology, startup, and Seattle/SF alumni angle.`,
      task: "Use West Coast alumni first, then ask for one warm intro outside your campus network."
    };
  }
  if (nyc.includes(school)) {
    return {
      title: "NYC finance and consulting signal",
      text: `${school} makes NYC finance, consulting, media, and startup networking especially relevant.`,
      task: "Prioritize alumni in New York and ask about freshman or sophomore insight programs."
    };
  }
  if (boston.includes(school)) {
    return {
      title: "Boston talent hub signal",
      text: `${school} supports strong consulting, biotech, venture, and technical alumni discovery.`,
      task: "Add Boston-area firms, labs, and startup operators to the target list."
    };
  }
  if (midwest.includes(school)) {
    return {
      title: "Midwest consulting and corporate signal",
      text: `${school} makes consulting, corporate strategy, industrials, and Chicago recruiting paths more visible.`,
      task: "Include Chicago and Midwest alumni in the first outreach batch."
    };
  }
  return {
    title: "Campus network signal",
    text: `${school} is used as a light filter for alumni matching and campus-specific action planning.`,
    task: "Find three alumni from the school career portal or LinkedIn alumni page."
  };
}

function getMajorFocus() {
  const major = state.profile.major;
  if (["Computer Science", "Data Science", "Statistics", "Applied Math", "Engineering", "Information Systems"].includes(major)) {
    return {
      label: "technical proof",
      task: "Package one technical project with a short README, screenshot, and measurable result.",
      category: "Technical Skills"
    };
  }
  if (["Business", "Finance", "Economics", "Accounting", "Entrepreneurship"].includes(major)) {
    return {
      label: "business proof",
      task: "Add one business-facing deliverable: memo, market map, model, case deck, or venture test.",
      category: "Experience"
    };
  }
  if (["Design", "Psychology", "Communication", "Marketing"].includes(major)) {
    return {
      label: "user insight proof",
      task: "Add one user-facing artifact: interview notes, campaign audit, or product critique.",
      category: "Experience"
    };
  }
  return {
    label: "transferable proof",
    task: "Translate one class or club project into career language with measurable impact.",
    category: "Experience"
  };
}

function getStageTask() {
  if (state.profile.stage === "Freshman Spring") {
    return ["freshman-foundation", "Create a freshman foundation list", "Pick 10 roles to learn, 10 alumni to contact, and 2 skills to build before sophomore fall.", "Pipeline", 60];
  }
  if (state.profile.stage === "Sophomore Fall") {
    return ["sophomore-recruiting", "Build sophomore recruiting tracker", "Track applications, deadlines, referrals, and follow-up dates before recruiting accelerates.", "Pipeline", 75];
  }
  return ["sophomore-spring", "Prepare recruiting-ready package", "Finalize resume, target list, coffee chat pipeline, and two proof points before junior recruiting.", "Pipeline", 85];
}

function buildTask(raw, range) {
  const [id, title, detail, category, impact] = raw;
  return {
    id: `${slug(state.profile.industry)}-${range}-${id}`,
    title,
    detail,
    category,
    impact
  };
}

function generateTasks(range = state.range) {
  const template = getTemplate();
  const schoolSignal = getSchoolSignal();
  const majorFocus = getMajorFocus();
  const base = (template[range] || template.week).map((task) => buildTask(task, range));
  const additions = [];

  if (range === "week") {
    additions.push(buildTask([
      "school-signal",
      `Use ${shortSchoolName(state.profile.school)} alumni signal`,
      schoolSignal.task,
      "Networking",
      60
    ], range));
  }

  if (range === "month") {
    additions.push(buildTask([
      "major-focus",
      `Add ${majorFocus.label}`,
      majorFocus.task,
      majorFocus.category,
      70
    ], range));
  }

  if (range === "quarter") {
    additions.push(buildTask(getStageTask(), range));
  }

  return [...base, ...additions];
}

function getAllCurrentTasks() {
  return ["week", "month", "quarter"].flatMap((range) => generateTasks(range));
}

function shortSchoolName(school) {
  const map = {
    "University of Washington": "UW",
    "University of Pennsylvania": "Penn",
    "University of California, Berkeley": "Berkeley",
    "University of California, Los Angeles": "UCLA",
    "University of Southern California": "USC",
    "University of Michigan": "Michigan",
    "New York University": "NYU",
    "Massachusetts Institute of Technology": "MIT",
    "University of Toronto": "UofT",
    "University of British Columbia": "UBC"
  };
  return map[school] || school.split(" ").slice(0, 2).join(" ");
}

function populateSelect(id, values) {
  const select = document.getElementById(id);
  select.innerHTML = values.map((value) => `<option>${value}</option>`).join("");
}

function setAuthMode(mode) {
  const isSignup = mode === "signup";
  document.getElementById("loginForm").classList.toggle("is-hidden", isSignup);
  document.getElementById("signupForm").classList.toggle("is-hidden", !isSignup);
  document.getElementById("showLoginButton").classList.toggle("is-active", !isSignup);
  document.getElementById("showSignupButton").classList.toggle("is-active", isSignup);
  document.getElementById("authMessage").textContent = "";
}

function showAuthMessage(message, type = "error") {
  const node = document.getElementById("authMessage");
  node.textContent = message;
  node.dataset.type = type;
}

function createDemoAccountIfNeeded() {
  const accounts = getAccounts();
  if (!accounts["student@uw.edu"]) {
    accounts["student@uw.edu"] = {
      name: "Demo Student",
      email: "student@uw.edu",
      password: "Bridgepath1",
      createdAt: new Date().toISOString()
    };
    saveAccounts(accounts);
  }
}

function loginUser(email) {
  state.currentUser = normalizeEmail(email);
  localStorage.setItem(STORAGE_KEYS.session, state.currentUser);
  loadStateForUser(state.currentUser);
  syncProfileForm();
  updateAll();
  setView("dashboard");
  document.getElementById("userBadge").textContent = state.currentUser;
  document.getElementById("loginScreen").classList.add("is-hidden");
  document.getElementById("appShell").classList.remove("is-hidden");
}

function handleLogin(event) {
  event.preventDefault();
  const email = normalizeEmail(document.getElementById("loginEmail").value);
  const password = document.getElementById("loginPassword").value;
  const account = getAccounts()[email];

  if (!account || account.password !== password) {
    showAuthMessage("Email or password does not match a local account.");
    return;
  }

  loginUser(email);
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = normalizeEmail(document.getElementById("signupEmail").value);
  const password = document.getElementById("signupPassword").value;
  const error = validatePassword(password);
  const accounts = getAccounts();

  if (!email.includes("@") || !email.includes(".")) {
    showAuthMessage("Please use a valid email address.");
    return;
  }
  if (error) {
    showAuthMessage(error);
    return;
  }
  if (accounts[email]) {
    showAuthMessage("This account already exists. Try logging in.");
    return;
  }

  accounts[email] = {
    name,
    email,
    password,
    createdAt: new Date().toISOString()
  };
  saveAccounts(accounts);
  showAuthMessage("Account created. Logging you in now.", "success");
  loginUser(email);
}

function logoutUser() {
  saveState();
  localStorage.removeItem(STORAGE_KEYS.session);
  state.currentUser = null;
  document.getElementById("appShell").classList.add("is-hidden");
  document.getElementById("loginScreen").classList.remove("is-hidden");
}

function setView(view) {
  document.querySelectorAll(".view").forEach((node) => {
    node.classList.toggle("is-active", node.id === view);
  });
  document.querySelectorAll(".nav-item").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.view === view);
  });
  document.getElementById("viewTitle").textContent = viewTitles[view];
}

function syncProfileForm() {
  Object.entries(state.profile).forEach(([key, value]) => {
    const input = document.getElementById(key);
    if (input) input.value = value;
  });
}

function updateSnapshot() {
  const template = getTemplate();
  const signal = getSchoolSignal();
  document.getElementById("snapshotText").textContent =
    `${state.profile.industry} track at ${state.profile.school}, ${state.profile.hours} hours per week.`;
  document.getElementById("phaseMetric").textContent = template.phase;
  document.getElementById("networkMetric").textContent = `${template.target} alumni`;
  document.getElementById("milestoneMetric").textContent = template.milestone;
  document.getElementById("schoolSignalTitle").textContent = signal.title;
  document.getElementById("schoolSignalText").textContent = signal.text;
}

function getCompletionForTasks(tasks) {
  if (!tasks.length) return 0;
  const done = tasks.filter((task) => state.tasksDone.has(task.id)).length;
  return Math.round((done / tasks.length) * 100);
}

function renderPlanSummary() {
  const template = getTemplate();
  const signal = getSchoolSignal();
  const majorFocus = getMajorFocus();
  const tasks = generateTasks(state.range);
  const completion = getCompletionForTasks(tasks);
  const hoursLabel = state.profile.hours >= 12 ? "aggressive" : state.profile.hours >= 7 ? "balanced" : "lightweight";

  document.getElementById("planSummary").innerHTML = `
    <div>
      <p class="eyebrow">Generated Plan Summary</p>
      <h3>${state.profile.stage} ${state.profile.industry} plan</h3>
      <p>BridgePath is prioritizing ${template.skills.join(", ")} for a ${state.profile.major} student at ${shortSchoolName(state.profile.school)}. This is a ${hoursLabel} plan calibrated for ${state.profile.hours} hours per week and a ${stageBoost[state.profile.stage]} timeline.</p>
    </div>
    <div class="summary-visuals">
      <div class="score-tile">
        <strong>${completion}%</strong>
        <span>${state.range} complete</span>
      </div>
      <div class="summary-tags">
        <span class="tag">${signal.title}</span>
        <span class="tag">${majorFocus.label}</span>
        <span class="tag">${template.target} alumni target</span>
      </div>
    </div>
  `;
}

function renderRoadmap() {
  const list = document.getElementById("roadmapList");
  const tasks = generateTasks(state.range);
  list.innerHTML = tasks.map((task) => `
    <article class="task-card ${state.tasksDone.has(task.id) ? "is-complete" : ""}">
      <input class="task-check" type="checkbox" data-task="${task.id}" ${state.tasksDone.has(task.id) ? "checked" : ""} aria-label="${task.title}" />
      <div>
        <div class="task-title-row">
          <h4>${task.title}</h4>
          <span class="task-impact">${task.impact}% impact</span>
        </div>
        <p>${task.detail}</p>
        <div class="mini-progress"><span style="width: ${task.impact}%"></span></div>
      </div>
      <span class="tag">${task.category}</span>
    </article>
  `).join("");

  document.querySelectorAll(".task-check").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const id = event.target.dataset.task;
      if (event.target.checked) {
        state.tasksDone.add(id);
      } else {
        state.tasksDone.delete(id);
      }
      saveState();
      renderRoadmap();
      renderPlanSummary();
      renderProgress();
    });
  });
}

function renderCalendar() {
  const tasks = generateTasks("week");
  const dates = getWeekDates();
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const calendarTasks = [
    [tasks[0], "Resume"],
    [tasks[1] || tasks[0], "Skill"],
    [tasks[2] || tasks[0], "Network"],
    [tasks[3] || tasks[0], "Research"],
    [tasks[4] || tasks[2] || tasks[0], "Follow up"],
    [{ title: "Polish one proof point", category: "Experience", impact: 58 }, "Polish"],
    [{ title: "Reflect and update tracker", category: "Progress", impact: 45 }, "Review"]
  ];
  document.getElementById("roadmapWeekControl").innerHTML = renderWeekSelect("roadmapWeekSelect");
  document.getElementById("calendarGrid").innerHTML = dayNames.map((day, index) => {
    const [task, label] = calendarTasks[index];
    return `
      <div class="calendar-day roadmap-calendar-day">
        <div class="calendar-date-row">
          <strong>${day}</strong>
          <span>${dates[index].getMonth() + 1}/${dates[index].getDate()}</span>
        </div>
        <div class="calendar-task-chip">
          <small>${label}</small>
          <span>${task.title}</span>
        </div>
        <div class="mini-progress"><span style="width: ${task.impact || 45}%"></span></div>
      </div>
    `;
  }).join("");
}

function getMatchReasons(person, score) {
  const reasons = [];
  if (person.industry === state.profile.industry) reasons.push(`same target industry: ${person.industry}`);
  if (person.school === state.profile.school) reasons.push(`same school: ${shortSchoolName(person.school)}`);
  if (person.major === state.profile.major) reasons.push(`same or adjacent major: ${person.major}`);
  if (person.fit.toLowerCase().includes("f-1") || state.profile.status.includes("F-1")) reasons.push("useful for international student strategy");
  if (!reasons.length) reasons.push("adjacent path that broadens your network");
  if (score >= 85) reasons.push("high-priority warm target");
  return reasons.slice(0, 3);
}

function getRecommendedAction(person, score) {
  const status = state.alumniStatuses[person.id] || person.status;
  if (status === "Cold") return score >= 80 ? "Send outreach today and mention the shared school or industry." : "Save as a second-wave outreach after top matches.";
  if (status === "Replied") return "Schedule a 15-minute chat and prepare three role-specific questions.";
  if (status === "Chatted") return "Send follow-up notes and ask for one suggested person to contact.";
  if (status === "Follow Up") return "Follow up with a specific update from your roadmap.";
  return "Ask for application advice once your resume is reviewed.";
}

function getMatchedAlumni() {
  return alumni
    .map((person) => {
      let score = 45;
      if (person.industry === state.profile.industry) score += 30;
      if (person.school === state.profile.school) score += 15;
      if (person.major === state.profile.major) score += 8;
      if (person.fit.toLowerCase().includes(shortSchoolName(state.profile.school).toLowerCase())) score += 4;
      if (state.profile.status.includes("F-1") && person.fit.toLowerCase().includes("f-1")) score += 6;
      score = Math.min(99, score);
      return {
        ...person,
        score,
        reasons: getMatchReasons(person, score),
        action: getRecommendedAction(person, score)
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function renderAlumni() {
  const matches = getMatchedAlumni();
  const grid = document.getElementById("alumniGrid");
  grid.innerHTML = matches.map((person) => {
    const status = state.alumniStatuses[person.id] || person.status;
    return `
      <article class="alumni-card">
        <div class="alumni-head">
          <div>
            <h4>${person.name}</h4>
            <p>${person.role}, ${person.company}</p>
          </div>
          <span class="portrait-avatar">${person.initials}</span>
        </div>
        <div class="alumni-data-strip">
          <div><strong>${person.industry}</strong><span>industry</span></div>
          <div><strong>${shortSchoolName(person.school)}</strong><span>school</span></div>
          <div><strong>${person.score}</strong><span>score</span></div>
        </div>
        <div class="match-score">
          <div class="progress-label"><span>Match score</span><strong>${person.score}</strong></div>
          <div class="progress-track"><div class="progress-fill" style="width: ${person.score}%"></div></div>
        </div>
        <div class="why-box">
          <strong>Why matched</strong>
          <ul>${person.reasons.map((reason) => `<li>${reason}</li>`).join("")}</ul>
        </div>
        <div class="action-box">
          <strong>Recommended action</strong>
          <p>${person.action}</p>
        </div>
        <label>
          Status
          <select class="status-select" data-alumni="${person.id}">
            ${["Cold", "Replied", "Chatted", "Follow Up", "Referral Potential"].map((item) =>
              `<option ${item === status ? "selected" : ""}>${item}</option>`
            ).join("")}
          </select>
        </label>
        <div class="mini-actions">
          <button class="ghost-button coffee-shortcut" data-alumni="${person.id}" type="button">Message</button>
          <button class="ghost-button mark-follow-up" data-alumni="${person.id}" type="button">Follow Up</button>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll(".status-select").forEach((select) => {
    select.addEventListener("change", (event) => {
      state.alumniStatuses[event.target.dataset.alumni] = event.target.value;
      saveState();
      renderAlumni();
      renderProgress();
    });
  });

  document.querySelectorAll(".coffee-shortcut").forEach((button) => {
    button.addEventListener("click", (event) => {
      document.getElementById("coffeePerson").value = event.target.dataset.alumni;
      setView("coffee");
      generateCoffee();
    });
  });

  document.querySelectorAll(".mark-follow-up").forEach((button) => {
    state.alumniStatuses[button.dataset.alumni] = state.alumniStatuses[button.dataset.alumni] || alumni.find((person) => person.id === button.dataset.alumni)?.status || "Cold";
    button.addEventListener("click", (event) => {
      state.alumniStatuses[event.target.dataset.alumni] = "Follow Up";
      saveState();
      renderAlumni();
      renderProgress();
    });
  });

  renderCoffeeOptions(matches);
}

function renderCoffeeOptions(matches = getMatchedAlumni()) {
  const select = document.getElementById("coffeePerson");
  const current = select.value;
  select.innerHTML = matches.map((person) =>
    `<option value="${person.id}">${person.name} - ${person.company}</option>`
  ).join("");
  if (matches.some((person) => person.id === current)) {
    select.value = current;
  }
}

function getGoalLine(goal, person) {
  const lines = {
    "Learn about recruiting timeline": `I am trying to understand the early recruiting timeline for ${person.industry} and what I should do before junior-year recruiting starts.`,
    "Ask for resume feedback": "I am currently refining my resume and would be grateful for quick feedback on what looks credible for an underclassman.",
    "Explore role fit": `I am exploring whether ${person.industry} fits my background, and your path seems like a helpful example.`,
    "Build referral potential": "I would love to learn what strong preparation looks like before I eventually apply, so I can build a real relationship instead of asking too late."
  };
  return lines[goal] || lines["Learn about recruiting timeline"];
}

function generateCoffee() {
  const person = alumni.find((item) => item.id === document.getElementById("coffeePerson").value) || getMatchedAlumni()[0];
  if (!person) return;

  const tone = document.getElementById("coffeeTone").value;
  const goal = document.getElementById("coffeeGoal").value;
  const length = document.getElementById("coffeeLength").value;
  const firstName = person.name.split(" ")[0];
  const sharedSignal = person.school === state.profile.school ? ` as a fellow ${shortSchoolName(person.school)} student` : "";
  const goalLine = getGoalLine(goal, person);

  const openers = {
    "Warm and concise": `Hi ${firstName}, I hope you are doing well.`,
    "Professional": `Hello ${firstName}, my name is ${getAccounts()[state.currentUser]?.name || "Demo Student"}, and I am reaching out because I admire your path into ${person.company}.`,
    "Curious underclassman": `Hi ${firstName}, I am a ${state.profile.stage.toLowerCase()} still figuring out my career direction, and your path stood out to me.`,
    "Confident and direct": `Hi ${firstName}, I am building a focused ${state.profile.industry} recruiting plan and wanted to learn from someone who has already done it well.`
  };

  let message = `${openers[tone]} I am studying ${state.profile.major} at ${state.profile.school}${sharedSignal}. ${goalLine}`;
  if (length === "Short LinkedIn note") {
    message += " Would you be open to a 15-minute coffee chat sometime in the next two weeks? Thank you.";
  } else if (length === "Medium email") {
    message += ` I saw your experience as ${person.role} at ${person.company}, and I would really appreciate 15-20 minutes to ask how you prepared, what mistakes to avoid, and how I should prioritize my next few weeks. Thank you for considering it.`;
  } else {
    message += ` I am using BridgePath to turn career prep into weekly actions, and this week my focus is ${generateTasks("week")[0].title.toLowerCase()}. I saw your experience as ${person.role} at ${person.company}, and I would value your perspective on what an international underclassman should do early. If you are open to it, I would be grateful for a 20-minute conversation and can work around your schedule.`;
  }

  const questionSets = {
    "Learn about recruiting timeline": [
      `What should a ${state.profile.stage.toLowerCase()} student do before recruiting becomes formal?`,
      `Which deadlines or programs in ${person.industry} do students usually discover too late?`,
      "How did you sequence resume work, networking, technical prep, and applications?"
    ],
    "Ask for resume feedback": [
      "What parts of my resume would make you doubt internship readiness?",
      `Which experiences matter most for ${person.industry} when someone is still early in college?`,
      "What proof point should I build next to make my resume more credible?"
    ],
    "Explore role fit": [
      `What surprised you most about working in ${person.industry}?`,
      "Which student personalities or strengths tend to do well in this path?",
      "What is a low-risk way to test whether I actually like this work?"
    ],
    "Build referral potential": [
      "What would make an underclassman worth staying in touch with after one chat?",
      "What update should I send after this conversation to show real progress?",
      "When would it be appropriate to ask for application advice or a referral?"
    ]
  };

  const extraQuestions = [
    `How did ${person.school} resources or alumni help you?`,
    `If you were rebuilding your ${state.profile.industry} plan today, what would you do first?`
  ];

  document.getElementById("selectedPersonMeta").textContent = `${person.role}, ${person.company} - ${tone}, ${goal}, ${length}`;
  document.getElementById("messageOutput").value = message;
  document.getElementById("questionOutput").innerHTML = [...questionSets[goal], ...extraQuestions].map((question) => `<li>${question}</li>`).join("");
}

function calculateProgress() {
  const tasks = getAllCurrentTasks();
  const completedByCategory = (category) => {
    const categoryTasks = tasks.filter((task) => task.category === category || (category === "Technical Skills" && task.category === "Interview"));
    if (!categoryTasks.length) return 25;
    const done = categoryTasks.filter((task) => state.tasksDone.has(task.id)).length;
    return Math.min(100, Math.round(25 + (done / categoryTasks.length) * 75));
  };

  const statusValues = Object.entries(state.alumniStatuses).map(([, value]) => value);
  const activeConnections = statusValues.filter((status) => status !== "Cold").length;
  const chatted = statusValues.filter((status) => ["Chatted", "Follow Up", "Referral Potential"].includes(status)).length;
  const template = getTemplate();

  const resume = completedByCategory("Resume");
  const technical = completedByCategory("Technical Skills");
  const experience = completedByCategory("Experience");
  const networking = Math.min(100, Math.round(20 + (activeConnections / Math.max(4, template.target)) * 80));
  const coffee = Math.min(100, 20 + chatted * 18);
  const total = Math.round(resume * 0.22 + technical * 0.22 + networking * 0.24 + experience * 0.22 + coffee * 0.10);

  return { resume, technical, experience, networking, coffee, total, activeConnections, chatted };
}

function getRiskAndAction(progress) {
  if (progress.networking < 35) {
    return {
      risk: "High networking risk",
      action: `Send 3 outreach messages to ${state.profile.industry} alumni this week.`
    };
  }
  if (progress.resume < 55) {
    return {
      risk: "Resume not yet credible",
      action: "Finish resume v1 and get one review before more outreach."
    };
  }
  if (progress.technical < 55) {
    return {
      risk: "Skill proof gap",
      action: `Complete one ${getTemplate().skills[0]} proof task and add it to your tracker.`
    };
  }
  if (progress.experience < 55) {
    return {
      risk: "Experience story gap",
      action: "Add one project, leadership, research, or club deliverable."
    };
  }
  return {
    risk: "On track",
    action: "Move one warm alumni contact toward a follow-up or referral-potential conversation."
  };
}

function renderProgress() {
  const progress = calculateProgress();
  const risk = getRiskAndAction(progress);

  document.getElementById("readinessSummary").innerHTML = `
    <div class="readiness-score" style="--score: ${progress.total}%">
      <div class="score-inner">
        <strong>${progress.total}</strong>
        <span>Career readiness</span>
      </div>
    </div>
    <div class="risk-card">
      <span class="tag ${risk.risk === "On track" ? "" : "priority-high"}">${risk.risk}</span>
      <h3>Next best action</h3>
      <p>${risk.action}</p>
    </div>
    <div class="readiness-mini-grid">
      <div><strong>${progress.activeConnections}</strong><span>active contacts</span></div>
      <div><strong>${progress.chatted}</strong><span>coffee chats</span></div>
      <div><strong>${getCompletionForTasks(getAllCurrentTasks())}%</strong><span>plan complete</span></div>
    </div>
  `;

  const bars = [
    ["Resume", progress.resume, "resume"],
    ["Networking", progress.networking, "networking"],
    ["Technical Skills", progress.technical, "technical"],
    ["Experience", progress.experience, "experience"],
    ["Coffee Chats", progress.coffee, "coffee"]
  ];

  document.getElementById("progressBars").innerHTML = bars.map(([label, value, key]) => `
    <div class="progress-item">
      <div class="progress-label"><span>${label}</span><strong>${value}%</strong></div>
      <div class="progress-track"><div class="progress-fill ${key}" style="width: ${value}%"></div></div>
    </div>
  `).join("");

  const gaps = [
    ["Resume feedback", progress.resume >= 70 ? "Resume is becoming pitch-ready" : "Needs one alumni or career center review", progress.resume >= 70],
    ["Networking volume", progress.networking >= 55 ? "Initial outreach is active" : `Connect with ${Math.max(0, 3 - progress.activeConnections)} more alumni this week`, progress.networking >= 55],
    ["Skill proof", progress.technical >= 65 ? "Skill foundation is visible" : `Add ${getTemplate().skills[0]} proof to your plan`, progress.technical >= 65],
    ["Experience story", progress.experience >= 60 ? "Project or leadership proof exists" : "Add one mini project or club leadership proof point", progress.experience >= 60]
  ];

  document.getElementById("skillGaps").innerHTML = gaps.map(([title, detail, ready]) => `
    <div class="gap-item">
      <div>
        <strong>${title}</strong>
        <span>${detail}</span>
      </div>
      <span class="tag ${ready ? "" : "priority-medium"}">${ready ? "Ready" : "Gap"}</span>
    </div>
  `).join("");
}

function getAccountName() {
  const account = getAccounts()[state.currentUser];
  return account?.name || "Alex Student";
}

function getWeekDates(offset = state.weekOffset) {
  const today = new Date();
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - mondayOffset);
  monday.setDate(monday.getDate() + offset * 7);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return date;
  });
}

function formatMonthDay(date) {
  return `${date.toLocaleString("en-US", { month: "short" })} ${date.getDate()}`;
}

function formatWeekRange() {
  const dates = getWeekDates();
  return `${formatMonthDay(dates[0])} - ${formatMonthDay(dates[6])}, ${dates[6].getFullYear()}`;
}

function getWeekOptions() {
  return [
    [-1, "Last week"],
    [0, "This week"],
    [1, "Next week"],
    [2, "In 2 weeks"],
    [3, "In 3 weeks"]
  ];
}

function renderWeekSelect(id) {
  return `
    <label class="week-picker">
      <span>Calendar week</span>
      <select id="${id}">
        ${getWeekOptions().map(([offset, label]) => `
          <option value="${offset}" ${offset === state.weekOffset ? "selected" : ""}>${label} · ${formatWeekRangeForOffset(offset)}</option>
        `).join("")}
      </select>
    </label>
  `;
}

function formatWeekRangeForOffset(offset) {
  const dates = getWeekDates(offset);
  return `${formatMonthDay(dates[0])} - ${formatMonthDay(dates[6])}`;
}

function bindWeekSelects() {
  document.querySelectorAll(".week-picker select").forEach((select) => {
    select.addEventListener("change", (event) => {
      state.weekOffset = Number(event.target.value);
      saveState();
      updateAll();
    });
  });
}

function getPriority(task) {
  if (task.category === "Networking" || task.impact >= 80) return ["High Priority", "priority-high"];
  if (task.impact >= 65) return ["Medium Priority", "priority-medium"];
  return ["Flexible", ""];
}

function getTaskDuration(task) {
  if (task.category === "Networking") return "45 min";
  if (task.category === "Resume") return "2 hours";
  if (task.category === "Technical Skills") return "45 min";
  if (task.category === "Experience") return "90 min";
  return "30 min";
}

function renderTaskRows(tasks) {
  return tasks.slice(0, 3).map((task, index) => {
    const [priority, priorityClass] = getPriority(task);
    const checked = state.tasksDone.has(task.id);
    return `
      <article class="dash-task-row ${checked ? "is-complete" : ""}">
        <span class="task-number">${index + 1}</span>
        <div class="dash-task-copy">
          <strong>${task.title}</strong>
          <span>${task.detail}</span>
        </div>
        <span class="tag ${priorityClass}">${priority}</span>
        <span class="time-chip">${getTaskDuration(task)}</span>
        <input class="dashboard-task-check" type="checkbox" data-task="${task.id}" ${checked ? "checked" : ""} aria-label="${task.title}" />
      </article>
    `;
  }).join("");
}

function renderDashboardCalendar(tasks) {
  const dates = getWeekDates();
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const calendar = [
    [`${dayNames[0]} ${dates[0].getMonth() + 1}/${dates[0].getDate()}`, tasks[1] || tasks[0], "#19745c"],
    [`${dayNames[1]} ${dates[1].getMonth() + 1}/${dates[1].getDate()}`, tasks[2] || tasks[0], "#a87924"],
    [`${dayNames[2]} ${dates[2].getMonth() + 1}/${dates[2].getDate()}`, tasks[0], "#19745c"],
    [`${dayNames[3]} ${dates[3].getMonth() + 1}/${dates[3].getDate()}`, tasks[3] || tasks[0], "#6f5aa8"],
    [`${dayNames[4]} ${dates[4].getMonth() + 1}/${dates[4].getDate()}`, tasks[4] || tasks[0], "#315f9f"],
    [`${dayNames[5]} ${dates[5].getMonth() + 1}/${dates[5].getDate()}`, { title: "Resume polish" }, "#4776d8"],
    [`${dayNames[6]} ${dates[6].getMonth() + 1}/${dates[6].getDate()}`, { title: "Rest and reflect" }, "#7c8793"]
  ];

  return calendar.map(([day, task, color]) => `
    <div class="dash-calendar-day">
      <strong>${day}</strong>
      <span><i style="background: ${color}"></i>${task.title}</span>
    </div>
  `).join("");
}

function renderDashboard() {
  const tasks = generateTasks("week");
  const completion = getCompletionForTasks(tasks);
  const progress = calculateProgress();
  const risk = getRiskAndAction(progress);
  const template = getTemplate();
  const signal = getSchoolSignal();
  const person = getMatchedAlumni()[0];
  const firstName = getAccountName().split(" ")[0] || "Alex";
  const planDone = tasks.filter((task) => state.tasksDone.has(task.id)).length;

  document.getElementById("dashboardGrid").innerHTML = `
    <div class="dashboard-welcome">
      <div>
        <h3>Good morning, ${firstName}</h3>
        <p>Here's your plan for this week.</p>
      </div>
      <div class="dashboard-badges">
        <span class="tag">${state.profile.stage}</span>
        <span class="tag">${state.profile.industry}</span>
        <span class="tag">${state.profile.hours} hrs/week</span>
      </div>
    </div>

    <section class="dash-card plan-card">
      <div class="dash-card-header">
        <span class="dash-icon plan">AI</span>
        <div>
          <h3>Your Plan for This Week</h3>
          <p>Focus on these 3 actions to stay on track.</p>
        </div>
        <div class="completion-block">
          <strong>${completion}% complete</strong>
          <div class="progress-track"><div class="progress-fill" style="width: ${completion}%"></div></div>
        </div>
      </div>
      <div class="dash-task-list">${renderTaskRows(tasks)}</div>
      <button class="text-action jump-action" data-jump="roadmap" type="button">View Full Roadmap</button>
    </section>

    <section class="dash-card next-card">
      <div class="dash-card-header">
        <span class="dash-icon target">NB</span>
        <div>
          <h3>Next Best Action</h3>
          <p>We recommend you do this next.</p>
        </div>
      </div>
      <div class="next-person">
        <span class="portrait-avatar large">${person.initials}</span>
        <div>
          <h4>Reach out to ${person.name}</h4>
          <p>${person.role} @ ${person.company}</p>
          <span class="tag">Strong Match</span>
        </div>
      </div>
      <div class="why-box action-insight">
        <strong>Why</strong>
        <p>${person.reasons.join(" • ")}</p>
        <strong>Suggested timing</strong>
        <p>Within 48 hours</p>
      </div>
      <button class="primary-button jump-action" data-jump="coffee" type="button">Generate Message</button>
      <button class="text-action jump-action" data-jump="network" type="button">View All Matched Alumni</button>
    </section>

    <section class="dash-card snapshot-card">
      <div class="dash-card-header compact">
        <span class="dash-icon snapshot">CS</span>
        <h3>Career Snapshot</h3>
      </div>
      <div class="snapshot-list">
        <div><span>Stage</span><strong>${state.profile.stage}</strong></div>
        <div><span>Target Industry</span><strong>${state.profile.industry}</strong></div>
        <div><span>Roadmap Phase</span><strong>${template.phase}</strong></div>
        <div><span>Weekly Time Budget</span><strong>${state.profile.hours} hours</strong></div>
      </div>
      <div class="milestone-box">
        <span>Next Milestone</span>
        <strong>${template.milestone}</strong>
      </div>
    </section>

    <section class="dash-card progress-risk-card">
      <div class="dash-card-header compact">
        <span class="dash-icon risk-icon">PR</span>
        <h3>Your Progress & Risk</h3>
      </div>
      <div class="risk-metrics">
        <div>
          <span>Match Score</span>
          <strong>${person.score}</strong>
          <small>Excellent</small>
        </div>
        <div>
          <span>Risk Level</span>
          <strong>${risk.risk === "On track" ? "Low" : "Medium"}</strong>
          <small>${risk.risk}</small>
        </div>
      </div>
      <div class="trend-strip">
        <span>Based on current activity vs. ${state.profile.industry} recruiting timeline.</span>
        <svg viewBox="0 0 90 40" role="img" aria-label="trend line">
          <polyline points="2,30 14,18 26,24 38,10 52,22 66,12 82,6" fill="none" stroke="#19745c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
        </svg>
      </div>
      <button class="text-action jump-action" data-jump="progress" type="button">View Progress Details</button>
    </section>

    <section class="dash-card quick-card">
      <div class="dash-card-header compact">
        <span class="dash-icon quick">QA</span>
        <h3>Quick Actions</h3>
      </div>
      <div class="quick-list">
        <button class="quick-action jump-action" data-jump="roadmap" type="button"><span>AI</span><strong>View Full Roadmap</strong><small>See all recommended actions</small></button>
        <button class="quick-action jump-action" data-jump="network" type="button"><span>AM</span><strong>See Alumni Matches</strong><small>Browse more matched alumni</small></button>
        <button class="quick-action jump-action" data-jump="coffee" type="button"><span>CC</span><strong>Generate Coffee Chat</strong><small>Get outreach messages and questions</small></button>
        <button class="quick-action jump-action" data-jump="profile" type="button"><span>UP</span><strong>Update Your Profile</strong><small>Keep your plan calibrated</small></button>
      </div>
    </section>

    <section class="dash-card calendar-wide">
      <div class="dash-card-header compact">
        <span class="dash-icon calendar">WC</span>
        <div>
          <h3>Weekly Calendar</h3>
          <p>Your action timeline at a glance.</p>
        </div>
        ${renderWeekSelect("dashboardWeekSelect")}
      </div>
      <div class="dash-calendar">${renderDashboardCalendar(tasks)}</div>
    </section>
  `;

  document.querySelectorAll(".dashboard-task-check").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const id = event.target.dataset.task;
      if (event.target.checked) {
        state.tasksDone.add(id);
      } else {
        state.tasksDone.delete(id);
      }
      saveState();
      updateAll();
    });
  });

  document.querySelectorAll(".jump-action").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.jump));
  });
  bindWeekSelects();
}

function handleProfileSubmit(event) {
  event.preventDefault();
  ["school", "stage", "major", "industry", "status"].forEach((key) => {
    state.profile[key] = document.getElementById(key).value;
  });
  state.profile.hours = Number(document.getElementById("hours").value || 8);
  saveState();
  updateAll();
  setView("roadmap");
}

function updateAll() {
  document.getElementById("weekBadge").textContent = formatWeekRange();
  updateSnapshot();
  renderPlanSummary();
  renderRoadmap();
  renderCalendar();
  renderAlumni();
  renderProgress();
  renderDashboard();
  generateCoffee();
}

function boot() {
  populateSelect("school", schools);
  populateSelect("major", majors);
  populateSelect("industry", industries);
  createDemoAccountIfNeeded();
  syncProfileForm();
  updateAll();

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  document.querySelectorAll(".sidebar-chat").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.jump));
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      state.range = button.dataset.range;
      document.querySelectorAll(".segment").forEach((node) => {
        node.classList.toggle("is-active", node === button);
      });
      saveState();
      renderPlanSummary();
      renderRoadmap();
    });
    button.classList.toggle("is-active", button.dataset.range === state.range);
  });

  document.getElementById("showLoginButton").addEventListener("click", () => setAuthMode("login"));
  document.getElementById("showSignupButton").addEventListener("click", () => setAuthMode("signup"));
  document.getElementById("loginForm").addEventListener("submit", handleLogin);
  document.getElementById("signupForm").addEventListener("submit", handleSignup);
  document.getElementById("profileForm").addEventListener("submit", handleProfileSubmit);
  document.getElementById("refreshAlumniButton").addEventListener("click", renderAlumni);
  document.getElementById("generateCoffeeButton").addEventListener("click", generateCoffee);
  document.getElementById("coffeePerson").addEventListener("change", generateCoffee);
  document.getElementById("coffeeTone").addEventListener("change", generateCoffee);
  document.getElementById("coffeeGoal").addEventListener("change", generateCoffee);
  document.getElementById("coffeeLength").addEventListener("change", generateCoffee);
  document.getElementById("logoutButton").addEventListener("click", logoutUser);
  document.getElementById("addTaskButton").addEventListener("click", () => {
    const tasks = generateTasks(state.range);
    const firstOpen = tasks.find((task) => !state.tasksDone.has(task.id));
    if (firstOpen) {
      alert(`Suggested next task: ${firstOpen.title}`);
    }
  });

  const session = localStorage.getItem(STORAGE_KEYS.session);
  if (session && getAccounts()[session]) {
    loginUser(session);
  }
}

boot();
