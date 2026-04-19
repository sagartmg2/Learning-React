import React, { useState, useEffect } from "react";

export default function ProductsApi() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Fetch API automatically on load
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Search handler
  const searchProduct = (e) => {
    setSearchText(e.target.value.toLowerCase());
    setCurrentPage(1); // reset page on search
  };

  // Filtered products
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchText),
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="p-5">
      {/* Search Input */}
      <div className="mb-5 flex justify-start">
        <input
          className="border p-2 rounded w-64 outline-none"
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={searchProduct}
        />
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {currentProducts.map((product) => (
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
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-black text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
