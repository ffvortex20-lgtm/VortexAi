// ===== RELÓGIO =====


// ===== CONTADOR DE TEXTO =====
function countText(){
const text = document.getElementById("textArea").value;
const letters = text.length;
const words = text.trim() ? text.trim().split(/\s+/).length : 0;
document.getElementById("countResult").innerText =
`Letras: ${letters} | Palavras: ${words}`;
}


// ===== CRIADOR DE LOGO (FUNCIONAL) =====
function makeLogo(){
const name = document.getElementById("logoInput").value || "VORTEX";
const canvas = document.getElementById("logoCanvas");
const ctx = canvas.getContext("2d");


// fundo
ctx.fillStyle = "#000";
ctx.fillRect(0,0,canvas.width,canvas.height);


// texto neon
ctx.font = "bold 40px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "#b45bff";
ctx.shadowColor = "#b45bff";
ctx.shadowBlur = 15;
ctx.fillText(name.toUpperCase(), canvas.width/2, canvas.height/2);
}


function downloadLogo(){
const canvas = document.getElementById("logoCanvas");
const link = document.createElement("a");
link.download = "logo.png";
link.href = canvas.toDataURL("image/png");
link.click();
}


// ===== COFRE =====
function toggleVault(){
document.getElementById("vault").classList.toggle("hidden");
}


// ===== MINI ASSISTENTE =====
function askAssistant(){
const q = document.getElementById("askInput").value.toLowerCase();
let r = "";


if(q.includes("nome")){
r = "ShadowX, NightBoss, DarkVortex, BadKing";
}else if(q.includes("frase")){
r = "A escuridão me escolheu.";
}else if(q.includes("nick")){
r = "xShadow, Night_Pro, Vortex_X";
}else{
r = "Pergunte por: nome, frase ou nick.";
}


document.getElementById("assistantReply").innerText = r;
}
