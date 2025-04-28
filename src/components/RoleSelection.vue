<template>
  <div class="role-selection-container">
    <h1 class="title">هل تبحث عن خدمات الرعاية الصحية أو الانضمام كممرض محترف؟ اختر دورك للمتابعة.</h1>
    
    <div class="role-options">
      <div 
        class="role-card" 
        :class="{ 'selected': selectedRole === 'patient' }"
        @click="selectRole('patient')">
        <div class="radio-button" :class="{ 'selected': selectedRole === 'patient' }"></div>
        <div class="role-content">
          <h2>انضم كمريض</h2>
          <p>احجز خدمات التمريض، وادارة مواعيدك، وتلقى رعاية ذات جودة في المنزل.</p>
        </div>
      </div>

      <div 
        class="role-card" 
        :class="{ 'selected': selectedRole === 'nurse' }"
        @click="selectRole('nurse')">
        <div class="radio-button" :class="{ 'selected': selectedRole === 'nurse' }"></div>
        <div class="role-content">
          <h2>انضم كممرض</h2>
          <p>كن جزءاً من شبكتنا الموثوقة وابدأ بتقديم خدمات التمريض المنزلية عالية المستوى.</p>
        </div>
      </div>
    </div>

    <button 
      class="register-btn" 
      :disabled="!selectedRole"
      @click="handleRegister">
      تسجيل
    </button>
    
    <p class="login-link">لديك حساب بالفعل؟ <a @click="$router.push('/login')">تسجيل الدخول</a></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedRole = ref<string | null>(null);

const selectRole = (role: string) => {
  selectedRole.value = role;
};

const handleRegister = () => {
  if (selectedRole.value === 'patient') {
    router.push('/patient-signup');
  } else if (selectedRole.value === 'nurse') {
    router.push('/nurse-signup');
  }
};
</script>

<style scoped>
.role-selection-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  direction: rtl;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.5;
}

.role-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.role-card {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.role-card:hover {
  background-color: #e9ecef;
}

.role-card.selected {
  background-color: #e3f2fd;
  border-color: #007b8f;
}

.radio-button {
  width: 20px;
  height: 20px;
  border: 2px solid #007b8f;
  border-radius: 50%;
  margin-left: 1rem;
  position: relative;
  transition: all 0.3s ease;
}

.radio-button.selected {
  background-color: #007b8f;
}

.radio-button.selected::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
}

.role-content {
  text-align: right;
}

.role-content h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #333;
}

.role-content p {
  margin: 0;
  color: #666;
  line-height: 1.4;
}

.register-btn {
  width: 100%;
  padding: 1rem;
  background-color: #007b8f;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.register-btn:hover:not(:disabled) {
  background-color: #49a8d3;
}

.register-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  opacity: 0.7;
}

.login-link {
  margin-top: 1rem;
  color: #666;
}

.login-link a {
  color: #007b8f;
  text-decoration: none;
  cursor: pointer;
}

.login-link a:hover {
  text-decoration: underline;
  color: #49a8d3;
  transition: color 0.3s ease;
}
</style> 