import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        className="h-[2.5rem] w-[2.5rem]"
        src="./images/icon.png"
        alt="logo"
      />
      <h3 className="font-inter text-base font-bold text-[#100A42]">
        HelpMeOut
      </h3>
    </Link>
  );
}

export default Logo;
