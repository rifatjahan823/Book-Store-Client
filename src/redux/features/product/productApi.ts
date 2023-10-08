import { api } from "../../api/apiSlice";

const productApi=api.injectEndpoints({
    endpoints:(builder)=>({
        // ----------get-product----------
        getProduct:builder.query({
            query:()=>'/book'
        })
    })
})

export const{useGetProductQuery}=productApi