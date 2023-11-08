function Footer() {
  return (
    <footer className="bg-primary">
      <section className="laptop:px-20 tablet:flex-row laptop:space-x-40 tablet:space-x-20 tablet:px-12 tablet:items-start m-auto flex max-w-[90rem] flex-col items-center px-4 py-[6rem] text-white">
        {/* //////////////////////////// */}
        <span className="mb-12 flex items-center justify-center space-x-4">
          <img
            className="h-[2.5rem] w-[2.5rem]"
            src="./images/icon-white.png"
            alt="logo"
          />
          <h3 className="font-inter text-base font-bold">HelpMeOut</h3>
        </span>

        <span className="tablet:basis-3/4 flex w-full items-start justify-between space-x-4">
          {/* /////////////////// */}
          <ul className="space-y-[1.5rem] font-worksans text-base">
            <li className="font-sora font-semibold">
              <a href="#">Menu</a>
            </li>
            <li className="font-light">
              <a href="#">Home</a>
            </li>
            <li className="font-light">
              <a href="#">Converter</a>
            </li>
            <li className="font-light">
              <a href="#">How it Works</a>
            </li>
          </ul>

          {/* //////////////////// */}
          <ul className="space-y-[1.5rem] font-worksans text-base">
            <li className="font-sora font-semibold">
              <a href="#">About us</a>
            </li>
            <li className="font-light">
              <a href="#">About</a>
            </li>
            <li className="font-light">
              <a href="#">Contact Us</a>
            </li>
            <li className="font-light">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>

          {/* ///////////////// */}
          <ul className="space-y-[1.5rem] font-worksans text-base">
            <li className="font-sora font-semibold">
              <a href="#">Screen Record</a>
            </li>
            <li className="font-light">
              <a href="#">Browser Window</a>
            </li>
            <li className="font-light">
              <a href="#">Desktop</a>
            </li>
            <li className="font-light">
              <a href="#">Application</a>
            </li>
          </ul>
        </span>
      </section>
    </footer>
  );
}

export default Footer;
