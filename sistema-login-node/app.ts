import "reflect-metadata";
import express, { Request, Response } from "express";
import { TryDBConnect } from "./database";
import { routes } from "./src/routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(async (req: Request, res: Response, next) => {
	await TryDBConnect(() => {
		res.json({
			error: "Não foi possível conectar ao banco de dados",
		});
	}, next);
});

app.use(routes);

app.listen(8000, () => console.log("Servidor rodando na porta 8000"));
