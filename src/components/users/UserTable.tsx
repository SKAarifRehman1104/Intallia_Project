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

const users = [
    {
        id: "#Admin21458",
        name: "Olivia Rhye",
        email: "OliviaRhye@gmail.com",
        phone: "+91 96245 45896",
        type: "Paid User",
        linkedin: "https:profilename/linkedin.com",
    },
    {
        id: "#Admin21459",
        name: "Phoenix Baker",
        email: "phoenix.baker@gmail.com",
        phone: "+91 98765 43210",
        type: "Free User",
        linkedin: "https:phoenix/linkedin.com",
    },
    {
        id: "#Admin21460",
        name: "Lana Steiner",
        email: "lana.steiner@gmail.com",
        phone: "+91 87654 32109",
        type: "Paid User",
        linkedin: "https:lana/linkedin.com",
    },
    {
        id: "#Admin21461",
        name: "Demi Wilkinson",
        email: "demi.wilkinson@gmail.com",
        phone: "+91 76543 21098",
        type: "Free User",
        linkedin: "https:demi/linkedin.com",
    },
    {
        id: "#Admin21462",
        name: "Candice Wu",
        email: "candice.wu@gmail.com",
        phone: "+91 65432 10987",
        type: "Paid User",
        linkedin: "https:candice/linkedin.com",
    },
    {
        id: "#Admin21463",
        name: "John Smith",
        email: "john.smith@gmail.com",
        phone: "+91 54321 09876",
        type: "Paid User",
        linkedin: "https:john/linkedin.com",
    },
    {
        id: "#Admin21464",
        name: "Emma Johnson",
        email: "emma.johnson@gmail.com",
        phone: "+91 43210 98765",
        type: "Free User",
        linkedin: "https:emma/linkedin.com",
    },
    {
        id: "#Admin21465",
        name: "Michael Brown",
        email: "michael.brown@gmail.com",
        phone: "+91 32109 87654",
        type: "Paid User",
        linkedin: "https:michael/linkedin.com",
    },
    {
        id: "#Admin21466",
        name: "Sarah Davis",
        email: "sarah.davis@gmail.com",
        phone: "+91 21098 76543",
        type: "Free User",
        linkedin: "https:sarah/linkedin.com",
    },
    {
        id: "#Admin21467",
        name: "James Wilson",
        email: "james.wilson@gmail.com",
        phone: "+91 10987 65432",
        type: "Paid User",
        linkedin: "https:james/linkedin.com",
    },
];

interface UserTableProps {
    startIndex: number;
    endIndex: number;
    searchQuery: string;
}

export const UserTable = ({ startIndex, endIndex, searchQuery }: UserTableProps) => {
    const filteredUsers = users.filter(user => {
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
        <div className="rounded-md">
            <Table>
                <TableHeader>
                    <TableRow className="bg-[#F9FAFB]">
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
                                {user.id}
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                {user.name}
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                {user.email}
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                {user.phone}
                            </TableCell>
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
