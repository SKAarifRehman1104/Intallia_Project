import { Download, FileSpreadsheet, Filter, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface UserTableActionsProps {
    onSearch: (query: string) => void;
}

export const UserTableActions = ({ onSearch }: UserTableActionsProps) => {
    const navigate = useNavigate();

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <Button variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                </Button>

                <Button variant="outline" className="gap-2">
                    <FileSpreadsheet className="w-4 h-4" />
                    Export To Excel
                </Button>

                <Button variant="outline" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filter By
                </Button>

                {/* <Button
                    className="gap-2"
                    onClick={() => navigate("/add-user")}
                >
                    <Plus className="w-4 h-4" />
                    Add New User
                </Button>

                <Button
                    className="gap-2"
                    onClick={() => navigate("/add-company")}
                >
                    <Plus className="w-4 h-4" />
                    Add New Company
                </Button> */}

            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                <Input
                    className="pl-10"
                    placeholder="Search by name, email, phone or ID"
                    type="search"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </div>
    );
};
