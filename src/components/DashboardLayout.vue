<template>
  <div class="flex h-screen bg-gray-100 rtl">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-lg fixed h-full">
      <div class="p-4 border-b">
        <img src="/img/logo.png" alt="Logo" class="h-8" />
      </div>
      <nav class="mt-4">
        <router-link to="/dashboard" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
          <i class="fas fa-home ml-2"></i>
          لوحة التحكم
        </router-link>
        <router-link to="/nurse-list" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
          <i class="fas fa-user-nurse ml-2"></i>
          الممرضين
        </router-link>
        <router-link to="/services" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
          <i class="fas fa-briefcase-medical ml-2"></i>
          الخدمات
        </router-link>
        <router-link to="/appointments" class="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-700">
          <i class="fas fa-calendar-alt ml-2"></i>
          المواعيد
        </router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 mr-64 p-6 overflow-y-auto">
      <div class="max-w-7xl mx-auto">
        <slot></slot>
      </div>
    </main>
  </div>
</template>