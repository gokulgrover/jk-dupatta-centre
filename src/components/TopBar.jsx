function TopBar() {

  const topBarText =
    localStorage.getItem("topBarText") ||
    "Free Shipping on Orders Above ₹999";

  return (
    <div className="bg-[#6e4352] text-white text-center py-2 px-4 text-xs sm:text-sm">
      {topBarText}
    </div>
  );
}

export default TopBar;