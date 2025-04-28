<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface ServiceData {
  title: string;
  description: string;
  image: string;
  fullDescription: string;
  features?: string[];
  includes?: string[];
}

interface ServicesDataMap {
  [key: string]: ServiceData;
}

const route = useRoute();
const router = useRouter();
const service = ref<ServiceData | null>(null);

// This will be populated with actual service data in a real application
const servicesData: ServicesDataMap = {
  'رعاية-الأم-والطفل-حديث-الولادة': {
    title: 'رعاية الأم والطفل حديث الولادة',
    description: 'دعم متخصص للأمهات والأطفال حديثي الولادة',
    image: '/img/رعاية الام و الاطفال حديثى الولاده.png',
    fullDescription: 'نقدم رعاية شاملة للأمهات والأطفال حديثي الولادة، مع التركيز على الصحة النفسية والجسدية للأم والطفل. يشمل ذلك الدعم في الرضاعة الطبيعية، العناية بالطفل، متابعة نموه، وتقديم النصائح والإرشادات للأم لضمان رعاية مثالية.',
    features: [
      'رعاية متخصصة للأم بعد الولادة',
      'دعم الرضاعة الطبيعية',
      'متابعة نمو الطفل',
      'نصائح العناية بالطفل',
      'دعم نفسي للأم'
    ],
    includes: [
      'فحوصات دورية للأم والطفل',
      'تقييم نمو الطفل',
      'إرشادات الرضاعة الطبيعية',
      'العناية بالحبل السري',
      'نصائح النوم الآمن',
      'تغذية الأم المرضعة',
      'تمارين ما بعد الولادة',
      'دعم نفسي وتوعية'
    ]
  },
  'الخدمات-التمريضية-العامة': {
    title: 'الخدمات التمريضية العامة',
    description: 'إعطاء الحقن والعلاجات اليومية',
    image: '/img/الرعايه العامه.png',
    fullDescription: 'نقدم مجموعة شاملة من الخدمات التمريضية العامة في منزلك، مع فريق متخصص من الممرضين المؤهلين. نضمن لك رعاية صحية عالية الجودة وفقاً لأحدث البروتوكولات الطبية وتحت إشراف طبي كامل.',
    features: [
      'طاقم تمريض مؤهل ومرخص',
      'خدمة متوفرة 24/7',
      'رعاية منزلية مريحة وآمنة',
      'متابعة دقيقة للحالة الصحية',
      'تنسيق مع الأطباء المعالجين'
    ],
    includes: [
      'إعطاء الحقن بجميع أنواعها',
      'تركيب وتغيير المحاليل الوريدية',
      'تغيير الضمادات وتنظيف الجروح',
      'قياس العلامات الحيوية',
      'سحب عينات الدم المنزلية',
      'تركيب القسطرة البولية',
      'العناية بفتحات التغذية',
      'إعطاء الأدوية في مواعيدها',
      'تقديم الإرشادات الصحية للمريض والعائلة'
    ]
  },
  'رعاية-المسنين': {
    title: 'رعاية المسنين',
    description: 'رعاية شاملة للمسنين',
    image: '/img/تست.png',
    fullDescription: 'نقدم خدمات رعاية منزلية متكاملة لكبار السن، مصممة خصيصاً لتلبية احتياجاتهم الفردية وضمان راحتهم وسلامتهم في منازلهم. مع فريق متخصص من الممرضين المؤهلين لتقديم أفضل رعاية ممكنة.',
    features: [
      'رعاية صحية على مدار 24 ساعة',
      'طاقم تمريض مؤهل ومتخصص',
      'متابعة العلامات الحيوية بشكل منتظم',
      'تنفيذ خطط العلاج الموصوفة',
      'دعم نفسي واجتماعي'
    ],
    includes: [
      'المساعدة في النظافة الشخصية',
      'تناول الأدوية في مواعيدها',
      'المساعدة في الحركة والتنقل',
      'إعداد وتقديم الوجبات الصحية',
      'المرافقة في المواعيد الطبية',
      'أنشطة ترفيهية وتمارين خفيفة',
      'العناية بالجروح وقرح الفراش',
      'قياس ضغط الدم والسكر',
      'مساعدة مرضى الزهيمر'
    ]
  },
  'التعافي-بعد-الجراحة': {
    title: 'التعافي بعد الجراحة',
    description: 'دعم ما بعد العملية لضمان التعافي السريع',
    image: '/img/التعافي بعد الجراحه.png',
    fullDescription: 'نقدم خدمات رعاية متخصصة لمرحلة ما بعد العمليات الجراحية، مصممة لضمان تعافي سريع وآمن. يشرف على الخدمة فريق تمريضي متخصص في الرعاية ما بعد الجراحة، مع متابعة دقيقة للحالة الصحية وتنفيذ خطة العلاج الموصوفة من الطبيب المعالج.',
    features: [
      'رعاية متخصصة على مدار 24 ساعة',
      'متابعة دقيقة لمكان الجراحة',
      'تقييم مستمر للألم وإدارته',
      'منع المضاعفات المحتملة',
      'تنسيق مباشر مع الجراح المعالج'
    ],
    includes: [
      'تغيير الضمادات بشكل احترافي',
      'مراقبة علامات الالتهاب',
      'المساعدة في الحركة الآمنة',
      'إعطاء الأدوية في مواعيدها',
      'العناية بالجروح والقسطرة',
      'تمارين التنفس والحركة',
      'تقديم النصائح للتعافي السريع',
      'متابعة العلامات الحيوية'
    ]
  },
  'العلاج-الطبيعي-وإعادة-التأهيل': {
    title: 'العلاج الطبيعي وإعادة التأهيل',
    description: 'جلسات العلاج الطبيعي المنزلية',
    image: '/img/العلاج الطبيعي.png',
    fullDescription: 'نقدم خدمات العلاج الطبيعي وإعادة التأهيل في منزلك مع أخصائيين مؤهلين. نستخدم أحدث تقنيات العلاج الطبيعي لتحسين الحركة والقوة والمرونة وتخفيف الألم، مع خطة علاج مخصصة لكل حالة.',
    features: [
      'أخصائيون معتمدون ومؤهلون',
      'تقييم شامل للحالة',
      'خطة علاج مخصصة',
      'متابعة التقدم والتحسن',
      'تقنيات علاج متطورة'
    ],
    includes: [
      'تمارين تقوية العضلات',
      'علاج مشاكل التوازن',
      'تخفيف الآلام المزمنة',
      'تحسين المرونة والحركة',
      'العلاج الكهربائي',
      'العلاج المائي',
      'تمارين إعادة التأهيل',
      'تعليم التمارين المنزلية'
    ]
  },
  'سحب-عينات': {
    title: 'سحب عينات',
    description: 'خدمة سحب العينات المنزلية بأحدث الأساليب',
    image: '/img/سحب عينات.png',
    fullDescription: 'نوفر خدمة سحب العينات المنزلية بأعلى معايير الجودة والسلامة. يقوم فريقنا المتخصص بسحب العينات باستخدام أحدث التقنيات وأدوات معقمة، مع ضمان الحفاظ على العينات ونقلها بشكل آمن للمختبر.',
    features: [
      'فريق متخصص ومدرب',
      'معدات حديثة ومعقمة',
      'نتائج دقيقة وسريعة',
      'خدمة منزلية مريحة',
      'تغطية جميع أنواع التحاليل'
    ],
    includes: [
      'سحب عينات الدم',
      'جمع عينات البول',
      'مسحات الحلق والأنف',
      'فحوصات السكر التراكمي',
      'تحاليل وظائف الكلى',
      'فحوصات الكبد',
      'تحاليل الهرمونات',
      'فحص الكوليسترول'
    ]
  },
  'تمريض-قرح': {
    title: 'تمريض قرح',
    description: 'رعاية متخصصة لقرح الفراش والقرح المزمنة',
    image: '/img/تمريض قرح.png',
    fullDescription: 'نقدم رعاية متخصصة لعلاج قرح الفراش والقرح المزمنة باستخدام أحدث البروتوكولات العلاجية. يقوم فريقنا المتخصص بتقييم القرح وتنظيفها وتضميدها مع متابعة مستمرة لضمان الشفاء السريع ومنع المضاعفات.',
    features: [
      'تقييم شامل للقرح',
      'خطة علاج متخصصة',
      'استخدام أحدث الضمادات',
      'منع تطور القرح',
      'متابعة مراحل الشفاء'
    ],
    includes: [
      'تنظيف وتطهير القرح',
      'تغيير الضمادات المتخصصة',
      'تقييم مراحل الشفاء',
      'منع الالتهابات',
      'تخفيف الضغط',
      'العناية بالجلد المحيط',
      'نصائح للوقاية',
      'تغذية داعمة للشفاء'
    ]
  },
  'تمريض-الجروح': {
    title: 'تمريض الجروح',
    description: 'عناية احترافية بالجروح وتغيير الضمادات',
    image: '/img/جروح.jpg',
    fullDescription: 'نقدم رعاية متخصصة للجروح المختلفة مع متابعة دقيقة لمراحل الشفاء وتطبيق أحدث بروتوكولات العناية بالجروح. يقوم فريقنا المتخصص بتقييم الجروح وتنظيفها وتضميدها باستخدام أحدث التقنيات والمواد الطبية، مع التركيز على منع الالتهابات وتسريع عملية الشفاء.',
    features: [
      'تقييم شامل للجروح',
      'خطة علاج متخصصة',
      'استخدام أحدث الضمادات',
      'منع الالتهابات',
      'متابعة مراحل الشفاء'
    ],
    includes: [
      'تنظيف وتطهير الجروح',
      'تغيير الضمادات المتخصصة',
      'تقييم مراحل الشفاء',
      'العناية بالجلد المحيط',
      'نصائح للوقاية من العدوى',
      'تخفيف الألم والانزعاج',
      'تغذية داعمة للشفاء',
      'إرشادات العناية المنزلية'
    ]
  }
};

