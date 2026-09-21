import React, { useState } from 'react';
import { 
  Activity, 
  Download, 
  FileSpreadsheet, 
  FileText, 
  ShieldCheck, 
  Server, 
  Terminal, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Filter, 
  SlidersHorizontal,
  CloudLightning,
  TrendingUp,
  Globe,
  Database,
  Check,
  Zap,
  Lock
} from 'lucide-react';
import { 
  INITIAL_SYSTEM_LOGS, 
  VISITOR_ANALYTICS_DATA, 
  GEO_TRAFFIC_DATA, 
  PERSONAL_INFO 
} from '../data/portfolioData';
import { SystemLog, UserRole } from '../types';

interface AnalyticsDashboardProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  userRole,
  setUserRole,
}) => {
  const [logs, setLogs] = useState<SystemLog[]>(INITIAL_SYSTEM_LOGS);
  const [logFilter, setLogFilter] = useState<'all' | 'info' | 'success' | 'warn' | 'error'>('all');
  const [logSearch, setLogSearch] = useState('');
  
  // Customizable Widgets State
  const [widgets, setWidgets] = useState({
    traffic: true,
    latency: true,
    geo: true,
    infrastructure: true,
    logs: true,
  });

  const [simulatedAutoscale, setSimulatedAutoscale] = useState<number>(2);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  // Filter logs
  const filteredLogs = logs.filter((log) => {
    const matchesFilter = logFilter === 'all' || log.level === logFilter;
    const matchesSearch = 
      log.message.toLowerCase().includes(logSearch.toLowerCase()) ||
      log.service.toLowerCase().includes(logSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Export handlers
  const handleExportCSV = () => {
    const headers = 'Timestamp,Level,Service,Message,Latency(ms)\n';
    const rows = logs
      .map((l) => `"${l.timestamp}","${l.level}","${l.service}","${l.message}",${l.latencyMs}`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `anis_panigrahi_analytics_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showNotice('CSV Report successfully downloaded!');
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify({
      reportTitle: 'Anis Kumar Panigrahi - System & Visitor Telemetry',
      generatedAt: new Date().toISOString(),
      candidate: PERSONAL_INFO.name,
      discipline: PERSONAL_INFO.role,
      visitorTrends: VISITOR_ANALYTICS_DATA,
      geoBreakdown: GEO_TRAFFIC_DATA,
      logs: logs
    }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `anis_panigrahi_system_report_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotice('Excel/JSON Telemetry export created!');
  };

  const handleExportPDF = () => {
    window.print();
  };

  const showNotice = (msg: string) => {
    setExportNotice(msg);
    setTimeout(() => setExportNotice(null), 3500);
  };

  const handleSimulateNewLog = () => {
    const sampleLogs: SystemLog[] = [
      {
        id: `log-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString(),
        level: 'info',
        service: 'ServerlessWorkerPool',
        message: `Dynamic scale-out event triggered. Active worker count: ${simulatedAutoscale + 1}.`,
        latencyMs: 16
      },
      {
        id: `log-${Date.now() + 1}`,
        timestamp: new Date().toLocaleTimeString(),
        level: 'success',
        service: 'HealthCheck',
        message: 'Disaster Recovery sync completed. PostgreSQL replication lag: 0.04s.',
        latencyMs: 12
      }
    ];

    const random = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
    setLogs((prev) => [random, ...prev]);
    setSimulatedAutoscale((prev) => Math.min(6, prev + 1));
  };

  return (
    <section id="analytics" className="py-16 md:py-20 bg-slate-50/60 dark:bg-slate-900/40 border-t border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300">
              <Activity className="w-3.5 h-3.5" />
              <span>Real-Time Developer Telemetry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Developer Monitoring, SLAs &amp; System Analytics
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Real-time visitor tracking, serverless auto-scaling latency telemetry, disaster recovery protocols, and role-based access control.
            </p>
          </div>

          {/* Action Tools & Report Exports */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleExportPDF}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
              title="Print or Save PDF Report"
            >
              <FileText className="w-3.5 h-3.5 text-rose-500" />
              <span>PDF Report</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
              title="Export CSV Dataset"
            >
              <Download className="w-3.5 h-3.5 text-emerald-500" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
              title="Export Full JSON / Excel Telemetry"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-500" />
              <span>Excel / JSON</span>
            </button>
          </div>
        </div>

        {/* Export Notification Banner */}
        {exportNotice && (
          <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between animate-fade-in">
            <span className="flex items-center gap-2 font-medium">
              <Check className="w-4 h-4" />
              {exportNotice}
            </span>
          </div>
        )}

        {/* Top-Line Real-Time KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Weekly Visitors</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
              1,735
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-medium">
              &uarr; 18.4% vs last week
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Cloud Edge Latency</span>
              <Zap className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mt-1">
              22.4 ms
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              asia-east1 Edge CDN hit
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>High Availability SLA</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono mt-1">
              99.98%
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Zero unplanned downtime
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Active RBAC Role</span>
              <Lock className="w-3.5 h-3.5 text-purple-500" />
            </div>
            <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 capitalize mt-1 flex items-center gap-1.5">
              <span>{userRole} Mode</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              {userRole === 'admin' ? 'Root privileges enabled' : userRole === 'recruiter' ? 'Recruiter dossier unlocked' : 'Public guest view'}
            </div>
          </div>
        </div>

        {/* Customizable Widget Controls Bar */}
        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
            <SlidersHorizontal className="w-4 h-4 text-emerald-500" />
            <span>Customize Dashboard Widgets:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(widgets).map((wKey) => {
              const active = (widgets as any)[wKey];
              return (
                <button
                  key={wKey}
                  onClick={() => setWidgets((prev) => ({ ...prev, [wKey]: !active }))}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold capitalize transition-all ${
                    active
                      ? 'bg-slate-800 text-white dark:bg-slate-700'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {wKey} {active ? '✓' : '+'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Traffic Trends & Geo Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Traffic Trends Widget */}
          {widgets.traffic && (
            <div className="lg:col-span-8 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span>Daily Traffic Trends &amp; Pageviews</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Visitor engagement telemetry tracked across this week
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400">UTC+05:30 (IST)</span>
              </div>

              {/* Bar Chart Representation */}
              <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2">
                {VISITOR_ANALYTICS_DATA.map((item) => {
                  const heightPct = Math.min(100, Math.max(20, (item.pageViews / 1000) * 100));
                  return (
                    <div key={item.date} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <div className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.pageViews}
                      </div>
                      <div className="w-full max-w-[36px] bg-slate-100 dark:bg-slate-800 rounded-t-md h-full flex items-end overflow-hidden">
                        <div
                          className="w-full bg-emerald-500 hover:bg-emerald-400 transition-all rounded-t-md"
                          style={{ height: `${heightPct}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                        {item.date}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Avg Session: <strong className="text-slate-800 dark:text-slate-200">3m 52s</strong></span>
                <span>Bounce Rate: <strong className="text-emerald-600">22.8%</strong></span>
                <span>CDN Cache Hit: <strong className="text-indigo-600">98.4%</strong></span>
              </div>
            </div>
          )}

          {/* Geographic Breakdown Widget */}
          {widgets.geo && (
            <div className="lg:col-span-4 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span>Geographic Distribution</span>
                </h3>
                <span className="text-xs text-slate-400">Top Regions</span>
              </div>

              <div className="space-y-3 pt-2">
                {GEO_TRAFFIC_DATA.map((geo) => (
                  <div key={geo.region} className="space-y-1 text-xs">
                    <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                      <span>{geo.region}</span>
                      <span className="font-mono font-semibold">{geo.percentage}% ({geo.visitors})</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{ width: `${geo.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                Highest concentration in <strong>Baleswar &amp; Bhubaneswar</strong> tech hubs, followed by global dev readers.
              </div>
            </div>
          )}

        </div>

        {/* Infrastructure, Auto-Scaling & Disaster Recovery Widget */}
        {widgets.infrastructure && (
          <div className="rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <CloudLightning className="w-4 h-4 text-amber-500" />
                  <span>Cloud Infrastructure &amp; Disaster Recovery Architecture</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Built on modern serverless cloud patterns with automated horizontal scaling and continuous backup
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSimulateNewLog}
                  className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 border border-slate-200 dark:border-slate-700"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Simulate Scale Out</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Auto-Scaling Pool</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 block font-mono">
                  {simulatedAutoscale} Active Containers
                </span>
                <span className="text-[11px] text-emerald-600 mt-1 block">Elastic: 1 to 10 instances</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Disaster Recovery (DR)</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 block font-mono">
                  Dual-Region Active/Standby
                </span>
                <span className="text-[11px] text-emerald-600 mt-1 block">RPO &lt; 5s &middot; RTO &lt; 30s</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Security Protocols</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 block font-mono">
                  TLS 1.3 / OWASP Guard
                </span>
                <span className="text-[11px] text-indigo-600 mt-1 block">Rate limited &amp; DDOS shielded</span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">End-to-End Test Suite</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm mt-0.5 block font-mono">
                  100% Passing Tests
                </span>
                <span className="text-[11px] text-emerald-600 mt-1 block">Pytest &amp; Vitest CI verified</span>
              </div>
            </div>
          </div>
        )}

        {/* Live System Logs Console */}
        {widgets.logs && (
          <div className="rounded-xl overflow-hidden bg-slate-900 text-slate-200 border border-slate-800 shadow-xl">
            {/* Header */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs font-semibold text-slate-300">
                  Live System &amp; Telemetry Logs (Developer Console)
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">
                  {filteredLogs.length} events
                </span>
              </div>

              {/* Filter and Search */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Filter logs..."
                  value={logSearch}
                  onChange={(e) => setLogSearch(e.target.value)}
                  className="px-2.5 py-1 rounded text-xs bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-slate-700"
                />
                <select
                  value={logFilter}
                  onChange={(e) => setLogFilter(e.target.value as any)}
                  className="px-2.5 py-1 rounded text-xs bg-slate-900 border border-slate-800 text-slate-300 focus:outline-none"
                >
                  <option value="all">All Levels</option>
                  <option value="info">Info</option>
                  <option value="success">Success</option>
                  <option value="warn">Warnings</option>
                  <option value="error">Errors</option>
                </select>
              </div>
            </div>

            {/* Log Records Stream */}
            <div className="p-4 font-mono text-xs space-y-2 max-h-64 overflow-y-auto">
              {filteredLogs.length === 0 ? (
                <div className="text-slate-500 py-6 text-center">No logs match your filter criteria.</div>
              ) : (
                filteredLogs.map((log) => (
                  <div
                    key={log.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-2 rounded bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-2">
                      <span className="text-[10px] text-slate-500 shrink-0">{log.timestamp}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold shrink-0 ${
                          log.level === 'success'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : log.level === 'warn'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800'
                            : log.level === 'error'
                            ? 'bg-rose-950 text-rose-400 border border-rose-800'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {log.level}
                      </span>
                      <span className="text-indigo-300 font-semibold shrink-0">[{log.service}]</span>
                      <span className="text-slate-300">{log.message}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 shrink-0 pl-6 sm:pl-0">
                      {log.latencyMs}ms
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Console Footer */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
              <span>Telemetry streaming via WebSocket / EventSource emulation</span>
              <button
                onClick={() => setLogs(INITIAL_SYSTEM_LOGS)}
                className="hover:text-slate-300 underline"
              >
                Reset Default Logs
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
