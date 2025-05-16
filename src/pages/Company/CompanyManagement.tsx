import { ActionButton } from "@/components/common/ActionButton";
import Pagination from "@/components/common/Pagination";
import { MainLayout } from "@/components/layout/MainLayout";
import { UserTableActions } from "@/components/users/UserTableActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "@/data/users";
import { CompanyTable } from "@/components/users/CompanyTable";

const CompanyManagement = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 8;
  const totalPages = Math.ceil(users.length / usersPerPage);

  //   const handlePrevious = () => {
  //     setCurrentPage((prev) => Math.max(1, prev - 1));
  //   };

  //   const handleNext = () => {
  //     setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  //   };

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  return (
    <MainLayout>
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="page-heading ">User Management (Company)</h1>
            </div>

            <UserTableActions onSearch={setSearchQuery} />
            <div className="bg-white p-6 rounded-lg">
              <CompanyTable
                startIndex={startIndex}
                endIndex={endIndex}
                searchQuery={searchQuery}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default CompanyManagement;
