export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Domain', href: '#domain' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Documents', href: '#documents' },
  { label: 'Presentations', href: '#presentations' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
]

export const domainCards = [
  {
    title: 'Case Similarity & Retrieval',
    points: [
      'Neo4j Knowledge Graph',
      'Semantic Similarity',
      'Rhetorical Role Analysis',
    ],
  },
  {
    title: 'Laws & Amendment Retrieval',
    points: [
      'Hybrid BM25 + Legal-BERT Search',
      'Version Tracking',
      'Temporal Legal Retrieval',
    ],
  },
  {
    title: 'Automated Legal Questions',
    points: [
      'Llama 3 based question generation',
      'Multi-agent workflow',
      'Court-ready legal question formatting',
    ],
  },
  {
    title: 'Agentic AI Framework',
    points: [
      'FastAPI microservices',
      'Redis caching',
      'JWT authentication',
      'Orchestration engine',
    ],
  },
]

export const milestones = [
  { title: 'Project Proposal' },
  { title: 'Progress Presentation 1' },
  { title: 'Progress Presentation 2' },
  { title: 'Final Assessment' },
  { title: 'Viva', percentage: 'Final Evaluation' },
]

export const documents = [
  { title: 'TAF', file: '/documents/TAF.pdf' },
  {
    title: 'Project Proposal',
    files: [
      { label: 'IT22893802', file: '/documents/IT22893802_Final_Proposal_Report.pdf' },
      { label: 'IT22127228', file: '/documents/IT22127228_Proposal_report.pdf' },
      { label: 'IT22092410', file: '/documents/IT22092410_Proposal_Report.pdf' },
      { label: 'IT22318848', file: '/documents/IT22318848_Proposal_Report.pdf' },
    ]
  },
  { title: 'Research Paper', file: '/documents/research-paper.pdf' },
  { title: 'Final Report', file: '/documents/final-report.pdf' },
]

export const presentations = [
  { title: 'Proposal Slides', file: '/documents/Proposal-Presentation-JuriAid.pptx' },
  {
    title: 'Progress Presentation 1',
    file: '/documents/JuriAid_PP1.pptx',
  },
  {
    title: 'Progress Presentation 2',
    file: '/documents/progress-presentation-2.pdf',
  },
  { title: 'Final Presentation', file: '/documents/final-presentation.pdf' },
]

export const supervisors = [
  {
    name: 'Jeewaka Perera',
    role: 'Supervisor',
    image: '/images/supervisors/jeewaka.jpg',
    email: 'jeewaka.p@sliit.lk',
  },
  {
    name: 'Madusha Weerasooriya',
    role: 'Co-Supervisor',
    image: '/images/supervisors/madusha.jpg',
    email: 'madusha.w@sliit.lk',
  },
  {
    name: 'Nadeeka Senavirathne',
    role: 'External Supervisor (Senior Lawyer)',
    image: '/images/supervisors/Nadeeka.png',
  },
]

export const teamMembers = [
  {
    name: 'Kaushal R. K. A. C.',
    id: 'IT22893802',
    image: '/images/members/kaushal.jpg',
    email: 'it22893802@my.sliit.lk',
  },
  {
    name: 'Prarthana A. P. S.',
    id: 'IT22127228',
    image: '/images/members/prarthana.jpg',
    email: 'it22127228@my.sliit.lk',
  },
  {
    name: 'Rasindu N. H. A.',
    id: 'IT22092410',
    image: '/images/members/rasindu.jpg',
    email: 'it22092410@my.sliit.lk',
  },
  {
    name: 'Sammani W. M. W. L.',
    id: 'IT22318848',
    image: '/images/members/sammani.jpg',
    email: 'it22318848@my.sliit.lk',
  },
]


