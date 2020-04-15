console.log("OK andiamo");

var choise = parseInt(prompt("Inserisci un max range di numeri"))

while( choise == 0 || choise <=5 || isNaN(choise)){
  choise = parseInt(prompt("Inserisci un max range di numeri ccccc"))
}

var casualNum = randomNumbers(1, choise)
console.log(casualNum);
alert("Cerca di ricordare i seguenti numeri " + casualNum);

var numUtente = [];
var numeriRicordati = [];

setTimeout(function () {

  for(var i = 0; i < 5; i++) {
    numUtente.push(parseInt(prompt("Inserisci un numero")))
  }
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
  
},3000)



function randomNumbers(min , max) {
  var output = [];
  var appoggio = 0;
  for (var i = 0; i < 5; i++) {

  appoggio = Math.floor(Math.random() * max) + min ;

  while(output.includes(appoggio)){
  appoggio = Math.floor(Math.random() * max) + min ;
  }

  output.push(appoggio);
  }

  return output;
}


