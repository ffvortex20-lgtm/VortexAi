import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/download", async (req, res) => {
  const { url } = req.body;

  if (!url || !url.startsWith("http")) {
    return res.status(400).json({ error: "URL inválida" });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(400).json({ error: "Erro ao baixar o arquivo" });
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", "attachment; filename=download");

    response.body.pipe(res);
  } catch (e) {
    res.status(500).json({ error: "Falha no servidor" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
