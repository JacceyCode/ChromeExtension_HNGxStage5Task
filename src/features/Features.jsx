function Features() {
  return (
    <section
      id="eatures"
      className="my-12 flex flex-col gap-[4rem] bg-white py-[5rem]"
    >
      <section className="flex flex-col items-center justify-center">
        <h2 className="font-sora text-[2.5rem] font-bold text-secondary">
          Features
        </h2>
        <p className="font-worksans text-xl font-normal text-grey">
          Key Highlights of Our Extension
        </p>
      </section>
      <section className="mx-auto flex w-screen flex-wrap items-center justify-center gap-[3.5rem] px-2 lg:flex-nowrap lg:px-12">
        <section className="flex w-[34.25rem] flex-col gap-12">
          <section className="flex items-start justify-start gap-4 self-stretch">
            <span className="flex w-16 items-center justify-center rounded-full bg-tertiary p-2">
              <img src="./images/icon1.png" alt="icon pic" />
            </span>
            <section>
              <h3 className="font-inter text-2xl font-semibold text-tertiary">
                Simple Screen Recording
              </h3>
              <p className="font-worksans text-lg font-normal text-grey">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </section>
          </section>

          {/* 2nd */}
          <section className="flex items-start justify-start gap-4 self-stretch">
            <span className="flex w-16 items-center justify-center rounded-full bg-tertiary p-2">
              <img src="./images/icon2.png" alt="icon pic" />
            </span>
            <section>
              <h3 className="font-inter text-2xl font-semibold text-tertiary">
                Easy-to-Share URL
              </h3>
              <p className="font-worksans text-lg font-normal text-grey">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </section>
          </section>

          {/* 3rd  */}
          <section className="flex items-start justify-start gap-4 self-stretch">
            <span className="flex w-16 items-center justify-center rounded-full bg-tertiary p-2">
              <img src="./images/icon3.png" alt="icon pic" />
            </span>
            <section>
              <h3 className="font-inter text-2xl font-semibold text-tertiary">
                Revisit Recordings
              </h3>
              <p className="font-worksans text-lg font-normal text-grey">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </section>
          </section>
        </section>
        <section>
          <img src="./images/image4.png" alt="screen pic" />
        </section>
      </section>
    </section>
  );
}

export default Features;
