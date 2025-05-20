import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers here if needed
  },
  timeout: 10000, // Optional: set a timeout for requests (in ms)
  withCredentials: false, // Set to true if you need to send cookies
});

//auth
export const login = async (payload) => await api.post("/Login", payload);
//export const signup = async (payload) => await api.post('', payload);
export const logOut = async (payload) => await api.post("LogOut", payload);

export const getScreen = async (payload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/GETLookupData`,
    payload,
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  console.log(response);
  return await response.data;
};

//company api
export const getCompanyById = async (payload) =>
  await api.post("/GetCompany", payload);
export const addCompany = async (payload) =>
  await api.post("/AddCompany", payload);
export const updateCompany = async (payload) =>
  await api.post("/UpdateCompany", payload);
export const deleteCompany = async (payload) =>
  await api.post("/DeleteCompany", payload);

//plans api
export const plansById = async (payload) =>
  await api.post("/GetPlans", payload);
export const Plans = async (payload) => await api.post("/AddPlans", payload);
export const updatePlans = async (payload) =>
  await api.post("/UpdatePlans", payload);
export const deletePlans = async (payload) =>
  await api.post("/DeletePlans", payload);

//UserEduction
export const userEducationById = async (payload) =>
  await api.post("/GetUserEducation", payload);
export const addUserEducation = async (payload) =>
  await api.post("/AddUserEducation", payload);
export const updateUserEduction = async (payload) =>
  await api.post("/UpdateUserEduction", payload);
export const deleteUserEduction = async (payload) =>
  await api.post("/DeleteUserEduction", payload);

// Axios interceptor to attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Ensure headers exist and set Authorization
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized response, e.g., logout or redirect
      // Example: localStorage.removeItem('token');
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
