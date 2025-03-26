
export interface User {
  id: string;
  name: string;
  email: string;
  date: string;
  packageCategory: string;
  amount: string;
  type: string;
}

export interface Payment {
  id: string;
  name: string;
  email: string;
  date: string;
  packageCategory: string;
  amount: number; // Assuming it's a number, change if needed
  type: "Paid User" | "Free User"; // Add more types if necessary
}


export interface Transaction {
  userName: string;
  packageName: string;
  email: string;
  phoneNo: string;
  amount: string;
  coupon: string;
  date: string;
  status: string;
}
