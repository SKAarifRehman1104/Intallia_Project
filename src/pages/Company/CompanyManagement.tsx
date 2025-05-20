import { ActionButton } from "@/components/common/ActionButton";
import Pagination from "@/components/common/Pagination";
import { MainLayout } from "@/components/layout/MainLayout";
import { CTable } from "@/pages/Company/CTable";
import { UserTableActions } from "@/components/users/UserTableActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getScreen } from "@/axios/api.js";
import { Company } from "@/types";

const CompanyManagement = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Use React Query for fetching companies
  const {
    data: companies = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["companies"],
    queryFn: async () =>
      await getScreen({
        ScreenName: "CompanyMaster",
        LookUpKey: "GetList",
        Filter1: "",
        Filter2: "",
        Filter3: "",
        Filter4: "",
        Filter5: "",
      }),
    retry: 2,
  });

  const rowPerPage = 8;

  // Filter companies by search query
  const filteredCompanies = companies?.LookupData?.filter(
    (company: Company) => {
      const searchStr = searchQuery.toLowerCase();
      return (
        company.CompanyId?.toLowerCase().includes(searchStr) ||
        company.CompanyName?.toLowerCase().includes(searchStr) ||
        company.Email?.toLowerCase().includes(searchStr) ||
        company.PhoneNumber?.toLowerCase().includes(searchStr)
      );
    },
  );

  const totalPages = Math.ceil(filteredCompanies?.length / rowPerPage);
  const startIndex = (currentPage - 1) * rowPerPage;
  const endIndex = startIndex + rowPerPage;

  const displayedCompanies: Company[] = filteredCompanies?.slice(
    startIndex,
    endIndex,
  );
  // console.log(displayedCompanies);
  // if (displayedCompanies && Array.isArray(displayedCompanies)) {
  //   displayedCompanies.forEach(company => {
  //     console.log(`CompanyId: ${company.CompanyId}, Status: ${company.Status}`);
  //   });
  // }

  return (
    <MainLayout>
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="page-heading">User Management (Company)</h1>
            </div>
            <UserTableActions onSearch={setSearchQuery} />
            <div className="bg-white p-6 rounded-lg">
              {isLoading && <div>Loading...</div>}
              {isError && <div>Error loading companies.</div>}
              {!isLoading && !isError && (
                <>
                  <CTable
                    searchQuery={searchQuery}
                    companies={displayedCompanies}
                  />
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default CompanyManagement;
