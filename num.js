var random = Math.floor(Math.random() * 100) + 1;
let guesses = [];


window.onload = function(){
    document.getElementById("check").addEventListener("click", playgame);
    document.getElementById("reset").addEventListener("click", initgame);
}

function playgame(){
var numberguess = document.getElementById("input").value;
display(numberguess);
guesshistory(numberguess);
displayHistory();
}
function display(numberguess){
    
    if (numberguess == random - 5){
       close();
       document.getElementById("input").value="";
  
    }else if (numberguess == random - 4){
        close();
        document.getElementById("input").value="";
   
     }else if (numberguess == random - 3 ){
        close();
        document.getElementById("input").value="";
   
     }else if (numberguess == random - 2){
        close();
        document.getElementById("input").value="";
   
     }else if (numberguess == random - 1){
        close();
        document.getElementById("input").value="";
   
     }else if (numberguess - 1 == random ){
        pass();
        document.getElementById("input").value="";
   
     }else if (numberguess - 2 == random ){
        pass();
        document.getElementById("input").value="";
   
     }else if (numberguess - 3 == random ){
        pass();
        document.getElementById("input").value="";
   
     }else if (numberguess - 4 == random ){
        pass();
        document.getElementById("input").value="";
   
     }else if (numberguess - 5 == random ){
        pass();
        document.getElementById("input").value="";
   
     }else if (numberguess == random ){
        youwon();
        document.getElementById("input").value="";
   
     }else if(numberguess > random){
        above();
        document.getElementById("input").value = "";
    }
    else if (numberguess < random){
        below();
        document.getElementById("input").value ="";
    }


}
function initgame(){
    random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("result").innerHTML= "";
    guesses = [];
    displayHistory();

}

function getdialog(dialogType,text){
let dialog;
switch(dialogType){
    case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
    case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    case "close":
        dialog = "<div class='alert alert-info' role='alert'>"
        break;
}
dialog += text;
dialog +="</div>"
return dialog;
}

function youwon(){
const text = "Awesome! You Got It. "

let dialog = getdialog('won',text);
document.getElementById("result").innerHTML= dialog;
}

function close(){
    const text = "Well Done! You're getting close. But Stil Low. "
    let dialog = getdialog('close',text);
    document.getElementById("result").innerHTML= dialog;
}
    
function pass(){
     const text = "You Just Pass It By Feww! "
     let dialog = getdialog('close',text);
     document.getElementById("result").innerHTML= dialog;
}
    

function above(){
const text = "Your Guess Is Too High!"
    
let dialog = getdialog('warning',text);
document.getElementById("result").innerHTML = dialog;
    
}


function below(){
const text = "Your Guess Is Too Low! "
let dialog = getdialog('warning',text);
document.getElementById("result").innerHTML = dialog;
}

function guesshistory(guess){
guesses.push(guess);
console.log(guesses);
}

function displayHistory(){
let index = 0;
let list ="<ul class='list-group'>"
while(index < guesses.length){

    list +="<li class='list-group-item'>" + "You Gussed " + guesses[index] + "</li>";
    index +=1;

}
list +="</ul>";
document.getElementById("history").innerHTML = list;
}