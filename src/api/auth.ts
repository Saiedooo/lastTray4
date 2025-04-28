import axios from 'axios';

const BASE_URL = '/api/v1';

interface AxiosErrorResponse {
  message?: string;
  error?: string;
  statusCode?: number;
}

interface CustomAxiosError extends Error {
  code?: string;
  response?: {
    data?: AxiosErrorResponse;
    status?: number;
  };
  isAxiosError: boolean;
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
  timeout: 30000,
});

// === Request Interceptor ===
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// === Response Interceptor ===
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Request timeout'));
    }
    if (!error.response) {
      return Promise.reject(
        new Error('Network error - please check your connection')
      );
    }
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData extends LoginCredentials {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  confirmPassword: string;
  address: string;
  specialty: string;
  description?: string;
  personalPhoto?: File;
  businessCardPhoto?: File;
  idPhoto?: File;
  role: 'nurse' | 'patient';
}

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    // if (response.data.user?._id) {
    //   localStorage.setItem("userId", response.data.user._id);
    // }

    localStorage.setItem('userId', response.data._id);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (data: SignUpData) => {
  console.log('🚀 ~ signup ~ data:', data);
  try {
    const endpoint =
      data.role === 'patient' ? '/auth/patientSignup' : '/auth/nurseSignup';

    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('confirmPassword', data.confirmPassword);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('address', data.address);
    formData.append('role', data.role);

    // Add specialty and description
    if (data.specialty) {
      formData.append('specialty', data.specialty._id);
    }
    if (data.description) {
      formData.append('description', data.description);
    }

    if (data.personalPhoto instanceof File) {
      formData.append('personalPhoto', data.personalPhoto);
    }
    if (data.businessCardPhoto instanceof File) {
      formData.append('businessCardPhoto', data.businessCardPhoto);
    }
    if (data.idPhoto instanceof File) {
      formData.append('idPhoto', data.idPhoto);
    }

    const response = await api.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 60000,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Upload error details:', {
        status: error.response?.status,
        data: error.response?.data,
        headers: error.response?.headers,
      });

      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout - please try again');
      }

      if (!error.response) {
        throw new Error('Network error - please check your connection');
      }

      const serverMessage =
        error.response.data?.message ||
        error.response.data?.error ||
        'Registration failed';

      throw new Error(serverMessage);
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error('An unknown error occurred during signup');
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await api.post('/auth/forgotPassword', { email });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Password reset error:', {
        status: error.response?.status,
        data: error.response?.data,
      });

      if (error.response?.status === 404) {
        throw new Error('البريد الإلكتروني غير مسجل في النظام');
      }
      if (error.response?.status === 429) {
        throw new Error('الرجاء الانتظار قبل إعادة المحاولة');
      }
      if (error.response?.status === 500) {
        throw new Error('حدث خطأ في الخادم. الرجاء المحاولة مرة أخرى');
      }

      const serverMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'فشل إرسال رابط إعادة تعيين كلمة المرور';
      throw new Error(serverMessage);
    }

    if (!navigator.onLine) {
      throw new Error('لا يوجد اتصال بالإنترنت - يرجى التحقق من اتصالك');
    }

    throw new Error('حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى');
  }
};

export const verifyResetCode = async (verificationCode: string) => {
  try {
    const email = localStorage.getItem('resetEmail');

    if (!email) {
      throw new Error('الرجاء إعادة إدخال بريدك الإلكتروني');
    }

    const response = await api.post('/auth/verifyResetCode', {
      email,
      resetCode: verificationCode,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        throw new Error('رمز التحقق غير صحيح');
      }
      if (error.response?.status === 404) {
        throw new Error('لم يتم العثور على طلب إعادة تعيين كلمة المرور');
      }
      if (error.response?.status === 500) {
        throw new Error('حدث خطأ في الخادم. الرجاء المحاولة مرة أخرى');
      }
      throw new Error(error.response?.data?.message || 'فشل التحقق من الرمز');
    }
    throw new Error('حدث خطأ غير متوقع');
  }
};

// === Logout function ===
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  window.location.href = '/login';
};
