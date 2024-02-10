import { ProductsFetchResponse } from "@/types/ProductsFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/app/utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query_string: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL,
        {query: query_string}
    )
}

export function UseProducts(){
    const {type, priority, search} = useFilter();
    const searchDeferred = useDeferredValue(search);
    const query_string = mountQuery(type, priority);
    const {data} = useQuery({
        queryFn: () => fetcher(query_string),
        queryKey: ['products', type, priority]
    })

    const products = data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return {
        data: filteredProducts
    }
}
