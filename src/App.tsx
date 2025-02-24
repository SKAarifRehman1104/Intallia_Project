import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserManagement from "./pages/UserManagement";
import NotFound from "./pages/NotFound";
import AddUser from "./pages/AddUser";
import CompanyManagement from "./pages/CompanyManagement";
import { AddNewUser } from "./components/users/AddNewUser";
import { AddNewCompany } from "./components/users/AddNewCompany";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/users" element={<UserManagement />} />
          <Route path="/company" element={<CompanyManagement />} />
          <Route path="/add-user" element={<AddNewUser />} />
          <Route path="/add-company" element={<AddNewCompany />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
