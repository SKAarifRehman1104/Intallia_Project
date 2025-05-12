import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy-loaded components
const Index = lazy(() => import("./pages/Index"));
const UserManagement = lazy(() => import("./pages/User/UserManagement"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CompanyManagement = lazy(() => import("./pages/Company/CompanyManagement"));
const RolesAndAccess = lazy(() => import("./pages/RolesAndAccess/RolesAndAccess"));
const AddNewUser = lazy(() => import("@/components/users/AddNewUser").then(module => ({ default: module.AddNewUser })));
const AddNewCompany = lazy(() => import("@/components/users/AddNewCompany").then(module => ({ default: module.AddNewCompany })));
const RoleForm = lazy(() => import("@/pages/RolesAndAccess/RoleForm").then(module => ({ default: module.RoleForm })));
const Simulation = lazy(() => import("./pages/Simulation/Simulation").then(module => ({ default: module.Simulation })));
const AddNewRole = lazy(() => import("./components/users/AddNewRole").then(module => ({ default: module.AddNewRole })));
const Packages = lazy(() => import("@/pages/Packages/Packages"));
const Plans = lazy(() => import("@/pages/Packages/plans"));
const DataScience = lazy(() => import("./pages/Packages/DataScience").then(module => ({ default: module.DataScience })));
const AddNewPackage = lazy(() => import("./pages/Packages/AddNewPackage").then(module => ({ default: module.AddNewPackage })));
const ViewPackage = lazy(() => import("./pages/Packages/ViewPackage").then(module => ({ default: module.ViewPackage })));
const Invitations = lazy(() => import("./components/Invitations/Invitations").then(module => ({ default: module.Invitations })));
const Payments = lazy(() => import("./pages/Payments/Payments"));
const UserAssignment = lazy(() => import("./pages/UserAssignment/UserAssignment"));
const AddSimulation = lazy(() => import("./pages/Simulation/AddSimulation/AddSimulation"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const ViewSkillMatrix = lazy(() => import("./pages/SkillMatrix/ViewSkillMatrix/ViewSkillMatrix"));
const SkillMatrix = lazy(() => import("./pages/SkillMatrix/SkillMatrix"));
const SkillMatrixView = lazy(() => import("./pages/SkillMatrix/SkillMatrixView"),);
const Score = lazy(
  () => import("./pages/SkillMatrix/ViewSkillMatrix/Score"),
);
const Signup = lazy(() => import("@/pages/auth/SignUp/Signup"));
const UserDetails = lazy(() => import("./pages/UserDetails/UserDetails"));
const UserDashboard = lazy(() =>
  import("./pages/UserDashboard/UserDashboard").then((module) => ({
    default: module.UserDashboard,
  })),
);
const CaseStudyDetail = lazy(
  () => import("./components/user dashboard/CaseStudyDetail"),
);
const UserPreferences = lazy(
  () => import("./pages/UserPreferences/UserPreferences"),
);
const InnerPage = lazy(
  () => import("@/pages/InnerPage/InnerPage"),
);


// Query Client Configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed queries twice
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    },
  },
});

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <NotFound /> },
  { path: "/roles", element: <RolesAndAccess /> },
  { path: "/users", element: <UserManagement /> },
  { path: "/company", element: <CompanyManagement /> },
  { path: "/simulation", element: <Simulation /> },
  { path: "/packages", element: <Packages /> },
  { path: "/add-package", element: <AddNewPackage /> },
  { path: "/datascience", element: <DataScience /> },
  { path: "/user-assignment", element: <UserAssignment /> },
  { path: "/add-new-user", element: <AddNewUser /> },
  { path: "/new-simulation", element: <AddSimulation /> },
  { path: "/add-company", element: <AddNewCompany /> },
  { path: "/add-role", element: <RoleForm /> },
  { path: "/plans", element: <Plans /> },
  { path: "/signup", element: <Signup /> },
  { path: "/package/:id", element: <ViewPackage /> },
  { path: "/payments", element: <Payments /> },
  { path: "/skill-matrix", element: <SkillMatrix /> },
  { path: "/view-skill-matrix", element: <ViewSkillMatrix /> },
  { path: "/skill-matrix-view", element: <SkillMatrixView /> },
  { path: "/score", element: <Score/> },
  { path: "/profile", element: <Profile /> },
  { path: "/invitations", element: <Invitations /> },
  { path: "/user-details/:id", element: <UserDetails /> },
  { path: "/user-dashboard", element: <UserDashboard /> },
  { path: "/case-study-detail", element: <CaseStudyDetail /> },
  { path: "/preferences", element: <UserPreferences /> },
  { path: "/inner-page", element: <InnerPage /> },
  { path: "*", element: <NotFound /> },
]);

// Fallback Component for Lazy Loading
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="spinner" />
  </div>
);


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={<LoadingFallback />}>
        <RouterProvider router={router} />
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
