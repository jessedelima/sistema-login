import { Router } from "express";
import { UsuariosController } from "./controllers/UsuariosController";

const routes = Router();

const usuariosController = new UsuariosController();

routes.post("/login", usuariosController.login);

export { routes };
