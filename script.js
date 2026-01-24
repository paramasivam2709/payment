const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
      tabs.forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  // Fade-in animation on scroll
const cards = document.querySelectorAll(".refer-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
},{ threshold:0.2 });

cards.forEach(card=>{
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});


