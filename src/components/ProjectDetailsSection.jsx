import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, BrainCircuit, Network, Rocket } from 'lucide-react';
import SectionTitle from './SectionTitle';

const tabs = [
  { id: 'overview', label: 'Overview & Problem', icon: BookOpen },
  { id: 'intelligence', label: 'Core Intelligence', icon: BrainCircuit },
  { id: 'graphs', label: 'Knowledge Graphs', icon: Network },
  { id: 'future', label: 'Impact', icon: Rocket },
];

function ProjectDetailsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section id="project-details" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          eyebrow="Deep Dive"
          title="Methodology & Architecture"
          subtitle="Explore the sophisticated AI reasoning and structured legal logic powering JuriAid."
        />

        <div className="flex flex-col mt-12 max-w-5xl mx-auto">
          {/* Horizontal Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 bg-white p-2 rounded-2xl md:rounded-full border border-slate-200 shadow-sm w-fit mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl md:rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-slate-900 z-0 rounded-xl md:rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon size={18} className={`relative z-10 ${isActive ? 'text-teal-400' : ''}`} />
                  <span className="relative z-10 text-sm md:text-base whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600"
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Domain Overview</h3>
                        <p className="leading-relaxed">
                          The Sri Lankan legal domain heavily depends on precedent analysis, statutory interpretation, and structured case preparation. However, legal practitioners often rely on fragmented repositories, manual keyword searches, and disconnected sources when identifying relevant precedents and applicable laws. This creates inefficiencies, increases the risk of overlooking important authorities, and makes legal research time-consuming.
                        </p>
                        <p className="leading-relaxed mt-4">
                          JuriAid addresses these challenges by introducing an AI-powered legal intelligence platform that combines semantic legal retrieval, knowledge graph reasoning, statutory amendment tracking, and automated legal question generation into a unified workflow. Rather than performing surface-level keyword matching, the system supports deeper legal reasoning by identifying conceptual similarities, legal issue relationships, and historical legal developments.
                        </p>
                      </div>

                      <hr className="border-slate-100" />

                      <div>
                        <h3 className="text-2xl font-bold mb-6">Key Problems in Traditional Legal Research</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="text-lg font-semibold mb-3 text-slate-800">1. Keyword-Based Limitations</h4>
                            <p className="text-sm mb-4">Traditional systems retrieve cases based on exact keyword overlap, often failing to capture conceptually similar judgments expressed using different legal language.</p>
                            <div className="text-sm font-medium text-teal-700">JuriAid's Solution:</div>
                            <ul className="text-sm mt-2 space-y-1 list-disc pl-4">
                              <li>Semantic similarity matching</li>
                              <li>Rhetorical-role analysis (Facts, Issues, Arguments, Decisions)</li>
                              <li>Knowledge graph–based relationship discovery</li>
                              <li>Weighted similarity scoring for precedent ranking</li>
                            </ul>
                          </div>

                          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <h4 className="text-lg font-semibold mb-3 text-slate-800">2. Tracking Laws & Amendments</h4>
                            <p className="text-sm mb-4">Practitioners struggle to identify which statute applies, whether provisions were amended, and what law existed at a specific point in time.</p>
                            <div className="text-sm font-medium text-teal-700">JuriAid's Solution:</div>
                            <p className="text-sm mt-2">A version-aware legal knowledge graph that tracks Acts, Sections, Amendments, Historical versions, and timelines, enabling point-in-time legal research.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'intelligence' && (
                    <div className="space-y-10">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Case Similarity & Precedent Discovery</h3>
                        <p className="mb-4">
                          The system identifies legally relevant past cases using a hybrid approach combining vector embeddings and structural legal reasoning. Cases are segmented into rhetorical roles, embedded semantically, and stored within a Neo4j graph database.
                        </p>
                        <div className="bg-slate-900 text-white p-6 rounded-2xl font-mono text-sm overflow-x-auto shadow-inner">
                          <div className="text-slate-400 mb-2">Hybrid similarity scoring formula:</div>
                          <div className="text-lg text-teal-400">
                            S<sub>final</sub> = 0.30S<sub>f</sub> + 0.30S<sub>i</sub> + 0.25S<sub>a</sub> + 0.15S<sub>d</sub>
                          </div>
                          <ul className="mt-4 space-y-1 text-slate-300 list-none pl-0">
                            <li><span className="text-teal-400">S<sub>f</sub></span> = Factual similarity</li>
                            <li><span className="text-teal-400">S<sub>i</sub></span> = Issue similarity</li>
                            <li><span className="text-teal-400">S<sub>a</sub></span> = Argument similarity</li>
                            <li><span className="text-teal-400">S<sub>d</sub></span> = Decision similarity</li>
                          </ul>
                        </div>
                        <p className="mt-4 italic text-sm text-slate-500">This produces explainable precedent recommendations with shared legal issues and similarity scores.</p>
                      </div>

                      <hr className="border-slate-100" />

                      <div>
                        <h3 className="text-2xl font-bold mb-4">Hybrid Law Retrieval</h3>
                        <p className="mb-4">
                          Instead of relying purely on lexical search, JuriAid combines BM25 retrieval with semantic embeddings.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block w-full">
                           <div className="font-mono text-lg font-semibold text-slate-800 text-center">
                            Score<sub>final</sub> = α(BM25) + β(Semantic)
                           </div>
                        </div>
                        <p className="mt-4 font-medium">This approach significantly improves:</p>
                        <ul className="grid grid-cols-2 gap-2 mt-2">
                          <li>Precision of statute retrieval</li>
                          <li>Context-aware legal matching</li>
                          <li>Reduced irrelevant results</li>
                          <li>Better case-to-law connections</li>
                        </ul>
                      </div>

                      <hr className="border-slate-100" />
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3">Automated Legal Questions</h3>
                          <p className="text-sm mb-3">JuriAid automatically generates Findings of Fact and Admissions from uploaded summaries, relevant statutes, and similar precedents using a tri-agent pipeline:</p>
                          <ul className="text-sm list-disc pl-4 space-y-1 text-teal-700 font-medium">
                            <li>Legal Issue Reasoning</li>
                            <li>Question Drafting</li>
                            <li>Validation and Quality Checking</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">Multi-Agent Orchestration</h3>
                          <p className="text-sm mb-3">The orchestrator coordinates specialized AI agents to perform multi-step legal reasoning:</p>
                          <div className="flex flex-wrap gap-2">
                            {['Intent Detection', 'Case Retrieval', 'Law Retrieval', 'Summary', 'Question Generation', 'Synthesis', 'Memory'].map(agent => (
                              <span key={agent} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-100">{agent} Agent</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'graphs' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Why Knowledge Graphs Matter</h3>
                        <p className="leading-relaxed mb-6">
                          Legal relationships are inherently complex and interconnected. JuriAid models these relationships natively as a graph consisting of:
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {['Cases', 'Statutes', 'Sections', 'Legal Issues', 'Citations', 'Amendments'].map(node => (
                            <div key={node} className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg font-medium text-slate-700">
                              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                              {node}
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                          <h4 className="text-xl font-semibold mb-4 text-teal-400 relative z-10">This architecture actively supports:</h4>
                          <ul className="space-y-3 relative z-10">
                            <li className="flex items-start gap-3">
                              <Network className="text-teal-500 shrink-0 mt-0.5" size={20} />
                              <span>Explainable reasoning by tracing graph paths.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Network className="text-teal-500 shrink-0 mt-0.5" size={20} />
                              <span>Shared issue discovery across disparate legal texts.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Network className="text-teal-500 shrink-0 mt-0.5" size={20} />
                              <span>Relationship-based retrieval bypassing strict keyword boundaries.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Network className="text-teal-500 shrink-0 mt-0.5" size={20} />
                              <span>Deep graph traversal for discovering hidden legal connections.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'future' && (
                    <div className="space-y-10">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Impact and Innovation</h3>
                        <p className="text-lg text-slate-600 mb-6">
                          JuriAid transforms manual legal research into an intelligent, integrated legal assistance workflow.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            'Reducing research time significantly',
                            'Increasing retrieval accuracy',
                            'Improving access to reliable legal information',
                            'Supporting structured case preparation',
                            'Enhancing transparency through explainable AI'
                          ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                              <span className="font-medium text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsSection;
