import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <section className="px-2 py-4">
      <Logo />
      <section className="flex flex-col items-center gap-8 py-8">
        <span className="flex flex-col items-center gap-1">
          <h1 className="font-inter text-[2rem] font-bold text-secondary">
            Log in or Sign up
          </h1>
          <p className="w-[18rem] text-center font-inter text-sm font-light text-[#434343]">
            Join millions of others in sharing successful moves on{" "}
            <span className="font-sen">HelpMeOut. </span>
          </p>
        </span>

        <span className="flex flex-col gap-4">
          <button
            onClick={() => alert("🚫 Could not access your credentials!!!")}
            className="flex items-center gap-4 rounded-xl border-2 border-secondary bg-white px-20 py-2"
          >
            <FcGoogle />
            Continue with Google
          </button>
          <button
            onClick={() => alert("🚫 Could not access your credentials")}
            className="flex items-center gap-4 rounded-xl border-2 border-secondary bg-white px-20 py-2"
          >
            <span className="text text-[#3958f4]">
              <FaFacebook />
            </span>
            Continue with Facebook
          </button>
        </span>

        <span>
          <hr className="h-[1px] w-80 border-0 bg-grey/[.5]"></hr>
          <span className="mx-auto -mt-[0.8rem] block w-10 bg-background text-center text-grey">
            or
          </span>
        </span>

        <form
          onSubmit={() => navigate("/recording")}
          className="flex w-full flex-col gap-4 px-2 sm:w-96"
        >
          <label
            className="font-worksans text-lg font-medium text-secondary"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded-lg border-2 border-grey px-2 py-3"
            id="email"
            placeholder="Enter any email address"
            name="email"
            type="email"
            required
          />
          <label
            className="font-worksans text-lg font-medium text-secondary"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            className="rounded-lg border-2 border-grey px-2 py-3"
            placeholder="Enter any password"
            name="password"
            type="password"
            required
          />
          <button className="rounded-lg bg-primary px-5 py-4 text-white">
            Sign in
          </button>
          <span className="text-center text-[#000]">
            {`Don't have an account?`}{" "}
            <a className="text-[#4144f9] hover:underline" href="#">
              Sign Up
            </a>{" "}
          </span>
        </form>
      </section>
    </section>
  );
}

export default Login;
