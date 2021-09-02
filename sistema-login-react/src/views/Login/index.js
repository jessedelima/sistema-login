import React, { useState, useEffect, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import logo from "../../img/logo-soitech.png";
import { AutenticacaoContext } from "../../ctx/autenticacao";

const Login = () => {
	const {
		container,
		sideImage,
		gridContainer,
		imgLogo,
		containerLogin,
		input,
		copyright,
	} = styles();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);

	const { entrar } = useContext(AutenticacaoContext);

	useEffect(() => {
		if (email !== "" && password !== "") {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [email, password]);

	return (
		<div className={container}>
			<Paper elevation={1} style={{ width: 800, height: 500 }}>
				<Grid container className={gridContainer}>
					<Grid item md={4} className={sideImage} />
					<Grid item md={8} className={containerLogin}>
						<img src={logo} alt="Logo" className={imgLogo} />
						<TextField
							label="Email"
							variant="outlined"
							className={input}
							value={email}
							onChange={(text) => setEmail(text.target.value)}
						/>
						<TextField
							label="Senha"
							variant="outlined"
							type="password"
							className={input}
							value={password}
							onChange={(text) => setPassword(text.target.value)}
						/>
						<Button
							variant="contained"
							color="primary"
							disabled={isDisabled}
							onClick={() => entrar(email, password)}
						>
							Entrar
						</Button>
						<span className={copyright}>
							Sistema de login, desenvolvido pelos alunos do curso
							de Desenvolvimento Web da SOITECH.
						</span>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Login;
