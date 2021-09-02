import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AutenticacaoProvider from "./ctx/autenticacao";
import Login from "./views/Login";

export default function App() {
	return (
		<Router>
			<AutenticacaoProvider>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">{/* <Home /> */}</Route>
				</Switch>
			</AutenticacaoProvider>
		</Router>
	);
}
