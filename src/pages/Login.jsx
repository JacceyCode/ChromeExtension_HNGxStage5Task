import { FcGoogle } from "react-icons/fc";
import { FaAngleLeft, FaFacebook } from "react-icons/fa6";

import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="m-auto h-screen max-w-[50rem] px-4 py-10">
      <>
        <span className="tablet:block hidden">
          <Logo />
        </span>
        <Link to="/" className="tablet:hidden block">
          <FaAngleLeft />
        </Link>
      </>

      <section className="m-auto flex max-w-[25rem] flex-col items-center justify-center space-y-8">
        <span className="flex flex-col items-center">
          <h1 className="mb-1 font-inter text-[2rem] font-bold text-secondary">
            {status ? "Sign Up" : "Log In"}
          </h1>
          <p className="tablet:px-12 px-2 text-center font-inter text-sm font-light text-[#434343]">
            Join millions of others in sharing successful moves on{" "}
            <span className="font-sen">HelpMeOut. </span>
          </p>
        </span>

        <span className="flex w-full flex-col space-y-4 px-2">
          <button
            onClick={() => alert("🚫 Could not access your credentials!!!")}
            className="flex items-center justify-center space-x-4 rounded-xl border-2 border-secondary bg-white py-3"
          >
            <FcGoogle />
            <span>Continue with Google</span>
          </button>

          <button
            onClick={() => alert("🚫 Could not access your credentials")}
            className="flex items-center justify-center space-x-4 rounded-xl border-2 border-secondary bg-white py-3"
          >
            <span className="text-[#3958f4]">
              <FaFacebook />
            </span>
            <span>Continue with Facebook</span>
          </button>
        </span>

        <span className="w-full px-2">
          <hr className="h-[1px] border-0 bg-grey/[.5]"></hr>
          <span className="mx-auto -mt-[0.8rem] block w-10 bg-background text-center text-grey">
            or
          </span>
        </span>

        <form
          onSubmit={() => navigate("/recording")}
          className="flex w-full flex-col space-y-4 px-2"
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
            placeholder="Enter your email address"
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
            placeholder="Enter your password"
            name="password"
            type="password"
            required
          />
          <button className="rounded-lg bg-primary px-5 py-4 text-white">
            {status ? "Sign Up" : "Sign In"}
          </button>

          <span className="text-center text-[#000]">
            {`${!status ? "Don't" : "Already"} have an account?`}{" "}
            <a
              className="text-[#4144f9] hover:underline"
              onClick={() => setStatus((prev) => !prev)}
              href="#"
            >
              {status ? "Sign In" : "Sign Up"}
            </a>{" "}
            <br />
            Or{" "}
            <Link to="/recording" className="text-[#4144f9] hover:underline">
              visit as a guest
            </Link>{" "}
            .
          </span>
        </form>
      </section>
    </section>
  );
}

export default Login;
