


const hamMen = document.getElementById("ham-men");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");

if (hamMen) {
  hamMen.addEventListener("click", () => {
  navbar.classList.add("active");  
  })
}

if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  })
}


/*
const hamMen = document.querySelector('.ham-men');
const navbar = document.querySelector('.navbar');


hamMen.addEventListener('click', () => {
  hamMen.classList.toggle('active');
  navbar.classList.toggle('navbar');
})

*/