const handleBookService = () => {
  router.push('/nurse-list');
};

onMounted(() => {
  const serviceId = route.params.id as string;
  service.value = servicesData[serviceId];
});
</script>

<template>
  <div v-if="service" class="service-detail-page">
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div class="relative h-64 md:h-[500px]">
            <img 
              :src="service.image" 
              :alt="service.title" 
              class="w-full h-full object-cover"
            >
            <!-- <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            <div class="absolute bottom-6 right-6 text-right max-w-2xl">
              <h1 class="text-4xl font-bold text-white mb-4">{{ service.title }}</h1>
              <p class="text-xl text-white/90">{{ service.description }}</p>
            </div> -->
          </div>
        </div>

        <!-- Content Section -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="prose max-w-none mb-12">
            <p class="text-xl leading-relaxed text-gray-600">{{ service.fullDescription }}</p>
          </div>

          <!-- Features Section -->
          <div v-if="service.features" class="mb-12">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">مميزات الخدمة</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                v-for="feature in service.features" 
                :key="feature" 
                class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <i class="fas fa-check-circle text-primary ml-3 text-xl"></i>
                <span class="text-gray-700 text-lg">{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Includes Section -->
          <div v-if="service.includes" class="mb-12">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">ماذا تشمل الخدمة؟</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                v-for="item in service.includes" 
                :key="item" 
                class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <i class="fas fa-circle-check text-primary ml-3 text-xl"></i>
                <span class="text-gray-700 text-lg">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <button 
              @click="handleBookService"
              class="btn-primary px-8 py-4 text-lg flex items-center justify-center group"
            >
              احجز الخدمة الآن
              <i class="fas fa-calendar-plus mr-2 group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button 
              @click="$router.go(-1)" 
              class="btn-secondary px-8 py-4 text-lg flex items-center justify-center group"
            >
              العودة للخدمات
              <i class="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-detail-page {
  direction: rtl;
  margin: 0 50px 0 50px;
  background-color: #f8fafc;
  min-height: 100vh;
}

.btn-primary {
  background-color: #007b8f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #49a8d3;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background-color: white;
  color: #007b8f;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: 2px solid #007b8f;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #f3f4f6;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: #007b8f;
}

/* Card hover effects */
.feature-item, .service-item {
  transition: all 0.3s ease;
}

.feature-item:hover, .service-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .service-detail-page {
    background-color: #f8fafc;
  }

  .bg-white {
    background-color: white;
  }

  h1, h2 {
    color: #333;
  }

  p, span {
    color: #666;
  }
}
</style> 