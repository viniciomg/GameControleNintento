import { getDatabase, ref, set,push,update ,child } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";


const botaoPular = document.querySelector(".arrow-up");
const botaoBaixar= document.querySelector(".arrow-down");
const botaoAndar= document.querySelector(".arrow-right");
const botaVoltar= document.querySelector(".arrow-left");
const botaoEnter= document.querySelector("#buttonB");


var andar = false;
var voltar = false;
var pular = false;
var baixar = false;
var enter  = false;

const firebaseConfig = {
  apiKey: "AIzaSyAx5eBV57UAbun8qnqg3Zs0LrYrQSL_T0Y",
  authDomain: "marioword-5d26f.firebaseapp.com",
  projectId: "marioword-5d26f",
  storageBucket: "marioword-5d26f.appspot.com",
  messagingSenderId: "301054476390",
  appId: "1:301054476390:web:69c220c02a476e856c2da7",
  measurementId: "G-NVL7D37L6S",
  databaseURL :"https://marioword-5d26f-default-rtdb.firebaseio.com"
};
 
     const app = initializeApp(firebaseConfig);
     const db = getDatabase();
     const newPostKey = push(child(ref(db), 'acoes')).key;
     console.log(newPostKey);
     console.log(db);

     
      function updateBanco(pulando, andando, voltando, baixando, enter){
        var acaoId = "0";
     set(ref(db, 'acoes/' + acaoId), {
      pular: pulando,
      andar: andando,
      voltar : voltando,
      baixar :baixando,
      enter: enter
      
    });
      }



    botaoPular.addEventListener("mousedown", ()=>{
      updateBanco(true, false, false, false );
      console.log("update");
      pular = true;
    });
  
   
    botaoBaixar.addEventListener("mousedown", ()=>{
      updateBanco(false, false, false, true );
      console.log("update");
      
    });     
    botaoAndar.addEventListener("mousedown", ()=>{
      if(pular)
      updateBanco(pulou, true, false, false ,false);

      updateBanco(false, true, false, false,false );
      console.log("update");
      andar = true;
    });  
    botaVoltar.addEventListener("mousedown", ()=>{
      updateBanco(false, false, true, false ,false);
      console.log("update");
      voltar  = true;
    });  
    botaoEnter.addEventListener("mousedown", () => {
      updateBanco(false, false, false, false,true );

      setTimeout(() => {
        updateBanco(false, false, false, false,false );
      }, 500);
    });
    

    botaoPular.addEventListener("mouseup", ()=>{
      updateBanco(false, false, false, false,false );
      pular  =false;
    });
    botaoAndar.addEventListener("mouseup", ()=>{
      updateBanco(false, false, false, false,false );
      andar = false;
    });  
  
    

