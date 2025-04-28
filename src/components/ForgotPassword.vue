<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { forgotPassword } from '../api/auth'

const router = useRouter()
const email = ref('')
const error = ref('')
const success = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  try {
    if (!email.value) {
      error.value = 'الرجاء إدخال البريد الإلكتروني'
      return
    }

    isLoading.value = true
    error.value = ''
    success.value = ''
    
    await forgotPassword(email.value)
    success.value = 'تم إرسال رمز التحقق إلى بريدك الإلكتروني'
    
    // Store email for verification step
    localStorage.setItem('resetEmail', email.value)
    
    // Clear the form after successful submission
    email.value = ''
    
    // Redirect to verification page after 1.5 seconds
    setTimeout(() => {
      router.push('/verify-reset-code')
    }, 1500)
  } catch (err: any) {
    if (err instanceof Error) {
      error.value = err.message
    } else {
      error.value = 'حدث خطأ أثناء إرسال رمز التحقق'
    }
    console.error('Password reset error:', err)
  } finally {
    isLoading.value = false
  }
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">نسيت كلمة المرور</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {{ error }}
        </div>
        
        <div v-if="success" class="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md">
          {{ success }}
        </div>

        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              required
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            <span v-if="isLoading">جاري الإرسال...</span>
            <span v-else>إرسال رابط إعادة التعيين</span>
          </button>
          
          <button
            type="button"
            @click="goToLogin"
            class="text-sm font-medium text-primary hover:text-secondary"
          >
            العودة إلى تسجيل الدخول
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.min-h-screen {
  direction: rtl;
  background-color: #f8fafc;
}

input {
  text-align: right;
  background-color: #fff;
}

input::placeholder {
  text-align: right;
}

label {
  text-align: right;
}

.error-message {
  text-align: right;
}

.bg-primary {
  background-color: #007b8f;
}

.hover\:bg-secondary:hover {
  background-color: #49a8d3;
  transition: background-color 0.2s ease;
}

.text-primary {
  color: #007b8f;
}

.hover\:text-secondary:hover {
  color: #49a8d3;
  transition: color 0.2s ease;
}

@media (prefers-color-scheme: dark) {
  .min-h-screen {
    background-color: #eee;
  }

  .max-w-md {
    background-color: #f8fafc;
  }

  input {
    background-color: #fff;
    border-color: #3333;
    color: #333;
  }

  input::placeholder {
    color: #444;
  }

  label, h2, p {
    color: #333;
  }
}
</style> 