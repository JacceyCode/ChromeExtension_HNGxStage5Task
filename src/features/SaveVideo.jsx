function SaveVideo() {
  return (
    <section className="bg-white py-16">
      <section className="flex items-center justify-center bg-grey/[.03] py-12 xl:px-80">
        <section className="flex w-[47rem] flex-col items-center justify-center gap-10">
          <p className="text-center font-sora text-lg font-semibold text-secondary">
            To ensure the availability and privacy of your video, <br /> we
            recommend saving it to your account.
          </p>
          <button className="rounded-lg bg-primary px-8 py-4 font-worksans text-base font-medium text-[#f9f9ff]">
            Save Video
          </button>
          <p className="text-center font-sora text-lg font-semibold text-[#7E7E7E]">
            {`Don't have an account?`}{" "}
            <a className="text-primary underline" href="#">
              Create account
            </a>
          </p>
        </section>
      </section>
    </section>
  );
}

export default SaveVideo;
