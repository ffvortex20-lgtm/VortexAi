import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());


app.post('/download', async (req, res) => {
const { url, type, quality } = req.body;


// ⚠️ Aqui entram APENAS conectores legais/APIs permitidas
// Exemplo: conteúdos próprios, APIs oficiais, ou serviços autorizados


return res.json({
error: 'Conector não configurado. Use apenas fontes permitidas.'
});
});


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
