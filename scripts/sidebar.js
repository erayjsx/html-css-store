function openNav() {
    document.getElementById("myNav").style.opacity = "1";
    document.getElementById("myNav").style.height = "85%";
    document.querySelector("body").style.overflow = "hidden";
}

function closeNav() {
    document.getElementById("myNav").style.opacity = "0";
    document.getElementById("myNav").style.height = "0%";
    document.querySelector("body").style.overflow = "auto";
}

function openBasket() {
    document.getElementById("basket").style.opacity = "1";
    document.getElementById("basket").style.height = "100%";
    document.querySelector("body").style.overflow = "hidden";
}

function closeBasket() {
    document.getElementById("basket").style.opacity = "0";
    document.getElementById("basket").style.height = "0%";
    document.querySelector("body").style.overflow = "auto";
}