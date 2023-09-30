const socket = io();
let guesses = [];
const user = prompt("What is your name? ");
socket.emit('new-user', user);


socket.on('server', data =>{
   document.getElementById("result").innerHTML = data;
});

socket.on('user-connect', data3 =>{
   console.log(data3);
});


socket.on('server-two', data2 =>{
   guesshistory(data2);
   displayHistory();
});

function clik(event){
   event.preventDefault();
   var input = document.getElementById('Numinput').value;
   if(input ==""){
      return;
   }else{
   socket.emit('client', input);
   document.getElementById("Numinput").innerHTML = " ";
   }
}

function ret(){
   console.log("reset");
   socket.emit('client2', 'reset');
}

socket.on('server3', data4 =>{
   initgame();
});

function initgame(){
   guesses = [];
   document.getElementById("Numinput").innerHTML = "";
   document.getElementById("result").innerHTML = "";

   displayHistory();

}
function guesshistory(guess){
   guesses.push(guess);
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
