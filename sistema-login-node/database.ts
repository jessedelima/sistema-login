import { createConnection, getConnection } from "typeorm";

const DBConnect = async () => {
	try {
		getConnection();
	} catch (error) {
		await createConnection();
	}

	console.log("🌴 Database connection was successful!");
};

const TryDBConnect = async (onError: Function, next: Function) => {
	try {
		await DBConnect();
		next();
	} catch (error) {
		onError();
	}
};

export { TryDBConnect };
