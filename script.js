const luces = ["ROJO", "VERDE", "AMARILLO"];

let indiceluzActual = 0;

function semaforo() {
  const luzActual = luces[indiceluzActual];
  
  if (luzActual === "ROJO") {
    alert("Pare, Semáforo en ROJO.");
  } else if (luzActual === "VERDE") {
    alert("Continue. Semáforo en VERDE.");
  } else if (luzActual === "AMARILLO") {
    alert("Cuidado. Semáforo en AMARILLO.");
  }
  
  indiceluzActual = (indiceluzActual + 1) % luces.length;
  setTimeout(semaforo, 3000);
}

semaforo();





