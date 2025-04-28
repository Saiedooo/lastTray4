<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <main class="pt-16 min-h-screen">
    <!-- Add min-height to push footer down -->
    <RouterView />
  </main>
  <Footer />
</template>

<style>
  /* Global styles */
  :root {
    --primary-color: #1b7da5;
    --secondary-color: #007b8f;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .dark-mode {
    background-color: #1a1a1a;
    color: #ffffff;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }
</style>
