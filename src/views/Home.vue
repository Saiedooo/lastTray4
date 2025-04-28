<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const currentSlide = ref(0);
  const maxSlides = ref(8); // Total number of slides

  defineOptions({
    name: "Home",
  });

  const contactForm = ref({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const services = ref([
    {
      id: 1,
      title: "رعاية الأم والطفل حديث الولادة",
      description: "دعم للأمهات والأطفال حديثي الولادة",
      image: "/img/رعاية الام و الاطفال حديثى الولاده.png",
      link: "/services/رعاية-الأم-والطفل-حديث-الولادة",
    },
    {
      id: 2,
      title: "الخدمات التمريضية العامة",
      description: "إعطاء الحقن والعلاجات اليومية",
      image: "/img/الرعايه العامه.png",
      link: "/services/الخدمات-التمريضية-العامة",
    },
    {
      id: 4,
      title: "رعاية المسنين",
      description: "رعاية شاملة للمسنين",
      image: "/img/رعاية المسنين.png",
      link: "/services/رعاية-المسنين",
    },
    {
      id: 5,
      title: "التعافي بعد الجراحة",
      description: "دعم ما بعد العملية لضمان التعافي السريع",
      image: "/img/التعافي بعد الجراحه.png",
      link: "/services/التعافي-بعد-الجراحة",
    },
    {
      id: 6,
      title: "العلاج الطبيعي وإعادة التأهيل",
      description: "جلسات العلاج الطبيعي المنزلية",
      image: "/img/العلاج الطبيعي.png",
      link: "/services/العلاج-الطبيعي-وإعادة-التأهيل",
    },
    {
      id: 7,
      title: "سحب عينات",
      description: "خدمة سحب العينات المنزلية بأحدث الأساليب",
      image: "/img/سحب عينه.png",
      link: "/services/سحب-عينات",
    },
    {
      id: 8,
      title: "تمريض قرح",
      description: "رعاية متخصصة لقرح الفراش والقرح المزمنة",
      image: "/img/تمريض قرح.png",
      link: "/services/تمريض-قرح",
    },
    {
      id: 9,
      title: "تمريض الجروح",
      description: "عناية احترافية بالجروح وتغيير الضمادات",
      image: "/img/تمريض جروح صح.png",
      link: "/services/تمريض-الجروح",
    },
  ]);

  const nurses = ref([
    {
      id: 1,
      name: "سلمى السيد",
      specialization: ["رعاية المسنين", "رعاية ما بعد العمليات"],
      image: "/img/WhatsApp Image 2025-03-07 at 01.15.33_40e54431.jpg",
      rating: 4,
      totalRatings: 95,
      location: "المعادي : شارع 9",
      fees: 200,
      waitingTime: "15 دقيقة",
      phone: "16676",
      isAvailable: true,
    },
    {
      id: 2,
      name: "ابو السيد",
      specialization: ["رعاية الأم والطفل", "العناية المركزة"],
      image: "/img/WhatsApp Image يي.jpg",
      rating: 4.9,
      totalRatings: 120,
      location: "مدينة البوها : شارع الملك فيصل",
      fees: 250,
      waitingTime: "10 دقيقة",
      phone: "011",
      isAvailable: true,
    },
    {
      id: 3,
      name: "ابو ابراهيم",
      specialization: ["رعاية الأم والطفل", "العناية المركزة"],
      image: "/img/WhatsApp Image هه.jpg",
      rating: 5,
      totalRatings: 120,
      location: "مدينة البوها : شارع الملك فيصل",
      fees: 250,
      waitingTime: "10 دقيقة",
      phone: "012",
      isAvailable: true,
    },
  ]);

  const getTopRatedNurses = () => {
    return nurses.value.sort((a, b) => b.rating - a.rating).slice(0, 3);
  };

  const navigateToNurseList = () => {
    router.push("/nurse-list");
  };

  const handleContactSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm.value);
    // Reset form
    contactForm.value = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  };

  onMounted(() => {
    // Start the automatic slideshow
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clean up on component unmount
    onUnmounted(() => {
      clearInterval(slideInterval);
    });
  });

  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % maxSlides.value;
  };

  const prevSlide = () => {
    currentSlide.value =
      (currentSlide.value - 1 + maxSlides.value) % maxSlides.value;
  };

  const goToSlide = (index: number) => {
    currentSlide.value = index;
  };
</script>

