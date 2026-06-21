import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";

function CategoryProducts() {
  const { slug } = useParams();

  const products = [
    {
      id: 1,
      image: product1,
      name: "Daily Cotton Dupatta",
      category: "daily-wear",
      color: "blush-pink",
      price: 799,
    },
    {
      id: 2,
      image: product2,
      name: "Printed Daily Dupatta",
      category: "daily-wear",
      color: "sage-green",
      price: 899,
    },
    {
      id: 3,
      image: product3,
      name: "Wedding Silk Dupatta",
      category: "wedding-wear",
      color: "royal-blue",
      price: 1499,
    },
    {
      id: 4,
      image: product4,
      name: "Party Wear Dupatta",
      category: "party-wear",
      color: "mustard",
      price: 1199,
    },
  ];

  const filteredProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <>
    <TopBar />
    <Header />
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Link
  to="/"
  className="inline-flex items-center gap-2 text-[#6e4352] mb-6"
>
  ← Back to Categories
</Link>


        <h1 className="text-3xl font-serif text-center mb-10 capitalize">
          {slug.replace("-", " ")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center">
              No Products Found
            </p>
          )}

        </div>

      </div>
    </section>
    <Footer />
  </>
  );
}

export default CategoryProducts;