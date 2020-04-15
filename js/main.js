console.log("OK andiamo");



var casualNum = randomNumbers(1, 10)
console.log(casualNum);
//alert(casualNum);


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


