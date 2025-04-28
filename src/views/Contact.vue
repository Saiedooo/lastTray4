<script setup lang="ts">
  import { ref } from "vue";

  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const phone = ref("");
  const message = ref("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق معالجة النموذج
    console.log("Form submitted:", {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    });
  };
</script>

<template>
  <div class="contact-page">
    <div class="container mx-auto px-4 py-12">
      <div
        class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 contact-container">
        <h1 class="text-3xl font-bold mb-8">اتصل بنا</h1>

        <p class="mb-8">
          إذا كان لديك أي استفسارات أو تحتاج إلى مزيد من المعلومات، فلا تتردد في
          الاتصال بنا. نحن هنا لمساعدتك!
          <br />
          يمكنك الاتصال بنا او مراسلتنا علي البريد الألكترونى
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="contact-info">
            <div class="mb-6">
              <a
                href="tel:484.324.2400"
                class="flex items-center text-primary hover:text-secondary">
                <i class="fas fa-phone ml-2"></i>
                01111111111
              </a>
            </div>

            <div class="mb-6">
              <a
                href="mailto:info@mediaproper.com"
                class="flex items-center text-primary hover:text-secondary">
                <i class="fas fa-envelope ml-2"></i>
                healthCare@gmail.com
              </a>
            </div>

            <div>
              <div class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 ml-2 text-primary"></i>
                <div>
                  <p>Dakahlia-Mansura</p>
                  <p>MET</p>
                </div>
              </div>
            </div>
          </div>

          <form @submit="handleSubmit" class="contact-form">
            <div class="mb-6">
              <label class="block mb-2">الاسم</label>
              <div class="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  v-model="firstName"
                  placeholder="الأول"
                  class="form-input"
                  required />
                <input
                  type="text"
                  v-model="lastName"
                  placeholder="الأخير"
                  class="form-input"
                  required />
              </div>
            </div>

            <div class="mb-6">
              <label class="block mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                v-model="email"
                placeholder="example@email.com"
                class="form-input"
                required />
            </div>

            <div class="mb-6">
              <label class="block mb-2">الهاتف</label>
              <input
                type="tel"
                v-model="phone"
                placeholder="xxx-xxx-xxxx"
                class="form-input" />
            </div>

            <div class="mb-6">
              <label class="block mb-2">الرسالة</label>
              <textarea
                v-model="message"
                placeholder="اكتب رسالتك..."
                class="form-input h-32"
                required></textarea>
            </div>

            <button type="submit" class="submit-btn">إرسال</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-page {
    direction: rtl;
    background-color: #f8fafc;
    min-height: 100vh;
  }

  .contact-page h1 {
    text-align: center;
    font-size: 35px;
  }
  .contact-page p {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
  .contact-page label {
    /* font-size: 16px; */
    font-weight: bold;
  }
  .text-primary {
    color: #007b8f;
  }

  .text-secondary {
    color: #49a8d3;
  }

  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    transition: all 0.3s ease;
  }

  .form-input:focus {
    outline: none;
    border-color: #007b8f;
    box-shadow: 0 0 0 3px rgba(0, 123, 143, 0.1);
  }

  .submit-btn {
    background-color: #007b8f;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.375rem;
    font-weight: 500;
    transition: all 0.3s ease;
    width: 100%;
  }

  .submit-btn:hover {
    background-color: #49a8d3;
    transform: translateY(-2px);
  }

  @media (prefers-color-scheme: dark) {
    .contact-page {
      background-color: #e9ebee;
    }

    .bg-white {
      background-color: white;
    }
  }

  .contact-container {
    background-image: url("/img/back.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding: 32px; /* تعديل مناسب للمحتوى */
    border-radius: 8px; /* إذا كنت تريد استدارة الزوايا */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* إضافة ظل */
  }

  /* إضافة التدرج اللوني فوق الصورة إذا كنت تريدها */
  .contact-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6); /* تدرج لوني خفيف */
    z-index: 1;
    border-radius: 10px;
  }

  .contact-container > * {
    position: relative;
    z-index: 2;
  }
</style>
