'use client'

import { useMemo, useState } from 'react'

const missions = [
  { title: 'Review PPC efficiency', impact: '+€500/mo', confidence: 82, type: 'Opportunity' },
  { title: 'Check inventory risk', impact: '17 days cover', confidence: 94, type: 'Risk' },
  { title: 'Review pricing opportunity', impact: '+€2,140/mo', confidence: 76, type: 'Opportunity' },
]

const decisions = [
  { title: 'Reduce wasted PPC spend', owner: 'PPC Director', status: 'Needs approval', impact: '+€740/mo' },
  { title: 'Reorder Product X', owner: 'Inventory Director', status: 'Needs approval', impact: 'Avoid stockout' },
  { title: 'Test +3% price', owner: 'Pricing Director', status: 'Simulation ready', impact: '+€410/mo' },
]

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => missions.filter(m => m.title.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <main style={{minHeight:'100vh',background:'#080b12',color:'#f5f7fb',fontFamily:'Inter,Arial,sans-serif'}}>
      <div style={{display:'grid',gridTemplateColumns:'250px 1fr',minHeight:'100vh'}}>
        <aside style={{borderRight:'1px solid #202633',padding:24,background:'#0c1018'}}>
          <div style={{fontWeight:800,fontSize:22,letterSpacing:'-.04em'}}>ATHENA<span style={{opacity:.45}}> OS</span></div>
          <div style={{fontSize:11,opacity:.45,marginTop:4}}>AI BUSINESS OPERATING SYSTEM</div>
          <nav style={{marginTop:42,display:'grid',gap:8}}>
            {['Mission Control','Decisions','Missions','Products','Inventory','Advertising','Finance','Memory','Automations','Simulator'].map((x,i)=><div key={x} style={{padding:'11px 12px',borderRadius:9,background:i===0?'#1a2230':'transparent',fontSize:14,opacity:i===0?1:.65}}>{x}</div>)}
          </nav>
          <div style={{position:'absolute',bottom:24,fontSize:12,opacity:.45}}>Alpha 0.1 · Local</div>
        </aside>

        <section style={{padding:'32px 42px',maxWidth:1500,width:'100%',boxSizing:'border-box'}}>
          <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20}}>
            <div><div style={{fontSize:12,opacity:.45}}>MONDAY · AUGUST 17</div><h1 style={{fontSize:32,margin:'6px 0 4px'}}>Good morning, Amir.</h1><div style={{opacity:.55,fontSize:14}}>Athena has 3 decisions waiting for you.</div></div>
            <div style={{display:'flex',gap:10}}><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search missions..." style={{background:'#111722',border:'1px solid #293241',borderRadius:10,padding:'11px 14px',color:'white',outline:'none'}}/><button style={{background:'#f5f7fb',color:'#080b12',border:0,borderRadius:10,padding:'11px 16px',fontWeight:700}}>Ask Athena</button></div>
          </header>

          <div style={{marginTop:30,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:12}}>
            {[['Business Health','91','Healthy'],['Revenue','€8,421','Today'],['Profit','€1,382','+7.2%'],['Inventory','81','Healthy'],['PPC','87','Healthy']].map(([a,b,c])=><div key={a} style={{background:'#101620',border:'1px solid #202938',borderRadius:14,padding:18}}><div style={{fontSize:12,opacity:.48}}>{a}</div><div style={{fontSize:27,fontWeight:800,margin:'7px 0'}}>{b}</div><div style={{fontSize:12,opacity:.55}}>{c}</div></div>)}
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1.45fr .9fr',gap:18,marginTop:18}}>
            <div style={{background:'#101620',border:'1px solid #202938',borderRadius:16,padding:24}}>
              <div style={{display:'flex',justifyContent:'space-between'}}><div><div style={{fontSize:12,opacity:.45}}>TODAY'S MISSION</div><h2 style={{margin:'5px 0 0',fontSize:22}}>What needs your attention</h2></div><span style={{fontSize:12,opacity:.5}}>{filtered.length} items</span></div>
              <div style={{marginTop:18}}>{filtered.map((m,i)=><button onClick={()=>setSelected(m.title)} key={m.title} style={{width:'100%',textAlign:'left',background:'transparent',color:'inherit',border:0,borderTop:'1px solid #202938',padding:'17px 0',cursor:'pointer'}}><div style={{display:'flex',justifyContent:'space-between'}}><b>{i+1}. {m.title}</b><span style={{fontSize:11,opacity:.6}}>{m.type}</span></div><div style={{fontSize:13,opacity:.55,marginTop:6}}>Expected impact {m.impact} · Confidence {m.confidence}%</div></button>)}</div>
            </div>

            <div style={{background:'#101620',border:'1px solid #202938',borderRadius:16,padding:24}}>
              <div style={{fontSize:12,opacity:.45}}>ATHENA STATUS</div><h2 style={{margin:'5px 0 20px',fontSize:22}}>Executive system</h2>
              {[['Core API','Online'],['Business Memory','Ready'],['Decision Engine','Ready'],['Amazon','Not connected'],['Automation','Locked']].map(([a,b],i)=><div key={a} style={{display:'flex',justifyContent:'space-between',padding:'11px 0',borderTop:'1px solid #202938',fontSize:13}}><span style={{opacity:.65}}>{a}</span><span>{i<3?'●':'○'} {b}</span></div>)}
              <div style={{marginTop:18,padding:13,borderRadius:10,background:'#151c28',fontSize:12,opacity:.65}}>Safety policy: consequential actions require approval until Alpha trust criteria are met.</div>
            </div>
          </div>

          <div style={{marginTop:18,background:'#101620',border:'1px solid #202938',borderRadius:16,padding:24}}>
            <div style={{fontSize:12,opacity:.45}}>DECISION QUEUE</div><h2 style={{margin:'5px 0 16px',fontSize:22}}>AI recommendations</h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>{decisions.map(d=><div key={d.title} style={{border:'1px solid #273142',borderRadius:12,padding:16}}><div style={{fontWeight:700}}>{d.title}</div><div style={{fontSize:12,opacity:.5,marginTop:7}}>{d.owner} · {d.status}</div><div style={{fontSize:13,marginTop:14}}>Expected: <b>{d.impact}</b></div><button onClick={()=>setSelected(d.title)} style={{marginTop:15,width:'100%',padding:9,borderRadius:8,border:'1px solid #354154',background:'#18202d',color:'white',cursor:'pointer'}}>Review decision</button></div>)}</div>
          </div>

          {selected && <div onClick={()=>setSelected(null)} style={{position:'fixed',inset:0,background:'#0009',display:'grid',placeItems:'center',padding:20}}><div onClick={e=>e.stopPropagation()} style={{width:'min(560px,100%)',background:'#101620',border:'1px solid #344054',borderRadius:18,padding:26}}><div style={{fontSize:11,opacity:.45}}>ATHENA DECISION</div><h2 style={{margin:'7px 0 12px'}}>{selected}</h2><p style={{opacity:.65,lineHeight:1.6}}>Athena has prepared the evidence, expected impact and risk assessment. Execution remains locked until you explicitly approve the action.</p><div style={{display:'flex',gap:10,marginTop:22}}><button onClick={()=>setSelected(null)} style={{padding:'11px 16px',borderRadius:9,border:'1px solid #344054',background:'transparent',color:'white'}}>Close</button><button onClick={()=>setSelected(null)} style={{padding:'11px 16px',borderRadius:9,border:0,background:'white',color:'#080b12',fontWeight:700}}>Approve (demo)</button></div></div></div>}
        </section>
      </div>
    </main>
  )
}
