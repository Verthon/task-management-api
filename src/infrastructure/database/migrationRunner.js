import { db } from "./db.js";

const migrateLatest = async (database) => {
	try {
		await database.migrate.latest();
		console.log("Migrations are successfully up to date");
		process.exit();
	} catch (error) {
		console.error("Error running migrate:latest", error);
		process.exit();
	}
};

const migrateRollback = async (database) => {
	try {
		await database.migrate.rollback();
		console.log("Rollback completed successfully");
		process.exit();
	} catch (error) {
		console.error("Error running migrate:rollback", error);
		process.exit();
	}
};

const migrationCommand = process.argv[2];

const strategies = {
	latest: migrateLatest,
	rollback: migrateRollback,
};

const executeMigration = async (command) => {
	if (!strategies[command]) {
		console.error("Unknown migration command");
		process.exit(1);
	}

	try {
		await strategies[command](db);
		console.log("Migration completed successfully");
	} catch (error) {
		console.error("Migration failed:", error);
		process.exit(1);
	}
};

executeMigration(migrationCommand);
