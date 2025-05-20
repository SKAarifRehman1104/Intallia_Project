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
    render: (company) => (
      <span
        className="inline-block max-w-full truncate overflow-hidden whitespace-nowrap cursor-pointer"
        title={company.Email}
      >
        {company.Email}
      </span>
    ),
  },
  {
    key: "phone",
    header: "Phone Number",
    render: (company) => company.PhoneNumber,
  },
  {
    key: "status",
    header: "Status",
    render: (company) => {
      const status = company.Status
        ? company.Status.charAt(0).toUpperCase() + company.Status.slice(1).toLowerCase()
        : "";
      return (
        <Badge
          variant="secondary"
          className={
            status === "Active"
              ? "bg-[#ECFDF3] text-[#23C16B]"
              : status === "Inactive"
              ? "bg-[#FEF3F2] text-[#FF3A3A]"
              : ""
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    key: "website",
    header: "Website",
    render: (company) => (
      <span
        className="inline-block max-w-full truncate overflow-hidden whitespace-nowrap cursor-pointer text-blue-600"
        title={company.Website}
      >
        {company.Website}
      </span>
    ),
  },
];

interface CTableProps {
  searchQuery: string;
  companies: Company[];
}

export const CTable = ({
  searchQuery,
  companies,
}: CTableProps) => {
  return (
    <DataTable
      data={companies}
      columns={tableColumns}
      rowKey={(company) => company.CompanyId}
      selectable
      actions={(company) => (company && company.CompanyId ? <ThreeDotMenu company={company} /> : null)}

    />
  );
};
