window.addEventListener("load", () => {
  document.body.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 1000, fill: "forwards" }
  );
});

/* HERO PARALLAX */
const hero = document.querySelector(".hero-video");
const content = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (hero) {
    hero.style.transform = `scale(1.06) translateY(${y * 0.08}px)`;
  }

  if (content) {
    content.style.transform = `translate(-50%, calc(-50% + ${y * 0.08}px))`;
  }
});

/* BUTTON MAGNET EFFECT */
document.querySelectorAll(".hero-buttons button").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) translateY(-4px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0)";
  });
});

/* SECTION REVEAL */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(60px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 1000, fill: "forwards" }
        );
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section").forEach((sec) => observer.observe(sec));

/* SMOKE PARALLAX */
const smoke = document.querySelector(".smoke");

window.addEventListener("mousemove", (e) => {
  if (!smoke) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  smoke.style.transform = `translate(${x}px, ${y}px)`;
});

// CALL BUTTON
function callNow(){
window.location.href = "tel:+442034416996";
}

// GOOGLE MAPS
function openMap(){
window.open(
"https://www.google.com/maps/search/?api=1&query=24+Great+Windmill+St+London+W1D+7LG",
"_blank"
);

/* COUNTERS */
document.querySelectorAll("[data-target]").forEach((counter) => {
  let current = 0;
  const target = Number(counter.dataset.target);

  const timer = setInterval(() => {
    current += Math.ceil(target / 80);

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    counter.innerText = current.toLocaleString();
  }, 30);
});

/* MENU CARD HOVER */
document.querySelectorAll(".menu-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-14px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* RESERVATION FORM */
const form = document.getElementById("reservationForm");
const success = document.getElementById("reservationSuccess");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    success.classList.add("show");
    form.reset();

    success.animate(
      [
        { opacity: 0, transform: "translateY(20px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 600, fill: "forwards" }
    );
  });
}
