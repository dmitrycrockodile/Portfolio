'use strict'
//Navbar
const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar__list-link');
const progress = document.querySelector('.progress-bars--wrapper');
const progressBarsPercent = [97, 89, 85, 87, 80, 70, 50];
const progressbars = document.querySelectorAll('.progress-bars__percent');

window.addEventListener('scroll', () => {
   mainFN();
});

const mainFN = () => {
   if (window.pageYOffset >= navbarOffsetTop) {
      navbar.classList.add('sticky');
   } else {
      navbar.classList.remove('sticky');
   }

   sections.forEach((section, i) => {
      if (window.pageYOffset >= section.offsetTop - 10) {
         navbarLinks.forEach(navbarLink => {
            navbarLink.classList.remove('change');
         })
         navbarLinks[i].classList.add('change');
      } 
   });

   if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
      progressbars.forEach((el, i) => {
         el.style.width = `${progressBarsPercent[i]}%`;
         el.previousElementSibling.firstElementChild.textContent = progressBarsPercent[i];
      });
   }
}

mainFN();

window.addEventListener('resize', () => {
   window.location.reload();
})

//Focus on Projects
const projects = document.querySelectorAll('.project');
const projectLinks = document.querySelectorAll('.project__link'); 

const focusOnProject = () => {
   projectLinks.forEach((link, i) => {
      link.addEventListener('focus', () => {
         projects.forEach(project => {
            project.classList.remove('focused');
         });
         projects[i].classList.add('focused');
      });
   });
};

focusOnProject();