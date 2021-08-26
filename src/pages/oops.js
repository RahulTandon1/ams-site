import React from "react"

const IndexPage = () => {
  
    // function openNav(){
    //     let el = document.getElementsByClassName('menu-container')[0]
    //     // el.visibility = "visible";
    //     el.style.width = "100vw";
    //     document.getElementsByClassName('fadeout')[0].style.width= "100vw";
    //     let menu = document.getElementsByClassName('menu')[0];
    //     menu.style.width = '80vw';
    //     menu.classList.add('shadow-on');
    //     menu.classList.remove('shadow-off');
    // }
    // function closeNav() {
    //     let el = document.getElementsByClassName('menu-container')[0]
    //     let arr = el.childNodes
    //     arr.forEach(tempEl => tempEl.style.width="0px")
        
    //     let menu = document.getElementsByClassName('menu')[0];
    //     menu.classList.remove('shadow-on');
    //     menu.classList.add('shadow-off');
        
    //     el.style.width = "0px";
    //     el.visibility = "hidden";
    //     console.log("hello world");
    // }

    return (
    //    <React.Fragment>
           <div onClick={ ()=> {console.log('oops')} }>
            Hello World!
           </div>
    )
}

export default IndexPage;
  