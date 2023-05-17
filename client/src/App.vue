<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import RouterLink  from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import FirstPage from './pages/RepoInfo.vue'
import GithubURLPage from './pages/GithubURLPage.vue'
import GithubUserDataPage from './pages/GithubUserDataPage.vue'

</script>

<template>
  
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/repoinfo">Repository Info</RouterLink>
        <RouterLink to="/urlinfo">Github URL Info</RouterLink>
        <RouterLink to="/userdata">Github User Data</RouterLink>
      </nav>
      <hr/>
  </header>

  <RouterView />

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
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


</style>
