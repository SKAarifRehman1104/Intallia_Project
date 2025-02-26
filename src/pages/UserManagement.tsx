
import { ActionButton } from "@/components/common/ActionButton";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { UserTable } from "@/components/users/UserTable";
import { UserTableActions } from "@/components/users/UserTableActions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const usersPerPage = 8;
    const totalPages = 10;

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(1, prev - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    };

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;

    return (
        <MainLayout>
            <div className="flex min-h-screen bg-background">
                <main className="flex-1 p-8">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold tracking-tight">
                                User Management (Users)
                            </h1>
                            <ActionButton
                                variant="primary"
                                onClick={() => navigate("/add-user")}
                            >
                                Add New User
                            </ActionButton>
                        </div>

                        <UserTableActions onSearch={setSearchQuery} />
                        <div className="bg-white p-6 rounded-lg">
                            <UserTable
                                startIndex={startIndex}
                                endIndex={endIndex}
                                searchQuery={searchQuery}
                            />

                            <div className="flex items-center justify-between space-x-2 mt-2">
                                <Button
                                    variant="ghost"
                                    className="gap-2 w-[111px] h-[37px] bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] rounded-full py-2 pl-2 pr-4"
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    Previous
                                </Button>
                                <div className="flex justify-center">
                                    {[1, 2, 3, "...", 8, 9, 10].map(
                                        (page, i) => (
                                            <Button
                                                key={i}
                                                variant={
                                                    page === currentPage
                                                        ? "secondary"
                                                        : "ghost"
                                                }
                                                className="w-10 h-10 p-0"
                                                onClick={() => {
                                                    if (
                                                        typeof page === "number"
                                                    ) {
                                                        setCurrentPage(page);
                                                    }
                                                }}
                                                disabled={
                                                    typeof page !== "number"
                                                }
                                            >
                                                {page}
                                            </Button>
                                        )
                                    )}
                                </div>
                                <Button
                                    variant="ghost"
                                    className="gap-2 w-[83px] h-[37px] bg-gradient-to-r from-[#0DAFDC] to-[#22E9A2] py-2 pr-2 pl-4 rounded-full"
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
};

export default UserManagement;
