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
      <section className="relative flex items-center justify-center px-4">
        <section className="flex gap-4">
          <section className="flex flex-col gap-4">
            <img
              className="z-10 w-[20.5rem] rounded-lg xl:w-[25rem] 2xl:w-[30rem]"
              src="./images/image1.png"
              alt="image"
            />
            <img
              className="z-10 w-[20.5rem] rounded-lg xl:w-[25rem] 2xl:w-[30rem]"
              src="./images/image2.png"
              alt="image"
            />
          </section>
          <section className="flex">
            <img
              className="z-10 w-[20rem] rounded-lg xl:w-[25rem] 2xl:w-[22.5rem]"
              src="./images/image3.png"
              alt="image"
            />
          </section>
        </section>
        <img
          className="absolute -right-2 -top-8 w-[10rem] sm:-right-[1.9rem] sm:-top-[3.5rem] sm:w-[20rem] lg:-right-[1.8rem] lg:-top-[3.9rem] lg:w-[22rem] xl:-right-[.5rem] xl:top-[.8rem] xl:w-[10rem] 2xl:-right-[2.2rem] 2xl:-top-[3.9rem] 2xl:w-[22rem]"
          src="./images/svg1.png"
          alt="dots"
        />
        <img
          className="absolute -bottom-10 -left-0 w-[10rem] sm:-bottom-[5.2rem] sm:-left-[1.5rem] sm:w-[20rem] lg:-bottom-[.3rem] lg:-left-[0.5rem] lg:w-[22rem] xl:w-[10rem] 2xl:-bottom-[5.9rem] 2xl:-left-[1.6rem] 2xl:w-[22rem]"
          src="./images/svg2.png"
          alt="dots"
        />
      </section>
    </section>
  );
}

export default Hero;
