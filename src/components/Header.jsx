export default function Header({setPage}){

    return(<>
    <header className="header">
    <h1>Mohedeen Tabbara</h1>

    <div className="links">
      <button
      onClick={()=>setPage("contact")}
      >Contact Me</button>
      <button
      onClick={()=>setPage("education")}
      >Education</button>
      <button
      onClick={()=>setPage("work")}
      >Work Experience</button>
      <button
      onClick={()=>setPage("main")}
      >About</button>
    </div>
  </header>
  </>
  )
}