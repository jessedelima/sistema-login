import { makeStyles } from "@material-ui/core/styles";
import bg from "../../img/background-image.jpg";
import sideImage from "../../img/side-background.jpg";

const styles = makeStyles(() => ({
	container: {
		backgroundImage: `url(${bg})`,
		backgroundSize: "cover",
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	sideImage: {
		backgroundImage: `url(${sideImage})`,
		backgroundSize: "cover",
		height: "100%",
	},
	gridContainer: {
		height: "100%",
	},
	imgLogo: {
		width: 200,
		marginBottom: 20,
	},
	containerLogin: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	input: {
		marginBottom: 20,
	},
	copyright: {
		fontSize: 14,
		marginTop: 20,
		width: 300,
		textAlign: "center",
	},
}));

export default styles;
