<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-12">
    <div class="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          إنشاء حساب مريض جديد
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          لديك حساب بالفعل؟
          <a
            @click="goToLogin"
            class="font-medium text-primary hover:text-secondary cursor-pointer"
            >تسجيل الدخول</a
          >
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="onSubmit">
        <div
          v-if="error"
          class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
          {{ error }}
        </div>

        <div class="rounded-md shadow-sm space-y-6">
          <!-- Personal Information -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                for="firstName"
                class="block text-sm font-medium text-gray-700"
                >الاسم الأول</label
              >
              <input
                id="firstName"
                v-model="firstName"
                name="firstName"
                type="text"
                :class="{ 'border-red-500': errors.firstName }"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="الاسم الأول" />
              <span v-if="errors.firstName" class="text-red-500 text-xs mt-1">{{ errors.firstName }}</span>
            </div>
            <div>
              <label
                for="lastName"
                class="block text-sm font-medium text-gray-700"
                >الاسم الأخير</label
              >
              <input
                id="lastName"
                v-model="lastName"
                name="lastName"
                type="text"
                :class="{ 'border-red-500': errors.lastName }"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="الاسم الأخير" />
              <span v-if="errors.lastName" class="text-red-500 text-xs mt-1">{{ errors.lastName }}</span>
            </div>
          </div>

          <div>
            <label
              for="phoneNumber"
              class="block text-sm font-medium text-gray-700"
              >رقم الهاتف</label
            >
            <input
              id="phoneNumber"
              v-model="phoneNumber"
              name="phoneNumber"
              type="tel"
              :class="{ 'border-red-500': errors.phoneNumber }"
              required
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="أدخل رقم هاتفك" />
            <span v-if="errors.phoneNumber" class="text-red-500 text-xs mt-1">{{ errors.phoneNumber }}</span>
          </div>

          <div>
            <label for="address" class="block text-sm font-medium text-gray-700"
              >العنوان</label
            >
            <textarea
              id="address"
              v-model="address"
              name="address"
              :class="{ 'border-red-500': errors.address }"
              required
              rows="3"
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="أدخل عنوانك"></textarea>
            <span v-if="errors.address" class="text-red-500 text-xs mt-1">{{ errors.address }}</span>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >البريد الإلكتروني</label
            >
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              :class="{ 'border-red-500': errors.email }"
              required
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="أدخل بريدك الإلكتروني" />
            <span v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</span>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >كلمة المرور</label
              >
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                :class="{ 'border-red-500': errors.password }"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="إنشاء كلمة مرور" />
              <span v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</span>
            </div>
            <div>
              <label
                for="confirmPassword"
                class="block text-sm font-medium text-gray-700"
                >تأكيد كلمة المرور</label
              >
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                :class="{ 'border-red-500': errors.confirmPassword }"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="تأكيد كلمة المرور" />
              <span v-if="errors.confirmPassword" class="text-red-500 text-xs mt-1">{{ errors.confirmPassword }}</span>
            </div>
          </div>

          <!-- Photo Upload Section -->
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >الصورة الشخصية</label
              >
              <div class="mt-1 flex items-center space-x-4">
                <div
                  class="w-24 h-24 border rounded-lg overflow-hidden bg-gray-100">
                  <img
                    v-if="personalPhotoPreview"
                    :src="personalPhotoPreview"
                    class="w-full h-full object-cover" />
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center text-gray-400">
                    <svg
                      class="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                  @change="(e) => handlePhotoUpload(e, 'personal')" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >البطاقة الشخصية</label
              >
              <div class="mt-1 flex items-center space-x-4">
                <div
                  class="w-24 h-24 border rounded-lg overflow-hidden bg-gray-100">
                  <img
                    v-if="idPhotoPreview"
                    :src="idPhotoPreview"
                    class="w-full h-full object-cover" />
                  <div
                    v-else
                    class="w-full h-full flex items-center justify-center text-gray-400">
                    <svg
                      class="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                  @change="(e) => handlePhotoUpload(e, 'id')" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="accept-terms"
            v-model="acceptTerms"
            name="accept-terms"
            type="checkbox"
            :class="{ 'border-red-500': errors.acceptTerms }"
            required
            class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
          <label for="accept-terms" class="mr-2 block text-sm text-gray-900">
            أوافق على
            <a href="#" class="font-medium text-primary hover:text-secondary"
              >شروط الخدمة</a
            >
            و
            <a href="#" class="font-medium text-primary hover:text-secondary"
              >سياسة الخصوصية</a
            >
          </label>
        </div>

        <div class="flex gap-4">
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50">
            <span v-if="isLoading">جاري إنشاء الحساب...</span>
            <span v-else>إنشاء حساب</span>
          </button>
          <button
            type="button"
            @click="router.push('/signup')"
            class="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            رجوع
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signup } from "../api/auth";
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

