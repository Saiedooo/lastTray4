<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const nurseName = ref<string>('');
const loading = ref(true);
const error = ref<string | null>(null);

const patientName = ref('');
const appointmentDate = ref('');
const notes = ref('');

const fetchNurseName = async () => {
  try {
    const response = await axios.get(`/api/v1/users/nurses/${route.params.id}`);
    if (response.data.success) {
      const nurse = response.data.data;
      nurseName.value = `${nurse.firstName} ${nurse.lastName}`;
    } else {
      error.value = 'فشل في جلب بيانات الممرضة';
    }
  } catch (err: any) {
    console.error(err);
    error.value = 'حدث خطأ أثناء جلب بيانات الممرضة';
  } finally {
    loading.value = false;
  }
};

const submitBooking = async () => {
  try {
    const patientId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    if (!patientId || !token) {
      alert('لازم تسجل دخول الأول');
      router.push('/login');
      return;
    }

    const bookingData = {
      patient: patientId,
      nurse: route.params.id,
      description: notes.value || 'حجز موعد مع الممرضة',
    };

    await axios.post('/api/v1/request', bookingData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert('تم إرسال طلب الحجز بنجاح!');
    router.push('/');
  } catch (err: any) {
    console.error(err);
    alert('حدث خطأ أثناء إرسال طلب الحجز');
  }
};

onMounted(() => {
  fetchNurseName();
});
</script>

<template>
  <div class="book-nurse-page">
    <div class="container mx-auto px-4 py-8">
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="loading-spinner"></div>
      </div>

      <div v-else-if="error" class="text-center py-12 text-red-500">
        {{ error }}
      </div>

      <div v-else class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold text-primary mb-6 text-center">
          حجز موعد مع {{ nurseName }}
        </h1>

        <form @submit.prevent="submitBooking" class="space-y-6">
          <div>
            <label class="block mb-2 text-sm font-medium">اسمك بالكامل</label>
            <input
              v-model="patientName"
              type="text"
              required
              placeholder="ادخل اسمك"
              class="input-field"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium">تاريخ الموعد</label>
            <input
              v-model="appointmentDate"
              type="date"
              required
              class="input-field"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium">ملاحظات إضافية</label>
            <textarea
              v-model="notes"
              rows="4"
              placeholder="اكتب ملاحظاتك هنا (اختياري)"
              class="input-field"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn w-full">تأكيد الحجز</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-nurse-page {
  direction: rtl;
  background-color: #f8fafc;
  min-height: 100vh;
}

.input-field {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  outline: none;
}

.input-field:focus {
  border-color: #007b8f;
  background-color: #ffffff;
}

.submit-btn {
  background-color: #007b8f;
  color: white;
  padding: 10px 0;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background-color: #006272;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007b8f;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
