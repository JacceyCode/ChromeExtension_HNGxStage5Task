import Header from "../features/Header";
import SaveVideo from "../features/SaveVideo";
import VideoStream from "../features/VideoStream";
import VideoUrl from "../features/VideoUrl";

function Recording() {
  return (
    <>
      <Header />
      <section className="flex flex-wrap items-start justify-center bg-white sm:px-8 sm:pt-4 lg:px-28 2xl:px-36 2xl:pt-10">
        <VideoUrl />
        <VideoStream />
      </section>
      <SaveVideo />
    </>
  );
}

export default Recording;
