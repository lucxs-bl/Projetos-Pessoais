const contador = document.getElementById('contador');
const dataEscolhida = new Date("2023-08-14T00:00:00");

function pluralizar(numero, singular, plural) {
    return numero === 1 ? singular : plural;
}

function atualizarContador() {
    const dataAtual = new Date();
    
    let anos = dataAtual.getFullYear() - dataEscolhida.getFullYear();
    let meses = dataAtual.getMonth() - dataEscolhida.getMonth();
    let dias = dataAtual.getDate() - dataEscolhida.getDate();

    if (dias < 0) {
        const ultimoDiaDoMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        dias += ultimoDiaDoMesAnterior;
        meses--;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    contador.innerHTML = `
    <p>
        <span style="font-size: 14px; font-style: italic;  display: inline-block; margin-bottom: 15px; color:#080e21; font-weight: 600">
            Construindo nossa história há
        </span> <br>
        <div class="caixa-tempo"> 
        <br><span class="caixa"><span class="numero">${anos}</span> <span class="unidade">${pluralizar(anos, 'ano', 'anos')}</span></span>
        <br><br><span class="caixa"><span class="numero">${meses}</span> <span class="unidade">${pluralizar(meses, 'mês', 'meses')}</span></span>
        <span class="caixa"><span class="numero">${dias}</span> <span class="unidade">${pluralizar(dias, 'dia', 'dias')}</span></span>
        <br><br><span class="caixa"><span class="numero">${horas}</span> <span class="unidade">${pluralizar(horas, 'hora', 'horas')}</span></span>
        <span class="caixa"><span class="numero">${minutos}</span> <span class="unidade">${pluralizar(minutos, 'minuto', 'minutos')}</span></span>
        <br><br><span class="caixa"><span class="numero">${segundos}</span> <span class="unidade">${pluralizar(segundos, 'segundo', 'segundos')}</span></span> <br><br>❤️
        </div>
    </p>
    `;
}

setInterval(atualizarContador, 1000);
atualizarContador();


// FOTOS

const slides = document.querySelectorAll(".image-slide");
let currentSlide = 0;
const gifDuration = 5000; // Tempo dos GIFs (10s)
const defaultDuration = 2000; // Tempo das imagens (2s)

// Garante que o primeiro slide comece visível
slides[currentSlide].parentElement.classList.add("active");

// Função para exibir o próximo slide
function showNextSlide() {
  // Remove a classe 'active' do slide atual
  slides[currentSlide].parentElement.classList.remove("active");

  // Avança para o próximo slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Adiciona a classe 'active' ao novo slide
  slides[currentSlide].parentElement.classList.add("active");

  // Verifica se o slide atual é um GIF
  const isGif = slides[currentSlide].src.endsWith(".gif");

  // Define a duração baseada no tipo de imagem (GIF ou estática)
  const duration = isGif ? gifDuration : defaultDuration;

  // Reinicia o intervalo com a nova duração
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextSlide, duration);
}

// Inicia o slideshow após um pequeno atraso para exibir a primeira imagem
let slideInterval = setInterval(showNextSlide, defaultDuration);




//MÚSICA 

function playMusic() {
  const musica = document.getElementById('backgroundMusic');
  musica.play(); // Inicia a reprodução da música após a interação
}

const fireworkButton = document.getElementById('fireworkButton');
const messageDiv = document.getElementById('message');

let messages = [
  "Te amo!", 
  "Minha Vida!", 
  "Amor Eterno!", 
  "Razão do meu Sorriso!", 
  "Meu Mundo!", 
  "Doce Amor!", 
  "Anjo Meu!", 
  "Minha Luz!", 
  "Vida Minha!", 
  "Meu Tudo!", 
  "Felicidade Pura!", 
  "Meu Coração!",  
  "Perfeição!", 
  "Minha Metade!", 
  "Te Adoro!", 
  "Encanto!", 
  "Minha Paz!", 
  "Meu Amor!",  
  "Carinho!",  
  "Meu Tesouro!", 
  "Sorriso mais lindo!", 
  "Eu te quero bem!", 
  "Amo você pra sempre!", 
  "🌸 Meu Amor!", 
  "Você é incrível!", 
  "Minha Estrela!", 
  "Amorzinho!", 
  "Minha Felicidade!", 
  "Te adoro muito!"
];

let currentMessageIndex = 0;

fireworkButton.addEventListener('click', () => {
  // Exibe uma nova mensagem
  messageDiv.innerHTML = messages[currentMessageIndex];
  messageDiv.style.display = "block";

  // Alterna para a próxima mensagem
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;

  // Oculta o botão
  fireworkButton.style.display = 'none';

  // Exibe a mensagem com efeito de fogos e depois remove
  setTimeout(() => {
    messageDiv.style.display = "none";
    fireworkButton.style.display = 'inline-block'; // Mostra o botão novamente
  }, 2000); // A mensagem dura 2 segundos
});




// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Scroll suave para o topo
  const scrollTopButton = document.querySelector('.scroll-top');
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  //CHUVA DE CORAÇÃO
  
$(document).ready(function () {
    setInterval(function () {
      var screenHeight = $(document).height();
      var screenWidth = $(document).width();
  
      var startLeft = getRandomArbitrary(0, screenWidth);
  
      var timeRun = getRandomArbitrary(4000, 6000);
      var opacityR = Math.random() * (1 - 0.2) + 0.2;
      var sizeR = getRandomArbitrary(5, 20);
  
      var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);
  
      var snow = document.createElement("span");
  
      $(snow)
        .addClass("snow-item fa fa-heart")
        .css({
          position: "absolute",
          "z-index": 9999, // Aumente o z-index aqui
          color: "#ff0000",
          display: "block",
          top: 0,
          left: startLeft,
          opacity: opacityR,
          "font-size": sizeR + "px",
        })
        .appendTo("body")
        .animate(
          {
            top: screenHeight - sizeR,
            left: endLeft,
          },
          {
            duration: timeRun,
            easing: "linear",
            complete: function () {
              $(this).fadeOut("fast", function () {
                $(this).remove();
              });
            },
          }
        );
    }, 700);
  });
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Fallback para dispositivos móveis
if ('scrollBehavior' in document.documentElement.style === false) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.offsetTop;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'auto' // Força scroll instantâneo como fallback
        });
      });
    });
  }