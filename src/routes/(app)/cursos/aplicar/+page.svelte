<script>
  import { CURSOS_MOCK } from '$lib/data/mocks/cursos'
</script>

<h2>Aplicar a un curso</h2>

<form action="/cursos/aplicar/aplicado">
  <label>
    Curso al que quieres aplicar:
    <select name="curso" required>
      <option value="" disabled selected>Selecciona un curso</option>
      {#each CURSOS_MOCK as curso (curso.id)}
        <option value={curso.id}>{curso.titulo}</option>
      {/each}
    </select>
  </label>

  <label>
    Tu nombre:
    <input type="text" name="nombre" required />
  </label>

  <label>
    Tu email:
    <input type="email" name="email" required />
  </label>

  <button type="submit">Aplicar</button>
</form>


<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input,
  select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 0.5rem;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    color: white;
    background-color: #1273D4;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    background-color: #0b5ed7;
  }
</style>