import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function Header() {
  return (
    <header className="laptop:flex-row laptop:px-[6.25rem] laptop:justify-between flex w-full flex-col items-center justify-center gap-2 border-b-2 border-solid border-background bg-white px-4 py-[0.75rem]">
      <Logo />
      <nav className="text-black laptop:gap-[2.4rem] flex items-center gap-3 font-worksans text-base font-medium">
        <a href="#features">Features</a>
        <a href="#howitworks">How it Works</a>
        <NavLink to="/recording">See Recording</NavLink>
      </nav>
      <Link
        to="/login"
        className="font-sora text-lg font-semibold text-primary"
      >
        Get Started
      </Link>
    </header>
  );
}

export default Header;
