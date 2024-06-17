import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/db';
import { todos } from '$lib/schema';

export const get: RequestHandler = async () => {
  const allTodos = await db.select(todos).run();
  return {
    body: allTodos,
  };
};

export const post: RequestHandler = async ({ request }) => {
  const { task } = await request.json();
  await db.insert(todos).values({ task }).run();
  return {
    status: 201,
  };
};

export const del: RequestHandler = async ({ params }) => {
  const { id } = params;
  await db.delete(todos).where({ id }).run();
  return {
    status: 204,
  };
};
