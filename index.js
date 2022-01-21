const toggleBtn= document.querySelector(".button-dark-light");
const body = document.body;
console.log(body);
console.log(toggleBtn);

function toggletheme() {
     if(body.classList.contains("dark-mode"))
     {
         body.classList.remove("dark-mode");
          toggleBtn.textContent="Dark-Mode";

     }
    else {
        body.classList.add("dark-mode");
        toggleBtn.textContent="Light-Mode";

    }
    
}
toggleBtn.addEventListener("click",toggletheme);