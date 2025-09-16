import express, { Express, Request, Response } from "express";
import morgan from "morgan";

const app: Express = express();
const port = 3000;

app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido a la API de Estudiantes con Auth0");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
