'use client'
import {useEffect,useState} from 'react'
export default function ApiDemo(){const [data,setData]=useState('Loading...');useEffect(()=>{fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/decisions/demo`).then(r=>r.json()).then(x=>setData(JSON.stringify(x,null,2))).catch(e=>setData(String(e)))},[]);return <main style={{fontFamily:'monospace',padding:40}}><h1>Decision Engine API</h1><pre>{data}</pre></main>}
