
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Última modificación: ${document.lastModified}`;


const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);


function calculateWindChill(t, v) {
  return Math.round(13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16));
}


let windchill = "N/A";
if (temp <= 10 && wind > 4.8) {
  windchill = calculateWindChill(temp, wind) + "°C";
}
document.getElementById("windchill").textContent = windchill;