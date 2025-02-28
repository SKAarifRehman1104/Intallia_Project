import { Download, Filter, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface UserTableActionsProps {
    onSearch: (query: string) => void;
}

export const UserTableActions = ({ onSearch }: UserTableActionsProps) => {
    const navigate = useNavigate();

    return (
        <div className="space-y-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Button
                    variant="outline"
                    className="h-[37px] w-[157px] py-2 px-2 border-1 border-transparent bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] p-[2px] rounded-full"
                >
                    <div className="h-full w-full rounded-full bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center gap-2 text-[#0DAFDC], to-[#22E9A2]">
                        <p className="text-base bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] bg-clip-text text-transparent font-normal">
                            Download PDF
                        </p>
                        <Download className="w-4 h-4" />
                    </div>
                </Button>
                <Button
                    variant="outline"
                    className="h-[37px] w-[157px] border-1 border-transparent bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] p-[2px] rounded-full"
                >
                    <div className="h-full w-full rounded-full bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center gap-2 text-[#0DAFDC], to-[#22E9A2]">
                        <p className="text-base bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] bg-clip-text text-transparent font-normal">
                            Export To Excel
                        </p>
                        <Download className="w-4 h-4" />
                    </div>
                </Button>
                <Button
                    variant="outline"
                    className="gap-2 w-[106px] h-[37px] py-2 p-2 pl-4 rounded-full ring-1 ring-[#444446]"
                >
                    Filter By
                    <Filter className="w-4 h-4" />
                </Button>
            </div>

            <div className="relative w-[327px]">
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
