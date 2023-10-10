import book from '../assets/book-image-main.png'
import { SignupForm } from '../components/SignupForm'


export function SignUp(){
    return(
        <div className="grid lg:grid-cols-2  items-center">
        <div>
      <img className="w-full min-h-screen lg:block hidden" src={book}alt="" />
        </div>
      <div className="md:px-0 px-8 lg:mt-0 mt-10">
      <SignupForm/>
      </div>
      </div>
    )
}