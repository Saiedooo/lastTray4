<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { signup } from "../api/auth";

  const router = useRouter();
  const firstName = ref("");
  const lastName = ref("");
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");
  const phoneNumber = ref("");
  const address = ref("");
  const acceptTerms = ref(false);
  const error = ref("");
  const isLoading = ref(false);

  // Photo handling
  const personalPhoto = ref<File | null>(null);
  const businessCardPhoto = ref<File | null>(null);
  const idPhoto = ref<File | null>(null);
  const personalPhotoPreview = ref("");
  const businessCardPhotoPreview = ref("");
  const idPhotoPreview = ref("");

  const handlePhotoUpload = (
    event: Event,
    photoType: "personal" | "businessCard" | "id"
  ) => {
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
          case "businessCard":
            businessCardPhoto.value = file;
            businessCardPhotoPreview.value = result;
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

  const handleSubmit = async () => {
    try {
      if (password.value !== confirmPassword.value) {
        error.value = "Passwords do not match";
        return;
      }

      isLoading.value = true;
      error.value = "";

      const response = await signup({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        personalPhoto: personalPhoto.value || undefined,
        businessCardPhoto: businessCardPhoto.value || undefined,
        idPhoto: idPhoto.value || undefined,
      });

      console.log("Signup successful:", response);
      router.push("/login"); // Redirect to login page after successful signup
    } catch (err: any) {
      error.value =
        err.response?.data?.message || "An error occurred during signup";
      console.error("Signup error:", err);
    } finally {
      isLoading.value = false;
    }
  };

  const goToLogin = () => {
    router.push("/login");
  };
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-12">
    <div class="max-w-2xl w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <a
            @click="goToLogin"
            class="font-medium text-primary hover:text-secondary cursor-pointer"
            >Sign in</a
          >
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
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
                >First Name</label
              >
              <input
                id="firstName"
                v-model="firstName"
                name="firstName"
                type="text"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="First Name" />
            </div>
            <div>
              <label
                for="lastName"
                class="block text-sm font-medium text-gray-700"
                >Last Name</label
              >
              <input
                id="lastName"
                v-model="lastName"
                name="lastName"
                type="text"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Last Name" />
            </div>
          </div>

          <div>
            <label
              for="phoneNumber"
              class="block text-sm font-medium text-gray-700"
              >Phone Number</label
            >
            <input
              id="phoneNumber"
              v-model="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your phone number" />
          </div>

          <div>
            <label for="address" class="block text-sm font-medium text-gray-700"
              >Address</label
            >
            <textarea
              id="address"
              v-model="address"
              name="address"
              required
              rows="3"
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your address"></textarea>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              required
              class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your email" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Create a password" />
            </div>
            <div>
              <label
                for="confirmPassword"
                class="block text-sm font-medium text-gray-700"
                >Confirm Password</label
              >
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Confirm your password" />
            </div>
          </div>

          <!-- Photo Upload Section -->
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Personal Photo</label
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
                >Business Card Photo</label
              >
              <div class="mt-1 flex items-center space-x-4">
                <div
                  class="w-24 h-24 border rounded-lg overflow-hidden bg-gray-100">
                  <img
                    v-if="businessCardPhotoPreview"
                    :src="businessCardPhotoPreview"
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
                  @change="(e) => handlePhotoUpload(e, 'businessCard')" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"
                >ID Photo</label
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
            required
            class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
          <label for="accept-terms" class="ml-2 block text-sm text-gray-900">
            I agree to the
            <a href="#" class="font-medium text-primary hover:text-secondary"
              >Terms of Service</a
            >
            and
            <a href="#" class="font-medium text-primary hover:text-secondary"
              >Privacy Policy</a
            >
          </label>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50">
            <span v-if="isLoading">Creating account...</span>
            <span v-else>Create Account</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
