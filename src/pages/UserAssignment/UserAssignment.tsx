
import { ActionButton } from "@/components/common/ActionButton";
import Pagination from "@/components/common/Pagination";
import { MainLayout } from "@/components/layout/MainLayout";
import { UserTable } from "@/components/users/UserTable";
import { UserTableActions } from "@/components/users/UserTableActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAssignment = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const usersPerPage = 8;
    const totalPages = 10;

    // const handlePrevious = () => {
    //   setCurrentPage((prev) => Math.max(1, prev - 1));
    // };

    // const handleNext = () => {
    //   setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    // };

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;

    return (
        <MainLayout>
            <div className="flex min-h-screen bg-background">
                <main className="flex-1 p-8">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="page-heading">
                                User Assignment
                            </h1>
                            {/* <ActionButton
                                variant="primary"
                                onClick={() => navigate("/add-user")}
                                
                            >
                                Add New User
                            </ActionButton> */}
                        </div>

                        <UserTableActions onSearch={setSearchQuery} />
                        <div className="bg-white p-6 rounded-lg">
                            <UserTable
                                startIndex={startIndex}
                                endIndex={endIndex}
                                searchQuery={searchQuery}
                            />

                            {/* <div className="flex items-center justify-center space-x-2">
                          <Button
                              variant="outline"
                              className="gap-2 .pre-button"
                              onClick={handlePrevious}
                              disabled={currentPage === 1}
                          >
                              Previous
                          </Button>

                          {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                              <Button
                                  key={i}
                                  variant={
                                      page === currentPage
                                          ? "default"
                                          : "outline"
                                  }
                                  className="w-10 h-10 p-0"
                                  onClick={() => {
                                      if (typeof page === "number") {
                                          setCurrentPage(page);
                                      }
                                  }}
                                  disabled={typeof page !== "number"}
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
                              <div className=""> Next</div>
                          </Button>
                      </div> */}
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

export default UserAssignment;
