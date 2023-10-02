import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="flex flex-wrap justify-center gap-20 bg-white px-4 py-16 sm:gap-24 sm:py-32 lg:px-32 xl:flex-nowrap">
      <section className="flex flex-col items-start justify-center">
        <h1 className="mb-[1.25rem] font-sora text-[3rem] font-bold leading-[100%] text-secondary sm:text-[4rem]">
          Show Them <br /> Don’t Just Tell
        </h1>
        <p className="mb-12 font-inter text-lg font-normal text-[#000]/[.75] sm:w-[34.25rem]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link className="flex w-64 items-center justify-start gap-4 rounded-md bg-primary p-6 font-worksans text-lg font-medium text-white">
          Install HelpMeOut <HiArrowRight />{" "}
        </Link>
      </section>
      <section className="relative grid border-2 px-4">
        <section className="grid grid-cols-2 grid-rows-2 gap-4 border-2">
          <img
            className="z-10 w-[20.5rem] rounded-lg xl:border-2 2xl:w-[30rem]"
            src="./images/image1.png"
            alt="image"
          />
          <img
            className="z-10 w-[20.5rem] rounded-lg xl:border-2 2xl:w-[30rem]"
            src="./images/image2.png"
            alt="image"
          />
          <img
            className="z-10 col-start-2 row-start-1 row-end-3 w-[20rem] rounded-lg xl:border-2 2xl:w-[22.5rem]"
            src="./images/image3.png"
            alt="image"
          />
        </section>
        <img
          className="absolute -right-2 -top-6 w-[10rem] sm:-right-[1.5rem] sm:-top-[3.5rem] sm:w-[20rem] lg:-right-[1.8rem] lg:-top-[3.9rem] lg:w-[22rem] xl:w-[12rem] 2xl:-right-[1.8rem] 2xl:-top-[3.9rem] 2xl:w-[22rem]"
          src="./images/svg1.png"
          alt="dots"
        />
        <img
          className="absolute -bottom-12 w-[10rem] sm:-bottom-[5.2rem] sm:-left-[1.5rem] sm:w-[20rem] lg:-bottom-[5.9rem] lg:-left-[1.6rem] lg:w-[22rem] xl:w-[12rem] 2xl:-bottom-[5.9rem] 2xl:-left-[1.6rem] 2xl:w-[22rem]"
          src="./images/svg2.png"
          alt="dots"
        />
      </section>
    </section>
  );
}

export default Hero;
