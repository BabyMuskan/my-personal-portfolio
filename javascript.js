const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("active");

});

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent.");

this.reset();

});