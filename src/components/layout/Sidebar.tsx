import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Package,
  CreditCard,
  LogOut,
} from "lucide-react";

import userlogo from "@/assets/super_admin.png";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: User,
    label: "Roles & Access",
    href: "/roles",
  },
  {
    icon: User,
    label: "User  Management",
    href: "/users",
    subroutes: [
      {
        label: "Company",
        href: "/company",
        subroutes: [
          {
            label: "Add Company",
            href: "/add-company",
          },
        ],
      },
      {
        label: "Users",
        href: "/users",
        subroutes: [
          {
            label: "Add User",
            href: "/add-user",
          },
        ],
      },
      {
        label: "User  Assignment",
        href: "/user-assignment",
        subroutes: [
          {
            label: "Add User",
            href: "/add-user",
          },
        ],
      },
    ],
  },
  {
    icon: BookOpen,
    label: "Simulation",
    href: "/simulation",
  },
  {
    icon: Package,
    label: "Plans & Package",
    href: "/plans",
  },
  {
    icon: CreditCard,
    label: "Payments",
    href: "/payments",
  },
];

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="h-screen w-64 bg-sidebar fixed left-0 top-0 border-r border-sidebar-border">
      <div className="p-6">
        <div className="mb-8">
          <img src="/Group 2337.svg" alt="Group 2337" />
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive =
              item.href &&
              (currentPath === item.href ||
                item.subroutes?.some(
                  (route) =>
                    currentPath === route.href ||
                    route.subroutes?.some(
                      (subroute) => currentPath === subroute.href,
                    ),
                ));

            return (
              <div key={index}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md",
                    !isActive &&
                      "hover:bg-gray-300 text-sidebar-foreground transition-colors duration-200",
                    isActive &&
                      "bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)] text-white",
                  )}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.label}</span>
                </Link>

                {isActive && item.subroutes && (
                  <div className="mt-2 ml-8 space-y-2">
                    {item.subroutes.map((subroute, idx) => (
                      <div key={idx} className="relative">
                        <div
                          className={cn(
                            "absolute left-[-16px] w-[16px] border-l-2 border-b-2 h-[24px] border-gray-200",
                            currentPath === subroute.href && "border-[#0DAFDC]",
                          )}
                        />
                        <Link
                          to={subroute.href}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700",
                            currentPath !== subroute.href &&
                              "hover:bg-gray-50 transition-colors duration-200",
                            (currentPath === subroute.href ||
                              subroute.subroutes?.some(
                                (sr) => currentPath === sr.href,
                              )) &&
                              "text-[#0DAFDC] bg-[#0DAFDC10]",
                          )}
                        >
                          {subroute.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-8 w-full px-6">
        <div className="flex items-center gap-3 px-3 py-4 border-t border-sidebar-border">
          <div className="w-10 h-10 rounded-full bg-sidebar-accent overflow-hidden">
            <img src={userlogo} alt="Sample Image" className="w-full" />
          </div>
          <div>
            <p className="font-medium text-sidebar-foreground">John Watson</p>
            <p className="text-sm text-sidebar-foreground/60">Super Admin</p>
          </div>
        </div>

        <button className="flex items-center gap-3 px-3 py-2 w-full text-sidebar-foreground/60 hover:text-sidebar-foreground">
          <LogOut className="h-5 w-5 text-red-600" />
          <span className="text-red-600 font-normal text-base/5">Logout</span>
        </button>
      </div>
    </div>
  );
}
