function download() {
  const url = document.getElementById("url").value;
  const status = document.getElementById("status");

  if (!url) {
    status.innerText = "Cole um link válido";
    return;
  }

  status.innerText = "Baixando...";

  fetch("https://SEU-BACKEND.onrender.com/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  })
  .then(res => {
    if (!res.ok) throw new Error();
    return res.blob();
  })
  .then(blob => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "arquivo";
    a.click();
    status.innerText = "Download concluído";
  })
  .catch(() => status.innerText = "Erro ao baixar");
}
