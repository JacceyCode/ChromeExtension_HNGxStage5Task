import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="laptop:px-[6.25rem] laptop:py-32 laptop:justify-start tablet:gap-4 flex w-full flex-wrap items-center justify-center gap-20 bg-white px-4 py-16">
      <section className="tablet:flex-1 flex flex-col items-start justify-center space-y-4">
        <h1 className="laptop:text-[3rem] desktop:text-[4rem] font-sora text-[2rem] font-bold leading-[100%] text-secondary">
          Show Them <br /> Don’t Just Tell
        </h1>
        <p className="text-black/75 desktop:text-xl font-inter text-lg font-normal">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link className="desktop:p-6 flex items-center justify-start gap-4 rounded-md bg-primary p-3 font-worksans text-lg font-medium text-white">
          Install HelpMeOut <HiArrowRight />{" "}
        </Link>
      </section>

      <section className="tablet:flex-1 relative grid w-full grid-cols-2 grid-rows-2 items-stretch justify-items-stretch gap-4">
        {/* <img
          className="absolute -right-12 -top-14"
          src="./images/svg1.png"
          alt="dots"
        />

        <img
          className="absolute -bottom-24 -left-10"
          src="./images/svg2.png"
          alt="dots"
        /> */}

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
    </section>
  );
}

export default Hero;
