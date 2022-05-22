//Set Initial Value of Counter
let count = 0;

//Select Counter Value and Buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//Loop Through All Button Items
btns.forEach(function(btn_item) {
     
    //Add Function When A Button Is Clicked With EventListener
    btn_item.addEventListener('click', function(e) {
     const btn = e.currentTarget.classList; //Select Target Button
     //Functional Conditions
     if(btn.contains('decrease')){
         count--;
     }
     else if (btn.contains('increase')){
         count++;
     }
     else if(btn.contains('reset')){
         count = 0;
     }
     value.textContent = count; //Change HTML Content to Current Value
  
    });
});
