<script setup lang="ts">
  import { ref } from "vue";

  defineOptions({
    name: "Footer",
  });

  const email = ref("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribing email:", email.value);
    email.value = ""; // Clear the input after submission
  };
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-section logo">
        <h2>Health_Care</h2>
        <div class="social-icons">
          <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"
            ><i class="fa-brands fa-x-twitter"></i
          ></a>
        </div>
      </div>

      <div class="footer-section">
        <ul>
          <li><a href="#" class="footer-link">Facebook</a></li>
          <li><a href="#" class="footer-link">Instagram</a></li>
          <li><a href="#" class="footer-link">Twitter</a></li>
        </ul>
      </div>

      <div class="footer-section subscribe">
        <p>اشترك للحصول على التحديثات</p>
        <form @submit="handleSubmit">
          <input
            type="email"
            v-model="email"
            placeholder="عنوان البريد الإلكتروني"
            required />
          <button type="submit">اشترك</button>
        </form>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    background-color: #2d2d2d;
    color: white;
    padding: 3rem 0;
    direction: rtl;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .logo h2 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
    color: var(--primary-color, #1b7da5);
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  .social-link:hover {
    color: var(--primary-color, #1b7da5);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  .footer-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-link:hover {
    color: var(--primary-color, #1b7da5);
  }

  .subscribe p {
    margin: 0 0 1rem 0;
  }

  form {
    display: flex;
    gap: 0.5rem;
  }

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid #444;
    border-radius: 4px;
    background-color: #333;
    color: white;
    outline: none;
  }

  input::placeholder {
    color: #888;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: var(--primary-color, #1b7da5);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--secondary-color, #00b39b);
  }

  /* Dark mode styles */
  :root.dark-mode .footer {
    background-color: #1a1a1a;
  }

  :root.dark-mode input {
    background-color: #2d2d2d;
    border-color: #333;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .social-icons {
      justify-content: center;
    }

    form {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
</style>
