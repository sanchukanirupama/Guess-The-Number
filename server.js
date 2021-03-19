const path = require('path');
const http = require('http');
const express = require("express");
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000 || process.env.PORT;
var random = Math.floor(Math.random() * 100) + 1;
const users = {};

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {

    socket.on('new-user', name1 =>{
        users[socket.id] = name1;
        socket.broadcast.emit('user-connect', name1);
    });

    //listen
    socket.on('client', (sendData) =>{
        display(sendData);
        socket.emit('server-two', sendData);
    });

    socket.on('client2', ms =>{
       initgame();
       console.log(ms);
       socket.emit('server3' , 'reset');
    });

    function initgame(){
        random = Math.floor(Math.random() * 100) + 1;
        guesses = [];
    
    }
    function display(numberguess){
    
        if (numberguess == random - 5){
           close();
          
      
        }else if (numberguess == random - 4){
            close();
           
       
         }else if (numberguess == random - 3 ){
            close();
          
       
         }else if (numberguess == random - 2){
            close();
          
       
         }else if (numberguess == random - 1){
            close();
       
         }else if (numberguess - 1 == random ){
            pass();
    
    
         }else if (numberguess - 2 == random ){
            pass();
          
       
         }else if (numberguess - 3 == random ){
            pass();
            
       
         }else if (numberguess - 4 == random ){
            pass();
         
       
         }else if (numberguess - 5 == random ){
            pass();
         
       
         }else if (numberguess == random ){
            youwon();
           
       
         }else if(numberguess > random){
            above();
        
        }
        else if (numberguess < random){
            below();
           
        }
    
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
        socket.emit('server', dialog);
     
        }
        
        function close(){
            const text = "Well Done! You're getting close. But Stil Low. "
            let dialog = getdialog('close',text);
            socket.emit('server', dialog);
      
        }
            
        function pass(){
             const text = "You Just Pass It By Feww! "
             let dialog = getdialog('close',text);
             socket.emit('server', dialog);
        
        }
            
        
        function above(){
        const text = "Your Guess Is Too High!"
            
        let dialog = getdialog('warning',text);
        socket.emit('server', dialog);
     
            
        }
        
        
        function below(){
        const text = "Your Guess Is Too Low! "
        let dialog = getdialog('warning',text);
        socket.emit('server', dialog);
    
        }
    
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

