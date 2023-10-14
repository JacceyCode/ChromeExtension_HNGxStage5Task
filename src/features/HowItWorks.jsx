function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="flex flex-col items-center gap-[3rem] bg-white py-[5rem]"
    >
      <h2 className="font-sora text-[2.5rem]  font-bold text-secondary">
        How it works
      </h2>
      <section className="flex flex-wrap justify-center gap-[5rem]">
        {/* 1st */}
        <section className="flex flex-col justify-center gap-[1.75rem] px-2 sm:w-[35%] lg:w-[20%]">
          <span className="flex flex-col items-center justify-center gap-4">
            <h3 className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-inter text-[2rem] font-bold text-white">
              1
            </h3>
            <h4 className="text-center font-inter text-3xl font-semibold text-tertiary">
              Record Screen
            </h4>
            <p className="text-center font-worksans text-xl font-normal text-grey">
              {`Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.`}
            </p>
          </span>
          {/* <img src="./images/svg-copy.png" alt="card" /> */}
        </section>

        {/* 2nd */}
        <section className="flex flex-col gap-[1.75rem] px-2 sm:w-[35%] lg:w-[20%]">
          <span className="flex flex-col items-center justify-center gap-4">
            <h3 className="flex h-12  w-12 items-center justify-center rounded-full bg-primary font-inter text-[2rem] font-bold text-white">
              2
            </h3>
            <h4 className="text-center font-inter text-3xl font-semibold text-tertiary">
              Share Your Recording
            </h4>
            <p className="text-center font-worksans text-xl font-normal text-grey">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
          </span>
          {/* <img src="./images/svg-copy.png" alt="card" /> */}
        </section>

        {/* 3rd */}
        <section className="flex flex-col justify-center gap-[1.75rem] px-2 sm:w-[35%] lg:w-[20%]">
          <span className="flex flex-col items-center justify-center gap-4">
            <h3 className="flex h-12  w-12 items-center justify-center rounded-full bg-primary font-inter text-[2rem] font-bold text-white">
              3
            </h3>
            <h4 className="text-center font-inter text-3xl font-semibold text-tertiary">
              Learn Effortlessly
            </h4>
            <p className="text-center font-worksans text-xl font-normal text-grey">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
          </span>
          {/* <img src="./images/svg-copy.png" alt="card" /> */}
        </section>
      </section>
    </section>
  );
}

export default HowItWorks;
