import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";



function AdminDashboard() {

  const [bannerFile, setBannerFile] = useState(null);
  const [bannerMessage, setBannerMessage] = useState("");
  const [banners, setBanners] = useState([]);
  const [editBannerId, setEditBannerId] = useState(null);

    const [topBarText, setTopBarText] = useState(
  localStorage.getItem("topBarText") ||
  "Free Shipping on Orders Above ₹999"
);

const [successMessage, setSuccessMessage] = useState("");

const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

const [categories, setCategories] = useState([]);
const [categoryName, setCategoryName] = useState("");
const [categoryStatus, setCategoryStatus] = useState("Active");
const [editId, setEditId] = useState(null);
const [subCategories, setSubCategories] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("");
const [subCategoryName, setSubCategoryName] = useState("");
const [subCategoryStatus, setSubCategoryStatus] = useState("Active");
const [editSubCategoryId, setEditSubCategoryId] = useState(null);

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

    const url = editBannerId
      ? `https://jk-dupatta-backend.onrender.com/api/banner/${editBannerId}`
      : "https://jk-dupatta-backend.onrender.com/api/banner/upload";

    const method = editBannerId
      ? "PUT"
      : "POST";

    const response = await fetch(url, {
      method,
      body: formData,
    });

    const data = await response.json();

    setBannerMessage(
      editBannerId
        ? "✅ Banner Updated Successfully"
        : "✅ Banner Uploaded Successfully"
    );

    setEditBannerId(null);
    setBannerFile(null);

    fetchBanners();

    console.log(data);

  } catch (error) {

    console.log(error);

    setBannerMessage(
      editBannerId
        ? "❌ Update Failed"
        : "❌ Upload Failed"
    );
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://jk-dupatta-backend.onrender.com/api/category"
    );

    const data = await response.json();

    setCategories(data);

  } catch (error) {
    console.log(error);
  }
};

const saveCategory = async () => {
  try {

    const url = editId
      ? `https://jk-dupatta-backend.onrender.com/api/category/${editId}`
      : "https://jk-dupatta-backend.onrender.com/api/category";

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryName,
        status: categoryStatus,
      }),
    });

    setCategoryName("");
    setCategoryStatus("Active");
    setEditId(null);

    fetchCategories();

  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (id) => {
  try {

    await fetch(
      `https://jk-dupatta-backend.onrender.com/api/category/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchCategories();

  } catch (error) {
    console.log(error);
  }
};

const editBanner = (banner) => {
  setEditBannerId(banner._id);

  setBannerMessage(
    "Select New Banner Image & Click Update Banner"
  );
};

const editCategory = (item) => {
  setEditId(item._id);
  setCategoryName(item.categoryName);
  setCategoryStatus(item.status);
};

const fetchSubCategories = async () => {
  try {

    const response = await fetch(
      "https://jk-dupatta-backend.onrender.com/api/sub-category"
    );

    const data = await response.json();

    setSubCategories(data);

  } catch (error) {
    console.log(error);
  }
};

const saveSubCategory = async () => {
  try {

    const url = editSubCategoryId
      ? `https://jk-dupatta-backend.onrender.com/api/sub-category/${editSubCategoryId}`
      : "https://jk-dupatta-backend.onrender.com/api/sub-category";

    const method = editSubCategoryId
      ? "PUT"
      : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: selectedCategory,
        subCategoryName,
        status: subCategoryStatus,
      }),
    });

    setSelectedCategory("");
    setSubCategoryName("");
    setSubCategoryStatus("Active");
    setEditSubCategoryId(null);

    fetchSubCategories();

  } catch (error) {
    console.log(error);
  }
};

const editSubCategory = (item) => {
  setEditSubCategoryId(item._id);
  setSelectedCategory(item.categoryId._id);
  setSubCategoryName(item.subCategoryName);
  setSubCategoryStatus(item.status);
};

const deleteSubCategory = async (id) => {
  try {

    await fetch(
      `https://jk-dupatta-backend.onrender.com/api/sub-category/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchSubCategories();

  } catch (error) {
    console.log(error);
  }
};

    useEffect(() => {

  const isLoggedIn =
    localStorage.getItem("adminLoggedIn");

  if (!isLoggedIn) {
    navigate("/admin");
  }

  fetchBanners();
  fetchCategories();

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
      {editBannerId
  ? "Update Banner"
  : "Upload Banner"}
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
      onClick={() => editBanner(banner)}
      className="mt-3 mr-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
      Edit Banner
      </button>

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
  <div>

    <h1 className="text-3xl font-bold mb-6">
      Category Master
    </h1>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={(e) =>
          setCategoryName(e.target.value)
        }
        className="border p-3 rounded"
      />

      <select
        value={categoryStatus}
        onChange={(e) =>
          setCategoryStatus(e.target.value)
        }
        className="border p-3 rounded"
      >
        <option value="Active">
          Active
        </option>

        <option value="Inactive">
          Inactive
        </option>

      </select>

    </div>

    <button
      onClick={saveCategory}
      className="mt-4 bg-[#6e4352] text-white px-6 py-3 rounded"
    >
      {editId ? "Update Category" : "Add Category"}
    </button>

    <div className="mt-8 overflow-x-auto">

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-100">

            <th className="border p-3">
              Category Name
            </th>

            <th className="border p-3">
              Status
            </th>

            <th className="border p-3">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {categories.map((item) => (

            <tr key={item._id}>

              <td className="border p-3">
                {item.categoryName}
              </td>

              <td className="border p-3">
                {item.status}
              </td>

              <td className="border p-3 space-x-2">

                <button
                  onClick={() =>
                    editCategory(item)
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteCategory(item._id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
)}

{activeTab === "sub-category" && (
  <div>

    <h1 className="text-3xl font-bold mb-6">
      Sub Category Master
    </h1>

    <div className="grid md:grid-cols-3 gap-4">

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(e.target.value)
        }
        className="border p-3 rounded"
      >
        <option value="">
          Select Category
        </option>

        {categories
          .filter(
            (item) => item.status === "Active"
          )
          .map((item) => (
            <option
              key={item._id}
              value={item._id}
            >
              {item.categoryName}
            </option>
          ))}
      </select>

      <input
        type="text"
        placeholder="Sub Category Name"
        value={subCategoryName}
        onChange={(e) =>
          setSubCategoryName(e.target.value)
        }
        className="border p-3 rounded"
      />

      <select
        value={subCategoryStatus}
        onChange={(e) =>
          setSubCategoryStatus(e.target.value)
        }
        className="border p-3 rounded"
      >
        <option value="Active">
          Active
        </option>

        <option value="Inactive">
          Inactive
        </option>

      </select>

    </div>

    <button
      onClick={saveSubCategory}
      className="mt-4 bg-[#6e4352] text-white px-6 py-3 rounded"
    >
      {editSubCategoryId
        ? "Update Sub Category"
        : "Add Sub Category"}
    </button>

    <div className="mt-8 overflow-x-auto">

      <table className="w-full border">

        <thead>

          <tr className="bg-gray-100">

            <th className="border p-3">
              Category
            </th>

            <th className="border p-3">
              Sub Category
            </th>

            <th className="border p-3">
              Status
            </th>

            <th className="border p-3">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {subCategories.map((item) => (

            <tr key={item._id}>

              <td className="border p-3">
                {item.categoryId?.categoryName}
              </td>

              <td className="border p-3">
                {item.subCategoryName}
              </td>

              <td className="border p-3">
                {item.status}
              </td>

              <td className="border p-3 space-x-2">

                <button
                  onClick={() =>
                    editSubCategory(item)
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteSubCategory(item._id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
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