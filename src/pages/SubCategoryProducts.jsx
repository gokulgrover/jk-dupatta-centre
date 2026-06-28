import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SubCategoryProducts() {

  const { slug } = useParams();

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
            ← Back
          </Link>

          <h1 className="text-3xl font-serif text-center mb-10 capitalize">
            {slug.replace(/-/g, " ")}
          </h1>

          <div className="text-center py-20">

            <h2 className="text-2xl font-semibold">
              No Products Available
            </h2>

            <p className="mt-4 text-gray-500">
              Products will appear here automatically
              when you add them from the Admin Panel.
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default SubCategoryProducts;