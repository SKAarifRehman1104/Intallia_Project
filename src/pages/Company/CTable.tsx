import { Badge } from "@/components/ui/badge";
import { Company } from "@/types/index";
import ThreeDotMenu from "@/components/common/ActonModal";
import { DataTable, Column } from "@/components/common/DataTable";

const tableColumns: Column<Company>[] = [
  {
    key: "companyid",
    header: "Company ID",
    render: (company) => (
      company.CompanyId
    ),
  },
  {
    key: "name",
    header: "Company Name",
    render: (company) => company.CompanyName,
  },
  {
    key: "email",
    header: "Email",
    render: (company) => company.Email,
  },
  {
    key: "phone",
    header: "Phone Number",
    render: (company) => company.PhoneNumber,
  },
  {
    key: "status",
    header: "Status",
    render: (company) => (
      <Badge
        variant="secondary"
        className={
          company.Status === "Active"
            ? "bg-[#ECFDF3] text-[#23C16B]"
            : "bg-[#FEF3F2] text-[#FF3A3A]"
        }
      >
        {company.Status}
      </Badge>
    ),
  },
  {
    key: "website",
    header: "Website",
    render: (company) => (
      <span className="text-blue-600">{company.Website}</span>
    ),
  },
];

interface CTableProps {
  startIndex: number;
  endIndex: number;
  searchQuery: string;
  companies: Company[];
}

export const CTable = ({
  startIndex,
  endIndex,
  searchQuery,
  companies,
}: CTableProps) => {
  return (
    <DataTable
      data={companies}
      columns={tableColumns}
      rowKey={(company) => company.CompanyId}
      selectable
      actions={() => <ThreeDotMenu />}
    />
  );
};
