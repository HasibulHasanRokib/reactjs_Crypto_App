
const NavBar = () => {
  return (
    <>
   <nav className="navbar">
    <div className="logo">
    <h2 className="font-bold text-3xl"><i className="fa-solid fa-coins mx-2" style={{color:" #9927ce"}}></i>Coin <samp style={{color:" #9927ce"}}>Search</samp></h2>
    </div>
    <ul className="flex gap-10 display-none">
      <li><a className="font-semibold text-xl" href="#home">Home</a></li>
      <li><a className="font-semibold text-xl" href="#market-section">Market</a></li>
      <li><a className="font-semibold text-xl" href="#choose-section">Choose Us</a></li>
      <li><a className="font-semibold text-xl" href="#join-section">Join</a></li>
    </ul>
    <div>
    <ul className="flex gap-4">
      <li><a href="#"><i className="fa-brands fa-twitter fa-xl"></i></a></li>
      <li><a href="#"><i className="fa-brands fa-discord fa-xl"></i></a></li>
    </ul>
    </div>
   </nav>
    </>
  )
}

export default NavBar


   