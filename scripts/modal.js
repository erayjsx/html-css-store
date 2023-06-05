function openModal() {
  document.getElementById("searchModal").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";

  var element = document.querySelector("nav");
  element.classList.toggle("active");
}

function closeModal() {
  document.getElementById("searchModal").style.display = "none";
  document.querySelector("body").style.overflow = "auto";

  var element = document.querySelector("nav");
  element.classList.remove("active");
}
