import book from '../../assets/book-image-main.png'

export default function Hero (){
return(
    <div className="hero_section bg-[#003461]">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 items-center">
            {/* ----------Content----------- */}
            <div>
                <p>50% discount on early purchase</p>
                <h1>Settle Your Daily life Issue in 1 Minute.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius mod tempor incididunt labore mod tempor incididunt ut labore adipiscing.</p>
            </div>
            {/* ---------------Book----------------- */}
            <div>
                <img src={book} alt="" />
            </div>
        </div>
    </div>
)
}