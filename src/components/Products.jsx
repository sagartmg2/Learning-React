import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="p-5">

    
      <div className="relative w-64 mb-5">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black-500" />

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 pl-10 rounded w-full"
        />
      </div>

      {/* loading */}
      {loading && <p>Loading...</p>}

      {/* no result */}
      {!loading && products.length === 0 && search !== "" && (
        <p className="text-red-500">No product found</p>
      )}

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!loading &&
          products.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl shadow p-3 hover:scale-105 transition"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />

              <h2 className="font-bold mt-2">{item.title}</h2>

              <p className="text-sm text-gray-600">
                {item.description}
              </p>

              <p className="text-green-600 font-semibold mt-1">
                ${item.price}
              </p>
            </div>
          ))}
      </div>

    </div>
  );
}