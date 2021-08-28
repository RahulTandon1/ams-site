import React, { useEffect } from 'react';
import Logo from '../../imgs/favicon.png';
import Arrow from '../../imgs/arrow.svg';
import {Link} from 'gatsby';
import RehabilitationLogo from '../../imgs/heal.svg';
import './menu.scss';
import NiosLogo from '../../imgs/nios.svg';

const closeNav = (e) => {
    
    let el = document.getElementsByClassName('menu-container')[0]
    // let arr = el.childNodes
    // arr.forEach(tempEl => tempEl.style.width="0px")
    
    let menu = document.getElementsByClassName('menu')[0];
    menu.classList.toggle('shadow-on');
    menu.classList.toggle('shadow-off');
    
    el.style.width = "0px";
    el.visibility = "hidden";
    console.log(`close nav called ${e.target}`);
}
const toggleNavDropdown = () => {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    // var dropdownContainer = document.getElementsByClassName("dropdown-content");
    // var i;
    var headingsToBeToggled = document.getElementsByClassName('nav-dropdown');


    for (let i = 0; i < headingsToBeToggled.length; i++) {
        let heading = headingsToBeToggled[i]
        // const func = (heading) => {
        //     // this.classList.toggle("active");
        //     // var dropdownContent = this.nextElementSibling;
        //     // !!!! FIND CLEANER WAY TO SELECT
           
        // }
        heading.addEventListener("click",() => {
            var arrow = heading.children[0];
            var dropdown = heading.children[3];
            arrow.classList.toggle('dropdown-arrow-open');
            // dropdown.classList.toggle('dropdown-open');
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
                console.log('dropdown closed');
            } else {
                dropdown.style.display = "block";
                console.log('dropdown opened');
            }
        });

    }
}


const Menu = () => {

    useEffect(() => {
        toggleNavDropdown()
    })

    return(
        <div className="menu-container">
        <div className="fadeout" onClick={ closeNav}></div>
        <div className="menu shadow-off">
            <div className="yellow-highlight"></div>
            <h1 className="school-name-heading">Amrit Masonic Special School</h1>
            <img
                className="logo"
                src={Logo} 
                alt="logo of AMSS; yellow coloured Freemasons logo and text on blue background and red outline"
            />
            <hr className="divider" />
            
            <div className="nav-items-container">
                
                <div className="nav-item not-dropdown">
                    <svg  className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" fill="#383535"/></svg>
                    <Link to='/' className="nav-heading">Home</Link>
                </div>
                
                <div className="nav-item not-dropdown">
                    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#383535"/>
                    </svg>
                    <Link to='/about' className="nav-heading">About Us</Link>
                </div>
          
                <div className="nav-item nav-dropdown">
                    <svg className="nav-icon dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
                    <img className="nav-icon" src={RehabilitationLogo} alt="rehabilitation healing logo" />
            
                        <a className="nav-heading">Rehab Services</a>
                        <div className="dropdown-content">
                            <Link to='/rehab/early-intervention'>Early Intervention</Link>
                            <Link to="/rehab/speech-language-pathology">Speech Pathology</Link>
                            <Link to='/rehab/pre-vocational-training'>Pre Vocational</Link>
                            <Link to='/rehab/special-education'>Special Education</Link>
                            <a href="">Occupational Therapy</a>
                        </div>
    
                </div>
                
                <div className="nav-item not-dropdown">
                    <svg class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V18H18V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.2 15.61 8.98 15.31C9.95 14.93 10.97 14.75 12 14.75C13.03 14.75 14.05 14.93 15.02 15.31C15.79 15.61 15.83 15.77 15.93 16H8.07ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6Z" fill="#383535"/>
                    </svg>
                    <a className="nav-heading">Collaborations</a>
                </div>
                
                <div className="nav-item nav-dropdown">
                    <svg className="nav-icon dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
                    <img id="nios-logo" src={NiosLogo} alt="Logo of NIOS" />
                    <a className="nav-heading">NIOS</a>
                    <div className="dropdown-content">
                            <Link to="/nios/admin-services">Admin Services</Link>
                            <Link to="/nios/academic-services">Academic Services</Link>
                            <Link to="/nios/study-center">Study Center</Link>
                        </div>
                </div>
                

                <div className="nav-item not-dropdown">
                    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="#383535"/>
                    </svg>
                    <a className="nav-heading">Admissions</a>
                </div>
                
                <div className="nav-item not-dropdown">
                    <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#383535"/>
                    </svg>
                    <a className="nav-heading">Contact Us</a>
                </div>
            </div>
            
        </div>
    </div>
   
    )
}

export default Menu;