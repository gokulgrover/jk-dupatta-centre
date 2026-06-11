import ProductCard from "./ProductCard";

import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";

function NewArrivals() {

  const products = [
    {
      id: 1,
      image: product1,
      name: "Floral Cotton Dupatta",
      category: "Cotton",
      price: 799,
    },
    {
      id: 2,
      image: product2,
      name: "Elegant Chiffon Dupatta",
      category: "Chiffon",
      price: 999,
    },
    {
      id: 3,
      image: product3,
      name: "Premium Silk Dupatta",
      category: "Silk",
      price: 1499,
    },
    {
      id: 4,
      image: product4,
      name: "Bandhani Collection",
      category: "Bandhani",
      price: 1199,
    },
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[3px] text-[#6e4352]">
            Latest Collection
          </p>

          <h2 className="text-4xl font-serif mt-3">
            New Arrivals
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
  key={product.id}
  id={product.id}
  image={product.image}
  name={product.name}
  category={product.category}
  price={product.price}
/>
          ))}

        </div>

      </div>

    </section>
  );
}

export default NewArrivals;