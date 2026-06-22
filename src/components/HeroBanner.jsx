import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function HeroBanner() {
  
  const [banners, setBanners] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  useEffect(() => {
  const fetchBanners = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/banner"
      );

      const data = await response.json();

setBanners(
  data.map((item) => item.imageUrl)
);

setCurrentSlide(0);

      setBanners(
        data.map((item) => item.imageUrl)
      );

    } catch (error) {
      console.log(error);
    }
  };

  fetchBanners();
}, []);

  useEffect(() => {
  if (banners.length === 0) return;

  const interval = setInterval(() => {
    setCurrentSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, [banners]);

  if (banners.length === 0) {
  return null;
}

  return (
    <section>
      <div>

        {/* Left Sidebar */}
        
        {/* Banner Slider */}
        <div className="relative overflow-hidden w-full">

          <img
            src={banners[currentSlide] || banners[0]}
            alt="Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-full object-cover"
          />

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 right-0 bg-white px-4 md:px-8 py-3 md:py-5 rounded-tl-2xl md:rounded-tl-3xl flex items-center gap-3 md:gap-6">

            <button onClick={prevSlide}>
              <FiChevronLeft size={20} />
            </button>

            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`text-sm font-medium ${
                  currentSlide === index
                    ? "text-[#6e4352]"
                    : "text-gray-500"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}

            <button onClick={nextSlide}>
              <FiChevronRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroBanner;