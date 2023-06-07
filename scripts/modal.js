function openModal() {
  document.getElementById("searchModal").style.display = "flex";
  document.getElementById("searchModal").style.opacity = "1";
  document.querySelector("body").style.overflow = "hidden";

  var element = document.querySelector("nav");
  element.classList.toggle("active");
}

function closeModal() {
  document.getElementById("searchModal").style.display = "none";
  document.getElementById("searchModal").style.opacity = "0";
  document.querySelector("body").style.overflow = "auto";

  var element = document.querySelector("nav");
  element.classList.remove("active");
}
