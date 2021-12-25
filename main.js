//CODING CHALLENGES
const p = document.getElementById('out')
//adds two numbers
function startFunc() {
  let num1 = parseFloat(prompt("first number"))
  let num2 = parseFloat(prompt("second number"))
  alert(num1 + num2)
}
//prints odd and even numbers upto 100 and puts them in the arrays accordingly

// let obj = {
//   odd: [],
//   even: []
// }
// let i
// let x = 0
// for (i = 1; i < 100; i += 2) {
//   obj.odd.push(i)
// }
// for (x = 0; x < 100; x += 2) {
//   obj.even.push(x)
// }
// console.log(obj)

// // table of 7 

// let m
// let obje = {
//   array: []
// }
// for (m = 7; m <= 70; m += 7) {
//   obje.array.push(m)
// } 
// console.log(obje)
// let arr = [{
//     "apple": 20,
//     "grapes": 10,
//     "banana": 40,
//     "orange": null
// }
// ]

// let array = {
//   ar1: ["apple", "banana", "orange"],
//   ar2: [20, 40, null]
// }

// console.log(arr)
// console.log(array)

// array.ar1.push(...array.ar2)
// console.log(array)



//conversion of celcius to Fahrenheit
function convertCelcius(val) {
  return val * 1.8 + 32 + "°F"
}

//convert Fahrenheit to celcius
function convertFahrenheit(value) {
  let div = value - 32
  return div / 1.8 + "°C"
}



function ishundread(a, b) {
  if (a === 100 || b === 100 || a + b === 100) {
    return
  }
}

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

function call() {
  readTextFile("Data.json", function(text) {
    var data = JSON.parse(text);
    console.log(data);
  });
}

function con() {
  readTextFile("Some.json", (t) => {
    let tx = JSON.parse(t)
    console.log(tx)
  })
}

function call2() {
  con()
}
//fun script 
function Stoopid() {
  readTextFile('Stoopid.json', (txt) => {
    let cont = JSON.parse(txt)
    let ran = Math.floor(Math.random() * cont.stpd.length)
    let random = Math.floor(Math.random() * cont.no.length)
    let so = cont.stpd[ran]
    let e = cont.no[random]
    alert(cont.stpd[ran])
    if (so == "hey" || ran == 2) {
      let name = prompt("hey whats your name")
      alert(name + " oh hi!!")
      alert("i cant stay here for long. \n Lets go to the console!!")
      console.log(e)
    }
  })
}

function Pythagoras(a, b) {
  let sum = a * a + b * b
  let c = Math.sqrt(sum)
  return c + " is C²"
  //("C² is "+ c +" the full triplets are "+ a , b , c)
}

function start() {
  let a = prompt("declare a²")
  let b = prompt("declare b²")
  p.innerHTML = Pythagoras(a, b)
}

function circumference(r) {
  return 2 * Math.PI * r + " cm"
}

function convert1() {
  let v = prompt("Tell the degree")
  alert(convertFahrenheit(v));
}

function convert2() {
  let e = prompt("tell the degree")
  alert(convertCelcius(e))
}

function cir() {
  let r = parseFloat(prompt("whats the radius"))
  alert(circumference(r))
}

function WLAN() {
  if (navigator.onLine) {
    alert('online');
  } else {
    alert('offline');
  }
}


function generateRandom(Array) {
  let random = Math.floor(Math.random() * Array.length)
  return Array[random]
}

function diffArray(targetArray, victimArray) {
  return targetArray.concat(victimArray).filter(item => !targetArray.includes(item))
}


function herons(a , b , c){
  let S = (a + b + c)/2
  let area = Math.sqrt(S * (S-a)* (S-b) * (S-c))
  return area + "cm²"
}

function Herons(){
  let a = parseFloat(prompt("a"))
  let b = parseFloat(prompt("b"))
  let c = parseFloat(prompt("c"))
  console.log(herons(a , b, c))
}

let formulas = {
  SA: {
    TSA: {
    cube : (a) => {let sa = 6 * Math.pow(a , 2); return `${sa} unit²`},
    cuboid : (l , b , h) => { let sa = 2 * (l*b + b*h + l*h); return `${sa} unit²`},
    cylinder: (r , h) => {let sa = 2 * Math.PI * r * (r + h); return `${sa} unit²`},
      cone : (r , h) => {let sa = Math.PI * r * ( r + h); return `${sa} unit²`},
    sphere: (r) => {let sa = 4 * Math.PI * Math.pow(r , 2); return `${sa} unit²`},
    hemisphere: (r) => {let sa = 3 * Math.PI * pow(r , 2); return `${sa} unit²`}
    }, 
    CSA : {
      cube: (a) => {let sa = 4 * Math.pow(a , 2); return `${sa} unit²`},
      cuboid: ( l ,b ,h) => {let sa = 2 * h * ( l + b); return `${sa} unit²`},
      cylinder: (r , h) => {let sa = 2 * Math.PI * r * h; return `${sa} unit²`},
      cone : (r , l ) => {let sa = Math.PI * r * l; return `${sa} unit²`},
      hemisphere: (r) => {let sa = 2 * Math.PI * Math.pow(r , 2)}
    }
  },
  Vol:{
    cube: (a) => {let vol = Math.pow(a , 3);return `${vol} unit³`},
    cuboid : (l , b ,h ) => {let vol = l * b * h;return `${vol} unit³`},
    cylinder:(r , h) =>{let vol = Math.PI * Math.pow(r,2)*h;return `${vol} unit³`},
    cone:(r,h) => {let vol = 1/3 * Math.PI * Math.pow(r,2) * h;return `${vol} unit³`},
    sphere:(r) =>{let vol = 4/3 * Math.PI * Math.pow(r,3);return `${vol} unit³`},
    hemisphere: (r) =>{let vol = 2/3 * Math.PI * Math.pow(r,3);return `${vol} unit³`}
  }
}
