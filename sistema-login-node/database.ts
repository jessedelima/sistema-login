import { Connection, createConnection, getConnection } from "typeorm";

const DBConnect = async () => {
	let connection: Connection = getConnection();

	if (connection) {
		await connection.connect();
	} else {
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
