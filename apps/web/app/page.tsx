'use client'

import { useMemo, useState } from 'react'

type Section = 'Mission Control' | 'Decisions' | 'Missions' | 'Products' | 'Inventory' | 'Advertising' | 'Finance' | 'Memory' | 'Automations' | 'Simulator'

const nav: Section[] = ['Mission Control', 'Decisions', 'Missions', 'Products', 'Inventory', 'Advertising', 'Finance', 'Memory', 'Automations', 'Simulator']

const missions = [
  { id: 1, title: 'Inventory risk — APOYO', detail: 'Only 12 days of stock remaining', impact: 'Avoid stockout', confidence: 95, type: 'Risk' },
  { id: 2, title: 'PPC opportunity — ZenFlow', detail: 'Search-term waste detected', impact: '+€420/mo', confidence: 92, type: 'Opportunity' },
  { id: 3, title: 'Pricing opportunity — PureLife', detail: 'Competitors raised price', impact: '+€280/mo', confidence: 88, type: 'Opportunity' },
]

const decisions = [
  { title: 'Increase budget — APOYO Brand', owner: 'PPC Director', status: 'Needs approval', impact: '+€540/mo', risk: 'Medium' },
  { title: 'Create PO — APOYO', owner: 'Inventory Director', status: 'Needs approval', impact: 'Avoid stockout', risk: 'High' },
  { title: 'Increase price — PureLife +5%', owner: 'Pricing Director', status: 'Simulation ready', impact: '+€280/mo', risk: 'Medium' },
]

const products = [
  ['APOYO', '€2,841', '€892', '31.4%'],
  ['ZenFlow', '€1,920', '€534', '27.8%'],
  ['PureLife', '€1,342', '€320', '23.8%'],
  ['VoltMax', '€980', '€215', '21.9%'],
  ['EcoBreeze', '€804', '€187', '23.3%'],
]

const inventory = [
  ['APOYO', '2,400', '12', 'Risk'],
  ['ZenFlow', '5,200', '38', 'Healthy'],
  ['PureLife', '1,800', '21', 'Healthy'],
  ['VoltMax', '3,600', '45', 'Healthy'],
  ['EcoBreeze', '900', '14', 'Risk'],
]

const ads = [
  ['Brand — APOYO', '€2,140', '€7,820', '27.4%', '3.65'],
  ['Product — ZenFlow', '€1,320', '€4,210', '31.3%', '3.19'],
  ['Competitor — PureLife', '€980', '€2,870', '25.6%', '3.91'],
  ['DSP — VoltMax', '€760', '€2,150', '35.3%', '2.83'],
]

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>
}

