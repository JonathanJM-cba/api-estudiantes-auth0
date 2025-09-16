import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import router from "./routes";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("Bienvenido a la API de Estudiantes con Auth0");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
