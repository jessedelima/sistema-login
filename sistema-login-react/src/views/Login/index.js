import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const Login = () => {
	return (
		<div>
			<Paper elevation={1} style={{ width: 800, height: 500 }}>
				<TextField label="Email" variant="outlined" />
				<TextField label="Senha" variant="outlined" type="password" />
				<Button variant="contained" color="primary">
					Entrar
				</Button>
			</Paper>
		</div>
	);
};

export default Login;
