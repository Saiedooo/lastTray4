<script setup lang="ts">
import { ref } from 'vue';

const stats = ref([
  {
    title: 'إجمالي الممرضين',
    value: '24',
    icon: 'fas fa-user-nurse',
    color: 'bg-blue-500',
    bgLight: 'bg-blue-50'
  },
  {
    title: 'المواعيد النشطة',
    value: '12',
    icon: 'fas fa-calendar-check',
    color: 'bg-green-500',
    bgLight: 'bg-green-50'
  },
  {
    title: 'الخدمات المقدمة',
    value: '8',
    icon: 'fas fa-briefcase-medical',
    color: 'bg-purple-500',
    bgLight: 'bg-purple-50'
  }
]);

const recentActivities = ref([
  {
    id: 1,
    title: 'تم تعيين موعد جديد',
    time: 'منذ 5 دقائق',
    icon: 'fas fa-calendar-plus',
    color: 'text-blue-500',
    bgLight: 'bg-blue-50'
  },
  {
    id: 2,
    title: 'تم إضافة ممرض جديد',
    time: 'منذ ساعة',
    icon: 'fas fa-user-plus',
    color: 'text-green-500',
    bgLight: 'bg-green-50'
  }
]);
</script>

<template>
  <div class="dashboard bg-gray-50 min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-sm mb-6">
      <div class="px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold text-gray-800">لوحة التحكم</h1>
          <div class="flex items-center gap-4">
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <i class="fas fa-bell text-gray-600"></i>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <i class="fas fa-moon text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="px-6">
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div 
          v-for="stat in stats" 
          :key="stat.title"
          :class="[stat.bgLight, 'rounded-lg p-6 transition-all hover:scale-105']">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-gray-600 text-sm mb-2">{{ stat.title }}</h3>
              <p class="text-3xl font-bold text-gray-900">{{ stat.value }}</p>
            </div>
            <div :class="[stat.color, 'p-4 rounded-full']">
              <i :class="[stat.icon, 'text-white text-xl']"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-800">النشاط الأخير</h2>
          <button class="text-blue-500 hover:text-blue-600">عرض الكل</button>
        </div>
        <div class="space-y-4">
          <div v-for="activity in recentActivities" 
               :key="activity.id"
               :class="[activity.bgLight, 'flex items-center p-4 rounded-lg transition-colors']">
            <div :class="[activity.color, 'p-3 rounded-full mr-4']">
              <i :class="[activity.icon]"></i>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">{{ activity.title }}</h3>
              <p class="text-sm text-gray-500">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  direction: rtl;
}

@media (prefers-color-scheme: dark) {
  .dashboard {
    background-color: #1a1a1a;
  }
  
  .bg-white {
    background-color: #2d2d2d;
  }
  
  .text-gray-800 {
    color: #e5e5e5;
  }
  
  .text-gray-600 {
    color: #a3a3a3;
  }
  
  .text-gray-900 {
    color: #ffffff;
  }
}
</style>