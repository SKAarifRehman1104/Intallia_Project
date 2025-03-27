import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import UserManagement from "./pages/User/UserManagement";
import NotFound from "./pages/NotFound";
import CompanyManagement from "./pages/Company/CompanyManagement";
import RolesAndAccess from "./pages/RolesAndAccess/RolesAndAccess";
import { AddNewUser } from "./components/users/AddNewUser";
import { AddNewCompany } from "./components/users/AddNewCompany";
import { RoleForm } from "@/pages/RolesAndAccess/RoleForm";
import { Simulation } from "./pages/Simulation/Simulation";
import { AddNewRole } from "@/components/users/AddNewRole";
import Packages from "@/pages/Packages/Packages";
import Plans from "@/pages/Packages/Plans";

import { DataScience } from "./pages/Packages/DataScience";
import { AddNewPackage } from "./pages/Packages/AddNewPackage";
import { ViewPackage } from "./pages/Packages/ViewPackage";
import { Invitations } from "./components/Invitations/Invitations";
import Payments from "./pages/Payments/Payments";
import UserAssignment from "./pages/UserAssignment/UserAssignment";
import AddSimulation from "./pages/Simulation/AddSimulation/AddSimulation";
import Profile from "./components/Profile/Profile";

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
          <Route path="/roles" element={<RolesAndAccess />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/company" element={<CompanyManagement />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/user-assignment" element={<UserAssignment />} />
          <Route path="/add-new-user" element={<AddNewUser />} />
          <Route path="/new-simulation" element={<AddSimulation />} />
          <Route path="/add-user" element={<AddNewUser />} />
          <Route path="/add-company" element={<AddNewCompany />} />
          <Route path="/add-role" element={<RoleForm />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/add-package" element={<AddNewPackage />} />
          <Route path="/package/:id" element={<ViewPackage />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/invitations" element={<Invitations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
