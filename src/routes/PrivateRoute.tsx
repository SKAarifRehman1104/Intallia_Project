// src/routes/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthStore } from "../store/authStore";
import { useUserQuery } from "../hooks/useUserQuery";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = useAuthStore((state: { token?: string }) => state?.token);
  const { isLoading } = useUserQuery();
  if (!token && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
