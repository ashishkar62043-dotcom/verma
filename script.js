const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); menu.textContent = "☰";
}));
document.querySelectorAll("[data-service]").forEach(a => a.addEventListener("click", () => {
  document.getElementById("service").value = a.dataset.service;
}));
document.getElementById("year").textContent = new Date().getFullYear();
const form = document.getElementById("form");
const feedback = document.getElementById("feedback");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    "Namaste Verma Computer & CSC Center, Raniganj.",
    "Mujhe aapki service ke baare mein enquiry karni hai.",
    `Naam: ${data.get("name")}`,
    `Mobile: ${data.get("phone")}`,
    `Service: ${data.get("service")}`,
    `Kaam ki jaankari: ${data.get("details")}`
  ].join("\\n");
  const url = "https://wa.me/916201408435?text=" + encodeURIComponent(message);
  window.open(url, "_blank", "noopener,noreferrer");
  feedback.textContent = "WhatsApp khul raha hai. Message check karke Send kar dein.";
});