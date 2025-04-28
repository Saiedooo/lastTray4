<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../api/auth'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

const router = useRouter()
const error = ref('')
const isLoading = ref(false)

// Validation schema
const schema = yup.object({
  email: yup.string()
    .required('البريد الإلكتروني مطلوب')
    .email('البريد الإلكتروني غير صالح'),
  password: yup.string()
    .required('كلمة المرور مطلوبة')
    .min(6, 'كلمة المرور يجب أن تكون على الأقل 6 أحرف'),
  rememberMe: yup.boolean()
})

// Initialize form
const { handleSubmit, errors } = useForm({
  validationSchema: schema
})

// Define fields
const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: rememberMe } = useField('rememberMe')

const onSubmit = handleSubmit(async (values) => {
  try {
    isLoading.value = true
    error.value = ''
    const response = await login({
      email: values.email,
      password: values.password
    })
    console.log('Login successful:', response)
    router.push('/dashboard') // Redirect to dashboard or appropriate page
  } catch (err: any) {
    error.value = err.response?.data?.message || 'حدث خطأ أثناء تسجيل الدخول'
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
})

const goToSignUp = () => {
  router.push('/signup')
}

const goToForgotPassword = () => {
  router.push('/forgot-password')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">تسجيل الدخول إلى حسابك</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          أو
          <a @click="goToSignUp" class="font-medium text-primary hover:text-secondary cursor-pointer">إنشاء حساب جديد</a>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <div v-if="error" class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {{ error }}
        </div>
        
        <div class="rounded-md shadow-sm space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <input
              id="email"
              v-model="email"
              type="email"
              :class="{ 'border-red-500': errors.email }"
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <span v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</span>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">كلمة المرور</label>
            <input
              id="password"
              v-model="password"
              type="password"
              :class="{ 'border-red-500': errors.password }"
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="أدخل كلمة المرور"
            />
            <span v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="rememberMe"
              type="checkbox"
              class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label for="remember-me" class="mr-2 block text-sm text-gray-900">تذكرني</label>
          </div>

          <div class="text-sm">
            <a @click="goToForgotPassword" class="font-medium text-primary hover:text-secondary cursor-pointer">نسيت كلمة المرور؟</a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            <span v-if="isLoading">جاري تسجيل الدخول...</span>
            <span v-else>تسجيل الدخول</span>
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

.error-input {
  border-color: #ef4444 !important;
}

.error-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
</style>