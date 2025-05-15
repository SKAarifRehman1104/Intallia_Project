// src/hooks/useUserQuery.js
import { useQuery } from "@tanstack/react-query";
import api from "@/axios/api.js";

const fetchUser = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};

export const useUserQuery = () => {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
