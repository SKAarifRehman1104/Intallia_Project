


export interface User {
  UserId: string;
  Email: string;
  UserGroupId: string;
  CompanyId: string;
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
  CreateBy: string;
  CreateDate: Date;
  ModifyBy: string;
  ModifyDate: Date;
}

export interface Plan {
  PlanID: string;
  UserID: string;
  PackageName: string;
  Plan1: string;
  Plan2: string;
  Plan3: string;
}

export interface UserEduction {
  Education: string;
  UserId: string;
  Degree: string;
  Description: string;
  StartDate: Date;
  EndDate: Date;
  CreateBy: string;
  CreateDate: Date;
  ModifyBy: null;
  ModifyDate:Date;
}



