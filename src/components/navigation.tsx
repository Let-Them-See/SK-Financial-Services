"use client"

export default function Navigation() {
  return (
    <nav style={{background:'#001F3E', color:'#FFD716', height:'84px', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 32px', fontFamily:'DM Sans, sans-serif', fontWeight:600}}>
      <div style={{display:'flex',alignItems:'center'}}>
        <div style={{width:36, height:36, borderRadius:8, background:'linear-gradient(135deg,#FFD716,#B8960C)', color:'#001F3E', fontWeight:700, fontSize:22, display:'flex', alignItems:'center', justifyContent:'center', marginRight:12}}>SK</div>
        <div>
          <span style={{color:'#FFFFFF', fontSize:18, fontWeight:700}}>SK Financial</span>
          <div style={{fontSize:10, letterSpacing:2, color:'#FFD716', textTransform:'uppercase'}}>Services</div>
        </div>
      </div>
      <div style={{display:'flex',gap:24}}>
        <a href="#" style={{color:'#FFD716', textDecoration:'none', fontSize:14}}>Home</a>
        <a href="#about" style={{color:'#FFD716', textDecoration:'none', fontSize:14}}>About</a>
        <a href="#services" style={{color:'#FFD716', textDecoration:'none', fontSize:14}}>Services</a>
        <a href="#products" style={{color:'#FFD716', textDecoration:'none', fontSize:14}}>Products</a>
        <a href="#tools" style={{color:'#FFD716', textDecoration:'none', fontSize:14}}>Tools</a>
        <a href="#testimonials" style={{color:'#FFD716', textDecoration:'none', fontSize:14}}>Testimonials</a>
        <a href="#contact" style={{color:'#FFD716', textDecoration:'none', fontSize:14}}>Contact</a>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <span style={{color:'#FFD716', fontSize:14}}>+91 7506715835</span>
        <button style={{background:'linear-gradient(135deg,#FFD716,#E6C200)', color:'#001F3E', fontWeight:700, border:'none', borderRadius:10, padding:'12px 24px', boxShadow:'0 2px 12px rgba(255,215,22,0.3)', cursor:'pointer'}}>Book Free Call</button>
      </div>
    </nav>
  )
}
