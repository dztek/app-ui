import DrawerLayout from './layouts/DrawerLayout.svelte';
import Redirect from './components/Redirect.svelte';
import Register from './pages/Register.svelte';
import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Contact from './pages/Contact.svelte';
import SideMenu from './components/SideMenu.svelte';

export const routes = [
  { name: '/', component: Home, layout: DrawerLayout },
  { name: '/', component: SideMenu },
  { name: '/', component: SideMenu },
  { name: '/404.html', component: Redirect, layout: DrawerLayout },
  { name: 'register', component: Register },
  { name: 'home', component: Home, layout: DrawerLayout },
  { name: 'about', component: About, layout: DrawerLayout },
  { name: 'contact', component: Contact, layout: DrawerLayout },
];

export default {};
