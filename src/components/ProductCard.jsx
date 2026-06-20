import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  image,
  name,
  category,
  price,
}) {
  return (
    <Link
  to={`/product/${id}`}
  className="group bg-white block"
>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-2xl">

        <img
          src={image}
          alt={name}
          className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button className="absolute top-3 right-3 md:top-4 md:right-4 bg-white p-2 rounded-full shadow">
          <FiHeart size={18} />
        </button>

      </div>

      {/* Details */}
      <div className="mt-4">

        <p className="text-sm text-gray-500">
          {category}
        </p>

        <h3 className="mt-1 text-base md:text-lg font-medium">
          {name}
        </h3>

        <p className="mt-2 font-semibold text-[#6e4352]">
          ₹{price}
        </p>

      </div>

    </Link>
  );
}

export default ProductCard;