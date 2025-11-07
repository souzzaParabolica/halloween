document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    initRevealAnimation();
  }, 500);
});

function initRevealAnimation() {
  const heroText = document.querySelector(".hero h1");
  const overlay = document.querySelector(".hero .overlay");
  const mouseIcon = document.querySelector(".hero .mouseIcon");

  if (!heroText) return;

  // Garante que o texto esteja visível
  heroText.style.visibility = "visible";

  const originalText = heroText.textContent;

  // Timeline principal
  const masterTl = gsap.timeline();

  // 1. Fade in do overlay
  masterTl.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 0.7, duration: 1.2, ease: "power2.out" }
  );

  // 2. Efeito de revelação por palavras COM ESPAÇOS
  heroText.innerHTML = ""; // Limpa o conteúdo

  // Divide o texto preservando os espaços
  const words = originalText.split(/(\s+)/); // Isso preserva os espaços como elementos separados

  words.forEach((word, index) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "word-reveal";
    wordSpan.style.display = "inline-block";
    wordSpan.style.opacity = "0";

    // Se for um espaço, mantém como espaço normal
    if (word === " ") {
      wordSpan.style.width = "0.3em"; // Largura de um espaço
      wordSpan.innerHTML = "&nbsp;"; // Espaço não-bráquivel
    } else {
      wordSpan.textContent = word;
    }

    heroText.appendChild(wordSpan);
  });

  // Anima palavras em sequência
  const wordSpans = heroText.querySelectorAll(".word-reveal");

  masterTl.to(
    wordSpans,
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: {
        each: 0.08, // Intervalo mais rápido entre palavras
        from: "start",
      },
    },
    "-=1.1"
  );

  // 4. Mouse icon
  masterTl.to(
    mouseIcon,
    {
      opacity: 0.6,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.5"
  );
}

const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".miniHistorias",
    start: "top top", // quando o topo da seção encontrar o topo da viewport
    end: "+=1500", // duração do "pin" em pixels rolados (ajuste conforme precisar)
    scrub: false, // animação suave
    pin: true, // fixa a seção na tela
    markers: false, // só pra debug, pode remover
  },
});
// TIMELINE 1: animação inicial
gsap.timeline({
  scrollTrigger: {
    trigger: ".lado1",
    start: "top -10%",
    end: "top -50%",
    scrub: 2,
    markers: false,
  }
})
.to(".lado1", {
  "--ang1": "32.7977deg",
  "--ang2": "270.6686deg",
  "--ang3": "270.7665deg",
})
.to(".lado2", {
  "--ang1": "89.2334deg",
  "--ang2": "89.3313deg",
  "--ang3": "327.2022deg",
}, 0); // 0 para sincronizar com .lado1

// TIMELINE 2: animação seguinte
gsap.timeline({
  scrollTrigger: {
    trigger: ".lado1",
    start: "top -160%",
    end: "top -230%",
    scrub: 2,
    markers: false,
  }
})
  .to(".lado1", {
  "--ang1": "257.9989deg",
  "--ang2": "270.6686deg",
  "--ang3": "270.7665deg",
})
.to(".lado2", {
  "--ang1": "89.2334deg",
  "--ang2": "89.3313deg",
  "--ang3": "101.9698deg",
}, 0); // sincronizado

gsap.to('.lado1, .lado2', {
  opacity:0,
  scrollTrigger: {
    trigger:'.lado1',
    start:'top -210%',
    end:'.top -235%',
    scrub:2,
  }
})


gsap.from(".hist1", {
  opacity: 0,
  y:5,
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".hist1",
    start: "top -70%",
    end: "top -80%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".hist2", {
  opacity: 0,
  y:5,
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".hist2",
    start: "top -70%",
    end: "top -80%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".hist3", {
  opacity: 0,
  y:5,
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".hist1",
    start: "top -70%",
    end: "top -80%",
    scrub: 1.2,
    markers: false,
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hist",
      start: "top -10%",
      end: "top -75%", // cobre toda a faixa de aparecimento e desaparecimento
      scrub: 1.2,
      markers: false,
    },
  })
  .fromTo(".hist", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1 })
  .to(".hist", { opacity: 0, duration: 1 });


gsap.to(".parent", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".lado2",
    start: "top -160%",
    end: "top -180%",
    scrub: 2,
    markers: false,
  },
});
