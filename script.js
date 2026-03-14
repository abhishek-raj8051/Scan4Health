let html5QrCode;

function startScanner(){

html5QrCode = new Html5Qrcode("reader");

Html5Qrcode.getCameras().then(devices => {

if(devices && devices.length){

const cameraId = devices[devices.length - 1].id;

html5QrCode.start(
cameraId,
{
fps:10,
qrbox:{ width:300, height:150 }
},
(barcodeMessage)=>{

let barcode = barcodeMessage;

document.getElementById("result").innerHTML =
"Barcode detected: " + barcode;

html5QrCode.stop();

fetchProduct(barcode);

}
);

}

});

}



function fetchProduct(barcode){

fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
.then(res=>res.json())
.then(data=>{

let product = data.product;

if(!product || !product.product_name){

document.getElementById("result").innerHTML =
"❌ Product not found";

document.getElementById("manualInput").style.display="block";

return;

}

let name = product.product_name;

let sugar = product.nutriments?.sugars || 0;
let fat = product.nutriments?.fat || 0;
let salt = product.nutriments?.salt || 0;

let rating = calculateHealth(sugar,fat,salt);

document.getElementById("result").innerHTML =

`
<h2>${name}</h2>

Sugar: ${sugar} g <br>
Fat: ${fat} g <br>
Salt: ${salt} g <br><br>

<b>Health Rating: ${rating}</b>
`;

});

}



function calculateHealth(sugar,fat,salt){

let score = 0

if(sugar > 10) score += 2
else if(sugar > 5) score += 1

if(fat > 17.5) score += 2
else if(fat > 3) score += 1

if(salt > 1.5) score += 2
else if(salt > 0.3) score += 1


if(score >= 4) return "Unhealthy 🔴"

if(score >= 2) return "Average 🟡"

return "Healthy 🟢"

}



function calculateManualHealth(){

let sugar = document.getElementById("sugarInput").value;
let fat = document.getElementById("fatInput").value;
let salt = document.getElementById("saltInput").value;

let rating = calculateHealth(sugar,fat,salt);

document.getElementById("result").innerHTML =

`
<h2>Manual Nutrition Result</h2>

Sugar: ${sugar} g <br>
Fat: ${fat} g <br>
Salt: ${salt} g <br><br>

<b>Health Rating: ${rating}</b>
`;

}



if ("serviceWorker" in navigator) {
window.addEventListener("load", () => {
navigator.serviceWorker.register("service-worker.js")
.then(() => console.log("Service Worker Registered"));
});
}
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {

e.preventDefault();

deferredPrompt = e;

// button create
const installBtn = document.createElement("button");

installBtn.innerText = "Install Scan4Health";

installBtn.style.padding = "12px 20px";
installBtn.style.margin = "20px";
installBtn.style.background = "#2e7d32";
installBtn.style.color = "white";
installBtn.style.border = "none";
installBtn.style.borderRadius = "8px";

document.body.appendChild(installBtn);

// button click
installBtn.addEventListener("click", () => {

deferredPrompt.prompt();

deferredPrompt.userChoice.then(choiceResult => {

if(choiceResult.outcome === "accepted"){
console.log("User installed app");
}

deferredPrompt = null;

});

});

});