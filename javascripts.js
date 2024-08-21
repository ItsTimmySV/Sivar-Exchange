document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('tutorialShown')) {
      showTutorial();
    }
  
    function showTutorial() {
      const modal1 = document.getElementById('welcomeModal');
      const close1Btn = document.getElementsByClassName('close1')[0];
      const gotItBtn = document.getElementById('gotItBtn');
      const tutorialSteps = document.getElementById('tutorial-steps');
  
      // Detectar dispositivo
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
      if (/android/i.test(userAgent)) {
        tutorialSteps.innerHTML = `
          <p>Para añadir esta aplicación en tu pantalla de inicio:</p>
          <ol>
            <li>Presiona el botón de menú (los tres puntos verticales) en tu navegador.</li>
            <li>Selecciona "Añadir a pantalla de inicio".</li>
          </ol>`;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        tutorialSteps.innerHTML = `
          <p>Para añadir esta aplicación en tu pantalla de inicio:</p>
          <ol>
            <li>Presiona el botón de compartir en la barra inferior.</li>
            <li>Selecciona "Añadir a pantalla de inicio".</li>
          </ol>`;
      } else {
        tutorialSteps.innerHTML = `<p>Presiona el botón de compartir o el menú del navegador y selecciona "Añadir a pantalla de inicio".</p>`;
      }
  
      modal1.style.display = "block";
  
      close1Btn.onclick = function() {
        modal1.style.display = "none";
      };
  
      gotItBtn.onclick = function() {
        modal1.style.display = "none";
        localStorage.setItem('tutorialShown', 'true');
      };
  
      window.onclick = function(event) {
        if (event.target == modal1) {
          modal1.style.display = "none";
          localStorage.setItem('tutorialShown', 'true');
        }
      };
    }
  });
