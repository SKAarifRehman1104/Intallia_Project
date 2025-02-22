
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { UserTable } from "@/components/users/UserTable";
import { UserTableActions } from "@/components/users/UserTableActions";
import { useState } from "react";

const UserManagement = () => {
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
          <div>
            <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          </div>

          <UserTableActions onSearch={setSearchQuery} />
          <UserTable startIndex={startIndex} endIndex={endIndex} searchQuery={searchQuery} />

          <div className="flex items-center justify-center space-x-2">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
              <Button
                key={i}
                variant={page === currentPage ? 'default' : 'outline'}
                className="w-10 h-10 p-0"
                onClick={() => {
                  if (typeof page === 'number') {
                    setCurrentPage(page);
                  }
                }}
                disabled={typeof page !== 'number'}
              >
                {page}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
    </MainLayout>

  );
};

export default UserManagement;
