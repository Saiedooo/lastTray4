<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToService = (title: string) => {
  const slug = title.replace(/ /g, '-');
  router.push(`/services/${slug}`);
};

const services = ref([
  {
    id: 1,
    title: 'رعاية الأم والطفل حديث الولادة',
    description: 'دعم للأمهات والأطفال حديثي الولادة',
    image: '/img/رعاية الام و الاطفال حديثى الولاده.png'
  },
  {
    id: 2,
    title: 'الخدمات التمريضية العامة',
    description: 'إعطاء الحقن والعلاجات اليومية',
    image: '/img/الرعايه العامه.png'
  },

  {
    id: 4,
    title: 'رعاية المسنين',
    description: 'رعاية شاملة للمسنين',
    image: '/img/رعاية المسنين.png'
  },
  {
    id: 5,
    title: 'التعافي بعد الجراحة',
    description: 'دعم ما بعد العملية لضمان التعافي السريع',
    image: '/img/التعافي بعد الجراحه.png'
  },
  {
    id: 6,
    title: 'العلاج الطبيعي وإعادة التأهيل',
    description: 'جلسات العلاج الطبيعي المنزلية',
    image: '/img/العلاج الطبيعي.png'
  },
  {
    id: 7,
    title: 'سحب عينات',
    description: 'خدمة سحب العينات المنزلية بأحدث الأساليب',
    image: '/img/تمريض سحب عينات.png'
  },
  {
    id: 8,
    title: 'تمريض قرح',
    description: 'رعاية متخصصة لقرح الفراش والقرح المزمنة',
    image: '/img/تمريض قرح.png'
  },
  {
    id: 9,
    title: 'تمريض الجروح',
    description: 'عناية احترافية بالجروح وتغيير الضمادات',
    image: '/img/تمريض جروح صح.png'
  }
]);

const features = ref([
  {
    id: 1,
    title: 'ممرضون متقدمون - محترفون',
    description: 'مدربون تدريباً عالياً',
    icon: 'fa-solid fa-user-nurse'
  },
  {
    id: 2,
    title: 'جدولة مرنة',
    description: 'رعاية تناسب روتينك',
    icon: 'fa-solid fa-calendar-check'
  },
  {
    id: 3,
    title: 'تواجد على مدار الساعة',
    description: 'نحن هنا دائماً عندما تحتاج إلينا',
    icon: 'fa-solid fa-clock'
  },
  {
    id: 4,
    title: 'أسعار معقولة',
    description: 'خدمات بأسعار في متناول الجميع',
    icon: 'fa-solid fa-hand-holding-dollar'
  },
  {
    id: 5,
    title: 'مكافحة العدوى',
    description: 'بروتوكولات صارمة للنظافة والسلامة',
    icon: 'fa-solid fa-shield-virus'
  },
  {
    id: 6,
    title: 'موثوق به',
    description: 'موثوق به من قبل العائلات',
    icon: 'fa-solid fa-heart'
  }
]);
</script>

<template>
  <div class="services-page">
    <!-- Services Section -->
    <section class="services-section">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold text-center mb-8">خدمات متخصصة</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" class="service-card">
            <div class="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img :src="service.image" :alt="service.title" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4">{{ service.description }}</p>
            <button @click="navigateToService(service.title)" class="btn-primary">تعرف على المزيد</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us bg-gray-50">
      <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold text-center mb-12">لماذا تختار الرعاية المنزلية؟</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.id" class="feature-card">
            <div class="text-center mb-4">
              <i :class="feature.icon" class="text-4xl text-primary"></i>
            </div>
            <h3 class="text-xl font-semibold text-center mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-center">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-page {
  direction: rtl;
  margin: 0 50px 0 50px;
}

.service-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;

}

.service-card:hover {
  transform: translateY(-5px);
}

.btn-primary {
  background-color: #007b8f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #49a8d3;
}

.feature-card {
  background: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.text-primary {
  color: #007b8f;
}

@media (prefers-color-scheme: dark) {
  .services-page {
    background-color: #f8fafc;
  }

  .service-card, .feature-card {
    background-color: white;
  }

  h1, h2, h3 {
    color: #333;
  }

  p {
    color: #666;
  }
}
</style> 