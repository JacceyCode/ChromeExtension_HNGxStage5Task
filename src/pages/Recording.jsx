import Header from "../features/Header";
import VideoUrl from "../features/VideoUrl";
import VideoStream from "../features/VideoStream";
import SaveVideo from "../features/SaveVideo";
import Footer from "../components/Footer";

function Recording() {
  return (
    <>
      <Header />
      <section className="bg-white">
        <section className="tablet:flex-row laptop:px-[6.25rem] laptop:space-y-0 m-auto flex max-w-[90rem] flex-col items-start justify-center space-y-6 px-4 py-8">
          <VideoUrl />
          <VideoStream />
        </section>
        <SaveVideo />
      </section>
      <Footer />
    </>
  );
}

export default Recording;
