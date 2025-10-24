export interface Address {
    id:number;
  addline1: string;
  addline2: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface User {
  id: number;
  name: string;
  mobNumber: string;
  age: number;
  dob: string;
  email: string;
  password: string;
  address: Address;
  languages: string[];
  gender: 'Male' | 'Female' | 'Other';
  aboutyou: string;
  uploadPhoto: string;
  role: 'Admin' | 'Customer' | 'Seller' | 'Buyer';
  agree: boolean;
}

export interface Product {
  id: number;
  name: string;
  uploadPhoto: string;
  productDesc: string;
  mrp: number;
  dp: number;
  status: 'Available' | 'Out of Stock' | 'Pending' | 'Delivered' | 'Shipped' | 'Processing';
}

export interface DeliveryAddress {
  id: number;
  addLine1: string;
  addLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Order {
  id: number;
  userId: number;
  sellerId: number;
  product: Product;
  deliveryAddress: DeliveryAddress;
  contact: string;
  dateTime: string; // ISO date string
}