<script lang="ts">
  import { onMount } from 'svelte';
  let todos: Array<{ id: number, task: string }> = [];

  async function fetchTodos() {
    const res = await fetch('/api/todos');
    todos = await res.json();
  }

  async function addTodo() {
    const task = (document.getElementById('task') as HTMLInputElement).value;
    await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task })
    });
    fetchTodos();
  }

  async function deleteTodo(id: number) {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE'
    });
    fetchTodos();
  }

  onMount(fetchTodos);
</script>

<main>
  <input id="task" type="text" placeholder="Enter a task" />
  <button on:click={addTodo}>Add</button>

  <ul>
    {#each todos as todo}
      <li>
        {todo.task} <button on:click={() => deleteTodo(todo.id)}>Delete</button>
      </li>
    {/each}
  </ul>
</main>