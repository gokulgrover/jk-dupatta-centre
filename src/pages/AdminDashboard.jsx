import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function AdminDashboard() {

    const [topBarText, setTopBarText] = useState(
  localStorage.getItem("topBarText") ||
  "Free Shipping on Orders Above ₹999"
);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("dashboard");
    const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
    };
    const saveTopBarText = () => {
  localStorage.setItem("topBarText", topBarText);
  alert("Top Bar Updated Successfully");
};

    useEffect(() => {

  const isLoggedIn =
    localStorage.getItem("adminLoggedIn");

  if (!isLoggedIn) {
    navigate("/admin");
  }


}, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <div className="w-full md:w-64 bg-[#6e4352] text-white p-6">

        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <ul className="space-y-4">

  <li
    className="cursor-pointer"
    onClick={() => setActiveTab("settings")}
  >
    Website Settings
  </li>

  <li
    className="cursor-pointer"
    onClick={() => setActiveTab("banners")}
  >
    Hero Banners
  </li>

  <li
    className="cursor-pointer"
    onClick={() => setActiveTab("categories")}
  >
    Categories
  </li>

  <li
    className="cursor-pointer"
    onClick={() => setActiveTab("colors")}
  >
    Colors
  </li>

  <li
    className="cursor-pointer"
    onClick={() => setActiveTab("products")}
  >
    Products
  </li>

  <li
    className="cursor-pointer"
    onClick={() => setActiveTab("footer")}
  >
    Footer Settings
  </li>

</ul>
<button
  onClick={handleLogout}
  className="mt-8 w-full bg-white text-[#6e4352] font-medium py-2 rounded"
>
  Logout
</button>

      </div>

      <div className="flex-1 p-4 md:p-10">

        {activeTab === "dashboard" && (
  <h1 className="text-3xl font-bold">
    Welcome to Admin Panel
  </h1>
)}

{activeTab === "settings" && (
  <div>

    <h1 className="text-3xl font-bold mb-6">
      Website Settings
    </h1>

    <label className="block mb-2 font-medium">
      Top Bar Text
    </label>

    <input
      type="text"
      value={topBarText}
      onChange={(e) =>
        setTopBarText(e.target.value)
      }
      className="w-full border p-3 rounded"
    />

    <button
      onClick={saveTopBarText}
      className="mt-4 bg-[#6e4352] text-white px-6 py-3 rounded"
    >
      Save Changes
    </button>

  </div>
)}

{activeTab === "banners" && (
  <h1 className="text-3xl font-bold">
    Hero Banners
  </h1>
)}

{activeTab === "categories" && (
  <h1 className="text-3xl font-bold">
    Categories
  </h1>
)}

{activeTab === "colors" && (
  <h1 className="text-3xl font-bold">
    Colors
  </h1>
)}

{activeTab === "products" && (
  <h1 className="text-3xl font-bold">
    Products
  </h1>
)}

{activeTab === "footer" && (
  <h1 className="text-3xl font-bold">
    Footer Settings
  </h1>
)}

      </div>

    </div>
  );
}

export default AdminDashboard;