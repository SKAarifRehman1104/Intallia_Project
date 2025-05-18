import { ActionButton } from "@/components/common/ActionButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Download, Search } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import AssignSimulationForm from "@/pages/Simulation/AssignSimulation/AssignSimulationForm";
// import { users } from "@/data/users";
interface UserTableActionsProps {
  onSearch: (query: string) => void;
}

export const UserTableActions = ({ onSearch }: UserTableActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

        {location.pathname === "/user" && (
          <ActionButton
            variant="primary"
            className="h-9 px-4"
            onClick={() => navigate("/add-new-user")}
          >
            Add New User
          </ActionButton>
        )}

        {location.pathname === "/company" && (
          <ActionButton
            variant="primary"
            className="h-9 px-4"
            onClick={() => navigate("/add-company")}
          >
            Add New Company
          </ActionButton>
        )}

        {/* {location.pathname === "/user-assignment" && (
          <ActionButton
            variant="primary"
            className="h-9 px-4"
            onClick={() => navigate("/assign-simulation")}
          >
            Assign Simulation
          </ActionButton>
        )} */}

        {location.pathname === "/user-assignment" && (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <ActionButton
                variant="primary"
                className="h-9 px-4"
                onClick={() => setIsOpen(true)}
              >
                Assign Simulation
              </ActionButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 border-none bg-transparent shadow-none">
              <AssignSimulationForm onClose={() => setIsOpen(false)} />
            </DialogContent>
          </Dialog>
        )}

        {location.pathname === "/roles" && (
          <ActionButton
            variant="primary"
            className="h-9 px-4"
            onClick={() => navigate("/add-role")}
          >
            Add New Role
          </ActionButton>
        )}

        {location.pathname === "/packages" && (
          <ActionButton
            variant="primary"
            className="h-9 px-4"
            onClick={() => navigate("/add-new-package")}
          >
            Add New Package
          </ActionButton>
        )}
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
