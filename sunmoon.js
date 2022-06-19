const body = document.querySelector("body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");



function ayay(){
   moon.classList.toggle("moonOpacity");
   sun.classList.toggle("sunColor");
   if( moon.classList.contains("moonOpacity")){
    sun.style.opacity = "1";
       body.style.backgroundColor = "#D6EAF8"

   }
   else{
    sun.style.opacity = "0";

    body.style.backgroundColor = "#030303 "
   }
    
}
