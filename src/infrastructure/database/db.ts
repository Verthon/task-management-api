import knex from "knex";
import path from "path";

/**
 * @type {Knex}
 */
export const db = knex({
	client: "sqlite3",
	connection: {
		filename: path.resolve("src/infrastructure/database", "db.sqlite"),
	},
	useNullAsDefault: true,
	migrations: {
		directory: path.resolve("src/infrastructure/database", "migrations"),
	},
});
