var biblioteca = [ "computador","churrasco", "brasil","monitor"];

var qtde = biblioteca.length - 1;

var pos = Math.round(Math.random() * qtde);

var palavra = biblioteca[pos];

var tam = palavra.length;

var cxLetras = [];

var acertos;

var errosMax = 6;

var erros = 0;

var desenhos = [];

var acertou = false;

var jogando = false;

var jog;

function defineLetras(l) {
  var obj;

  for (var i = 0; i < 20; i++) {
    obj = document.getElementById("letra" + i).value = "";

    obj = document.getElementById("letra" + i).style.display = "none";
  }

  for (var i = 0; i < l; i++) {
    obj = document.getElementById("letra" + i).style.display = "inline-block";
  }
}

function jogar() {
  jog.focus();

  if (jog.value == "") {
    alert("Digite um valor");
  } else {
    if (jogando) {
      var obj;

      var letraTmp;

      var letra;

      var pesq;

      letra = jog.value;

      jog.value = "";

      acertou = false;

      pesq = palavra.match(letra);

      while (pesq != null) {
        letraTmp = palavra.search(letra);

        obj = document.getElementById("letra" + letraTmp).value = letra;

        palavra = palavra.replace(letra, "0");

        acertos++;

        pesq = palavra.match(letra);

        acertou = true;
      }

      if (!acertou) {
        document.getElementById("dvletrasdigitadas").innerHTML +=
          letra.toUpperCase();
          erros++;
          

        if (erros < errosMax) {
          
          desenhos[erros].style.display = "block";
          desenhos[erros-1].style.display = "none";
         

        } else {
          desenhos[5].style.display = "none";
          desenhos[6].style.display = "block";
          document.getElementById("dvmsg").innerHTML = "Você Perdeu";

          jogando = false;
        }
      }

      if (acertos == tam) {
        document.getElementById("dvmsg").innerHTML = "Você Ganhou";

        jogando = false;
      }
    }
  }
}

function inicia() {
  jogando = true;

  jog = document.getElementById("letraJ");

  jog.value = "";

  jog.focus();

  acertos = 0;

  erros = 0;

  acertou = false;

  document.getElementById("dvletrasdigitadas").innerHTML = "Letras Erradas:";

  pos = Math.round(Math.random() * qtde);

  palavra = biblioteca[pos];

  tam = palavra.length;

  defineLetras(tam);

  document.getElementById("dvmsg").innerHTML = "";

  desenhos[1] = document.getElementById("cabeca");

  desenhos[2] = document.getElementById("corpo");

  desenhos[3] = document.getElementById("bracoE");

  desenhos[4] = document.getElementById("bracoD");

  desenhos[5] = document.getElementById("pernaE");

  desenhos[6] = document.getElementById("pernaD");


  for (var i = 1; i < 7; i++) {
    desenhos[i].style.display = "none";
  }
 
}

function dica() {
  if(palavra == biblioteca[0])
  {
    alert("Você está utilizando agora")
  } 
    if(palavra == biblioteca[1])
  {
    alert("Comida tipica brasileira de fim de semana")
  }
  if(palavra == biblioteca[2])
  {
    alert("Maior esportador de grãos do mundo")
  } 
    if(palavra == biblioteca[3])
  {
    alert("está olhando para ele")
  }

  





  jog.focus();
}

window.addEventListener("load", inicia);
