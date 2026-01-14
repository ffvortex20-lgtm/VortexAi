import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());


async function resolveUrl(url) {
let current = url;
for (let i = 0; i < 10; i++) {
const res = await fetch(current, { redirect: 'manual' });
if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
current = new URL(res.headers.get('location'), current).toString();
} else {
return current;
}
}
return current;
}


app.post('/resolve', async (req, res) => {
try {
const { url } = req.body;
const finalUrl = await resolveUrl(url);
res.json({ final: finalUrl });
} catch (e) {
res.status(500).json({ error: 'Falha ao resolver link' });
}
});


app.listen(3000, () => console.log('Resolver rodando na porta 3000'));
