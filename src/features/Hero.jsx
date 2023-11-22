import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="bg-white">
      <section className="m-auto flex w-full max-w-[90rem] flex-wrap items-center justify-center gap-20 px-4 py-16 tablet:gap-4 laptop:justify-start laptop:px-[6.25rem] laptop:py-32">
        <section className="flex flex-col items-start justify-center space-y-4 tablet:flex-1">
          <h1 className="font-sora text-[2rem] font-bold leading-[100%] text-secondary laptop:text-[3rem] desktop:text-[4rem]">
            Show Them <br /> Don’t Just Tell
          </h1>
          <p className="font-inter text-lg font-normal text-black/75 desktop:text-xl">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <Link className="flex items-center justify-start gap-4 rounded-md bg-primary p-3 font-worksans text-lg font-medium text-white desktop:p-6">
            Install HelpMeOut <HiArrowRight />{" "}
          </Link>
        </section>

        <section className="relative grid w-full grid-cols-2 grid-rows-2 items-stretch justify-items-stretch gap-4 tablet:flex-1">
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

          {/* /////////////////// SVG ///////////////////////// */}

          <span className="absolute hidden h-4/6 w-1/2 laptop:-right-4 laptop:-top-[2.1rem] laptop:block desktop:-right-8 desktop:-top-[3.2rem]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="Pattern1" x="0" y="0" width=".08" height=".08">
                  <path
                    d="M5.28846 10.5769C8.2092 10.5769 10.5769 8.2092 10.5769 5.28846C10.5769 2.36772 8.2092 0 5.28846 0C2.36772 0 0 2.36772 0 5.28846C0 8.2092 2.36772 10.5769 5.28846 10.5769Z"
                    fill="#100A42"
                    fillOpacity="0.3"
                  />
                </pattern>
              </defs>

              <rect fill="url(#Pattern1)" width="100%" height="100%" />
            </svg>
          </span>

          <span className="absolute hidden h-4/6 w-1/2 laptop:-bottom-12 laptop:-left-6 laptop:block desktop:-bottom-[4.4rem] desktop:-left-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="Pattern2" x="0" y="0" width=".08" height=".08">
                  <path
                    d="M5.28846 10.5769C8.2092 10.5769 10.5769 8.2092 10.5769 5.28846C10.5769 2.36772 8.2092 0 5.28846 0C2.36772 0 0 2.36772 0 5.28846C0 8.2092 2.36772 10.5769 5.28846 10.5769Z"
                    fill="#BAF6EB"
                    fillOpacity="0.9"
                  />
                </pattern>
              </defs>

              <rect fill="url(#Pattern2)" width="100%" height="100%" />
            </svg>
          </span>
        </section>
      </section>
    </section>
  );
}

export default Hero;
