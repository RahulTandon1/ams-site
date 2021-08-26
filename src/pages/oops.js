import React from "react"

const IndexPage = () => {
  return (
  <div className="main-content">
  {/* <a href="#"> </a>*/}
  
        <div class="header">
            <div class="menu-button" onClick={ openNav} onTouchStart={openNav}>
                <svg class="hamburger" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                <span class="menu-indicating-text">MENU</span>                
            </div>
            <img
                class="logo"
                src={Logo} 
                alt="logo of AMSS; yellow coloured Freemasons logo and text on blue background and red outline"
            />
        </div>
    </div>    
  )
  
}

export default IndexPage
  