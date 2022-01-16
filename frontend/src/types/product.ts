export interface IFilter<TItem> {
  entities: TItem[];
  pageItemsCount: number;
  pageNumber: number;
  pagesCount: number;
  totalItemsCount: number;
}

export interface IProduct {
  date_created: Date;
  id: number;
  image: string;
  slug: string;
  price: string;
  title: string;
}
