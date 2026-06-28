import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
  fetchCategories();
   fetchSubCategories();
}, []);

const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://jk-dupatta-backend.onrender.com/api/category"
    );

    const data = await response.json();

    const activeCategories = data.filter(
      (item) => item.status === "Active"
    );

    setCategories(activeCategories);

  } catch (error) {
    console.log(error);
  }
};

const fetchSubCategories = async () => {
  try {
    const response = await fetch(
      "https://jk-dupatta-backend.onrender.com/api/sub-category"
    );

    const data = await response.json();

    const activeSubCategories = data.filter(
      (item) => item.status === "Active"
    );

    setSubCategories(activeSubCategories);

  } catch (error) {
    console.log(error);
  }
};

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  console.log("CATEGORIES STATE =", categories);
  console.log("SUB CATEGORIES STATE =", subCategories);
  return (
    <>
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={22} />
            <span className="hidden sm:block text-sm uppercase tracking-wider">
              Menu
            </span>
          </div>

          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-serif tracking-wide">
              JK DUPATTA
            </h1>

            <p className="text-[10px] sm:text-xs tracking-[2px] md:tracking-[4px] text-gray-500 uppercase mt-1">
              Centre
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <FiSearch size={20} />
            <FiUser size={20} />
            <FiHeart size={20} />
            <FiShoppingBag size={20} />
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h3 className="font-semibold text-lg">Collections</h3>

          <FiX
            size={24}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="p-5 space-y-5">

  {categories.map((category) => (

    <li key={category._id}>

      <div
        className="flex justify-between items-center cursor-pointer hover:text-[#6e4352]"
        onClick={() =>
          setOpenCategory(
            openCategory === category._id
              ? null
              : category._id
          )
        }
      >

        <span>{category.categoryName}</span>

      </div>

      {openCategory === category._id && (

        <ul className="ml-5 mt-3 space-y-2">

          {subCategories
  .filter((sub) => {

    if (typeof sub.categoryId === "object") {
      return sub.categoryId._id === category._id;
    }

    return sub.categoryId === category._id;

  })
            .map((sub) => (

              <li
                key={sub._id}
                className="text-sm cursor-pointer hover:text-[#6e4352]"
              >
                {sub.subCategoryName}
              </li>

            ))}

        </ul>

      )}

    </li>

  ))}

</ul>

        <div className="px-5">
          <button className="w-full border py-3 hover:bg-[#6e4352] hover:text-white transition">
            VIEW ALL COLLECTIONS
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;