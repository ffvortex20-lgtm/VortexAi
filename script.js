// ===== RELÓGIO AO VIVO =====
box.innerHTML = hist.length ? hist.map(h => `<div>🔗 ${h.short}<br>↳ ${h.long}</div>`).join("") : "<i>Nenhum link ainda.</i>";
}


function updateStats(){
const hist = JSON.parse(localStorage.getItem("vortex_history") || "[]");
document.getElementById("totalCount").innerText = hist.length;
document.getElementById("lastLink").innerText = hist[0]?.short || "—";
}


// ===== QR CODE =====
function makeQR(url){
const box = document.getElementById("qrcode");
box.innerHTML = "";
new QRCode(box, {text:url, width:160, height:160, colorDark:"#b45bff", colorLight:"#0b0b14"});
}


function downloadQR(){
const canvas = document.querySelector("#qrcode canvas");
if(!canvas){alert("Gere um link primeiro!"); return;}
const a = document.createElement("a");
a.download = "vortex-qr.png";
a.href = canvas.toDataURL("image/png");
a.click();
}


// ===== ENCURTAR (TinyURL API) =====
async function shortenUrl(){
const long = document.getElementById("longUrl").value.trim();
if(!long.startsWith("http")){
alert("Cole um link válido começando com http:// ou https://"); return;
}
try{
const api = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(long)}`;
const res = await fetch(api);
const short = await res.text();
document.getElementById("shortUrl").value = short;
document.getElementById("resultBox").classList.remove("hidden");
makeQR(short);
saveToHistory(long, short);
}catch(e){alert("Erro ao encurtar. Tente novamente.");}
}


function copyShort(){
const v = document.getElementById("shortUrl").value;
navigator.clipboard.writeText(v);
alert("Copiado!");
}


// ===== VERIFICADOR DE LINK =====
async function checkLink(){
const url = document.getElementById("checkUrl").value.trim();
const out = document.getElementById("checkResult");
if(!url){ out.innerText = "Cole um link."; return; }
try{
const r = await fetch(url, {mode:"no-cors"});
out.innerText = "✅ O link parece ativo (respondeu ao navegador).";
}catch(e){ out.innerText = "❌ O link pode estar quebrado."; }
}


// INIT
renderHistory();
updateStats();
