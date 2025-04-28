<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  defineOptions({
    name: "Header",
  });

  const router = useRouter();
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle("dark-mode");
  };

  const navigateToLogin = () => {
    router.push("/login");
  };
</script>

<template>
  <header class="header">
    <div class="container">
      <!-- Icons -->
      <div class="icons">
        <i
          class="fas fa-search cursor-pointer hover:text-primary transition-colors"></i>
        <i
          class="fas fa-user cursor-pointer hover:text-primary transition-colors"
          @click="navigateToLogin"></i>
        <i
          v-if="!isDarkMode"
          @click="toggleDarkMode"
          class="fa-solid fa-moon cursor-pointer hover:text-primary transition-colors"></i>
        <i
          v-else
          @click="toggleDarkMode"
          class="fa-solid fa-sun cursor-pointer hover:text-primary transition-colors"></i>
      </div>

      <!-- Navigation Menu -->
      <nav class="nav">
        <router-link to="/" class="nav-link">الرئيسية</router-link>
        <router-link to="/about" class="nav-link">حول</router-link>
        <router-link to="/services" class="nav-link">الخدمات</router-link>
        <router-link to="/contact" class="nav-link">اتصل بنا</router-link>
        <router-link to="/login" class="nav-link">تسجيل الدخول</router-link>
      </nav>

      <!-- Logo -->
      <div class="logo">
        <img src="/img/logo.png" alt="Logo" />
      </div>
    </div>
  </header>
</template>

<style scoped>
  .header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    direction: rtl;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icons {
    display: flex;
    gap: 1.5rem;
    font-size: 1.25rem;
  }
  .icons i:hover {
    color: var(--primary-color, #1b7da5);
  }

  .nav {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .nav-link:hover,
  .nav-link.router-link-active {
    color: var(--primary-color, #1b7da5);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo img {
    height: 40px;
    width: auto;
  }

  /* Dark mode styles */
  :root {
    --primary-color: #1b7da5;
  }

  .dark-mode {
    background-color: #1a1a1a;
    color: #ffffff;
  }

  .dark-mode .header {
    background-color: #2d2d2d;
  }

  .dark-mode .nav-link {
    color: #ffffff;
  }

  .dark-mode .nav-link:hover,
  .dark-mode .nav-link.router-link-active {
    color: var(--primary-color);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }

    .nav {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      background-color: white;
      padding: 1rem;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .nav.active {
      display: flex;
    }

    .dark-mode .nav {
      background-color: #2d2d2d;
    }
  }
</style>
