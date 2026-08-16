export interface Book {
  pagesNumber: number;
  title: string;
  stock: number;
  genre: string;
  onSaleDate: Date;
  author: string;
  image: string;
  price: number
}
export interface SearchMetadata {
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  searchString: string;
}

export interface GridDataResponse {
  books: Book[];
}
export enum Order {
  HIGH_PRICE = 1,
  LOW_PRICE = 2,
  LATEST = 3,
}
