import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";



function AdminDashboard() {

  const [bannerFile, setBannerFile] = useState(null);
  const [bannerMessage, setBannerMessage] = useState("");
  const [banners, setBanners] = useState([]);

    const [topBarText, setTopBarText] = useState(
  localStorage.getItem("topBarText") ||
  "Free Shipping on Orders Above ₹999"
);

const [successMessage, setSuccessMessage] = useState("");

const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("dashboard");
    const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
    };
   const saveTopBarText = () => {
  localStorage.setItem("topBarText", topBarText);

  setSuccessMessage("✅ Top Bar Updated Successfully");

  setTimeout(() => {
    setSuccessMessage("");
  }, 3000);
};

const fetchBanners = async () => {
  try {
    const response = await fetch(
      "https://jk-dupatta-backend.onrender.com/api/banner"
    );

    const data = await response.json();

    setBanners(data);

  } catch (error) {
    console.log(error);
  }
};

const deleteBanner = async (id) => {
  try {

    await fetch(
      `https://jk-dupatta-backend.onrender.com/api/banner/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchBanners();

  } catch (error) {
    console.log(error);
  }
};

const uploadBanner = async () => {
  if (!bannerFile) {
    alert("Please Select Banner");
    return;
  }

  const formData = new FormData();
  formData.append("banner", bannerFile);

  try {
    const response = await fetch(
      "https://jk-dupatta-backend.onrender.com/api/banner/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    setBannerMessage("✅ Banner Uploaded Successfully");
    fetchBanners();

    console.log(data);

  } catch (error) {
    console.log(error);
    setBannerMessage("❌ Upload Failed");
  }
};

    useEffect(() => {

  const isLoggedIn =
    localStorage.getItem("adminLoggedIn");

  if (!isLoggedIn) {
    navigate("/admin");
  }

  fetchBanners();

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

  <li>

    <div
      className="cursor-pointer flex justify-between items-center"
      onClick={() =>
        setCategoryMenuOpen(!categoryMenuOpen)
      }
    >
      <span>Categories</span>

      <span>
        {categoryMenuOpen ? "▲" : "▼"}
      </span>

    </div>

    {categoryMenuOpen && (

      <ul className="ml-4 mt-3 space-y-3 text-sm">

        <li
          className="cursor-pointer"
          onClick={() =>
            setActiveTab("category-master")
          }
        >
          Category Master
        </li>

        <li
          className="cursor-pointer"
          onClick={() =>
            setActiveTab("sub-category")
          }
        >
          Sub Category
        </li>

        <li
          className="cursor-pointer"
          onClick={() =>
            setActiveTab("products")
          }
        >
          Products
        </li>

        <li
          className="cursor-pointer"
          onClick={() =>
            setActiveTab("color-mapping")
          }
        >
          Color Mapping
        </li>

      </ul>

    )}

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
    {successMessage && (
  <p className="mt-4 text-green-600 font-medium">
    {successMessage}
  </p>
)}

  </div>
)}

{activeTab === "banners" && (
  <div>

    <h1 className="text-3xl font-bold mb-6">
      Hero Banners
    </h1>

    <input
      type="file"
      onChange={(e) =>
        setBannerFile(e.target.files[0])
      }
      className="mb-4"
    />

    <br />

    <button
      onClick={uploadBanner}
      className="bg-[#6e4352] text-white px-6 py-3 rounded"
    >
      Upload Banner
    </button>

    {bannerMessage && (
      <p className="mt-4 text-green-600">
        {bannerMessage}
      </p>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

  {banners.map((banner) => (
    <div
      key={banner._id}
      className="border rounded p-3"
    >

      <img
        src={banner.imageUrl}
        alt="Banner"
        className="w-full h-40 object-cover rounded"
      />

      <button
        onClick={() => deleteBanner(banner._id)}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Banner
      </button>

    </div>
  ))}

</div>

  </div>
)}

{activeTab === "category-master" && (
  <h1 className="text-3xl font-bold">
    Category Master
  </h1>
)}

{activeTab === "sub-category" && (
  <h1 className="text-3xl font-bold">
    Sub Category
  </h1>
)}

{activeTab === "products" && (
  <h1 className="text-3xl font-bold">
    Products
  </h1>
)}

{activeTab === "color-mapping" && (
  <h1 className="text-3xl font-bold">
    Color Mapping
  </h1>
)}
      </div>

    </div>
  );
}

export default AdminDashboard;