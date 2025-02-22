import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

import {
    LayoutDashboard,
    Users,
    UserCog,
    BookOpen,
    Package,
    CreditCard,
    LogOut,
} from "lucide-react";
import userlogo from "@/assets/super_admin.png";

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Users, label: "Roles & Access", href: "/roles" },
    { icon: UserCog, label: "User Management", href: "/users" },
    { icon: BookOpen, label: "Simulation", href: "/simulation" },
    { icon: Package, label: "Plans & Package", href: "/plans" },
    { icon: CreditCard, label: "Payments", href: "/payments" },
];

export function Sidebar() {
    return (
        <div className="h-screen w-64 bg-sidebar fixed left-0 top-0 border-r border-sidebar-border">
            <div className="p-6">
                <div className="mb-8">
                    <img src="/Group 2337.svg" alt="Group 2337" />
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground/60",
                                "hover:gradient-background hover:text-sidebar-accent-foreground",
                                "transition-colors duration-200"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="absolute bottom-8 w-full px-6">
                <div className="flex items-center gap-3 px-3 py-4 border-t border-sidebar-border">
                    <div className="w-10 h-10 rounded-full bg-sidebar-accent overflow-hidden ">
                        <img
                            src={userlogo}
                            alt="Sample Image"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <p className="font-medium text-sidebar-foreground">
                            John Watson
                        </p>
                        <p className="text-sm text-sidebar-foreground/60">
                            Super Admin
                        </p>
                    </div>
                </div>

                <button className="flex items-center gap-3 px-3 py-2 w-full text-sidebar-foreground/60 hover:text-sidebar-foreground ">
                    <LogOut className="h-5 w-5" />
                    <span className="text-red-600 font-normal text-base/5">
                        Logout
                    </span>
                </button>
            </div>
        </div>
    );
}
