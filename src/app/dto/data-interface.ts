import { FiltersResponse } from "./filters-response";
import { ProductListInterface } from "./product-list-interface";
import { SortResponse } from "./sort-response";

export interface DataInterface {
    page: number;
    pageSize: number;
    totalProducts: number;
    totalPages: number;

    filters: FiltersResponse[];
    sortOptions: SortResponse[];

    products: ProductListInterface[];
}