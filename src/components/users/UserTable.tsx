import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { users } from "@/data/users";
import ThreeDotMenu from "@/components/common/ActonModal";
import { DataTable, Column } from "@/components/common/DataTable";

const userColumns: Column<(typeof users)[0]>[] = [
  { key: "id", header: "User ID" },
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone Number" },
  {
    key: "type",
    header: "User Type",
    render: (user) => (
      <Badge
        variant="secondary"
        className={
          user.type === "Paid"
            ? "bg-[#ECFDF3] text-[#23C16B]"
            : "bg-[#FEF3F2] text-[#FF3A3A]"
        }
      >
        {user.type}
      </Badge>
    ),
  },
  {
    key: "linkedin",
    header: "Linkedin URL",
    render: (user) => <span className="text-blue-600">{user.linkedin}</span>,
  },
];

interface UserTableProps {
  startIndex: number;
  endIndex: number;
  searchQuery: string;
}

export const UserTable = ({
  startIndex,
  endIndex,
  searchQuery,
}: UserTableProps) => {
  const filteredUsers = users.filter((user) => {
    const searchStr = searchQuery.toLowerCase();
    return (
      user.id.toLowerCase().includes(searchStr) ||
      user.name.toLowerCase().includes(searchStr) ||
      user.email.toLowerCase().includes(searchStr) ||
      user.phone.toLowerCase().includes(searchStr)
    );
  });

  const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <DataTable
      data={displayedUsers}
      columns={userColumns}
      rowKey={(user) => user.id}
      selectable
      actions={() => <ThreeDotMenu />}
    />
  );
};
