import { Router } from "express";

const routes = Router();

const Login = () => {
	console.log("Logou....");
};

routes.get("/login", Login);

export { routes };
