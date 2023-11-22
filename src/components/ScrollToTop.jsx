import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <FaArrowUpLong
          className="fixed bottom-2 right-2 z-10 mx-auto h-10 w-10 cursor-pointer rounded-lg border-2 border-primary bg-primary p-1 text-white hover:bg-white hover:text-primary"
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default ScrollToTop;
