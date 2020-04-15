console.log("OK andiamo");

var choise = parseInt(prompt("Inserisci il numero max del range"))

while( choise == 0 || choise <= 5 || isNaN(choise)){
  choise = parseInt(prompt("Assicurati di aver inserito un numero valido" ))
}

var difficulty = parseInt(prompt("Inserisci il livello di difficolta, quanti numeri vuoi ricordare\nminimo 5"))

while( difficulty == 0 || difficulty <5 || isNaN(difficulty)){
  difficulty = parseInt(prompt("Assicurati di aver inserito un numero valido"))
}
while(choise <= difficulty){
  difficulty = parseInt(prompt("Il livello di difficolta deve essere minore rispetto al numero max del range" + choise))
}

var casualNum = randomNumbers(1, choise, difficulty)
console.log(casualNum);
alert("Cerca di ricordare i seguenti numeri " + casualNum);

var numUtente = [];
var numeriRicordati = [];

setTimeout(function () {

  for(var i = 0; i < difficulty; i++) {
    numUtente.push(parseInt(prompt("Inserisci un numero")))
  }
  //Volevo fare un controllo per verificare se lo stesso numero viene inserito più volte, 
  //ma cosi rende il gioco più facile
  console.log(numUtente);

  for( var o = 0; o < casualNum.length; o++){
    if(casualNum.includes(numUtente[o])){
      numeriRicordati.push(numUtente[o]);
    }
  }

  if(numeriRicordati.length > 0){
    console.log("i numeri ricordati sono: " + numeriRicordati.sort());
  } else{
    console.log("Non ti sei ricordato nessun numero");
  }
  
},30000)



function randomNumbers(min , max, difficulty) {
  var output = [];
  var appoggio = 0;
  for (var i = 0; i < difficulty; i++) {

  appoggio = Math.floor(Math.random() * max) + min ;

  while(output.includes(appoggio)){
  appoggio = Math.floor(Math.random() * max) + min ;
  }

  output.push(appoggio);
  }

  return output;
}