<template>
  <div class="maincont">
    <section class="hero">
      <div class="hero-image">
        <!-- <img src="/img/content.png" alt="ممرضة ترعى سيدة مسنة" /> -->
        <img src="/img/home1.png" alt="ممرضة ترعى سيدة مسنة" />
        <!-- <img src="/img/hh.png" alt="ممرضة ترعى سيدة مسنة" /> -->
      </div>
    </section>

    <section class="services">
      <h2 class="section-title">خدماتنا المتميزة</h2>

      <div class="slider-container">
        <button class="nav-button prev" @click="prevSlide">
          <i class="fas fa-chevron-right"></i>
        </button>

        <div class="services-slider">
          <div
            class="slides-wrapper"
            :style="{
              transform: `translateX(${currentSlide * 12.5}%)`,
            }">
            <div
              v-for="service in services"
              :key="service.id"
              class="service-slide">
              <div class="service-content" @click="router.push(service.link)">
                <div class="service-image">
                  <img :src="service.image" :alt="service.title" />
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <button class="view-more">تعرف على المزيد</button>
              </div>
            </div>
          </div>
        </div>

        <button class="nav-button next" @click="nextSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>

      <div class="slider-dots">
        <button
          v-for="index in maxSlides"
          :key="index - 1"
          :class="['dot', { active: currentSlide === index - 1 }]"
          @click="goToSlide(index - 1)"></button>
      </div>
    </section>

    <!-- <div class="filters secondary-filters">
      <button><i class="fa-solid fa-circle-chevron-down"></i> تصفية</button>
      <button><i class="fa-solid fa-circle-chevron-down"></i> ترتيب حسب</button>
    </div> -->

    <div class="BookService">
      <div
        v-for="(service, index) in services.slice(0, 3)"
        :key="service.id"
        class="BookService-card">
        <img :src="service.image" :alt="service.title" />
        <div class="BookService-info">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <button class="btn" @click="navigateToNurseList">احجز الآن</button>
        </div>
        <div class="rate">
          <div class="nurse-profile">
            <img
              :src="getTopRatedNurses()[index]?.image"
              :alt="getTopRatedNurses()[index]?.name"
              class="nurse-photo" />
            <div class="rating-info">
              <h3>{{ getTopRatedNurses()[index]?.name }}</h3>
              <!-- <p>{{ getTopRatedNurses()[index]?.specialization[0] }}</p> -->
              <p>{{ getTopRatedNurses()[index]?.location }}</p>
              <!-- <p>{{ getTopRatedNurses()[index]?.fees }} جنيه</p> -->
              <div class="stars">
                <i
                  v-for="star in 5"
                  :key="star"
                  :class="[
                    'fas fa-star',
                    star <= getTopRatedNurses()[index]?.rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                  ]">
                </i>
              </div>
              <span class="rating-text"
                >{{ getTopRatedNurses()[index]?.totalRatings }} تقييم</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-container">
      <div class="text">
        <h2>تحتاج إلى مساعدة؟ نحن هنا للمساعدة</h2>
        <p>اتصل بنا عبر الهاتف أو البريد الإلكتروني أو واتساب لأي استفسارات.</p>
      </div>
      <form class="contact-form" @submit="handleContactSubmit">
        <div class="input-group">
          <input
            type="text"
            v-model="contactForm.firstName"
            placeholder="الاسم الأول"
            required />
          <input
            type="text"
            v-model="contactForm.lastName"
            placeholder="اسم العائلة"
            required />
        </div>
        <input
          type="email"
          v-model="contactForm.email"
          placeholder="البريد الإلكتروني"
          required />
        <textarea
          v-model="contactForm.message"
          placeholder="نص توضيحي"
          required></textarea>
        <button type="submit">إرسال</button>
      </form>
    </div>

    <section class="stats-container">
      <h2 class="stats-title">تقيمنا</h2>
      <div class="stats-grid">
        <div class="stat-item">
          <h3>10,000+</h3>
          <p>منازل تم خدمتهم</p>
        </div>
        <div class="stat-item">
          <h3>500+</h3>
          <p>مرضوض متاحون</p>
        </div>
        <div class="stat-item">
          <h3>15+</h3>
          <p>سنة من الخبرة</p>
        </div>
        <div class="stat-item">
          <h3>98%</h3>
          <p>رضا العملاء</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  /* General Reset */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
  }

  .maincont {
    direction: rtl;
  }

  /* Hero Section */
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* padding: 100px 20px 50px 20px; */
    padding-top: 40px;
  }

  .hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  /* Services Section */
  .services {
    padding: 0px 20px 50px 20px;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    color: #007b8f;
    margin-bottom: 3rem;
  }

  .slider-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 60px;
    overflow: hidden;
  }

  .services-slider {
    overflow: hidden;
    position: relative;
    padding: 20px 0;
    margin: 0 -15px;
    width: 100%;
  }

  .slides-wrapper {
    display: flex;
    transition: transform 0.5s ease;
    width: 800%; /* 8 slides * 100% */
  }

  .service-slide {
    flex: 0 0 12.5%; /* 100% / 8 slides */
    min-width: 12.5%;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .service-content {
    background: white;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .service-content:hover {
    transform: translateY(-10px);
  }

  .service-image {
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #007b8f;
  }

  .service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .service-content h3 {
    font-size: 1.5rem;
    color: #007b8f;
    margin-bottom: 15px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .service-content p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  .view-more {
    background-color: #007b8f;
    color: white;
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .view-more:hover {
    background-color: #49a8d3;
    transform: translateY(-2px);
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #007b8f;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 2;
  }

  .nav-button:hover {
    background: #49a8d3;
    transform: translateY(-50%) scale(1.1);
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }

  .slider-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dot.active {
    background: #007b8f;
    transform: scale(1.2);
  }

  /* BookService Section */
  .BookService {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .BookService-card {
    display: flex;
    background-color: #e9f1f6;
    border-radius: 10px;
    overflow: hidden;
    width: 68%;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .BookService-card:hover {
    transform: translateY(-5px);
  }

  .BookService-card img {
    width: 150px;

    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
  }

  .BookService-info {
    padding: 15px;
    text-align: right;
    flex: 1;
  }

  .BookService-info h3 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
    color: #007b8f;
  }

  .BookService-info p {
    margin: 5px 0;
    color: #555;
    font-size: 14px;
  }

  .btn {
    background-color: #007b8f;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
  }

  .btn:hover {
    transition: background 0.3s;
    background-color: #005f6b;
    color: white;
  }

  .rate {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    box-shadow: 0 4px 15px rgba(0, 123, 143, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .rate:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 123, 143, 0.15);
  }

  .nurse-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
  }

  .nurse-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #007b8f;
    box-shadow: 0 2px 8px rgba(0, 123, 143, 0.2);
    transition: all 0.3s ease;
  }

  .nurse-photo:hover {
    transform: scale(1.05);
    border-color: #49a8d3;
  }

  .rating-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    text-align: center;
  }

  .rating-info h3 {
    color: #007b8f;
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  .rating-info p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }

  .stars {
    display: flex;
    gap: 4px;
    margin: 4px 0;
  }

  .stars i {
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .stars i:hover {
    transform: scale(1.2);
  }

  .rating-text {
    font-size: 0.85rem;
    color: #666;
    background-color: #f0f9fb;
    padding: 4px 8px;
    border-radius: 12px;
    margin-top: 4px;
  }

  /* Contact Section */
  .contact-container {
    width: 58%;
    margin: 50px auto;
    padding: 30px;
    border-radius: 10px;
  }

  .contact-container .text {
    text-align: center;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .input-group {
    display: flex;
    gap: 10px;
  }

  .input-group input {
    width: 50%;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 16px;
    background-color: #f1f5f9;
    font-size: 16px;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  .contact-form button {
    width: 100px;
    padding: 10px;
    background-color: #1b7da5;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 18px;
    transition: background 0.3s;
    margin: auto;
  }

  .contact-form button:hover {
    background-color: #005f6b;
  }

  /* Stats Section */
  .stats-container {
    padding: 4rem 2rem;
    background-color: white;
  }

  .stats-title {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 3rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .stat-item h3 {
    color: var(--primary-color);
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .stat-item p {
    color: #666;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .contact-container {
      width: 90%;
    }

    .input-group {
      flex-direction: column;
    }

    .input-group input {
      width: 100%;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .slider-container {
      padding: 0 40px;
    }

    .service-content {
      padding: 20px;
    }

    .service-image {
      width: 120px;
      height: 120px;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .service-content h3 {
      font-size: 1.2rem;
      min-height: 48px;
    }

    .slides-wrapper {
      width: 800%; /* Keep full width for all slides */
    }

    .service-slide {
      flex: 0 0 12.5%;
      min-width: 12.5%;
    }

    .BookService-card {
      flex-direction: column;
      width: 90%;
    }

    .BookService-card img {
      width: 100%;
      height: 200px;
      border-radius: 10px 10px 0 0;
    }

    .rate {
      width: 180px;
      height: 180px;
      padding: 15px;
    }

    .nurse-photo {
      width: 90px;
      height: 90px;
    }

    .rating-info h3 {
      font-size: 1rem;
    }

    .rating-info p {
      font-size: 0.8rem;
    }

    .stars i {
      font-size: 0.9rem;
    }
  }
</style>
