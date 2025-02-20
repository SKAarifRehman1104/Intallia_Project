import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { CategorySales } from "@/components/dashboard/CategorySales";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";
import { Users, UserCheck, UserPlus, UserX, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

const Index = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {startDate ? format(startDate, "dd/MM/yyyy") : "Start Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
            <span className="text-sm text-muted-foreground">To</span>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {endDate ? format(endDate, "dd/MM/yyyy") : "End Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard
            title="Total Users"
            value="12,000"
            icon={<Users className="h-6 w-6 text-primary" />}
          />
          <StatsCard
            title="Paid Users"
            value="12,000"
            icon={<UserCheck className="h-6 w-6 text-primary" />}
          />
          <StatsCard
            title="New Users"
            value="12,000"
            icon={<UserPlus className="h-6 w-6 text-primary" />}
          />
          <StatsCard
            title="Unpaid Users"
            value="12,000"
            icon={<UserX className="h-6 w-6 text-primary" />}
          />
          <StatsCard
            title="Total Sales"
            value="₹ 25,12,200"
            icon={<DollarSign className="h-6 w-6 text-primary" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <CategorySales />
          </div>
        </div>

        <TransactionsTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;