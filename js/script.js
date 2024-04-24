function konversiCtoF() {
  var celsius = document.getElementById("celsius").value;
  var fahrenheit = (celsius * 9) / 5 + 32;
  let deg = "°";
  if (celsius == "") {
    alert("Masukkan Angka!");
    reset();
  } else {
    document.getElementById("fahrenheit").innerText = fahrenheit;
    document.getElementById("formula").innerText =
      celsius + deg + "C" + " * (9/5) + 32 = " + fahrenheit + deg + "F";
  }
}

function konversiFtoC() {
  var fahrenheit = document.getElementById("fahrenheitt").value;
  var celsius = ((fahrenheit - 32) * 5) / 9;
  let deg = "°";
  if (fahrenheit == "") {
    alert("Masukkan Angka!");
    reset();
  } else {
    document.getElementById("celsiuss").innerText = celsius;
    document.getElementById("formulas").innerText =
      fahrenheit + deg + "F" + " - 32 * 5/9 = " + celsius + deg + "C";
  }
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").innerText = "";
  document.getElementById("formula").innerText = "";
  document.getElementById("celsiuss").innerText = "";
  document.getElementById("fahrenheitt").value = "";
  document.getElementById("formulas").innerText = "";
}

let isReverse = true;
function reverse() {
  let cToF = document.getElementById("c-to-f");
  let fToC = document.getElementById("f-to-c");
  if (isReverse) {
    fToC.style.display = "block";
    cToF.style.display = "none";
    isReverse = false;
  } else {
    cToF.style.display = "block";
    fToC.style.display = "none";
    isReverse = true;
  }
}
