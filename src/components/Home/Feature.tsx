import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function Feature() {
    return(
    <>
    {/* --------------Feature-section-------- */}
    <div className="feature_section bg-[#0067B8] p-3 flex justify-center items-center h-24">
        <h3 className="text-lg text-white font-semibold"><Link className="underline" to='/'>insert your details and go</Link>*eBook includes iBooks, PDF &amp; ePub versions, Copy the title thatfits best,</h3> <BsArrowRight  className="ml-2 text-white text-xl font-semibold"/>
    </div>
    
    </>
    )
}