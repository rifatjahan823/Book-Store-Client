import Hero from "../components/Home/Hero";
import Feature from "../components/Home/Feature";
import About from "../components/Home/About";
import Help from "../components/Home/Help";
import Book from "../components/Home/Book";
import Video from "../components/Home/Video";
import Process from "../components/Home/Process";
import ChoseUs from "../components/Home/ChoseUs";
import Blog from "../components/Home/Blog";
import NewsLetter from "../components/Home/NewsLatter";


export default function Home() {
    return(
        <>
            <Hero></Hero>
            <Feature></Feature>
            <About></About>
            <Help></Help>
            <Book></Book>
            <Video></Video>
            <Process></Process>
            <ChoseUs/>
            <Blog/>
            <NewsLetter/>
        </>
    )
}