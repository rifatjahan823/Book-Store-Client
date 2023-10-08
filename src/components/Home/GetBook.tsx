import { IBook } from "../../types/globalTypes";
import bookImg from "../../assets/book-mockup2.png";

interface IProps {
  book: IBook;
}
export default function GetBook({ book }: IProps) {
  return (
    <>
      <div>
        <img className="w-full" src={bookImg} alt="" />
        <div className="bg-[#F4F4F4] px-3.5 py-5">
          <p>{book?.genre}</p>
          <h3 className="text-xl font-bold py-2">{book?.title}</h3>
        </div>
      </div>
    </>
  );
}
