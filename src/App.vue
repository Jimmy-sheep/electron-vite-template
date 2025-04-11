<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="logo-wrapper">
      <a href="https://vite.dev/" target="_blank" class="logo electron-vite">
        <img src="./assets/vite.svg" alt="Electron Vite logo" width="125" height="125" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="logo vue">
        <img src="./assets/vue.svg" alt="Vue logo" width="125" height="125" />
      </a>
    </div>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo-wrapper {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin: 0 0 2rem 0;
  min-height: 125px;
}

.logo {
  display: block;
  background-color: unset;
}

.logo.electron-vite:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo-wrapper {
    flex-direction: column;
    margin: 0 2rem 0 0;
    min-width: 125px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
