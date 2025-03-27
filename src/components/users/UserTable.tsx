import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { users } from "@/data/users";

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
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

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

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  return (
    <div className="rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F9FAFB]">
            <TableHead>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </TableHead>
            <TableHead className="text-sm">User ID</TableHead>
            <TableHead className="text-sm">Name</TableHead>
            <TableHead className="text-sm">Email</TableHead>
            <TableHead className="text-sm">Phone Number</TableHead>
            <TableHead className="text-sm">User Type</TableHead>
            <TableHead className="text-sm">Linkedin URL</TableHead>
            <TableHead className="text-sm">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedUsers.map((user) => (
            <TableRow key={user.id} className="text-sm">
              <TableCell className="py-4 text-sm">
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </TableCell>
              <TableCell className="py-4 text-sm">{user.id}</TableCell>
              <TableCell className="py-4 text-sm">{user.name}</TableCell>
              <TableCell className="py-4 text-sm">{user.email}</TableCell>
              <TableCell className="py-4 text-sm">{user.phone}</TableCell>
              <TableCell className="py-4 text-sm">
                <Badge
                  variant={"secondary"}
                  className={
                    user.type === "Paid User"
                      ? "bg-[#ECFDF3] text-[#23C16B]"
                      : "bg-[#FEF3F2] text-[#FF3A3A]"
                  }
                >
                  {user.type}
                </Badge>
              </TableCell>
              <TableCell className="py-4 text-blue-600 text-sm">
                {user.linkedin}
              </TableCell>
              <TableCell className="py-4">
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
