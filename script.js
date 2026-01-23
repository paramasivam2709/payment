const btn = document.getElementById("payBtn");
const success = document.getElementById("success");

btn.onclick = () => {
  if(!amount.value) return;
  success.classList.remove("hidden");
};
