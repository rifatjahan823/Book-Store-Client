import icon1 from '../../assets/icon-1.svg';
import icon2 from '../../assets/icon-2.svg'


export default function NewsLetter() {
  return (
    <div className="mx-auto w-11/12 lg:w-10/12 pb-24">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 bg-[#003461] justify-center items-center text-white p-10">
        {/* --------------- */}
        <div className='border-r-2 border-[#67849D] flex items-center'>
            <img className='bg-contain mr-4' src={icon1} alt=""  />
          <div>
            <h3 className='font-semibold text-2xl'>Book Information?</h3>
            <p className='text-lg'>Please send us an email at support@bookpress.com</p>
          </div>
        </div>
        {/* --------------- */}
        <div className='flex items-center'>
            <img className='bg-contain mr-4' src={icon2} alt=""  />
          <div>
            <h3 className='font-semibold text-2xl'>Book Information?</h3>
            <p className='text-lg'>Please send us an email at support@bookpress.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
