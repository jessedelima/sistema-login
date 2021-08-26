import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Usuarios } from "../entities/Usuarios";

export class UsuariosController {
	async login(request: Request, response: Response) {
		const { email, senha } = request.body;

		const entityManager = getManager();
		const usuario = await entityManager.findOne(Usuarios, {
			where: {
				email,
				senha,
			},
		});

		if (usuario) {
			response.json(usuario);
		} else {
			response.json({ erro: "Login ou senha inválidos" });
		}
	}
}
