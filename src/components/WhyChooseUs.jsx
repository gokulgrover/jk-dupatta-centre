import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiAward,
} from "react-icons/fi";

function WhyChooseUs() {
  const features = [
    {
      icon: <FiAward size={32} />,
      title: "Premium Quality",
      description:
        "Carefully selected fabrics with premium finishing.",
    },
    {
      icon: <FiTruck size={32} />,
      title: "Fast Shipping",
      description:
        "Quick and reliable delivery across India.",
    },
    {
      icon: <FiRefreshCw size={32} />,
      title: "Easy Returns",
      description:
        "Simple return process for customer satisfaction.",
    },
    {
      icon: <FiShield size={32} />,
      title: "Secure Shopping",
      description:
        "Safe and secure shopping experience.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#8b5d6d] text-sm">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-3">
            The JK Dupatta Promise
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="text-center p-5 md:p-6 lg:p-8 border rounded-2xl hover:shadow-lg transition"
            >
              <div className="flex justify-center text-[#6e4352]">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;