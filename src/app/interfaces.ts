export interface Product {
  name: string;
  category: string;
  quantity: number;
  limit: number;
  on_order: number;
}

export interface Order {
  id: number;
  userid: string;
  placed_date: string;
  pickup_date: string;
  status: string;
}

export interface User {
  firstname: string;
  lastname: string;
  birthdate: string;
  bannerid: string;
  emailid: string;
  password: string;
  totalorders: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
