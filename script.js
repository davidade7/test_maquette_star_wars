let nextSlide = document.getElementById('next-slide');
let prevSlide = document.getElementById('prev-slide');
let slide1 = document.querySelectorAll('.slide-1');
let slide2 = document.querySelectorAll('.slide-2');
let slide3 = document.querySelectorAll('.slide-3');

/* boutons */
let svgBackward = document.getElementById('svg-backward');
let svgForward = document.getElementById('svg-forward');

/* etapier */
let etapier2 = document.getElementById('etapier-2');
let etapier3 = document.getElementById('etapier-3');
let bar = document.getElementById('on-going-progress-bar');

/* Compteur pour ajouter la classe active, par défaut la 1 */
let counter = 1;


/* action sur le clic d'une flèche */
nextSlide.addEventListener('click', () => {
  switch (counter){
    case 1:
      svgBackward.src = "assets/svg/backward-yellow.svg";
      slide1.forEach(element => {
        element.classList.remove("active")
        element.classList.add("prev")
      }); 
      slide2.forEach(element => {
        element.classList.add("active")
        element.classList.remove("next")
      });
            
      /* etapier */
      bar.style.width = "25%";
      let clock;
      clock = setTimeout(() => {
        etapier2.src = "assets/svg/circle-yellow.svg";
      }, 300);
     
      /* counter */
      counter += 1;

      break;
    case 2:
      svgForward.src = "assets/svg/forward-grey.svg";
      slide2.forEach(element => {
        element.classList.remove("active")
        element.classList.add("prev")
      }); 
      slide3.forEach(element => {
        element.classList.add("active")
        element.classList.remove("next")
      });

      /* etapier */
      bar.style.width = "50%";
      let clock2;
      clock2 = setTimeout(() => {
        etapier3.src = "assets/svg/circle-yellow.svg";
      }, 300);

      /* counter */
      counter += 1;

      break;
    
    case 3:
      /* rien */
      break;
  }
});


prevSlide.addEventListener('click', () => {
  switch (counter){
    case 1:
      /* rien */
      break;
    
    case 2:
      svgBackward.src = "assets/svg/backward-grey.svg";
      slide2.forEach(element => {
        element.classList.remove("active")
        element.classList.add("next")
      }); 
      slide1.forEach(element => {
        element.classList.add("active")
        element.classList.remove("prev")
      });
      
      /* etapier */
      bar.style.width = "0%";
      etapier2.src = "assets/svg/circle-grey.svg";
      
      /* counter */
      counter -= 1;

      break;
    
    case 3:
      svgForward.src = "assets/svg/forward-yellow.svg";
      slide3.forEach(element => {
        element.classList.remove("active")
        element.classList.add("next")
      }); 
      slide2.forEach(element => {
        element.classList.add("active")
        element.classList.remove("prev")
      });

      /* etapier */
      bar.style.width = "25%";
      etapier3.src = "assets/svg/circle-grey.svg";
      
      /* counter */
      counter -= 1;

      break;
  }
});

