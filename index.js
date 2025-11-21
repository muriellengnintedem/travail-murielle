/MENU SHOW Y HIDEN / 
 const navMenu = document.getElementById('nav_menu'),
 toggleMenu = document.getElementById('nav_toggle'),
 closeMenu = document.getElementById('nav_close')
// SHOW
  toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
  })

// HIDDEN
   closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
  })
// REMOVE MENU
 const navlink = document.querySelectorAll('.nav_link')

 function linkAction(){
  navMenu.classList.remove('show')
 }
 navlink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollactive)

function scrollactive(){
  const scrollY = window.pageYOffset

  section.forEach(current =>{
    const sectionHeight = current.offsetHeight - 50
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
      document.querySelector('nav_menu a[href*='+sectionId + ']').classList.add('active')
    }else{
      document.querySelector('nav_menu a[href*='+sectionId + ']').classList.remove('active')
    }
  })
}