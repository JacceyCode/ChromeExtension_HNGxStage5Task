import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Header() {
  return (
    <header className="flex flex-col items-center justify-between gap-4 border-b-2 border-solid border-background bg-white px-[2rem] py-[1.5rem] md:flex-row lg:px-[7rem] 2xl:px-[9rem]">
      <Logo />
      <nav className="flex items-center gap-[2.4rem] font-worksans text-base font-medium text-[#000]">
        <a href="#features">Features</a>
        <a href="#howitworks">How it Works</a>
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
