<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import axios from "axios";

  const router = useRouter();
  const password = ref("");
  const confirmPassword = ref("");
  const error = ref("");
  const success = ref("");
  const isLoading = ref(false);

  const resetPassword = async () => {
    try {
      // Validate passwords
      if (password.value.length < 6) {
        error.value = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
        return;
      }

      if (password.value !== confirmPassword.value) {
        error.value = "كلمتا المرور غير متطابقتين";
        return;
      }

      isLoading.value = true;
      error.value = "";
      success.value = ""; // Clear any previous success message

      const email = localStorage.getItem("resetEmail");
      if (!email) {
        error.value = "البريد الإلكتروني غير موجود، يرجى المحاولة مرة أخرى";
        router.push("/forgot-password");
        return;
      }

      const response = await axios.put("/api/v1/auth/resetPassword", {
        email: email,
        newPassword: password.value,
      });

      console.log("Response:", response); // Debug response

      if (response.data.status === "success" || response.status === 200) {
        // Set success message
        success.value = "تم تغيير كلمة المرور بنجاح";
        
        // Clear form
        password.value = "";
        confirmPassword.value = "";
        
        // Clear stored email
        localStorage.removeItem("resetEmail");

        // Wait for success message to be shown
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Navigate to login
        await router.push("/login");
      }
    } catch (err: any) {
      console.error("Reset password error:", err);
      error.value =
        err.response?.data?.message || "حدث خطأ أثناء تغيير كلمة المرور";
    } finally {
      isLoading.value = false;
    }
  };
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg dark:border dark:border-gray-700">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          تعيين كلمة سر جديدة
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          أدخل كلمة السر الجديدة
        </p>
      </div>

      <div
        v-if="error"
        class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 px-4 py-3 rounded-md text-center">
        {{ error }}
      </div>

      <div
        v-if="success"
        class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-600 dark:text-green-400 px-4 py-3 rounded-md text-center">
        {{ success }}
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="resetPassword">
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              كلمة السر الجديدة
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="أدخل كلمة السر الجديدة" />
          </div>
          <div>
            <label
              for="confirm-password"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              تأكيد كلمة السر
            </label>
            <input
              id="confirm-password"
              v-model="confirmPassword"
              type="password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="أعد إدخال كلمة السر الجديدة" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 dark:focus:ring-offset-gray-800">
            <span v-if="isLoading">جاري المعالجة...</span>
            <span v-else>إرسال</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .min-h-screen {
    direction: rtl;
  }

  .bg-primary {
    background-color: #007b8f;
  }

  .hover\:bg-secondary:hover {
    background-color: #49a8d3;
  }

  .focus\:ring-primary:focus {
    --tw-ring-color: #007b8f;
  }

  .focus\:border-primary:focus {
    border-color: #007b8f;
  }
</style>