export default function Home() {
  const [section, setSection] = useState<Section>('Mission Control')
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [approved, setApproved] = useState<string[]>([])
  const [dateRange, setDateRange] = useState('Last 30 days')

  const filteredMissions = useMemo(
    () => missions.filter(m => `${m.title} ${m.detail}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  const approve = (name: string) => {
    setApproved(v => v.includes(name) ? v : [...v, name])
    setSelected(null)
  }

  return (
    <main className="app-shell">
      <style>{`
        *{box-sizing:border-box} body{margin:0;background:#060a11;color:#f5f7fb;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.app-shell{min-height:100vh;background:radial-gradient(circle at 70% -20%,#14233a 0,#080c14 36%,#060a11 72%)}
        .topbar{height:64px;border-bottom:1px solid #1b2533;background:#080d16cc;backdrop-filter:blur(14px);display:flex;align-items:center;gap:24px;padding:0 22px;position:sticky;top:0;z-index:10}.brand{font-weight:850;letter-spacing:-.04em;font-size:19px;white-space:nowrap}.brand span{opacity:.4}.search{height:38px;max-width:650px;flex:1;background:#101722;border:1px solid #263244;border-radius:10px;color:#fff;padding:0 14px;outline:none}.top-status{margin-left:auto;color:#5ee7a5;font-size:12px;white-space:nowrap}.avatar{width:34px;height:34px;border-radius:50%;background:#273245;display:grid;place-items:center;font-size:12px;font-weight:700}
        .layout{display:grid;grid-template-columns:210px 1fr;min-height:calc(100vh - 64px)}.sidebar{border-right:1px solid #182230;background:#080d15;padding:18px 12px;display:flex;flex-direction:column}.nav-item{border:0;background:transparent;color:#b9c2d0;text-align:left;padding:10px 12px;border-radius:9px;margin:2px 0;cursor:pointer;font-size:13px}.nav-item:hover{background:#111a28;color:#fff}.nav-item.active{background:#15243a;color:#6da8ff;box-shadow:inset 2px 0 #4f8cff}.badge{float:right;background:#d84e5d;color:#fff;border-radius:10px;padding:1px 6px;font-size:10px}.workspace{padding:28px;max-width:1600px;width:100%;margin:auto}.page-head{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.eyebrow{font-size:11px;color:#6e7c90;letter-spacing:.08em;text-transform:uppercase}.title{font-size:29px;margin:5px 0 4px;letter-spacing:-.035em}.muted{color:#778398;font-size:13px}.head-actions{display:flex;gap:8px}.button{border:1px solid #2b3a4f;background:#111a27;color:#eef4ff;border-radius:9px;padding:9px 13px;cursor:pointer;font-weight:600}.button.primary{background:#f2f6ff;color:#07101d;border-color:#f2f6ff}.button:hover{filter:brightness(1.1)}select{background:#111a27;color:#dce5f4;border:1px solid #2b3a4f;border-radius:9px;padding:9px 11px}
        .kpis{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:24px}.card{background:linear-gradient(180deg,#101722,#0d141e);border:1px solid #1d2a3a;border-radius:14px;padding:17px;box-shadow:0 10px 30px #00000018}.kpi-label{font-size:11px;color:#718097;text-transform:uppercase;letter-spacing:.05em}.kpi-value{font-size:25px;font-weight:800;margin:8px 0 4px}.up{color:#55d89a}.down{color:#ffb05d}.grid-main{display:grid;grid-template-columns:1.3fr .9fr .85fr;gap:14px;margin-top:14px}.section-title{font-size:15px;font-weight:750;margin-bottom:3px}.section-sub{font-size:11px;color:#6e7b90}.chart{height:180px;margin-top:12px;display:flex;align-items:flex-end;gap:7px;padding:10px 4px 0;border-top:1px solid #1d2837}.bar{flex:1;min-width:8px;background:linear-gradient(180deg,#3987ff,#1a3158);border-radius:5px 5px 2px 2px;box-shadow:0 0 18px #2878ff22}.chart-labels{display:flex;justify-content:space-between;color:#59677b;font-size:9px;margin-top:7px}.row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 0;border-top:1px solid #1b2735}.row:first-child{border-top:0}.mission-button{background:transparent;color:inherit;border:0;text-align:left;cursor:pointer;width:100%;padding:0}.number{width:26px;height:26px;border-radius:50%;display:inline-grid;place-items:center;background:#1b2c44;color:#70a8ff;font-size:12px;font-weight:800;margin-right:9px}.status-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#55d89a;margin-right:6px}.status-dot.warn{background:#ffb34f}.status-dot.off{background:#69758a}.pill{font-size:10px;padding:4px 7px;border-radius:7px;background:#142338;color:#7fb2ff}.pill.risk{background:#332217;color:#ffb35c}.pill.ok{background:#123025;color:#5fe0a3}.impact{color:#59d99d;font-size:12px;font-weight:700}.three-cols{display:grid;grid-template-columns:1.1fr 1.25fr .9fr;gap:14px;margin-top:14px}.table{width:100%;border-collapse:collapse;font-size:12px}.table th{text-align:left;color:#68778c;font-size:10px;text-transform:uppercase;font-weight:600;padding:8px 0}.table td{padding:10px 0;border-top:1px solid #1b2735}.recommendation{display:flex;gap:11px;padding:11px 0;border-top:1px solid #1b2735}.icon{width:28px;height:28px;border-radius:8px;background:#17243a;display:grid;place-items:center}.footer-note{margin-top:18px;color:#536075;font-size:10px;text-align:center}
        .modal-backdrop{position:fixed;inset:0;background:#000a;display:grid;place-items:center;padding:20px;z-index:30}.modal{width:min(580px,100%);background:#0e1621;border:1px solid #304158;border-radius:17px;padding:24px;box-shadow:0 30px 80px #000b}.modal h2{margin:7px 0 8px}.modal-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:22px}
        @media(max-width:1100px){.kpis{grid-template-columns:repeat(3,1fr)}.grid-main,.three-cols{grid-template-columns:1fr}.layout{grid-template-columns:180px 1fr}}@media(max-width:760px){.top-status{display:none}.layout{grid-template-columns:1fr}.sidebar{display:none}.workspace{padding:18px}.kpis{grid-template-columns:repeat(2,1fr)}.page-head{flex-direction:column}.head-actions{width:100%}.head-actions .search{max-width:none}}
      `}</style>

      <header className="topbar">
        <div className="brand">✦ ATHENA<span> OS</span></div>
        <input className="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ask Athena anything… e.g. Why did profit drop?" />
        <div className="top-status">● All systems operational</div>
        <div className="avatar">AD</div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div style={{marginBottom:16}} className="eyebrow">AI operating system</div>
          {nav.map(item => <button key={item} className={`nav-item ${section===item?'active':''}`} onClick={() => setSection(item)}>{item}{item==='Decisions' && <span className="badge">3</span>}</button>)}
          <div style={{marginTop:'auto',padding:'13px 11px',border:'1px solid #1d2a3a',borderRadius:11,background:'#0d1520'}}><div style={{fontWeight:700,fontSize:12}}>APOYO Brands</div><div className="muted" style={{fontSize:10,marginTop:3}}>Demo business</div></div>
        </aside>

        <section className="workspace">
          <div className="page-head">
            <div><div className="eyebrow">Mission Control · {dateRange}</div><h1 className="title">Good morning, Amir. 👋</h1><div className="muted">Athena found 3 items that deserve your attention.</div></div>
            <div className="head-actions"><select value={dateRange} onChange={e=>setDateRange(e.target.value)}><option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option></select><button className="button primary" onClick={()=>setSelected('Ask Athena')}>✦ Ask Athena</button></div>
          </div>

          {section === 'Mission Control' ? <>
            <div className="kpis">
              {[
                ['Business Health','91','+4% vs last week','up'],['Total Revenue','€48,421','+12.4%','up'],['Net Profit','€7,382','+18.7%','up'],['Inventory Health','81','12 days risk on APOYO','down'],['ACOS','22.4%','-3.6%','up']
              ].map(([label,value,change,trend])=><Card key={label}><div className="kpi-label">{label}</div><div className="kpi-value">{value}</div><div className={trend==='up'?'up':'down'} style={{fontSize:11}}>{change}</div></Card>)}
            </div>

            <div className="grid-main">
              <Card><div className="section-title">Business Performance</div><div className="section-sub">Revenue · last 7 days</div><div className="chart">{[38,51,44,58,67,74,61,83,77,92,88,100].map((h,i)=><div className="bar" key={i} style={{height:`${h}%`}} />)}</div><div className="chart-labels"><span>Aug 11</span><span>Aug 14</span><span>Aug 17</span></div></Card>
              <Card><div className="section-title">Top Products by Profit</div><div className="section-sub">Demo data</div><table className="table"><thead><tr><th>Product</th><th>Profit</th><th>Margin</th></tr></thead><tbody>{products.map(p=><tr key={p[0]}><td>{p[0]}</td><td>{p[2]}</td><td className="up">{p[3]}</td></tr>)}</tbody></table></Card>
              <Card><div className="section-title">Today's Mission</div><div className="section-sub">Prioritized by Athena</div><div style={{marginTop:8}}>{filteredMissions.map((m,i)=><button className="mission-button row" key={m.id} onClick={()=>setSelected(m.title)}><span><span className="number">{i+1}</span><b style={{fontSize:12}}>{m.title}</b><div className="muted" style={{marginLeft:35,marginTop:3,fontSize:10}}>{m.detail}</div></span><span className="impact">{m.impact}</span></button>)}</div></Card>
            </div>

            <div className="three-cols">
              <Card><div className="section-title">Inventory Status</div><table className="table"><thead><tr><th>Product</th><th>Days</th><th>Status</th></tr></thead><tbody>{inventory.map(r=><tr key={r[0]}><td>{r[0]}</td><td>{r[2]}</td><td><span className={`pill ${r[3]==='Risk'?'risk':'ok'}`}>{r[3]}</span></td></tr>)}</tbody></table></Card>
              <Card><div className="section-title">Recent Decisions</div><table className="table"><thead><tr><th>Decision</th><th>Impact</th><th>Status</th></tr></thead><tbody>{decisions.map(d=><tr key={d.title}><td>{d.title}</td><td className="impact">{d.impact}</td><td>{approved.includes(d.title)?<span className="pill ok">Approved</span>:<span className="pill">Pending</span>}</td></tr>)}</tbody></table></Card>
              <Card><div className="section-title">Athena Status</div>{[['Core API','Online',true],['Database','Online',true],['Memory','Ready',true],['AI Engine','Online',true],['Amazon Connector','Not connected',false],['Automation','Locked',false]].map(([a,b,on])=><div className="row" key={String(a)}><span>{a}</span><span><span className={`status-dot ${on?'':'off'}`}></span>{b}</span></div>)}</Card>
            </div>

            <div className="grid-main" style={{gridTemplateColumns:'1.25fr 1fr'}}>
              <Card><div className="section-title">Decision Queue <span className="muted">· {decisions.length-approved.length} waiting for approval</span></div>{decisions.map(d=><div className="row" key={d.title}><div><b style={{fontSize:12}}>{d.title}</b><div className="muted" style={{marginTop:4}}>{d.owner} · {d.risk} risk · {d.impact}</div></div><button className="button" onClick={()=>setSelected(d.title)}>{approved.includes(d.title)?'Approved':'Review'}</button></div>)}</Card>
              <Card><div className="section-title">AI Recommendations</div>{[['⚡','Increase price for PureLife by 5%','Expected profit +€280/mo'],['⌁','Pause 12 low-performing keywords','Expected savings €110/mo'],['▣','Order 5,000 units of APOYO','Prevents stockout in 18 days']].map(r=><div className="recommendation" key={r[1]}><div className="icon">{r[0]}</div><div><b style={{fontSize:12}}>{r[1]}</b><div className="muted" style={{marginTop:4}}>{r[2]}</div></div></div>)}</Card>
            </div>
          </> : <Card><div className="eyebrow">{section}</div><h2 style={{margin:'8px 0'}}>Coming next</h2><p className="muted">This navigation item is connected to the Mission Control shell. The next build will replace this placeholder with its real data and workflows.</p><button className="button primary" onClick={()=>setSection('Mission Control')}>Back to Mission Control</button></Card>}

          <div className="footer-note">ATHENA OS · Alpha UI · All numbers shown are fictional demo data · No Amazon actions are executed in this prototype.</div>
        </section>
      </div>

      {selected && <div className="modal-backdrop" onClick={()=>setSelected(null)}><div className="modal" onClick={e=>e.stopPropagation()}><div className="eyebrow">Athena Decision Review</div><h2>{selected}</h2><p className="muted" style={{lineHeight:1.7}}>Athena has prepared the evidence, expected impact, confidence and risk assessment. In this prototype, execution is simulated and no external account is changed.</p><div className="card" style={{marginTop:16}}><div className="row"><span>Expected impact</span><b className="impact">+€540 / month</b></div><div className="row"><span>Confidence</span><b>92%</b></div><div className="row"><span>Policy</span><span className="pill ok">Approval required</span></div></div><div className="modal-actions"><button className="button" onClick={()=>setSelected(null)}>Close</button><button className="button primary" onClick={()=>approve(selected)}>Approve (demo)</button></div></div></div>}
    </main>
  )
}
