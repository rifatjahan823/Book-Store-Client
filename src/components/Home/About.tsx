import { Link } from 'react-router-dom';
import author from '../../assets/author.png'
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
import { BsCheckLg, BsDashLg } from "react-icons/bs";
import signature from '../../assets/signature-1.png'



export default function About(){
    return(
        <>
        <div className="about grid gap-10 grid-cols-1 md:grid-cols-2  mx-auto w-11/12 lg:w-10/12 items-center py-20">
            {/* ---------------image-section--------- */}
                <div className='relative'>
                <img className='w-11/12' src={author} alt="" />
                <div className='absolute inset-y-2/4 lg:right-6 md:right-3.5 right-4'>
                    <ul className='bg-white px-5 py-7 rounded-full border-dashed border-2 border-[#1883db] hover:border-solid' >
                        <li><Link to='/'><FaFacebookF className="text-xl text-[#3B5998]"/></Link></li>
                        <li className='py-5'><Link to='/' ><FaTwitter className="text-xl text-[#1DA1F2]"/></Link></li>
                        <li><Link to='/'><FaLinkedinIn className="text-xl text-[#0077B5]"/></Link></li>
                    </ul>
                </div>
            </div>
            {/* ---------Content----------- */}
            <div>
                <h3 className='text-[#1882db] text-base font-bold tracking-[3px]'> <BsDashLg className="inline-block text-3xl text-[#1882db] " /> AUTHOR & PUBLISHER</h3>
                <h2 className='text-[#212529] text-6xl font-bold py-4'>Christina Tores Mike</h2>
                <p className='py-6 text-[#212529] text-lg'>Lorem ipsum dolor sit amet, con ge sectetur adipiiscing elit, eius Lorem ipsum dolor sit amet, coniscinsectetur adipiscing elit, eius mod tempor incididunt labore mod sit amet adipiscingconsectetur.</p>
                <div>
                <h3 className='text-[#1e263b] text-2xl font-medium pb-4'><BsCheckLg className="inline-block text-2xl text-[#1882db] " /> About Writting More Accomplished</h3>
                <h3 className='text-[#1e263b] text-2xl font-medium pb-4'><BsCheckLg className="inline-block text-2xl text-[#1882db] " /> Exceptionally Energetic Accomplished 10+ Granted</h3>
                <h3 className='text-[#1e263b] text-2xl font-medium pb-4'><BsCheckLg className="inline-block text-2xl text-[#1882db] " /> More Accomplished 10+ Granted</h3>
                <h3 className='text-[#1e263b] text-2xl font-medium pb-4'><BsCheckLg className="inline-block text-2xl text-[#1882db] " /> Exceptionally Energetic About Writting</h3>
                <h3 className='text-[#1e263b] text-2xl font-medium pb-4'><BsCheckLg className="inline-block text-2xl text-[#1882db] " /> Most Popular Writter In The Year</h3>
                </div>
                <img className='pt-4 pb-6' src={signature} alt="" />
                <button className='text-base font-medium rounded-full text-white py-3.5 px-6 bg-[#0176FF] tracking-[1px] hover:bg-[#0B5ED7] transition duration-700'>Learn More</button>
            </div>
        </div>
        </>
    )
}