
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navLogo = document.querySelector('#navbar-logo')

//Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const equipmentMenu = document.querySelector('#equipment-page')
    const signUpMenu = document.querySelector('#order')
    
    let scrollPosition = window.scrollY
    console.log(scrollPosition);

    //adds highlight class to my menu items
    if(window.innerWidth >960 && scrollPosition<600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return;
    }
    else if(window.innerWidth >960 && scrollPosition<1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        equipmentMenu.classList.remove('highlight')
        return;
    }
    else if(window.innerWidth >960 && scrollPosition<2400){
        equipmentMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        signUpMenu.classList.remove('highlight')
        return;
    }

    if(elem &&window.innerWidth<960 && scrollPosition<600 || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)



//close mobile navbar on click
const hideNavbar = () =>{
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth<=768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideNavbar)
navLogo.addEventListener('click', hideNavbar)