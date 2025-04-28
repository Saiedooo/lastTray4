import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import ServiceDetail from "../views/ServiceDetail.vue";
import LoginForm from "../components/LoginForm.vue";
import RoleSelection from "../components/RoleSelection.vue";
import PatientSignUp from "../components/PatientSignUp.vue";
import NurseSignUp from "../components/NurseSignUp.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import VerifyResetCode from "../components/VerifyResetCode.vue";
import About from "../views/About.vue";
import NurseList from "../views/NurseList.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/services/:id",
      name: "service-detail",
      component: ServiceDetail,
    },
    {
      path: "/login",
      name: "login",
      component: LoginForm,
    },
    {
      path: "/nurse-login",
      name: "nurse-login",
      component: LoginForm,
    },
    {
      path: "/patient-login",
      name: "patient-login",
      component: LoginForm,
    },
    {
      path: "/signup",
      name: "signup",
      component: RoleSelection,
    },
    {
      path: "/patient-signup",
      name: "patient-signup",
      component: PatientSignUp,
    },
    {
      path: "/nurse-signup",
      name: "nurse-signup",
      component: NurseSignUp,
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword,
    },
    {
      path: "/verify-reset-code",
      name: "verify-reset-code",
      component: VerifyResetCode,
    },
    {
      path: "/nurse-list",
      name: "nurse-list",
      component: NurseList,
    },
    {
      path: "/reset-password",
      name: "ResetPassword",
      component: ResetPassword,
      meta: {
        requiresVerification: true,
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/nurse/:id",
      name: "nurse-profile",
      component: () => import("../views/NurseProfile.vue"),
    },

    {
      path: "/book-nurse/:id",
      name: "book-nurse",
      component: () => import("../views/book-nurse.vue"),
    },

    {
      path: "/dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

export default router;
