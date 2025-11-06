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


gsap.to(".lado2", {
 "--ang1": "89.4742deg",
"--ang2": "89.5884deg",
"--ang3": "217.6925deg",
"--ang4": "333.7370deg",
  scrollTrigger: {
    trigger: ".lado2",
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
    markers: true,
  },
});

gsap.to(".lado1", {
 "--ang1": "26.2630deg",
"--ang2": "142.3075deg",
"--ang3": "270.4116deg",
"--ang4": "270.5258deg",
  scrollTrigger: {
    trigger: ".lado1",
    start: "top 60%",
    end: "top 20%",
    scrub: 2,
    markers: true,
  },
});