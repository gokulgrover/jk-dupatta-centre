import { Link } from "react-router-dom";

function TrendingColors() {
  const colors = [
  {
    name: "Blush Pink",
    slug: "blush-pink",
    color: "#E8C7C8",
  },
  {
    name: "Sage Green",
    slug: "sage-green",
    color: "#A9B79D",
  },
  {
    name: "Mustard",
    slug: "mustard",
    color: "#D8A228",
  },
  {
    name: "Royal Blue",
    slug: "royal-blue",
    color: "#2E4A9E",
  },
  {
    name: "Wine Red",
    slug: "wine-red",
    color: "#6E4352",
  },
  {
    name: "Ivory",
    slug: "ivory",
    color: "#F5F1E8",
  },
  {
    name: "Peach",
    slug: "peach",
    color: "#F5C5A5",
  },
  {
    name: "Lavender",
    slug: "lavender",
    color: "#C7B5E8",
  },
];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#faf7f4]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#8b5d6d] text-sm">
            Trending Shades
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-3">
            Trending Colors
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-600">
            Explore the most loved dupatta colors this season.
          </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-8">

          {colors.map((item, index) => (
            <Link
  to={`/color/${item.slug}`}
  key={index}
  className="text-center group cursor-pointer block"
>

              <div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full border-4 border-white shadow-md transition duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <h3 className="mt-4 text-sm font-medium">
                {item.name}
              </h3>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrendingColors;