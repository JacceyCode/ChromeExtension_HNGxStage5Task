import { Link } from "react-router-dom";

function SaveVideo() {
  return (
    <section className="py-16">
      <section className="flex items-center justify-center bg-grey/[.03] px-4 py-12">
        <section className="flex flex-col items-center justify-center gap-10">
          <p className="text-center font-sora text-lg font-semibold text-secondary">
            To ensure the availability and privacy of your video, <br /> we
            recommend saving it to your account.
          </p>

          <button className="rounded-lg bg-primary px-6 py-4 font-worksans text-base font-medium text-[#f9f9ff]">
            Save Video
          </button>

          <p className="text-center font-sora text-sm font-semibold text-[#7E7E7E]">
            {`Don't have an account?`}{" "}
            <Link to="/login" className="text-primary underline">
              Create account
            </Link>
          </p>
        </section>
      </section>
    </section>
  );
}

export default SaveVideo;
