
import { pgSchema, pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const todos = pgSchema("todos");

todos.table('users', {
  id: serial('id').primaryKey(),
  task: text('task').notNull(),
  done: boolean('done').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date())
});
