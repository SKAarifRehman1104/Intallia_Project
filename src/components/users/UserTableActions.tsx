import { ChevronDown, Download, Filter, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "@/components/common/ActionButton";

interface UserTableActionsProps {
    onSearch: (query: string) => void;
}

export const UserTableActions = ({ onSearch }: UserTableActionsProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between">
            <div className="flex items-end gap-4">
                <Button
                    size="sm"
                    variant="outline"
                    className="text-[#06B2E1] py-2 pl-4 pr-2 font-medium w-40 text-base  ring-[#06B2E1] rounded-full ring-1 border-[#06B2E1] hover:bg-[#06B2E1] hover:text-white"
                >
                    Download PDF
                    <Download className="w-4 h-4" />
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    className="text-[#06B2E1] py-2 pl-4 pr-2 font-medium w-40 text-base  ring-[#06B2E1] rounded-full ring-1 border-[#06B2E1] hover:bg-[#06B2E1] hover:text-white"
                >
                    Export To Excel
                    <Download className="w-4 h-4 " />
                </Button>
                <Button
                    variant="outline"
                    className="gap-2 w-[110px] h-[38px] py-2 pr-2 pl-4 rounded-full ring-1 ring-[#444446]"
                >
                    Filter By
                    <ChevronDown className="w-4 h-4" />
                </Button>

                {/* <ActionButton
                    variant="primary"
                    onClick={() => navigate("/add-role")}
                >
                    Add New Role
                </ActionButton> */}
            </div>

            <div className="relative w-[327px] bg-[#E5E5EA] border border-[#E5E5EA] rounded-[8px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7C7C80] w-4 h-4" />
                <Input
                    className="pl-10 text-[#7C7C80] border-none"
                    placeholder="Search by name, email, phone or ID"
                    type="search"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </div>
    );
};
