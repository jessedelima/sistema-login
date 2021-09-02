import React, { createContext, useState } from "react";
import axios from "axios";

export const AutenticacaoContext = createContext();

const AutenticacaoProvider = ({ children }) => {
	const [usuarioLogado, setUsuarioLogado] = useState();

	const entrar = (email, password) => {
		axios
			.post("http://localhost:8000/login", {
				email: email,
				senha: password,
			})
			.then((retorno) => {
				if (retorno.data.erro) {
					alert(retorno.data.erro);
				} else {
					setUsuarioLogado(retorno.data);
				}
			})
			.catch((erro) => {
				console.log(erro);
			});
	};

	return (
		<AutenticacaoContext.Provider
			value={{
				entrar: (email, password) => entrar(email, password),
				usuarioLogado,
			}}
		>
			{children}
		</AutenticacaoContext.Provider>
	);
};

export default AutenticacaoProvider;
