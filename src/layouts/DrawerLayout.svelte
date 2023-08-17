<script>
  import { Route } from 'svelte-router-spa';
  import MainNav from '../components/MainNav.svelte';

  export let currentRoute;
  export let params;

  console.log({ name: 'DrawerLayout', currentRoute, params });

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  function minimize() {
    const el = document.getElementById('my-drawer')
    el.style = 'transition: width 2s;';
    el.checked = false;
  }
</script>

<MainNav />
<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <main>
      <Route {currentRoute} {params} />
    </main>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" />
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      {#each menuItems as i}
        <li>
          <label for="my-drawer" class="drawer-button">
            <a on:click={minimize} href={i.href}>
              {i.label}
            </a>
          </label>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  main {
    padding: 1.2rem;
    height: calc(100lvh - 50px);
  }
</style>
