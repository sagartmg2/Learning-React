import React, { useState, useEffect } from "react";

export default function ProductsApi() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // ✅ NEW

  const itemsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false); // ✅ stop loading
      });
  }, []);

  const searchProduct = (e) => {
    setSearchText(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchText)
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-5">
      {/* Search */}
      <div className="mb-5 flex justify-start">
        <input
          className="border p-2 rounded w-64 outline-none"
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={searchProduct}
        />
      </div>

      {/* Products / Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-4 animate-pulse"
                >
                  <div className="w-full h-40 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded mt-3 w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded mt-2 w-full"></div>
                  <div className="h-3 bg-gray-200 rounded mt-2 w-5/6"></div>
                  <div className="flex justify-between mt-3">
                    <div className="h-4 bg-gray-300 w-12 rounded"></div>
                    <div className="h-4 bg-gray-300 w-8 rounded"></div>
                  </div>
                </div>
              ))
          : currentProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded"
                />

                <h2 className="font-semibold mt-2">{product.title}</h2>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold">${product.price}</span>
                  <span className="text-yellow-500">{product.rating}</span>
                </div>
              </div>
            ))}
      </div>

      {/* Pagination */}
      {!loading && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}