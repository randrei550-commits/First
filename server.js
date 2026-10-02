const express = require("express");
const app = express();
const PORT = 3000;

// trimite fișierele din folderul "public" (frontend-ul)
app.use(express.static("public"));

// endpoint: când cineva cere /api/salut, răspundem cu JSON
app.get("/api/salut", (req, res) => {
  res.json({
    mesaj: "Salut de la backend!",
    ora: new Date().toLocaleTimeString("ro-RO"),
  });
});

app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});