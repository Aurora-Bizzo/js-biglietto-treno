//1 
let km = parseInt(prompt ('Inserisci i kilometri che vuoi percorrere'))
console.log(km);

//2
let age = parseInt(prompt ('inserisci la tua età'))
console.log(age);

//3
let message;

if (age <= 17) {
    let price = (0.21 * km * 0.8).toFixed(2)
    message = `€ ${price}`;
  } else if (age >= 65) {
    let price = (0.21 * km * 0.6).toFixed(2)
    message = `€ ${price}`;
  } else if (age > 17 && age < 65) {
    let price = (0.21 * km).toFixed(2)
    message = `€ ${price}`;
  }

  document.getElementById('price').innerHTML = message;
