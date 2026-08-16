import Link from 'next/link'

const cards = [
  ['Business Health','91','Overall health'],
  ['Profit','€1,382','Today'],
  ['Inventory','81','Health score'],
  ['PPC','87','Health score'],
]

export default function Home() {
  return <main style={{fontFamily:'Arial',background:'#f5f7fb',minHeight:'100vh',padding:40,color:'#172033'}}>
    <div style={{maxWidth:1200,margin:'0 auto'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32}}>
        <div><div style={{fontSize:14,opacity:.6}}>ATHENA OS</div><h1 style={{margin:'6px 0'}}>Mission Control</h1><p style={{opacity:.65}}>Good morning, Amir.</p></div>
        <Link href="/api-demo" style={{padding:'10px 16px',borderRadius:10,background:'#172033',color:'white',textDecoration:'none'}}>Test API</Link>
      </header>
      <section style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginBottom:24}}>{cards.map(([a,b,c])=><div key={a} style={{background:'white',padding:20,borderRadius:16,boxShadow:'0 2px 12px #00000010'}}><div style={{opacity:.6}}>{a}</div><div style={{fontSize:30,fontWeight:700,margin:'8px 0'}}>{b}</div><div style={{fontSize:13,opacity:.55}}>{c}</div></div>)}</section>
      <section style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:20}}>
        <div style={{background:'white',padding:24,borderRadius:16}}><h2>Today's Mission</h2><div style={{padding:'16px 0',borderBottom:'1px solid #eee'}}><b>1. Review PPC efficiency</b><p style={{opacity:.65}}>Potential impact: +€500/month · Confidence 82%</p></div><div style={{padding:'16px 0',borderBottom:'1px solid #eee'}}><b>2. Check inventory risk</b><p style={{opacity:.65}}>Athena is waiting for live Amazon data.</p></div><div style={{padding:'16px 0'}}><b>3. Review pricing opportunities</b><p style={{opacity:.65}}>Decision engine will evaluate after sync.</p></div></div>
        <div style={{background:'white',padding:24,borderRadius:16}}><h2>Athena Status</h2><p>● Core API online</p><p>● Memory ready</p><p>○ Amazon not connected</p><p>○ Automation locked</p><hr/><p style={{fontSize:13,opacity:.6}}>Safety: consequential actions require approval.</p></div>
      </section>
    </div>
  </main>
}
