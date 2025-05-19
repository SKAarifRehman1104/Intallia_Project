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
<<<<<<< HEAD
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
=======
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
>>>>>>> d86edb3 (Create, Read and Delete of Company Completed)
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
<<<<<<< HEAD
  startIndex: number;
  endIndex: number;
=======
>>>>>>> d86edb3 (Create, Read and Delete of Company Completed)
  searchQuery: string;
  companies: Company[];
}

export const CTable = ({
<<<<<<< HEAD
  startIndex,
  endIndex,
=======
>>>>>>> d86edb3 (Create, Read and Delete of Company Completed)
  searchQuery,
  companies,
}: CTableProps) => {
  return (
    <DataTable
      data={companies}
      columns={tableColumns}
      rowKey={(company) => company.CompanyId}
      selectable
<<<<<<< HEAD
      actions={() => <ThreeDotMenu />}
=======
      actions={(company) => (company && company.CompanyId ? <ThreeDotMenu company={company} /> : null)}

>>>>>>> d86edb3 (Create, Read and Delete of Company Completed)
    />
  );
};
