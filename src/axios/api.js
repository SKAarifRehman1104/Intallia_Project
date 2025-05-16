import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // your base URL from env
  headers: { 'Content-Type': 'application/json' },
});

// Auth example (if needed)
export const Login = async (payload) => await api.post('/login', payload);

// Company APIs
// fetchCompanyList expects plain JSON payload object
export const fetchCompanyList = async (payload) =>
  await api.post("/GETLookupData", payload);

// deleteCompany expects payload with JSON stringified inside "JSON" property
export const deleteCompany = async (payload) =>
  await api.post("/DeleteCompany", payload);

// Axios interceptors to attach token and handle 401 globally
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';  // redirect on auth failure
    }
    return Promise.reject(error);
  }
);

export default api;
