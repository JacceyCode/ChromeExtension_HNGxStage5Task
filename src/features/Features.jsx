function Features() {
  return (
    <section className="bg-white">
      <section
        id="features"
        className="laptop:space-y-[4rem] m-auto my-12 flex max-w-[90rem] flex-col space-y-[2rem] px-4 py-[5rem]"
      >
        <section className="flex flex-col items-center justify-center">
          <h2 className="laptop:text-[2.8rem] font-sora text-[1.8rem] font-bold text-secondary">
            Features
          </h2>
          <p className="laptop:text-2xl text-center font-worksans text-lg font-normal text-grey">
            Key Highlights of Our Extension
          </p>
        </section>

        <section className="laptop:px-12 mx-auto flex flex-wrap items-center justify-center gap-[3.5rem] px-2">
          <section className="laptop:flex-1 desktop:space-y-12 flex flex-col space-y-5">
            {/* 1st */}
            <section className="flex items-start justify-start gap-4">
              <span className="flex items-center justify-center rounded-full bg-tertiary p-2">
                <img src="./images/icon1.png" alt="icon pic" />
              </span>
              <section>
                <h3 className="desktop:text-2xl font-inter text-xl font-semibold text-tertiary">
                  Simple Screen Recording
                </h3>
                <p className="desktop:text-lg font-worksans font-normal text-grey">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </section>
            </section>

            {/* 2nd */}
            <section className="flex items-start justify-start gap-4">
              <span className="flex items-center justify-center rounded-full bg-tertiary p-2">
                <img src="./images/icon2.png" alt="icon pic" />
              </span>
              <section>
                <h3 className="desktop:text-2xl font-inter text-xl font-semibold text-tertiary">
                  Easy-to-Share URL
                </h3>
                <p className="desktop:text-lg font-worksans font-normal text-grey">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </section>
            </section>

            {/* 3rd  */}
            <section className="flex items-start justify-start gap-4">
              <span className="flex items-center justify-center rounded-full bg-tertiary p-2">
                <img src="./images/icon3.png" alt="icon pic" />
              </span>
              <section>
                <h3 className="desktop:text-2xl font-inter text-xl font-semibold text-tertiary">
                  Revisit Recordings
                </h3>
                <p className="desktop:text-lg font-worksans font-normal text-grey">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </section>
            </section>
          </section>

          <section className="laptop:flex-1">
            <img src="./images/image4.png" alt="screen pic" />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Features;
