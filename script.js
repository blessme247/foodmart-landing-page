const themeButton = document.querySelector('.theme')
const bodyWrapper  = document.querySelector('.body')
const footer = document.querySelector('.footer')


themeButton.addEventListener('click', () => {
    if(bodyWrapper.classList.contains('dark')) {
        bodyWrapper.classList.remove('dark')
        themeButton.innerText = ('Dark Mode')
      
    }
    else {
        bodyWrapper.classList.add('dark')
        themeButton.innerText = ('Light Mode')

    }
})



const navMenu = document.querySelector('.nav-mobile')
const navMenuDesktop = document.querySelector('.nav-desktop')
const navToggler = document.querySelector('.nav-toggler')
const logo = document.querySelector('.logo')
const navLinks = document.querySelector('.nav-links')
const learnMore = document.querySelector('.learn-more')
const learnMoreArrow = document.querySelector('.bi-arrow-right-short')

navToggler.addEventListener('click',() => {
if(navMenu.style.display != 'block' ) { /*i used != 'block' instead of ==='none' becasue it makes the hamburger button functional on one click*/
    navMenu.style.display = 'block'
    navToggler.style.zIndex = '1'
    navToggler.classList.add('active')
    navToggler.style.backgroundColor = 'white'
    learnMoreArrow.classList.add('active')
    themeButton.style.display = 'none'
    navToggler.style.backgroundColor = 'inherit'
    logo.style.marginLeft = '.9rem'
    bodyWrapper.style.overflow = 'hidden' /* this disallows scrolling on the website when the navMenu is being displayed */
}
else{ 
    navMenu.style.display = 'none'
     navToggler.classList.remove('active')
     navToggler.style.color = 'black'
     navToggler.style.backgroundColor = 'white'
     logo.style.marginLeft = '1rem'
     learnMoreArrow.classList.remove('active')
     themeButton.style.display = 'block'
     bodyWrapper.style.overflow = 'visible'
}

})

navToggler.addEventListener('click', function(el) {
    const navMenu = document.querySelector('.nav-mobile')
    if(navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    }
    else {
        navMenu.classList.add('open');
    }
})

const swiperSlide = document.querySelector('.swiper-slide')

swiperSlide.style.width = '80%'
   

