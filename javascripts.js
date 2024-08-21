const modal = document.getElementById("tutorialModal");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtns = document.querySelectorAll("#prevBtn"); // Selecciona todos los botones "Anterior"
const nextBtns = document.querySelectorAll("#nextBtn"); // Selecciona todos los botones "Siguiente"
const finishBtn = document.getElementById("finishBtn");
const tutorialSteps = document.getElementsByClassName("tutorial-step");
const content = document.querySelector('main'); // Selecciona el contenido principal que deseas desenfocar
let currentStep = 0;

// Mostrar el modal al cargar la página
modal.style.display = "block";

// Cerrar el modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

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

finishBtn.onclick = function() {
  modal.style.display = "none";
};

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Mostrar el primer paso inicialmente
showStep(currentStep);

// Mostrar el modal al cargar la página y aplicar blur al fondo
modal.style.display = "block";
content.classList.add('blur-background');

// Cerrar el modal y quitar el efecto blur
closeBtn.onclick = function() {
  modal.style.display = "none";
  content.classList.remove('blur-background');
};

finishBtn.onclick = function() {
  modal.style.display = "none";
  content.classList.remove('blur-background');
};

// Cerrar el modal al hacer clic fuera de él y quitar el blur
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    content.classList.remove('blur-background');
  }
};
