import { getDatabase, ref, set,push,update ,child } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";



const botaoBaixar= document.querySelector(".arrow-down");
const botaoAndar= document.querySelector(".arrow-right");
const botaVoltar= document.querySelector(".arrow-left");
const botaoEnter= document.querySelector("#buttonB");
const botaoPular = document.querySelector(".arrow-up");


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
      voltar :voltando,
      baixar :baixando,
      enter: enter
    });
      }

      var longpress = false;
      var timer = null;
      var increm = null;
      
      var cancel = function (e,listacao) {
          clearTimeout(timer);
          timer = null;
          clearInterval(increm);
          increm = null;
          updateBanco(false, false, false, false,false );
      };
     function start(e, listacao ) {
          console.log(e);
          if (e.type === "click" && e.button !== 0) {
              return;
          }
      
          longpress = false;
          
          if (timer === null) {
              timer = setTimeout(function () {
                  increm = setInterval(function () {
                    FoorEach(listacao);
                    updateBanco(pular, andar, voltar, baixar ,enter);
                    console.log("update");
                  }, 50);
              }, 10);
          }
      
          return false;
      };

      function FoorEach(item) {
        pular = item[0];
        andar = item[1];
        voltar = item[2];
        baixar = item[3];
        enter = item[4];
      }

      var listpular = [true, false, false, false,false];
      var listandar = [false, true, false, false, false];
      var listvoltar = [false , false, true, false, false];
      var listbaixar = [false, false, false, true, false];
      var listenter = [false, false, false, false ,true];

      botaoPular.addEventListener("mousedown", (e)=> start(e,listpular));
      botaoPular.addEventListener("touchstart", (e)=> start(e,listpular))
      botaoPular.addEventListener("mouseup", cancel);
      botaoPular.addEventListener("mouseout", cancel);
      botaoPular.addEventListener("touchend", cancel);
      botaoPular.addEventListener("touchleave", cancel);
      botaoPular.addEventListener("touchcancel", cancel);

      botaoAndar.addEventListener("mousedown", (e)=> start(e,listandar));
      botaoAndar.addEventListener("touchstart", (e)=> start(e,listandar));
      botaoAndar.addEventListener("mouseup", cancel);
      botaoAndar.addEventListener("mouseout", cancel);
      botaoAndar.addEventListener("touchend", cancel);
      botaoAndar.addEventListener("touchleave", cancel);
      botaoAndar.addEventListener("touchcancel", cancel);

      botaVoltar.addEventListener("mousedown", (e)=> start(e,listvoltar));
      botaVoltar.addEventListener("touchstart", (e)=> start(e,listvoltar));
      botaVoltar.addEventListener("mouseup", cancel);
      botaVoltar.addEventListener("mouseout", cancel);
      botaVoltar.addEventListener("touchend", cancel);
      botaVoltar.addEventListener("touchleave", cancel);
      botaVoltar.addEventListener("touchcancel", cancel);

      botaoBaixar.addEventListener("mousedown", (e)=> start(e,listbaixar));
      botaoBaixar.addEventListener("touchstart", (e)=> start(e,listbaixar));
      botaoBaixar.addEventListener("mouseup", cancel);
      botaoBaixar.addEventListener("mouseout", cancel);
      botaoBaixar.addEventListener("touchend", cancel);
      botaoBaixar.addEventListener("touchleave", cancel);
      botaoBaixar.addEventListener("touchcancel", cancel);

      botaoEnter.addEventListener("mousedown", (e)=> start(e,listenter));
      botaoEnter.addEventListener("touchstart", (e)=> start(e,listenter));
      botaoEnter.addEventListener("mouseup", cancel);
      botaoEnter.addEventListener("mouseout", cancel);
      botaoEnter.addEventListener("touchend", cancel);
      botaoEnter.addEventListener("touchleave", cancel);
      botaoEnter.addEventListener("touchcancel", cancel);
    

