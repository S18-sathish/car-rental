

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

const payButton = document.querySelector(".payButton");
var payment = document.querySelector(".payment");
const productButton = document.querySelector(".rowc1");

productButton.addEventListener("click", () =>{
     if(productButton.innerHTML != "Rent"){
         payment.style.display = "none";
     }
    payButton.addEventListener("click", () => {
     payment.style.display = "none";
     alert("the car has taken rent successfully");
     document.querySelector(".rowc1"). innerHTML = "Already in rent"
     
   
})

})

const payButton2 = document.querySelector(".payButton");
var payment = document.querySelector(".payment");
const productButton2 = document.querySelector(".rowc2");

productButton2.addEventListener("click", () =>{
     if(productButton2.innerHTML != "Rent"){
         payment.style.display = "none";
     }
    payButton2.addEventListener("click", () => {
     payment.style.display = "none";
     alert("the car has taken rent successfully");
     document.querySelector(".rowc2"). innerHTML = "Already in rent"
     
     
})

})

const payButton3 = document.querySelector(".payButton");
var payment = document.querySelector(".payment");
const productButton3 = document.querySelector(".rowc3");

productButton3.addEventListener("click", () =>{
     if(productButton3.innerHTML != "Rent"){
         payment.style.display = "none";
     }
    payButton3.addEventListener("click", () => {
     payment.style.display = "none";
     alert("the car has taken rent successfully");
     document.querySelector(".rowc3"). innerHTML = "Already in rent"
     
     
})

})
const payButton4 = document.querySelector(".payButton");
var payment = document.querySelector(".payment");
const productButton4 = document.querySelector(".rowc4");

productButton4.addEventListener("click", () =>{
     if(productButton4.innerHTML != "Rent"){
         payment.style.display = "none";
     }
    payButton4.addEventListener("click", () => {
     payment.style.display = "none";
     alert("the car has taken rent successfully");
     document.querySelector(".rowc4"). innerHTML = "Already in rent"
     
     
})

})
const payButton5 = document.querySelector(".payButton");
var payment = document.querySelector(".payment");
const productButton5 = document.querySelector(".rowc5");

productButton5.addEventListener("click", () =>{
     if(productButton5.innerHTML != "Rent"){
         payment.style.display = "none";
     }
    payButton5.addEventListener("click", () => {
     payment.style.display = "none";
     alert("the car has taken rent successfully");
     document.querySelector(".rowc5"). innerHTML = "Already in rent"
     
     
})

})



  

