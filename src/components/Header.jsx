import {
  FiMenu,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";

function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FiMenu size={22} />
          <span className="text-sm uppercase tracking-wider">
            Menu
          </span>
        </div>

        {/* Center Logo */}
        <div className="text-center">
          <h1 className="text-4xl font-serif tracking-wide">
            JK DUPATTA
          </h1>

          <p className="text-xs tracking-[4px] text-gray-500 uppercase mt-1">
            Centre
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <FiSearch size={22} className="cursor-pointer" />
          <FiUser size={22} className="cursor-pointer" />
          <FiHeart size={22} className="cursor-pointer" />
          <FiShoppingBag size={22} className="cursor-pointer" />
        </div>

      </div>
    </header>
  );
}

export default Header;