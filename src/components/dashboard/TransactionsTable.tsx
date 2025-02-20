
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const transactions = [
  {
    name: "Olivia Rhye",
    email: "OliviaRhye@gmail.com",
    category: "Data Science",
    date: "04/05/2024",
    amount: "₹ 45,000",
  },
  {
    name: "Jackson Smith",
    email: "jackson.s@gmail.com",
    category: "Machine Learning",
    date: "04/05/2024",
    amount: "₹ 55,000",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@gmail.com",
    category: "Web Development",
    date: "03/05/2024",
    amount: "₹ 35,000",
  },
  {
    name: "Liam Johnson",
    email: "liam.j@gmail.com",
    category: "Data Science",
    date: "03/05/2024",
    amount: "₹ 45,000",
  },
  {
    name: "Sophia Brown",
    email: "sophia.b@gmail.com",
    category: "Machine Learning",
    date: "02/05/2024",
    amount: "₹ 50,000",
  },
  {
    name: "Noah Davis",
    email: "noah.d@gmail.com",
    category: "Web Development",
    date: "02/05/2024",
    amount: "₹ 40,000",
  },
  {
    name: "Ava Miller",
    email: "ava.m@gmail.com",
    category: "Data Science",
    date: "01/05/2024",
    amount: "₹ 45,000",
  },
  {
    name: "Lucas Garcia",
    email: "lucas.g@gmail.com",
    category: "Machine Learning",
    date: "01/05/2024",
    amount: "₹ 55,000",
  },
  {
    name: "Isabella Martinez",
    email: "isabella.m@gmail.com",
    category: "Web Development",
    date: "30/04/2024",
    amount: "₹ 35,000",
  },
  {
    name: "Mason Anderson",
    email: "mason.a@gmail.com",
    category: "Data Science",
    date: "30/04/2024",
    amount: "₹ 45,000",
  }
];

export function TransactionsTable() {
  return (
    <div className="bg-white rounded-lg border border-border">
      <div className="p-6 flex items-center justify-between border-b border-border">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <Button variant="outline">Export to PDF</Button>
      </div>
      
      <ScrollArea className="h-[400px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Package Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{transaction.email}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Invoice
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}