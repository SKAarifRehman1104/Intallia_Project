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
import { Link } from "react-router-dom";

const payments = [
  {
    id: '#Admin21458',
    name: 'Sarah Davis',
    email: 'sarah@yahoo.com',
    date: '24/2/2025',
    packageCategory: 'Premium',
    amount: '$604.50',
    type: 'Free User'
  },
  {
    id: '#Admin21459',
    name: 'Demi Wilkinson',
    email: 'demi@yahoo.com',
    date: '30/11/2024',
    packageCategory: 'Basic',
    amount: '$863.83',
    type: 'Free User'
  },
  {
    id: '#Admin21460',
    name: 'Phoenix Baker',
    email: 'phoenix@yahoo.com',
    date: '8/2/2025',
    packageCategory: 'Basic',
    amount: '$959.79',
    type: 'Free User'
  },
  {
    id: '#Admin21461',
    name: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    date: '14/1/2025',
    packageCategory: 'Standard',
    amount: '$259.56',
    type: 'Free User'
  },
  {
    id: '#Admin21462',
    name: 'James Wilson',
    email: 'james@outlook.com',
    date: '26/11/2024',
    packageCategory: 'Basic',
    amount: '$985.47',
    type: 'Paid User'
  },
  {
    id: '#Admin21463',
    name: 'Michael Brown',
    email: 'michael@gmail.com',
    date: '20/11/2024',
    packageCategory: 'Premium',
    amount: '$535.18',
    type: 'Paid User'
  },
  {
    id: '#Admin21464',
    name: 'John Smith',
    email: 'john@gmail.com',
    date: '4/1/2025',
    packageCategory: 'Premium',
    amount: '$4.14',
    type: 'Paid User'
  },
  {
    id: '#Admin21465',
    name: 'Lana Steiner',
    email: 'lana@outlook.com',
    date: '14/1/2025',
    packageCategory: 'Standard',
    amount: '$493.04',
    type: 'Free User'
  },
  {
    id: '#Admin21466',
    name: 'Demi Wilkinson',
    email: 'demi@outlook.com',
    date: '13/1/2025',
    packageCategory: 'Standard',
    amount: '$550.05',
    type: 'Paid User'
  },
  {
    id: '#Admin21467',
    name: 'Candice Wu',
    email: 'candice@outlook.com',
    date: '22/1/2025',
    packageCategory: 'Basic',
    amount: '$489.77',
    type: 'Free User'
  },
  {
    id: '#Admin21468',
    name: 'Sarah Davis',
    email: 'sarah@gmail.com',
    date: '19/11/2024',
    packageCategory: 'Basic',
    amount: '$34.47',
    type: 'Paid User'
  },
  {
    id: '#Admin21469',
    name: 'Sarah Davis',
    email: 'sarah@yahoo.com',
    date: '2/12/2024',
    packageCategory: 'Premium',
    amount: '$63.69',
    type: 'Free User'
  },
  {
    id: '#Admin21470',
    name: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    date: '5/2/2025',
    packageCategory: 'Standard',
    amount: '$904.28',
    type: 'Paid User'
  },
  {
    id: '#Admin21471',
    name: 'Candice Wu',
    email: 'candice@yahoo.com',
    date: '26/12/2024',
    packageCategory: 'Basic',
    amount: '$170.22',
    type: 'Free User'
  },
  {
    id: '#Admin21472',
    name: 'Michael Brown',
    email: 'michael@gmail.com',
    date: '27/2/2025',
    packageCategory: 'Basic',
    amount: '$787.41',
    type: 'Paid User'
  },
  {
    id: '#Admin21473',
    name: 'Candice Wu',
    email: 'candice@yahoo.com',
    date: '23/11/2024',
    packageCategory: 'Premium',
    amount: '$786.18',
    type: 'Paid User'
  },
  {
    id: '#Admin21474',
    name: 'Olivia Rhye',
    email: 'olivia@gmail.com',
    date: '11/12/2024',
    packageCategory: 'Standard',
    amount: '$741.12',
    type: 'Paid User'
  },
  {
    id: '#Admin21475',
    name: 'Sarah Davis',
    email: 'sarah@gmail.com',
    date: '5/2/2025',
    packageCategory: 'Standard',
    amount: '$571.08',
    type: 'Paid User'
  },
  {
    id: '#Admin21476',
    name: 'Emma Johnson',
    email: 'emma@gmail.com',
    date: '2/1/2025',
    packageCategory: 'Premium',
    amount: '$723.10',
    type: 'Paid User'
  },
  {
    id: '#Admin21477',
    name: 'Olivia Rhye',
    email: 'olivia@yahoo.com',
    date: '23/11/2024',
    packageCategory: 'Standard',
    amount: '$887.79',
    type: 'Free User'
  },
  {
    id: '#Admin21478',
    name: 'James Wilson',
    email: 'james@outlook.com',
    date: '6/3/2025',
    packageCategory: 'Premium',
    amount: '$34.60',
    type: 'Free User'
  },
  {
    id: '#Admin21479',
    name: 'Lana Steiner',
    email: 'lana@gmail.com',
    date: '17/11/2024',
    packageCategory: 'Premium',
    amount: '$183.75',
    type: 'Free User'
  },
  {
    id: '#Admin21480',
    name: 'Phoenix Baker',
    email: 'phoenix@gmail.com',
    date: '29/12/2024',
    packageCategory: 'Basic',
    amount: '$671.99',
    type: 'Paid User'
  },
  {
    id: '#Admin21481',
    name: 'Michael Brown',
    email: 'michael@outlook.com',
    date: '3/2/2025',
    packageCategory: 'Basic',
    amount: '$289.20',
    type: 'Free User'
  },
  {
    id: '#Admin21482',
    name: 'Candice Wu',
    email: 'candice@yahoo.com',
    date: '12/2/2025',
    packageCategory: 'Premium',
    amount: '$588.03',
    type: 'Free User'
  },
  {
    id: '#Admin21483',
    name: 'Sarah Davis',
    email: 'sarah@gmail.com',
    date: '25/2/2025',
    packageCategory: 'Premium',
    amount: '$844.25',
    type: 'Free User'
  },
  {
    id: '#Admin21484',
    name: 'Lana Steiner',
    email: 'lana@outlook.com',
    date: '7/12/2024',
    packageCategory: 'Premium',
    amount: '$528.01',
    type: 'Free User'
  },
  {
    id: '#Admin21485',
    name: 'Demi Wilkinson',
    email: 'demi@yahoo.com',
    date: '24/11/2024',
    packageCategory: 'Premium',
    amount: '$754.12',
    type: 'Paid User'
  },
  {
    id: '#Admin21486',
    name: 'Sarah Davis',
    email: 'sarah@outlook.com',
    date: '30/11/2024',
    packageCategory: 'Premium',
    amount: '$159.20',
    type: 'Free User'
  },
  {
    id: '#Admin21487',
    name: 'Sarah Davis',
    email: 'sarah@outlook.com',
    date: '3/1/2025',
    packageCategory: 'Premium',
    amount: '$308.09',
    type: 'Free User'
  },
  {
    id: '#Admin21488',
    name: 'Michael Brown',
    email: 'michael@gmail.com',
    date: '14/2/2025',
    packageCategory: 'Basic',
    amount: '$737.85',
    type: 'Free User'
  },
  {
    id: '#Admin21489',
    name: 'James Wilson',
    email: 'james@gmail.com',
    date: '26/11/2024',
    packageCategory: 'Basic',
    amount: '$625.43',
    type: 'Free User'
  },
  {
    id: '#Admin21490',
    name: 'Emma Johnson',
    email: 'emma@outlook.com',
    date: '14/11/2024',
    packageCategory: 'Standard',
    amount: '$813.14',
    type: 'Free User'
  },
  {
    id: '#Admin21491',
    name: 'Demi Wilkinson',
    email: 'demi@gmail.com',
    date: '20/1/2025',
    packageCategory: 'Premium',
    amount: '$29.28',
    type: 'Paid User'
  },
  {
    id: '#Admin21551',
    name: 'Olivia Rhye',
    email: 'olivia@yahoo.com',
    date: '1/2/2025',
    packageCategory: 'Basic',
    amount: '$198.07',
    type: 'Paid User'
  },
  {
    id: '#Admin21557',
    name: 'Sarah Davis',
    email: 'sarah@gmail.com',
    date: '25/2/2025',
    packageCategory: 'Basic',
    amount: '$318.36',
    type: 'Free User'
  }
]

