import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}
export function LoginForm() {
  // ----------for from------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // Submit your data into Redux store
  const onSubmit = (data: LoginFormInputs) => {
    // signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-between">
          <img className="h-10  " src={logo} alt="Your Company" />
          <Link className="font-bold  text-indigo-600" to="/">Signup</Link>
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* --------------form part-----------     */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please Give Email",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Privide  a Valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          {/* ----------------password--------------- */}
          <div className="py-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ps-3"
              id="inputPassword"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please Give password",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 Characters or longer",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>

          <Link to="" className="text-indigo-600 font-semibold">Forgot password?</Link>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
