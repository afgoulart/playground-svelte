import { drizzle } from 'drizzle-orm/postgres-js';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'todo',
  port: 5432,
});

export const db = drizzle(pool);
