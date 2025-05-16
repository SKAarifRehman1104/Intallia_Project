
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
  type: "Paid" | "Free"; // Add more types if necessary
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

export interface Invitation {
  id: string;
  packageName: string;
  validity: string;
  price: string;
  activeUsers: string;
  status: string;
  invoice: string;
}

export interface Company {
  CompanyId: string;
  CompanyName: string;
  ContactPersonName: string;
  Website: string;
  PhoneNumber: string;
  Email: string;
  Address: string;
  City: string;
  State: string;
  Country: string;
  Status: string;
  CreateBy: Date;
  CreateDate: Date;
  ModifyBy: string;
  ModifyDate: Date;
}
