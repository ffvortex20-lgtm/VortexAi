// Relógio e status
setInterval(()=>{
const now = new Date();
document.getElementById("clock").innerText = now.toLocaleString();
},1000);

// Gerador de senha
function generatePassword(){
const size = document.getElementById("passSize").value;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
let pass = "";
for(let i=0;i<size;i++){
pass += chars[Math.floor(Math.random()*chars.length)];
}
document.getElementById("password").innerText = pass;
}

// Contador de texto
function countText(){
const text = document.getElementById("textArea").value;
const letters = text.length;
const words = text.trim() ? text.trim().split(/\s+/).length : 0;
document.getElementById("countResult").innerText =
`Letras: ${letters} | Palavras: ${words}`;
}

// Criar mini logo
function makeLogo(){
const name = document.getElementById("logoInput").value || "VORTEX";
document.getElementById("logoPreview").innerText = name.toUpperCase();
}

// Cofre
function toggleVault(){
document.getElementById("vault").classList.toggle("hidden");
}

// Mini assistente (respostas prontas)
function askAssistant(){
const q = document.getElementById("askInput").value.toLowerCase();
let r = "";

if(q.includes("nome")){
r = "ShadowX, NightBoss, DarkVortex, BadKing";
}else if(q.includes("frase")){
r = "A escuridão me escolheu.";
}else{
r = "Pergunte por: nome, frase ou nick.";
}

document.getElementById("assistantReply").innerText = r;
}
