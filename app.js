function download() {
const url = document.getElementById('url').value.trim();
const type = document.getElementById('type').value;
const quality = document.getElementById('quality').value;
const status = document.getElementById('status');


if (!url) {
status.textContent = 'Cole um link válido.';
return;
}


// FRONTEND apenas envia para o backend
const api = 'https://SEU-BACKEND/download';


status.textContent = 'Preparando download...';


fetch(api, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ url, type, quality })
})
.then(r => r.json())
.then(d => {
if (d.error) status.textContent = d.error;
else window.location.href = d.downloadUrl;
})
.catch(() => status.textContent = 'Erro ao conectar ao servidor');
}
