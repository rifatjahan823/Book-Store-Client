import { useGetProductQuery } from "../../redux/features/product/productApi";
import { IBook } from "../../types/globalTypes";
import GetBook from "./GetBook";

export default function Book() {
  const { data, isLoading } = useGetProductQuery(undefined);

  return (
    <div className="book_section mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 py-20">
      <h3 className="text-base font-semibold tracking-[3px] pb-2">BEST SELLER</h3>
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="text-[#121722] text-4xl font-bold">Pick The Book Weekly Best Seller.</h2>
        <button className="text-base text-white bg-[#212529] py-3.5 px-6 border border-[#212529] rounded-full font-medium tracking-[1px] hover:bg-transparent hover:text-[#212529] transition duration-700 ">Find More in Shop</button>
      </div>
      {/* -------------product----------- */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 pt-16">
        {
          isLoading?(
            <p>Loading.............</p>
          )
          :
            data?.data?.map((book:IBook)=>(
                <GetBook book={book}/>
            ))
        }
      </div>
    </div>
  );
}
