import daily from "../assets/occasions/daily.jpg";
import festive from "../assets/occasions/festive.jpg";
import party from "../assets/occasions/party.jpg";
import wedding from "../assets/occasions/wedding.jpg";
import gift from "../assets/occasions/gift.jpg";
import { Link } from "react-router-dom";

function ShopByOccasion() {
  const occasions = [
  {
    title: "Daily Wear",
    slug: "daily-wear",
    image: daily,
  },
  {
    title: "Festive Wear",
    slug: "festive-wear",
    image: festive,
  },
  {
    title: "Party Wear",
    slug: "party-wear",
    image: party,
  },
  {
    title: "Wedding Wear",
    slug: "wedding-wear",
    image: wedding,
  },
  {
    title: "Gift Collection",
    slug: "gift-collection",
    image: gift,
  },
];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#8b5d6d] text-sm">
            Explore
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-3">
            Shop By Occasion
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">

          {occasions.map((item, index) => (
            <Link
  to={`/category/${item.slug}`}
  key={index}
  className="group cursor-pointer block"
>
              <div className="overflow-hidden rounded-t-full">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="text-center mt-5">

                <h3 className="text-lg font-medium">
                  {item.title}
                </h3>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ShopByOccasion;