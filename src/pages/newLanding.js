import React, { useEffect } from 'react';
import './newLanding.scss';
import Logo from '../imgs/favicon.png';
import { doc } from 'prettier';

const NewHomePage = () => {
    const openNav = () => {
        let el = document.getElementsByClassName('menu-container')[0]
        // el.visibility = "visible";
        el.style.width = "100vw";
        document.getElementsByClassName('fadeout')[0].style.width= "100vw";
        let menu = document.getElementsByClassName('menu')[0];
        menu.style.width = '80vw';
        menu.classList.add('shadow-on');
        menu.classList.remove('shadow-off');
    }
    const closeNav = () => {
        let el = document.getElementsByClassName('menu-container')[0]
        let arr = el.childNodes
        arr.forEach(tempEl => tempEl.style.width="0px")
        
        let menu = document.getElementsByClassName('menu')[0];
        menu.classList.remove('shadow-on');
        menu.classList.add('shadow-off');
        
        el.style.width = "0px";
        el.visibility = "hidden";
        console.log("hello world");
    }
    const toggleNavDropdown = () => {
        /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
        // var dropdownContainer = document.getElementsByClassName("dropdown-content");
        // var i;
        var headingsToBeToggled = document.getElementsByClassName('nav-dropdown');


        for (let i = 0; i < headingsToBeToggled.length; i++) {
            let heading = headingsToBeToggled[i]
            heading.addEventListener("click",() =>{
                // this.classList.toggle("active");
                // var dropdownContent = this.nextElementSibling;
                // !!!! FIND CLEANER WAY TO SELECT
                var arrow = heading.children[0];
                var dropdown = heading.children[3];
                arrow.classList.toggle('dropdown-arrow-open');
                // dropdown.classList.toggle('dropdown-open');
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                } else {
                    dropdown.style.display = "block";
                }
            });
        }
    }

    useEffect(() => {
        toggleNavDropdown()
    })

    return(
        <React.Fragment>
        <div className="menu-container">
            <div className="fadeout" onClick={ closeNav } onTouchStart={closeNav}></div>
            <div className="menu">
                <div class="yellow-highlight"></div>
                <h1 class="school-name-heading">Amrit Masonic Special School</h1>
                <hr class="divider" />
                
                <div class="nav-items-container">
                    <div className="nav-item">
                        <svg class="nav-icon dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
                        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        <a className="nav-heading">About Us</a>
                        {/* <div class="dropdown-content">
                            <a href="">Sublink 1</a>
                            <a href="">Sublink 2</a>
                        </div> */}
                    </div>
                    <div class="nav-item nav-dropdown">
                        <svg class="nav-icon dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
                        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        {/* <div className=""> */}
                            <a className="nav-heading">About Us</a>
                            <div className="dropdown-content">
                                <a href="">Sublink 1</a>
                                <a href="">Sublink 2</a>
                                <a href="">Sublink 3</a>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="nav-item">
                        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
                        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        <a className="nav-heading">About Us</a>
                    </div>
                    {/* <div className="heading">
                        <svg class="menu-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
                        <svg class="menu-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                        <a className="heading-text">About Us</a>
                        <div class="dropdown-content">
                            <a href="">Sublink 1</a>
                            <a href="">Sublink 2</a>
                        </div>
                    </div> */}
                </div>
                
                {/* <div className="heading" href="#">
                
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                    <a className="heading-text">About Us</a>
                </div> */}
            </div>
            
        </div>
        
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
        </React.Fragment>
    )
}

export default NewHomePage;