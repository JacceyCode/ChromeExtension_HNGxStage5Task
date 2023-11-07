import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="laptop:flex-nowrap laptop:px-[6.25rem] laptop:py-32 laptop:justify-start flex w-full flex-wrap items-center justify-center gap-8 bg-white px-4 py-16">
      <section className="flex flex-col items-start justify-center">
        <h1 className="tablet:text-[3rem] mb-[1.25rem] font-sora text-[2.4rem] font-bold leading-[100%] text-secondary">
          Show Them <br /> Don’t Just Tell
        </h1>
        <p className="text-black/75 mb-12 font-inter text-lg font-normal">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link className="flex w-64 items-center justify-start gap-4 rounded-md bg-primary p-6 font-worksans text-lg font-medium text-white">
          Install HelpMeOut <HiArrowRight />{" "}
        </Link>
      </section>

      <section className="bg-black relative grid w-full grid-cols-2 grid-rows-2 items-stretch justify-items-stretch gap-4">
        <img
          className="absolute -right-12 -top-14 z-20"
          src="./images/svg1.png"
          alt="dots"
        />

        <img
          className="absolute -bottom-24 -left-10 z-20"
          src="./images/svg2.png"
          alt="dots"
        />

        <img
          className="z-10 rounded-lg"
          src="./images/image1.png"
          alt="image"
        />
        <img
          className="z-10 rounded-lg"
          src="./images/image2.png"
          alt="image"
        />
        <img
          className="z-10 col-start-2 row-span-2 row-start-1 rounded-lg"
          src="./images/image3.png"
          alt="image"
        />
      </section>
      {/* <section className="relative flex items-center justify-center px-4">
        <section className="flex gap-4">
          <section className="flex flex-col gap-4">
            <img
              className="z-10 rounded-lg xl:w-[25rem] 2xl:w-[30rem]"
              src="./images/image1.png"
              alt="image"
            />
            <img
              className="z-10 rounded-lg xl:w-[25rem] 2xl:w-[30rem]"
              src="./images/image2.png"
              alt="image"
            />
          </section>
          <section className="flex">
            <img
              className="z-10 rounded-lg xl:w-[24.5rem] 2xl:w-[29rem]"
              src="./images/image3.png"
              alt="image"
            />
          </section>
        </section>
        <img
          className="absolute -right-2 -top-7 w-[10rem] sm:-right-[1.9rem] sm:-top-[3.5rem] sm:w-[20rem] lg:-right-[2.2rem] lg:-top-[3.9rem] lg:w-[22rem]  xl:-right-[.6rem] xl:top-[.6rem] xl:w-[11rem] 2xl:-right-[2.7rem] 2xl:-top-[4.4rem] 2xl:w-[25rem]"
          src="./images/svg1.png"
          alt="dots"
        />

        <img
          className="absolute -bottom-10 -left-1 w-[10rem] sm:-bottom-[5.2rem] sm:-left-[1.5rem] sm:w-[20rem] lg:-bottom-[5.9rem] lg:-left-[2rem] lg:w-[22rem] xl:-bottom-[.5rem] xl:-left-[.6rem] xl:w-[11rem] 2xl:-bottom-[6.7rem] 2xl:-left-[2.1rem] 2xl:w-[25rem]"
          src="./images/svg2.png"
          alt="dots"
        />
      </section> */}
    </section>
  );
}

export default Hero;