interface PaymentTableProps {
    startIndex: number;
    endIndex: number;
    searchQuery: string;
}

export const PaymentTable = ({
    startIndex,
    endIndex,
    searchQuery,
}: PaymentTableProps) => {
    const filteredUsers = payments.filter((payment) => {
        const searchStr = searchQuery.toLowerCase();
        return (
            payment.id.toLowerCase().includes(searchStr) ||
            payment.name.toLowerCase().includes(searchStr) ||
            payment.email.toLowerCase().includes(searchStr)
        );
    });

    const displayedPayments = filteredUsers.slice(startIndex, endIndex);

    return (
        <div className="rounded-md">
            <Table>
                <TableHeader>
                    <TableRow className="bg-[#F9FAFB]">
                        <TableHead className="text-sm">User ID</TableHead>
                        <TableHead className="text-sm">Name</TableHead>
                        <TableHead className="text-sm">Email</TableHead>
                        <TableHead className="text-sm">Date</TableHead>
                        <TableHead className="text-sm">
                            PackageCategory
                        </TableHead>
                        <TableHead className="text-sm">Amount</TableHead>
                        <TableHead className="text-sm">Status</TableHead>
                        <TableHead className="text-sm">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {displayedPayments.map((payment) => (
                        <TableRow key={payment.id} className="text-sm">
                            <TableCell className="py-4 text-sm">
                                <Link
                                    to={`/plan/${payment.id}`}
                                    className="text-blue-600"
                                >
                                    {payment.id}
                                </Link>
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                {payment.name}
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                {payment.email}
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                {payment.date}
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                {payment.packageCategory}
                            </TableCell>
                            <TableCell className="py-4 text-blue-600 text-sm">
                                {payment.amount}
                            </TableCell>
                            <TableCell className="py-4 text-sm">
                                <Badge
                                    variant={"secondary"}
                                    className={
                                        payment.type === "Paid User"
                                            ? "bg-[#ECFDF3] text-[#23C16B]"
                                            : "bg-[#FEF3F2] text-[#FF3A3A]"
                                    }
                                >
                                    {payment.type}
                                </Badge>
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
