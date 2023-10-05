import { Link } from 'react-router-dom';
import author from '../../assets/author.png'
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";



export default function About(){
    return(
        <>
        <div className="about grid gap-10 grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 items-center py-20">
            {/* ---------------image-section--------- */}
            <div className=''>
                <div className='relative'>
                <img className='w-11/12' src={author} alt="" />
                <div className='absolute inset-y-2/4 right-0 '>
                    <ul className='bg-white px-6 py-4' >
                        <li><Link to='/'><FaFacebookF/></Link></li>
                        <li><Link to='/'><FaTwitter/></Link></li>
                        <li><Link to='/'><FaLinkedinIn/></Link></li>
                    </ul>
                </div>
                </div>
            </div>
            {/* ---------Content----------- */}
            <div>

            </div>
        </div>
        </>
    )
}