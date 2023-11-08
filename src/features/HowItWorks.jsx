function HowItWorks() {
  return (
    <section className="bg-white">
      <section
        id="howitworks"
        className="laptop:space-y-[3rem] laptop:px-[6.25rem] m-auto flex max-w-[90rem] flex-col items-center space-y-8 px-4 py-[5rem]"
      >
        <h2 className="laptop:text-[2.5rem] font-sora text-2xl font-bold text-secondary">
          How it works
        </h2>

        <section className="tablet:flex-row tablet:space-y-0 tablet:space-x-4 desktop:space-x-12 tablet:items-start flex flex-col items-center space-y-20 p-4">
          {/* 1st */}
          <section className="tablet:flex-1 flex flex-col space-y-8">
            <span className="flex flex-col items-center space-y-4">
              <h3 className="rounded-full bg-primary px-6 py-4 font-inter text-xl font-bold text-white">
                1
              </h3>
              <h4 className="tablet:text-3xl text-center font-inter text-xl font-semibold text-tertiary">
                Record Screen
              </h4>
              <p className="text-center font-worksans text-lg font-normal text-grey">
                {`Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.`}
              </p>
            </span>
            <img
              src="./images/svg-copy.png"
              className="rounded-3xl"
              alt="card"
            />
          </section>

          {/* 2nd */}
          <section className="tablet:flex-1 flex flex-col space-y-8">
            <span className="flex flex-col items-center space-y-4">
              <h3 className="rounded-full bg-primary px-6 py-4 font-inter text-xl font-bold text-white">
                2
              </h3>
              <h4 className="tablet:text-3xl text-center font-inter text-xl font-semibold text-tertiary">
                Share Your Recording
              </h4>
              <p className="text-center font-worksans text-lg font-normal text-grey">
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>
            </span>
            <img
              src="./images/svg-copy.png"
              className="rounded-3xl"
              alt="card"
            />
          </section>

          {/* 3rd */}
          <section className="tablet:flex-1 flex flex-col space-y-8">
            <span className="flex flex-col items-center space-y-4">
              <h3 className="rounded-full bg-primary px-6 py-4 font-inter text-xl font-bold text-white">
                3
              </h3>
              <h4 className="tablet:text-3xl text-center font-inter text-xl font-semibold text-tertiary">
                Learn Effortlessly
              </h4>
              <p className="text-center font-worksans text-lg font-normal text-grey">
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
            </span>
            <img
              src="./images/svg-copy.png"
              className="rounded-3xl"
              alt="card"
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default HowItWorks;
