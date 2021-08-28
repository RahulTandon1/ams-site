import React from 'react';

const NavItem = (props) => {
    if (props.isDropdown) {
        listOfDropdownContent = 
        props.dropdownContent.map(dropdown => {
            if (dropdown.locationIsWithinSite) {
                return <Link to={location}>{dropdown.text}</Link>
            }
            return <a href={dropdown.href}
        })
    }
    return(
        {{ if }}
        <div className="nav-item nav-dropdown">
            <svg className="nav-icon dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/></svg>
            <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            {/* <div className=""> */}
                <a className="nav-heading">About Us</a>
                <div className="dropdown-content">
                    <a href="">Sublink 1</a>
                    <a href="">Sublink 2</a>
                    <a href="">Sublink 3</a>
                </div>
            {/* </div> */}
        </div>


    )
}
                
export default NavItem;