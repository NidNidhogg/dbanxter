import { dbanxter } from "../../declarations/dbanxter";

window.addEventListener("load", async function() {
   const currentAmount = await dbanxter.checkBalance();
   const formattedAmount = parseFloat(currentAmount).toFixed(2);
   document.getElementById("value").innerText = formattedAmount;
});

document.querySelector("form").addEventListener("submit", async function(event) {
   event.preventDefault(); 
   //console.log("Submitted.");

   const button = event.target.querySelector("#submit-btn");
    
   const inputAmount = parseFloat(document.getElementById("input-amount").value);

   button.setAttribute("disabled", true);

   if (document.getElementById("input-amount").value.length != 0) {
      await dbanxter.topUp(inputAmount);
   }
   
   if (document.getElementById("withdraw-amount").value.length == 0) {
       await dbanxter.withdraw(outputAmount);
   }

   const currentAmount = await dbanxter.checkBalance();
   const formattedAmount = parseFloat(currentAmount).toFixed(2);
   document.getElementById("value").innerText = formattedAmount;
       
   document.getElementById("input-amount").value = "";
   document.getElementById("withdraw-amount").value = "";

   await dbanxter.compound();
   update();

   
   button.removeAttribute("disabled");
});


async function update() {
   const currentAmount = await dbanxter.checkBalance();
   const formattedAmount = parseFloat(currentAmount).toFixed(2);
   document.getElementById("value").innerText = formattedAmount;


}