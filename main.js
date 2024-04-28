// CSS STYLES !!!!!!!!!!!!!!!!!!
import './style.css'
import './styles/Navbar.css'
import './styles/Page1Center.css'
import './styles/Page2.css'
import './styles/Page3.css'
import './styles/Page3.css'
import './styles/Page4.css'
import './styles/Swiper.css'
import './styles/Hamburger.css'



// JAVASCRIPTS !!!!!!!!!!!!!!!!!!

import './javascripts/locomotive'
import './javascripts/gsap'
import './javascripts/swiper' 



import gsap from 'gsap'


// MAIN JAVASCRIPT EXECUTES AFTER IT EXECUTES THE UPPER FILES




const elem = document.querySelectorAll('#page3 .elem')



var rotate = 0;
    var diffrot = 0;

elem.forEach((elem)=>{
    elem.addEventListener('mousemove', function (dets) {
        let diff =  dets.clientY - elem.getBoundingClientRect().top; 
   
        diffrot= dets.clientX - rotate;
   
        rotate = dets.clientX;
   

           gsap.to( elem.querySelector('.elemimgcontainer'), {
               opacity: 1,
               ease: `power1`,
               top: diff,
               left: dets.clientX,
               rotate: gsap.utils.clamp(-20, 20, diffrot)
           })
   

     })

     
  elem.addEventListener('mouseleave' , ()=> {
    gsap.to( elem.querySelector('.elemimgcontainer'), {
        opacity: 0,
        ease: `power1`,
        duration: 0.5,

    })

  })


})