const router = useRouter();
const error = ref("");
const isLoading = ref(false);

// Photo handling refs
const personalPhoto = ref<File | null>(null);
const idPhoto = ref<File | null>(null);
const personalPhotoPreview = ref("");
const idPhotoPreview = ref("");

// Validation schema
const schema = yup.object({
  firstName: yup.string().required('الاسم الأول مطلوب').min(2, 'الاسم الأول يجب أن يكون على الأقل حرفين'),
  lastName: yup.string().required('الاسم الأخير مطلوب').min(2, 'الاسم الأخير يجب أن يكون على الأقل حرفين'),
  email: yup.string().required('البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صالح'),
  password: yup.string()
    .required('كلمة المرور مطلوبة')
    .min(6, 'كلمة المرور يجب أن تكون على الأقل 6 أحرف')
    // .min(8, 'كلمة المرور يجب أن تكون على الأقل 8 أحرف')
    // .matches(/[A-Z]/, 'يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل')
    // .matches(/[a-z]/, 'يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل')
    .matches(/[0-9]/, 'يجب أن تحتوي كلمة المرور على رقم واحد على الأقل'),
  confirmPassword: yup.string()
    .required('تأكيد كلمة المرور مطلوب')
    .oneOf([yup.ref('password')], 'كلمات المرور غير متطابقة'),
  phoneNumber: yup.string()
    .required('رقم الهاتف مطلوب')
    .matches(/^01[0-9]{9}$/, 'يجب أن يبدأ الرقم بـ 01 ويجب أن يكون مكون من 11 رقم فقط')
    .length(11, 'يجب أن يكون الرقم مكون من 11 رقم فقط'),
  address: yup.string().required('العنوان مطلوب').min(3, 'العنوان يجب أن يكون على الأقل 3  أحرف'),
  acceptTerms: yup.boolean().oneOf([true], 'يجب الموافقة على الشروط والأحكام')
});

// Initialize form
const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema
});

// Define fields
const { value: firstName } = useField('firstName');
const { value: lastName } = useField('lastName');
const { value: email } = useField('email');
const { value: password } = useField('password');
const { value: confirmPassword } = useField('confirmPassword');
const { value: phoneNumber } = useField('phoneNumber');
const { value: address } = useField('address');
const { value: acceptTerms } = useField('acceptTerms');

const handlePhotoUpload = (event: Event, photoType: "personal" | "id") => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const result = e.target?.result as string;
      switch (photoType) {
        case "personal":
          personalPhoto.value = file;
          personalPhotoPreview.value = result;
          break;
        case "id":
          idPhoto.value = file;
          idPhotoPreview.value = result;
          break;
      }
    };

    reader.readAsDataURL(file);
  }
};

const onSubmit = handleSubmit(async (values) => {
  try {
    isLoading.value = true;
    error.value = "";

    const response = await signup({
      ...values,
      personalPhoto: personalPhoto.value || undefined,
      idPhoto: idPhoto.value || undefined,
      role: "patient",
    });

    console.log("Signup successful:", response);
    router.push("/patient-login");
  } catch (err: any) {
    error.value = err.response?.data?.message || "حدث خطأ أثناء إنشاء الحساب";
    console.error("Signup error:", err);
  } finally {
    isLoading.value = false;
  }
});

const goToLogin = () => {
  router.push("/patient-login");
};
</script>

<style scoped>
  .min-h-screen {
    direction: rtl;
    background-color: #f8fafc;
  }

  input,
  textarea {
    text-align: right;
    background-color: #fff;
  }

  input::placeholder,
  textarea::placeholder {
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
    transition: background-color 0.3s ease;
  }

  .text-primary {
    color: #007b8f;
  }

  .hover\:text-secondary:hover {
    color: #49a8d3;
    transition: color 0.3s ease;
  }

  /* Add button transitions */
  button {
    transition: all 0.3s ease;
  }

  button:active {
    transform: scale(0.98);
  }

  button:disabled {
    transform: none;
  }

  .hover\:bg-gray-50:hover {
    transition: background-color 0.3s ease;
  }

  @media (prefers-color-scheme: dark) {
    .min-h-screen {
      background-color: #eee;
    }

    .max-w-2xl {
      background-color: #f8fafc;
    }

    input,
    textarea {
      background-color: #fff;
      border-color: #3333;
      color: #333;
    }

    input::placeholder,
    textarea::placeholder {
      color: #444;
    }

    label,
    h2,
    p {
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
