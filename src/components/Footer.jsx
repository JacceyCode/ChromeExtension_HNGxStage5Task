function Footer() {
  return (
    <footer className="flex flex-wrap items-start justify-evenly bg-primary px-12 py-[6rem] text-white">
      <span className="flex items-center gap-4">
        <img
          className="h-[2.5rem] w-[2.5rem]"
          src="./images/icon-white.png"
          alt="logo"
        />
        <h3 className="font-inter text-base font-bold">HelpMeOut</h3>
      </span>
      <ul className="space-y-[1.5rem]">
        <li className="font-sora text-base font-semibold">
          <a href="#">Menu</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">Home</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">Converter</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">How it Works</a>
        </li>
      </ul>

      {/* //////////////////// */}
      <ul className="space-y-[1.5rem]">
        <li className="font-sora text-base font-semibold">
          <a href="#">About us</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">About</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">Contact Us</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">Privacy Policy</a>
        </li>
      </ul>

      {/* ///////////////// */}
      <ul className="space-y-[1.5rem]">
        <li className="font-sora text-base font-semibold">
          <a href="#">Screen Record</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">Browser Window</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">Desktop</a>
        </li>
        <li className="font-worksans text-base font-light">
          <a href="#">Application</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
