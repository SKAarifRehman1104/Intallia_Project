// src/store/AuthStore.ts
import { create } from "zustand";
import api from "@/axios/api";

type State = {
  token: string | null;
  userID: string | number | null;
};

type Actions = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  token: localStorage.getItem("token"),
  userID: localStorage.getItem("userID"),

  login: async (email, password) => {
    const res = await api.post("/login", { email, password });
    const { token, userID } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("userID", userID);
    set({ token, userID });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    set({ token: null, userID: null });
  },
}));
