import { useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { GoMute, GoUnmute } from "react-icons/go";
import useVideoPlayer from "../hooks/VideoStrean";

function VideoStream() {
  const video = "video.mp4";
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <section className="flex basis-full flex-col gap-12 p-2 sm:w-[50%] sm:basis-1/2 sm:border-l-2 sm:border-grey/[.3] sm:p-0 sm:pl-4">
      <section className="rounded-xl border-2 border-grey/[.3] sm:w-[100%]">
        <video
          className="rounded-t-xl"
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <section className="flex items-center justify-center gap-4 px-4">
          <button onClick={togglePlay}>
            {!playerState.isPlaying ? <FaPlay /> : <FaPause />}
          </button>
          <input
            className="w-full cursor-pointer sm:w-80"
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="w-10"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">x0.5</option>
            <option value="1">x1</option>
            <option value="1.25">x1.25</option>
            <option value="2">x2</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? <GoUnmute /> : <GoMute />}
          </button>
        </section>
      </section>
      <section className="flex flex-col items-start justify-center gap-8">
        <section className="flex flex-col items-start gap-4">
          <h3 className="font-sora text-2xl font-semibold text-[#000]">
            Transcript
          </h3>
          <select
            className="w-28 rounded-md border-2 border-[#cfcfcf] p-2 font-worksans text-base font-normal text-[#9D9D9D]"
            value={`english`}
          >
            <option value="english">English</option>
          </select>
        </section>
        <section className="flex h-40 flex-col items-start gap-4 overflow-auto text-[#000]">
          <section className="flex items-start gap-4">
            <p className="font-worksans text-base font-normal">0.01</p>
            <p className="font-inter text-sm font-medium">
              {`First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              `}
            </p>
          </section>
          <section className="flex items-start gap-4">
            <p className="font-worksans text-base font-normal">0.01</p>
            <p className="font-inter text-sm font-medium">
              {`First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              `}
            </p>
          </section>
          <section className="flex items-start gap-4">
            <p className="font-worksans text-base font-normal">0.01</p>
            <p className="font-inter text-sm font-medium">
              {`First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              `}
            </p>
          </section>
          <section className="flex items-start gap-4">
            <p className="font-worksans text-base font-normal">0.01</p>
            <p className="font-inter text-sm font-medium">
              {`First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              `}
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default VideoStream;
