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