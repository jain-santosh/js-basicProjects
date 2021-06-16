// inital value
let count =0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const btnClicked = e.currentTarget.classList;
        if(btnClicked.contains("decrease")){
            count--;
        }
        else if(btnClicked.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
       if(count > 0){
           value.style.color = "green";
       }
       if(count < 0){
           value.style.color = "red";
       }
       if(count === 0){
           value.style.color = "#000";
       }
    })
});