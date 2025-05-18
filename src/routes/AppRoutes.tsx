import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "@/pages/auth/Login/Login";

// Lazy-loaded components
const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Signup = lazy(() => import("@/pages/auth/SignUp/Signup"));

const UserManagement = lazy(() => import("@/pages/User/UserManagement"));
const CompanyManagement = lazy(
  () => import("@/pages/Company/CompanyManagement"),
);
const RolesAndAccess = lazy(
  () => import("@/pages/RolesAndAccess/RolesAndAccess"),
);

const AddNewUser = lazy(() =>
  import("@/components/users/AddNewUser").then((module) => ({
    default: module.AddNewUser,
  })),
);
const AddNewCompany = lazy(() =>
  import("@/pages/Company/AddNewCompany").then((module) => ({
    default: module.AddNewCompany,
  })),
);
const RoleForm = lazy(() =>
  import("@/pages/RolesAndAccess/RoleForm").then((module) => ({
    default: module.RoleForm,
  })),
);

const Simulation = lazy(() => import("@/pages/Simulation/Simulation"));
const AddSimulation = lazy(
  () => import("@/pages/Simulation/AddSimulation/AddSimulation"),
);

const Packages = lazy(() => import("@/pages/Packages/Packages"));
const AddNewPackage = lazy(() =>
  import("@/pages/Packages/AddNewPackage").then((module) => ({
    default: module.AddNewPackage,
  })),
);
const ViewPackage = lazy(() =>
  import("@/pages/Packages/ViewPackage").then((module) => ({
    default: module.ViewPackage,
  })),
);
const DataScience = lazy(() => import("@/pages/Packages/DataScience"));

const Plans = lazy(() => import("@/pages/Packages/plans"));

const Invitations = lazy(() =>
  import("@/components/Invitations/Invitations").then((module) => ({
    default: module.Invitations,
  })),
);
const Payments = lazy(() => import("@/pages/Payments/Payments"));
const UserAssignment = lazy(
  () => import("@/pages/UserAssignment/UserAssignment"),
);
const Profile = lazy(() => import("@/components/Profile/Profile"));

const ViewSkillMatrix = lazy(
  () => import("@/pages/SkillMatrix/ViewSkillMatrix/ViewSkillMatrix"),
);
const SkillMatrix = lazy(() => import("@/pages/SkillMatrix/SkillMatrix"));
const SkillMatrixView = lazy(
  () => import("@/pages/SkillMatrix/SkillMatrixView"),
);
const Score = lazy(() => import("@/pages/SkillMatrix/ViewSkillMatrix/Score"));

const UserDetails = lazy(() => import("@/pages/UserDetails/UserDetails"));
const UserDashboard = lazy(() =>
  import("@/pages/UserDashboard/UserDashboard").then((module) => ({
    default: module.UserDashboard,
  })),
);
const CaseStudyDetail = lazy(
  () => import("@/components/user dashboard/CaseStudyDetail"),
);
const UserPreferences = lazy(
  () => import("@/pages/UserPreferences/UserPreferences"),
);
const InnerPage = lazy(() => import("@/pages/InnerPage/InnerPage"));

// Route definitions
const router = createBrowserRouter([
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },

  // Protected routes
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Index />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/roles",
    element: (
      <PrivateRoute>
        <RolesAndAccess />
      </PrivateRoute>
    ),
  },
  {
    path: "/user",
    element: (
      <PrivateRoute>
        <UserManagement />
      </PrivateRoute>
    ),
  },
  {
    path: "/company",
    element: (
      <PrivateRoute>
        <CompanyManagement />
      </PrivateRoute>
    ),
  },
  {
    path: "/simulation",
    element: (
      <PrivateRoute>
        <Simulation />
      </PrivateRoute>
    ),
  },
  {
    path: "/packages",
    element: (
      <PrivateRoute>
        <Packages />
      </PrivateRoute>
    ),
  },
  {
    path: "/add-new-package",
    element: (
      <PrivateRoute>
        <AddNewPackage />
      </PrivateRoute>
    ),
  },
  {
    path: "/package/:id",
    element: (
      <PrivateRoute>
        <ViewPackage />
      </PrivateRoute>
    ),
  },
  {
    path: "/datascience",
    element: (
      <PrivateRoute>
        <DataScience />
      </PrivateRoute>
    ),
  },
  {
    path: "/user-assignment",
    element: (
      <PrivateRoute>
        <UserAssignment />
      </PrivateRoute>
    ),
  },
  {
    path: "/add-new-user",
    element: (
      <PrivateRoute>
        <AddNewUser />
      </PrivateRoute>
    ),
  },
  {
    path: "/new-simulation",
    element: (
      <PrivateRoute>
        <AddSimulation />
      </PrivateRoute>
    ),
  },
  {
    path: "/add-company",
    element: (
      <PrivateRoute>
        <AddNewCompany />
      </PrivateRoute>
    ),
  },
  {
    path: "/add-role",
    element: (
      <PrivateRoute>
        <RoleForm />
      </PrivateRoute>
    ),
  },
  {
    path: "/plan",
    element: (
      <PrivateRoute>
        <Plans />
      </PrivateRoute>
    ),
  },

  {
    path: "/payments",
    element: (
      <PrivateRoute>
        <Payments />
      </PrivateRoute>
    ),
  },
  {
    path: "/skill-matrix",
    element: (
      <PrivateRoute>
        <SkillMatrix />
      </PrivateRoute>
    ),
  },
  {
    path: "/view-skill-matrix",
    element: (
      <PrivateRoute>
        <ViewSkillMatrix />
      </PrivateRoute>
    ),
  },
  {
    path: "/skill-matrix-view",
    element: (
      <PrivateRoute>
        <SkillMatrixView />
      </PrivateRoute>
    ),
  },
  {
    path: "/score",
    element: (
      <PrivateRoute>
        <Score />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/invitations",
    element: (
      <PrivateRoute>
        <Invitations />
      </PrivateRoute>
    ),
  },
  {
    path: "/user-details/:id",
    element: (
      <PrivateRoute>
        <UserDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/user-dashboard",
    element: (
      <PrivateRoute>
        <UserDashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/case-study-detail",
    element: (
      <PrivateRoute>
        <CaseStudyDetail />
      </PrivateRoute>
    ),
  },
  {
    path: "/preferences",
    element: (
      <PrivateRoute>
        <UserPreferences />
      </PrivateRoute>
    ),
  },
  {
    path: "/inner-page",
    element: (
      <PrivateRoute>
        <InnerPage />
      </PrivateRoute>
    ),
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
