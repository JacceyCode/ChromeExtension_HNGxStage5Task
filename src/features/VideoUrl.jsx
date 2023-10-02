import { TbEdit } from "react-icons/tb";
import { FiCopy } from "react-icons/fi";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa6";

function VideoUrl() {
  return (
    <section className="basis-full sm:basis-1/2">
      <section className="flex w-full flex-col items-start justify-start gap-6 px-4 sm:w-[90%] sm:gap-10 sm:px-0">
        <h1 className="font-sora text-2xl font-bold text-secondary xl:text-[2.81rem]">
          Your video is ready!
        </h1>

        <section className="flex w-full flex-col gap-8 sm:gap-16">
          <span className="flex flex-col gap-2">
            <p className="font-sora text-base font-medium text-[#727272]">
              Name
            </p>
            <span className="flex items-center justify-start gap-6">
              <input
                className="font-sora text-xl font-semibold text-primary lg:text-2xl"
                type="text"
                defaultValue={`Untitled_Video_20232509`}
                disabled
              />
              <button>
                <TbEdit />
              </button>
            </span>
          </span>

          <form className="flex w-full items-center justify-between rounded-2xl border-[0.5px] border-[#e7e7ed] bg-[#605c84]/[.1] px-6 py-3">
            <input
              className="inline-flex w-full bg-[transparent] font-worksans text-lg font-normal text-[#434343]/[.8] outline-none placeholder:text-[#000]/[.8]"
              placeholder="enter email of receiver"
              type="email"
              required
            />
            <button className="rounded-lg bg-[#605c84] px-3 py-2 text-white">
              Send
            </button>
          </form>

          <span>
            <h3 className="font-sora text-xl font-semibold text-secondary">
              Video Url
            </h3>
            <form className="flex w-full items-center justify-between rounded-2xl border-2 border-[#605c84]/[.1] border-[#e7e7ed] px-2 py-3">
              <input
                className="inline-flex w-full bg-[transparent] font-worksans text-lg font-normal text-[#434343]/[.8] outline-none placeholder:text-[#000]/[.8]"
                type="url"
                name="url"
                defaultValue={`https://www.helpmeout/Untitled_Video_20232509`}
              />
              <button className="flex items-center justify-between gap-2 rounded-lg border-2 border-[#605c84] px-3 py-2 text-[#605c84]">
                <FiCopy />
                Copy
              </button>
            </form>
          </span>
          <span className="flex flex-col gap-2">
            <p className="font-sora text-base font-semibold text-[#08051e]">
              Share your video
            </p>
            <span className="flex flex-wrap items-center justify-start gap-4 lg:flex-nowrap">
              <a
                className="flex items-center justify-center gap-2 rounded-md border-2 border-[#0A0628] p-3 font-inter text-base font-medium text-[#08051E]"
                href="#"
              >
                <span className="text-[#3958f4]">
                  <FaFacebook />
                </span>
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-md border-2 border-[#0A0628] p-3 font-inter text-base font-medium text-[#08051E]"
              >
                <span className="text-[#8af439]">
                  <FaWhatsapp />
                </span>
                Whatsapp
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-md border-2 border-[#0A0628] p-3 font-inter text-base font-medium text-[#08051E]"
              >
                <span className="text-[#34a6fd]">
                  <FaTelegram />
                </span>
                Telegram
              </a>
            </span>
          </span>
        </section>
      </section>
    </section>
  );
}

export default VideoUrl;
