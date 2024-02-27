/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	return knex.schema.createTable("tasks", (table) => {
		table.increments("id").primary(); // Primary key column
		table.string("title").notNullable(); // Task title
		table.text("description"); // Task description, optional
		table.datetime("deadline"); // Deadline, optional
		table.timestamp("created_at").defaultTo(knex.fn.now()); // Auto-set on creation
		table.timestamp("updated_at").defaultTo(knex.fn.now()); // Manually updated
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	return knex.schema.dropTable("tasks");
}
