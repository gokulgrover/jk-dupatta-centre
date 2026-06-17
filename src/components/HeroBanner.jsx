import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import banner1 from "../assets/hero/Banner1.png";
import banner2 from "../assets/hero/Banner2.png";
import banner3 from "../assets/hero/Banner3.png";

function HeroBanner() {
  const banners = [banner1, banner2, banner3];

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
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* Left Sidebar */}
        <div className="lg:col-span-3 bg-white border-r p-4 md:p-6 lg:p-8">
          <ul className="space-y-6 text-gray-700">

            <li className="cursor-pointer hover:text-[#6e4352]">
              Cotton Dupatta
            </li>

            <li className="cursor-pointer hover:text-[#6e4352]">
              Chiffon Dupatta
            </li>

            <li className="cursor-pointer hover:text-[#6e4352]">
              Silk Dupatta
            </li>

            <li className="cursor-pointer hover:text-[#6e4352]">
              Georgette Dupatta
            </li>

            <li className="cursor-pointer hover:text-[#6e4352]">
              Bandhani Dupatta
            </li>

            <li className="cursor-pointer hover:text-[#6e4352]">
              Printed Dupatta
            </li>

            <li className="cursor-pointer hover:text-[#6e4352]">
              Embroidered Dupatta
            </li>

            <li className="cursor-pointer hover:text-[#6e4352]">
              Phulkari Dupatta
            </li>

          </ul>

          <button className="mt-10 border px-5 py-3 text-sm hover:bg-[#6e4352] hover:text-white transition">
            VIEW ALL COLLECTIONS
          </button>
        </div>

        {/* Banner Slider */}
        <div className="lg:col-span-9 relative overflow-hidden">

          <img
            src={banners[currentSlide]}
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