const modal = document.getElementById("tutorialModal");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtns = document.querySelectorAll("#prevBtn"); // Selecciona todos los botones "Anterior"
const nextBtns = document.querySelectorAll("#nextBtn"); // Selecciona todos los botones "Siguiente"
const finishBtn = document.getElementById("finishBtn");
const tutorialSteps = document.getElementsByClassName("tutorial-step");
const content = document.querySelectorAll('main, header'); // Selecciona el contenido que deseas desenfocar y ocultar
let currentStep = 0;

// Función para agregar la clase blur y ocultar el título
function applyBlurAndHideTitle() {
  content.forEach(el => {
    el.classList.add('blur-background');
    if (el.querySelector('h1')) {
      el.querySelector('h1').style.display = 'none';
    }
  });
}

// Función para quitar la clase blur y mostrar el título
function removeBlurAndShowTitle() {
  content.forEach(el => {
    el.classList.remove('blur-background');
    if (el.querySelector('h1')) {
      el.querySelector('h1').style.display = 'block';
    }
  });
}

// Comprobar si el usuario ya ha visto el tutorial
if (!localStorage.getItem('tutorialShown')) {
  // Mostrar el modal al cargar la página y aplicar blur al fondo
  modal.style.display = "block";
  applyBlurAndHideTitle();

  // Guardar en localStorage que el tutorial ya fue mostrado
  localStorage.setItem('tutorialShown', 'true');
}

// Función para mostrar el paso actual
function showStep(stepIndex) {
  for (let i = 0; i < tutorialSteps.length; i++) {
    tutorialSteps[i].classList.remove("active");
  }
  tutorialSteps[stepIndex].classList.add("active");
}

// Navegar a través de los pasos del tutorial
nextBtns.forEach(btn => {
  btn.onclick = function() {
    currentStep = (currentStep + 1) % tutorialSteps.length;
    showStep(currentStep);
  };
});

prevBtns.forEach(btn => {
  btn.onclick = function() {
    currentStep = (currentStep - 1 + tutorialSteps.length) % tutorialSteps.length;
    showStep(currentStep);
  };
});

// Cerrar el modal y quitar el efecto blur y mostrar el título
closeBtn.onclick = function() {
  modal.style.display = "none";
  removeBlurAndShowTitle();
};

finishBtn.onclick = function() {
  modal.style.display = "none";
  removeBlurAndShowTitle();
};

// Cerrar el modal al hacer clic fuera de él y quitar el blur y mostrar el título
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    removeBlurAndShowTitle();
  }
};

// Mostrar el primer paso inicialmente
showStep(currentStep);
