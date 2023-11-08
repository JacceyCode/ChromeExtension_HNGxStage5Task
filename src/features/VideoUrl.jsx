import { TbEdit } from "react-icons/tb";
import { FiCopy } from "react-icons/fi";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa6";

function VideoUrl() {
  return (
    <section className="tablet:flex-1 tablet:pt-8">
      <section className="flex flex-col items-start justify-start space-y-4">
        <h1 className="laptop:text-[2rem] font-sora text-xl font-bold text-secondary">
          Your video is ready!
        </h1>

        <section className="flex flex-col space-y-6">
          <span className="flex flex-col space-y-2">
            <p className="font-sora text-sm font-medium text-[#727272]">Name</p>
            <span className="flex items-center justify-start space-x-4">
              <input
                className="laptop:text-2xl font-sora text-base font-semibold text-primary"
                type="text"
                defaultValue={`Untitled_Video_20232509`}
                disabled
              />
              <button>
                <TbEdit />
              </button>
            </span>
          </span>

          <form className="flex items-center justify-between rounded-2xl border-[0.5px] border-[#e7e7ed] bg-[#605c84]/[.1] p-2">
            <input
              className="flex bg-[transparent] font-worksans text-lg font-normal text-[#434343]/[.8] outline-none placeholder:text-[#000]/[.8]"
              placeholder="Enter email of receiver"
              type="email"
              required
            />
            <button className="rounded-xl bg-[#605c84] p-2 text-white">
              Send
            </button>
          </form>

          <span>
            <h3 className="mb-4 font-sora text-xl font-semibold text-secondary">
              Video Url
            </h3>

            <form className="flex items-center justify-between rounded-2xl border-2 border-[#605c84]/[.1] p-2">
              <input
                className="flex bg-[transparent] font-worksans text-lg font-normal text-[#434343]/[.8] outline-none placeholder:text-[#000]/[.8]"
                type="url"
                name="url"
                defaultValue={`https://www.helpmeout/Untitled_Video_20232509`}
              />
              <button className="flex items-center justify-between gap-2 rounded-lg border-2 border-[#605c84] p-2 text-[#605c84]">
                <FiCopy />
                Copy
              </button>
            </form>
          </span>

          <span className="flex flex-col space-y-2">
            <p className="font-sora text-base font-semibold text-[#08051e]">
              Share your video
            </p>

            <span className="flex flex-wrap items-center justify-center">
              <a
                className="m-1 flex items-center justify-center rounded-md border-2 border-[#0A0628] p-2 font-inter text-base font-medium text-[#08051E]"
                href="#"
              >
                <span className="mr-1 text-[#3958f4]">
                  <FaFacebook />
                </span>
                Facebook
              </a>

              <a
                href="#"
                className="m-1 flex items-center justify-center rounded-md border-2 border-[#0A0628] p-2 font-inter text-base font-medium text-[#08051E]"
              >
                <span className="mr-1 text-[#8af439]">
                  <FaWhatsapp />
                </span>
                Whatsapp
              </a>

              <a
                href="#"
                className="m-1 flex items-center justify-center rounded-md border-2 border-[#0A0628] p-2 font-inter text-base font-medium text-[#08051E]"
              >
                <span className="mr-1 text-[#34a6fd]">
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
