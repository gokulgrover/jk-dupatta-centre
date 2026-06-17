import { useState } from "react";

function ProductDetails() {

  const [qty, setQty] = useState(1);

  const handleBuyNow = () => {

    const message = `
Hello JK Dupatta Centre,

I want to order:

Product: Floral Cotton Dupatta
Quantity: ${qty}
`;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 lg:py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* Image */}

        <div>
          <img
            src="https://via.placeholder.com/600x800"
            alt=""
            className="w-full rounded-2xl"
          />
        </div>

        {/* Content */}

        <div>

          <p className="text-gray-500">
            Cotton Dupatta
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mt-2">
            Floral Cotton Dupatta
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold text-[#6e4352]">
            ₹799
          </p>

          <p className="mt-6 text-gray-600">
            Premium quality cotton dupatta
            perfect for daily and festive wear.
          </p>

          {/* Quantity */}

          <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-8">

            <button
              onClick={() =>
                setQty(qty > 1 ? qty - 1 : 1)
              }
              className="border px-4 py-2"
            >
              -
            </button>

            <span>{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="border px-4 py-2"
            >
              +
            </button>

          </div>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <button className="border px-8 py-4">
              ❤️ Like
            </button>

            <button
              onClick={handleBuyNow}
              className="bg-[#6e4352] text-white px-8 py-4"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;