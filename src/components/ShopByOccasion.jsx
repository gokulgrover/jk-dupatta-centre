import daily from "../assets/occasions/daily.jpg";
import festive from "../assets/occasions/festive.jpg";
import party from "../assets/occasions/party.jpg";
import wedding from "../assets/occasions/wedding.jpg";
import gift from "../assets/occasions/gift.jpg";

function ShopByOccasion() {
  const occasions = [
    {
      title: "Daily Wear",
      image: daily,
    },
    {
      title: "Festive Wear",
      image: festive,
    },
    {
      title: "Party Wear",
      image: party,
    },
    {
      title: "Wedding Wear",
      image: wedding,
    },
    {
      title: "Gift Collection",
      image: gift,
    },
  ];

  return (
    <section className="py-24 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#8b5d6d] text-sm">
            Explore
          </p>

          <h2 className="text-5xl font-serif mt-3">
            Shop By Occasion
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {occasions.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-t-full">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="text-center mt-5">

                <h3 className="text-lg font-medium">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ShopByOccasion;