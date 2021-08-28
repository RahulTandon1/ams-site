import React from 'react';
import './newPage.scss';
import Logo from '../../imgs/favicon.png';
import Facebook from '../../imgs/facebook.svg';
import Whatsapp from '../../imgs/whatsapp.svg';
import Menu from '../menu/menu';
// import { doc } from 'prettier';


const openNav = (e) => {
    let el = document.getElementsByClassName('menu-container')[0]
    // el.visibility = "visible";
    el.style.width = "100vw";
    // document.getElementsByClassName('fadeout')[0].style.width= "100vw";
    let menu = document.getElementsByClassName('menu')[0];
    // menu.style.width = '80vw';

    menu.classList.add('shadow-on');
    menu.classList.remove('shadow-off');
    
    console.log('open nav called');
    console.log(`clicked ${e.target}`)
}

const NewPage = (props) => {
    
    return(
        <React.Fragment>
        <Menu />
        <div className="main-content">
            {/* <a href="#"> </a>*/}
            
            <header className="header" onClick={e => console.log(e.target)}>
                <div className="menu-button" onClick={ openNav}>
                    <svg className="hamburger" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                    <span className="menu-indicating-text">MENU</span>                
                </div>
                
                <h1 className="school-name-heading">Amrit Masonic Special School</h1>
                
                <img
                    className="logo"
                    src={Logo} 
                    alt="logo of AMSS; yellow coloured Freemasons logo and text on blue background and red outline"
                />
            </header>
            <div class="container">
                {props.children}
            </div>
            
            <footer className="footer">
            <div class="footer-wrapper-except-copyright">
            
            <div id="contact-us-info-column">
                <div id="email-container">
                    <p>amritmasonicschool@gmail.com</p>
                    <button id="copy-email-btn">Copy Mail</button>
                </div>
                <div id="facebook">
                    <p>Find us on Facebook</p>
                    <img src={Facebook} alt="Facebook logo" />
                </div>
                <div id="whatsapp">
                    <p>Find us on Whatsapp</p>
                    <img src={Whatsapp} alt="Whatsapp logo" />
                </div>
                <div>
                <button id="contact-us-button">Contact Us Page</button>
                </div>
            </div>
            
            <hr class="footer-divider" />

            <div id="timings-column">
                <h2>Timings</h2>
                <p>
                Open from 9 AM to 2 PM, Monday to Friday. <br />
                9 AM to 12 PM on Saturday <br />
                Day Boarding from 2 PM to 6 PM, Monday to Friday.
                </p>
            </div>
            <hr class="footer-divider" />

            <div id="map-column">
                <h2>Map</h2>
                <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDdGi2K4nMplDgSO4CI_FCupROV1LAyR-Q
            &q=Sai+Amrit+Masonic+School"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
        <div class="copyright">&copy; AMSS</div>
        
            </footer>

        </div>
        
        

        </React.Fragment>
    )
}

export default NewPage;