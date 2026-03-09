"use client"

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'linear-gradient(135deg,#001F3E 0%,#073358 50%,#001F3E 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 0 80px 0',
      }}
    >
      {/* Dot grid pattern */}
      <div className="dot-pattern" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}} />
      {/* Gold orb */}
      <div style={{position:'absolute',bottom:'-120px',left:'-120px',width:'320px',height:'320px',background:'radial-gradient(circle,rgba(255,215,22,0.08) 0%,transparent 100%)',borderRadius:'50%',zIndex:0}} />
      {/* Emerald orb */}
      <div style={{position:'absolute',top:'-80px',right:'-80px',width:'240px',height:'240px',background:'radial-gradient(circle,rgba(13,165,116,0.12) 0%,transparent 100%)',borderRadius:'50%',zIndex:0}} />
      {/* Vertical gold line */}
      <div style={{position:'absolute',top:0,right:'30%',width:'2px',height:'100%',background:'linear-gradient(180deg,transparent,#FFD71633,transparent)',zIndex:1}} />
      <div style={{position:'relative',zIndex:2,maxWidth:'1200px',width:'100%',display:'flex',flexDirection:'row',gap:'48px',justifyContent:'space-between'}}>
        {/* Left column */}
        <div style={{flex:1,minWidth:'320px',display:'flex',flexDirection:'column',gap:'32px'}}>
          {/* Entrance badge */}
          <div style={{display:'inline-flex',alignItems:'center',background:'rgba(13,165,116,0.15)',border:'1px solid rgba(13,165,116,0.3)',borderRadius:'999px',padding:'6px 18px',fontSize:12,fontWeight:600,color:'#0DA574',textTransform:'uppercase',letterSpacing:1}}>● AMFI & IRDA Certified Advisor</div>
          {/* Headline */}
          <h1 style={{fontFamily:'Cormorant Garamond, serif',fontWeight:700,fontSize:'clamp(42px,6vw,78px)',lineHeight:1.1,color:'#FFFFFF'}}>
            Your Wealth,<br />
            <span className="text-shimmer" style={{fontWeight:700}}>Expertly</span><br />
            Managed.
          </h1>
          {/* Subheadline */}
          <div style={{color:'rgba(255,255,255,0.65)',fontSize:'clamp(15px,2vw,18px)',lineHeight:1.7,maxWidth:'560px',fontFamily:'DM Sans, sans-serif'}}>
            Founded by Sheetal Khanna with 19+ years of experience — we provide personalized, holistic financial advisory that grows and protects your wealth for generations.
          </div>
          {/* CTA buttons */}
          <div style={{display:'flex',gap:'18px',marginTop:'12px'}}>
            <button style={{background:'linear-gradient(135deg,#FFD716,#E6C200)',color:'#001F3E',fontWeight:700,padding:'16px 32px',borderRadius:'10px',boxShadow:'0 2px 12px rgba(255,215,22,0.35)',border:'none',fontSize:18,cursor:'pointer',transition:'transform 0.2s,box-shadow 0.2s'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 4px 24px rgba(255,215,22,0.45)';}} onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 2px 12px rgba(255,215,22,0.35)';}}>Start Your Journey →</button>
            <button style={{background:'rgba(255,215,22,0.05)',color:'#FFFFFF',fontWeight:700,padding:'16px 32px',borderRadius:'10px',border:'1px solid rgba(255,255,255,0.2)',fontSize:18,cursor:'pointer',transition:'color 0.2s,border-color 0.2s,background 0.2s'}} onMouseEnter={e=>{e.currentTarget.style.color='#FFD716';e.currentTarget.style.borderColor='rgba(255,215,22,0.5)';e.currentTarget.style.background='rgba(255,215,22,0.08)';}} onMouseLeave={e=>{e.currentTarget.style.color='#FFFFFF';e.currentTarget.style.borderColor='rgba(255,255,255,0.2)';e.currentTarget.style.background='rgba(255,215,22,0.05)';}}>Explore Services</button>
          </div>
        </div>
        {/* Right column (desktop only) */}
        <div className="glass" style={{flex:1,minWidth:'320px',maxWidth:'420px',background:'rgba(255,255,255,0.04)',backdropFilter:'blur(20px)',border:'1px solid rgba(255,215,22,0.2)',borderRadius:'24px',padding:'36px',display:'flex',flexDirection:'column',gap:'24px',animation:'float 5s ease-in-out infinite'}}>
          {/* Top accent line */}
          <div style={{width:'60%',height:'2px',margin:'0 auto',background:'linear-gradient(90deg,transparent,#FFD716,transparent)',borderRadius:'2px'}} />
          <div style={{fontSize:11,color:'#FFD716',textTransform:'uppercase',letterSpacing:2,textAlign:'center',marginBottom:'8px'}}>Portfolio Overview</div>
          {/* Fake chart */}
          <div style={{display:'flex',alignItems:'flex-end',gap:'8px',height:'80px',marginBottom:'16px'}}>
            {[...Array(8)].map((_,i)=>(
              <div key={i} style={{width:'18px',height:i===7?72:i===5?56:Math.floor(Math.random()*40+24),background:i===7?'linear-gradient(135deg,#FFD716,#E6C200)':i===5?'linear-gradient(135deg,#0DA574,#73E2A7)':'rgba(255,255,255,0.12)',borderRadius:'6px'}} />
            ))}
          </div>
          {/* Stats row */}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:'12px'}}>
            <div>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.6)'}}>Total Returns</div>
              <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,color:'#0DA574',fontWeight:700}}>+18.4%</div>
            </div>
            <div>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.6)'}}>YTD Growth</div>
              <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:28,color:'#FFD716',fontWeight:700}}>+₹2.4Cr</div>
            </div>
          </div>
          {/* Certification pills */}
          <div style={{display:'flex',gap:'8px',marginTop:'12px',justifyContent:'center'}}>
            {['AMFI Reg.','IRDA Cert.','NRI Specialist'].map((pill,i)=>(
              <div key={pill} style={{background:'rgba(255,215,22,0.1)',border:'1px solid rgba(255,215,22,0.2)',color:'#FFD716',fontSize:10,padding:'6px 14px',borderRadius:'999px',fontWeight:600}}>{pill}</div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom stats bar */}
      <div style={{position:'absolute',bottom:0,left:0,width:'100%',padding:'0 0 32px 0',display:'flex',justifyContent:'center',zIndex:2}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'18px',maxWidth:'1200px',width:'100%'}}>
          {[
            {icon:'₹',value:'200Cr+',label:'Assets Under Management'},
            {icon:'👥',value:'1,000+',label:'Satisfied Clients'},
            {icon:'⏳',value:'19+',label:'Years of Experience'},
            {icon:'✔️',value:'AMFI',label:'& IRDA Certified'},
          ].map((stat,i)=>(
            <div key={stat.label} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'14px',padding:'20px 24px',display:'flex',alignItems:'center',gap:'12px',transition:'border-color 0.2s,background 0.2s'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,215,22,0.3)';e.currentTarget.style.background='rgba(255,215,22,0.06)';}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';e.currentTarget.style.background='rgba(255,255,255,0.04)';}}>
              <div style={{width:'44px',height:'44px',borderRadius:'12px',background:'rgba(255,215,22,0.12)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,color:'#FFD716'}}>{stat.icon}</div>
              <div>
                <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:24,fontWeight:700,color:'#FFFFFF'}}>{stat.value}</div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:12}}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Responsive styles */}
      <style suppressHydrationWarning>{`
        @media (max-width: 1024px) {
          .glass { display: none !important; }
          .dot-pattern { background-size: 24px 24px !important; }
          section > div { flex-direction: column !important; gap: 24px !important; }
          section > div > div { min-width: 0 !important; max-width: 100% !important; }
          section > div > div:last-child { display: none !important; }
          .stats-bar { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}