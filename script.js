

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", () =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class", isOpen? "ri-close-line" : "ri-menu-3-line"
    )
})

navLinks.addEventListener("click", () =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
})

// const productButton = document.querySelector(".btn2");
//  const payment = document.querySelector(".payment");
//  const close = document.querySelector(".close");

//  productButton.addEventListener("click", () => {
//   payment.style.display = "flex";
// });

//  close.addEventListener("click", () => {
//   payment.style.display = "none";
// });



  

