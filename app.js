async function resolver() {
const url = document.getElementById('url').value;
const result = document.getElementById('result');
result.innerText = 'Resolvendo...';


const r = await fetch('http://localhost:3000/resolve', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ url })
});


const data = await r.json();
result.innerHTML = `Destino final:<br><a href="${data.final}" target="_blank">${data.final}</a>`;
}
