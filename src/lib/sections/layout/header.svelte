<script lang="ts">
  import Container from '$lib/components/container.svelte';
  import LOGO from '$lib/svg/logo.svelte'
  import Locale from './locale.svelte'
</script>

<Container>
  <div class="container">
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/training">Training</a>
        </li>
      </ul>
    </nav>

    <div class="logo">
      <a href="/">
        <LOGO />
      </a>
    </div>

    <div class="locale">
      <Locale />
    </div>
    
  </div>
</Container>

<style>

/* Navigation styling */

a {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Use the default text color */
  font-size: 14px;  
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
}

ul {
    padding-inline-start: 0;
}

li {
    display: flex;
    gap: 20px;
}

nav {
  margin-top: 10px;
}

nav a:hover {
  text-decoration: underline;
  text-decoration-color: var(--global-color-primary);
}

/* Logo styling */

.logo {
  display: flex;
  justify-content: center;
}

/* Locale menu styling */

.locale {
  display: flex;
  justify-content: end;
  margin-top: 10px;
}

</style>
