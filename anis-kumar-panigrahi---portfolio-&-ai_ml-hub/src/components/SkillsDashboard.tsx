import React, { useState } from 'react';
import { 
  BarChart3, 
  Brain, 
  Code, 
  Cpu, 
  Database, 
  GitBranch, 
  Sparkles, 
  Clock, 
  Cloud, 
  Terminal, 
  Play, 
  CheckCircle2, 
  Sliders, 
  RefreshCw,
  Layers,
  Zap
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'radar' | 'code-runner' | 'sql-tester'>('radar');
  
  // Interactive Python/ML Runner State
  const [runningSnippet, setRunningSnippet] = useState(false);
  const [mlInputFeature, setMlInputFeature] = useState<number>(4.2);
  const [mlOutput, setMlOutput] = useState<{
    status: string;
    prediction: string;
    probability: number;
    latency: number;
  } | null>({
    status: 'Ready',
    prediction: 'Class A (Positive Response)',
    probability: 94.6,
    latency: 28
  });

  // Interactive SQL Playground State
  const [selectedQuery, setSelectedQuery] = useState<'summary' | 'top_models' | 'latency_check'>('summary');

  const categories = ['All', 'AI & ML', 'Data & SQL', 'Programming', 'Cloud & Tools', 'Professional'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const handleRunMlPrediction = () => {
    setRunningSnippet(true);
    setTimeout(() => {
      const prob = Math.min(99.4, Math.max(76.2, 85 + (mlInputFeature * 2.8)));
      setMlOutput({
        status: 'Inference Complete',
        prediction: mlInputFeature > 3 ? 'High Probability (Optimal Cohort)' : 'Moderate Probability (Review Flagged)',
        probability: Number(prob.toFixed(1)),
        latency: Math.floor(Math.random() * 8 + 22)
      });
      setRunningSnippet(false);
    }, 450);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain': return <Brain className="w-4 h-4 text-emerald-500" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'Code': return <Code className="w-4 h-4 text-blue-500" />;
      case 'Database': return <Database className="w-4 h-4 text-indigo-500" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-teal-500" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-orange-500" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-sky-500" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-purple-500" />;
      case 'Clock': return <Clock className="w-4 h-4 text-emerald-600" />;
      default: return <Layers className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              <Zap className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills Visualization &amp; Live Evaluation Dashboard
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Quantitative proficiency breakdown derived from resume skills (Python, SQL, Git, ML, AI, Data Analytics) alongside an interactive verification console.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setActiveTab('radar')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'radar'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Skills Breakdown
            </button>
            <button
              onClick={() => setActiveTab('code-runner')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'code-runner'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              ML Model Simulator
            </button>
            <button
              onClick={() => setActiveTab('sql-tester')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'sql-tester'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              SQL Query Lab
            </button>
          </div>
        </div>

        {/* Tab 1: Skills Breakdown */}
        {activeTab === 'radar' && (
          <div className="space-y-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-xl p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          {getIcon(skill.iconName)}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                            {skill.name}
                          </h3>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">
                            {skill.category} &middot; {skill.experience}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {skill.highlight}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified on Resume
                    </span>
                    <span className="font-mono">Ready for Dev</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Interactive ML Model Simulator */}
        {activeTab === 'code-runner' && (
          <div className="rounded-xl overflow-hidden bg-slate-900 text-slate-200 border border-slate-800 shadow-xl">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-semibold text-slate-300">
                  predictive_model_simulation.py (Scikit-Learn Inference Pipeline)
                </span>
              </div>
              <button
                onClick={handleRunMlPrediction}
                disabled={runningSnippet}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-semibold disabled:opacity-50"
              >
                {runningSnippet ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5" />
                )}
                <span>{runningSnippet ? 'Inference Running...' : 'Execute Model.predict()'}</span>
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Code Editor Preview */}
              <div className="lg:col-span-7 font-mono text-xs space-y-3 bg-slate-950/70 p-4 rounded-lg border border-slate-800/80">
                <div className="text-slate-500"># 1. Feature Engineering &amp; Input Vector</div>
                <div className="text-slate-300">
                  <span className="text-purple-400">import</span> joblib<br />
                  <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np<br />
                  <br />
                  model = joblib.load(<span className="text-emerald-300">"predictive_v2.joblib"</span>)<br />
                  <br />
                  <span className="text-slate-500"># Feature Normalized Input:</span><br />
                  input_vector = np.array([[<span className="text-amber-400">{mlInputFeature}</span>, 1.82, 0.45, 94.2]])<br />
                  prediction = model.predict(input_vector)<br />
                  probability = model.predict_proba(input_vector)[0][1]
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-slate-400 text-[11px] mb-2 flex items-center justify-between">
                    <span>Adjust Feature Value Parameter (X[0]):</span>
                    <span className="font-bold text-emerald-400">{mlInputFeature}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.2"
                    value={mlInputFeature}
                    onChange={(e) => setMlInputFeature(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Inference Result Output */}
              <div className="lg:col-span-5 bg-slate-800/40 p-4 rounded-lg border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Brain className="w-4 h-4 text-emerald-400" />
                    Model Inference Telemetry
                  </div>

                  {mlOutput && (
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Execution Status</span>
                        <span className="font-semibold text-emerald-400 font-mono">
                          &bull; {mlOutput.status}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Class Prediction</span>
                        <span className="font-bold text-white text-sm">
                          {mlOutput.prediction}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Confidence Probability</span>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-emerald-400 h-full rounded-full"
                              style={{ width: `${mlOutput.probability}%` }}
                            />
                          </div>
                          <span className="font-mono text-emerald-400 font-bold">
                            {mlOutput.probability}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Inference Latency</span>
                        <span className="font-mono text-slate-300">
                          {mlOutput.latency} ms (Sub-second low latency)
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  Reflects the architecture built for the <span className="text-emerald-400 font-semibold">Predictive Analysis Model</span> project.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Interactive SQL Query Lab */}
        {activeTab === 'sql-tester' && (
          <div className="rounded-xl overflow-hidden bg-slate-900 text-slate-200 border border-slate-800 shadow-xl">
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-indigo-400" />
                <span className="font-mono text-xs font-semibold text-slate-300">
                  analytics_db_query_simulator.sql (PostgreSQL / Relational Data Analytics)
                </span>
              </div>
              <div className="flex gap-1.5 text-xs">
                <button
                  onClick={() => setSelectedQuery('summary')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                    selectedQuery === 'summary' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Query 1: KPI Aggregation
                </button>
                <button
                  onClick={() => setSelectedQuery('top_models')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                    selectedQuery === 'top_models' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Query 2: Top Accuracy
                </button>
                <button
                  onClick={() => setSelectedQuery('latency_check')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                    selectedQuery === 'latency_check' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Query 3: Latency Bounds
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Query Preview Box */}
              <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-indigo-300">
                {selectedQuery === 'summary' && (
                  <code>
                    SELECT domain, COUNT(*) AS total_models, ROUND(AVG(accuracy_pct), 2) AS avg_accuracy<br />
                    FROM ml_project_registry<br />
                    GROUP BY domain ORDER BY avg_accuracy DESC;
                  </code>
                )}
                {selectedQuery === 'top_models' && (
                  <code>
                    SELECT model_name, framework, accuracy_pct, test_samples<br />
                    FROM ml_project_registry<br />
                    WHERE accuracy_pct &gt;= 90.0 ORDER BY accuracy_pct DESC LIMIT 3;
                  </code>
                )}
                {selectedQuery === 'latency_check' && (
                  <code>
                    SELECT service_endpoint, cloud_region, p99_latency_ms, uptime_pct<br />
                    FROM serverless_telemetry<br />
                    WHERE p99_latency_ms &lt; 50.0;
                  </code>
                )}
              </div>

              {/* Query Output Result Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-left text-slate-400">
                      {selectedQuery === 'summary' && (
                        <>
                          <th className="py-2 px-3">DOMAIN</th>
                          <th className="py-2 px-3">TOTAL_MODELS</th>
                          <th className="py-2 px-3">AVG_ACCURACY</th>
                        </>
                      )}
                      {selectedQuery === 'top_models' && (
                        <>
                          <th className="py-2 px-3">MODEL_NAME</th>
                          <th className="py-2 px-3">FRAMEWORK</th>
                          <th className="py-2 px-3">ACCURACY_PCT</th>
                          <th className="py-2 px-3">TEST_SAMPLES</th>
                        </>
                      )}
                      {selectedQuery === 'latency_check' && (
                        <>
                          <th className="py-2 px-3">SERVICE_ENDPOINT</th>
                          <th className="py-2 px-3">CLOUD_REGION</th>
                          <th className="py-2 px-3">P99_LATENCY_MS</th>
                          <th className="py-2 px-3">UPTIME_PCT</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {selectedQuery === 'summary' && (
                      <>
                        <tr>
                          <td className="py-2 px-3 text-emerald-400 font-semibold">Predictive Analytics</td>
                          <td className="py-2 px-3">3</td>
                          <td className="py-2 px-3 font-bold">94.20%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-emerald-400 font-semibold">Data Visualization</td>
                          <td className="py-2 px-3">2</td>
                          <td className="py-2 px-3 font-bold">91.80%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 text-emerald-400 font-semibold">NLP &amp; Text Processing</td>
                          <td className="py-2 px-3">2</td>
                          <td className="py-2 px-3 font-bold">89.40%</td>
                        </tr>
                      </>
                    )}
                    {selectedQuery === 'top_models' && (
                      <>
                        <tr>
                          <td className="py-2 px-3 font-semibold text-white">Predictive Analysis ML Engine</td>
                          <td className="py-2 px-3">Scikit-Learn / Python</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">94.2%</td>
                          <td className="py-2 px-3">15,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-semibold text-white">Data Analytics Dashboard KPI Engine</td>
                          <td className="py-2 px-3">Pandas / SQL</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">92.0%</td>
                          <td className="py-2 px-3">120,000</td>
                        </tr>
                      </>
                    )}
                    {selectedQuery === 'latency_check' && (
                      <>
                        <tr>
                          <td className="py-2 px-3 font-semibold text-white">/api/predictive/inference</td>
                          <td className="py-2 px-3">asia-east1 (Baleswar edge)</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">28.4 ms</td>
                          <td className="py-2 px-3">99.98%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-semibold text-white">/api/analytics/query</td>
                          <td className="py-2 px-3">asia-east1</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">41.2 ms</td>
                          <td className="py-2 px-3">99.95%</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
