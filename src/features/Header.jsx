import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function Header() {
  return (
    <header className="tablet:flex-row laptop:px-[6.25rem] tablet:justify-between flex w-full flex-col items-center justify-center gap-2 border-b-2 border-solid border-background bg-white px-4 py-[0.75rem]">
      <Logo />
      <nav className="text-black laptop:gap-[2.4rem] laptop:text-xl flex items-center space-x-4 font-worksans text-sm font-medium">
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
