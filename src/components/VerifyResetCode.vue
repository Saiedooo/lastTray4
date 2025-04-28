  <script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { verifyResetCode } from '../api/auth'

  const router = useRouter()
  const code = ref(['', '', '', '', '', ''])
  const error = ref('')
  const success = ref('')
  const isLoading = ref(false)

  // Handle input in each digit field
  const handleInput = (index: number, event: Event) => {
    const input = event.target as HTMLInputElement
    const value = input.value

    // Only allow numbers
    if (!/^\d*$/.test(value)) {
      input.value = ''
      return
    }

    // Update the code array
    code.value[index] = value.slice(-1)

    // Move to next input if value is entered
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  // Handle backspace
  const handleKeydown = (index: number, event: KeyboardEvent) => {
    if (event.key === 'Backspace' && !code.value[index] && index > 0) {
      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const verifyCode = async () => {
    try {
      isLoading.value = true
      error.value = ''
      const verificationCode = code.value.join('')
      
      // Check if we have the email stored
      const email = localStorage.getItem('resetEmail')
      if (!email) {
        router.push('/forgot-password')
        return
      }





          console.log("email:", email);
  console.log("verificationCode:", verificationCode);






      if (verificationCode.length !== 6) {
        error.value = 'الرجاء إدخال رمز التحقق كاملاً'
        return
      }

      // Ensure all characters are numbers
      if (!/^\d+$/.test(verificationCode)) {
        error.value = 'الرجاء إدخال أرقام فقط'
        return
      }

      await verifyResetCode(verificationCode)
      success.value = 'تم التحقق من الرمز بنجاح'
      
      // Clear the form and stored email
      code.value = ['', '', '', '', '', '']
      // localStorage.removeItem('resetEmail')
      
      // Redirect to reset password page after success
      setTimeout(() => {
        router.push('/reset-password')
      }, 1500)
    } catch (err: any) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'حدث خطأ أثناء التحقق من الرمز'
      }
      console.error('Verification error:', err)
    } finally {
      isLoading.value = false
    }
  }
  </script>

  <template>
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">أدخل رمز التحقق</h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            تحقق من بريدك الإلكتروني للحصول على الرمز
          </p>
        </div>

        <div v-if="error" class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-center">
          {{ error }}
        </div>

        <div v-if="success" class="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-center">
          {{ success }}
        </div>

        <div class="verification-code-container">
          <div class="flex justify-center gap-2">
            <input
              v-for="(digit, index) in code"
              :key="index"
              :data-index="index"
              v-model="code[index]"
              type="text"
              inputmode="numeric"
              maxlength="1"
              class="verification-input"
              @input="handleInput(index, $event)"
              @keydown="handleKeydown(index, $event)"
              :placeholder="'0'"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <button
            @click="verifyCode"
            :disabled="isLoading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
          >
            <span v-if="isLoading">جاري التحقق...</span>
            <span v-else>تحقق</span>
          </button>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  .min-h-screen {
    direction: rtl;
    background-color: #f8fafc;
  }

  .verification-code-container {
    margin: 2rem 0;
  }

  .verification-input {
    width: 3rem;
    height: 3rem;
    text-align: center;
    font-size: 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    margin: 0 0.25rem;
    transition: all 0.2s;
    direction: ltr;
  }

  .verification-input::placeholder {
    color: #cbd5e1;
  }

  .verification-input:focus {
    border-color: #007b8f;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 143, 0.2);
  }

  .bg-primary {
    background-color: #007b8f;
  }

  .hover\:bg-secondary:hover {
    background-color: #49a8d3;
  }

  /* Add styles to ensure left-to-right input */
  .flex {
    direction: ltr;
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
      color: #333;
    }

    label, h2, p {
      color: #333;
    }
  }
  </style> 