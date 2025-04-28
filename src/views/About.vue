<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center text-gray-900 mb-6">
          مرحبًا بكم في الرعاية المنزلية - شريككم الموثوق في الصحة والراحة
        </h1>
      </div>
    </div>

    <!-- Main Feature Section -->
    <div class="relative bg-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              رعاية رحيمة عند باب منزلكم
            </h2>
            <p class="text-lg text-gray-600 mb-4">
              في الرعاية المنزلية، نقدم خدمات رعاية متخصصة تلبي احتياجاتكم
              الفردية.
            </p>
            <p class="text-lg text-gray-600">
              يضمن فريقنا أعلى جودة من الرعاية لحياتكم.
            </p>
          </div>
          <div class="md:w-1/2">
            <img
              src="/img/card.png"
              alt="رعاية المسنين"
              class="rounded-lg shadow-xl w-full" />
          </div>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          لماذا تختار الرعاية المنزلية؟
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div
            class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              دعم على مدار الساعة طوال أيام الأسبوع
            </h3>
            <p class="text-gray-600">
              نوفر خدمة متواصلة على مدار الساعة لضمان راحتكم وسلامتكم
            </p>
          </div>

          <!-- Feature 2 -->
          <div
            class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">مقدمو رعاية ذوو خبرة</h3>
            <p class="text-gray-600">
              فريق متخصص من المهنيين المدربين لتقديم أفضل رعاية
            </p>
          </div>

          <!-- Feature 3 -->
          <div
            class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">جدولة مرنة</h3>
            <p class="text-gray-600">
              نوفر مواعيد مرنة تناسب جدولكم وتلبي احتياجاتكم
            </p>
          </div>

          <!-- Feature 4 -->
          <div
            class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">أسعار معقولة</h3>
            <p class="text-gray-600">
              نقدم خدمات عالية الجودة بأسعار في متناول الجميع
            </p>
          </div>

          <!-- Feature 5 -->
          <div
            class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">خطط متخصصة</h3>
            <p class="text-gray-600">
              نصمم خطط رعاية مخصصة تناسب احتياجاتكم الفردية
            </p>
          </div>

          <!-- Feature 6 -->
          <div
            class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div
              class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">موثوق به من قبل العائلات</h3>
            <p class="text-gray-600">
              نحظى بثقة العديد من العائلات لتقديم رعاية عالية الجودة
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="bg-white py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
          ماذا يقول عملاؤنا
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <img
                src="/img/1g.png"
                alt="عميل"
                class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">إيناس ك.</h4>
                <p class="text-gray-600 text-sm">عميل موثق</p>
              </div>
            </div>
            <p class="text-gray-600">
              كانت الرعاية المنزلية نعمة لعائلتنا. مقدمو الرعاية متخصصون
              ومتفانون.
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <img
                src="/img/2g.png"
                alt="عميل"
                class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">مازن س.</h4>
                <p class="text-gray-600 text-sm">عميل موثق</p>
              </div>
            </div>
            <p class="text-gray-600">
              لا أستطيع أن أشكر الرعاية المنزلية بما فيه الكفاية على دعمهم خلال
              فترة تعافي.
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <img
                src="/img/3g.png"
                alt="عميل"
                class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">ياسر ن.</h4>
                <p class="text-gray-600 text-sm">عميل موثق</p>
              </div>
            </div>
            <p class="text-gray-600">الفريق محترف وفهيم حقاً بمتطلباته.</p>
          </div>

          <!-- Testimonial 4 -->
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <img
                src="/img/5g.png"
                alt="عميل"
                class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">أمل م.</h4>
                <p class="text-gray-600 text-sm">عميل موثق</p>
              </div>
            </div>
            <p class="text-gray-600">
              تقدم الرعاية المنزلية خدمات موثوقة ومرنة تناسب احتياجات المرضى.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Values Section -->
    <div class="bg-gray-50 py-16">
      <div class="container mx-auto px-4 text-center">
        <div class="flex flex-wrap justify-center gap-8">
          <div class="flex items-center">
            <span class="text-2xl ml-2">⏰</span>
            <span class="text-lg">رعاية بالساعة</span>
          </div>
          <div class="flex items-center">
            <span class="text-2xl ml-2">📋</span>
            <span class="text-lg">دعم قصير الأمد</span>
          </div>
          <div class="flex items-center">
            <span class="text-2xl ml-2">👨‍⚕️</span>
            <span class="text-lg">رعاية طبية متخصصة</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: "About",
  });
</script>

<style scoped>
  .bg-primary {
    background-color: #007b8f;
  }

  .text-primary {
    color: #007b8f;
  }

  .hover\:bg-secondary:hover {
    background-color: #49a8d3;
  }

  /* Add RTL support */
  * {
    direction: rtl;
  }

  /* Add transitions */
  .transition-shadow {
    transition: box-shadow 0.3s ease;
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .bg-gray-50 {
      background-color: #f8fafc;
    }

    .bg-white {
      background-color: #ffffff;
    }

    .text-gray-900 {
      color: #1a202c;
    }

    .text-gray-600 {
      color: #4a5568;
    }
  }
</style>
