import express from "express";
import cors from "cors";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "src", "data");

const app = express();
app.use(cors());

function readJSON(file) {
  return JSON.parse(readFileSync(path.join(dataDir, file), "utf-8"));
}

// Endpoints simples que exponen los mismos JSON que usa el frontend.
// Útil si en el futuro quieres editar los datos desde un admin o una DB
// en lugar de tocar los archivos JSON directamente.
app.get("/api/profile", (req, res) => res.json(readJSON("profile.json")));
app.get("/api/about", (req, res) => res.json(readJSON("about.json")));
app.get("/api/projects", (req, res) => res.json(readJSON("projects.json")));
app.get("/api/articles", (req, res) => res.json(readJSON("articles.json")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
