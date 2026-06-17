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
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FiMenu size={20} />
          <span className="hidden sm:block text-sm uppercase tracking-wider">
            Menu
          </span>
        </div>

        {/* Center Logo */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-serif tracking-wide">
            JK DUPATTA
          </h1>

          <p className="text-[10px] sm:text-xs tracking-[2px] md:tracking-[4px] text-gray-500 uppercase mt-1">
            Centre
          </p>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 md:gap-6">
          <FiSearch size={20} className="cursor-pointer" />
          <FiUser size={20} className="cursor-pointer" />
          <FiHeart size={20} className="cursor-pointer" />
          <FiShoppingBag size={20} className="cursor-pointer" />
        </div>

      </div>
    </header>
  );
}

export default Header;