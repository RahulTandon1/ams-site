import React from 'react';


const NavItem = () =>{
    return (
        <div className="nav-item">

            <svg className="nav-icon dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
            <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            <a className="nav-heading">About Us</a>
{/* <div class="dropdown-content">
    <a href="">Sublink 1</a>
    <a href="">Sublink 2</a>
</div> */}
        </div>
    )
} 

export default NavItem;