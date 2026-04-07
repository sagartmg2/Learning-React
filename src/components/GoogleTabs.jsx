import { useState } from "react";

export default function GoogleTabs() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      <div className="flex gap-4 capitalize cursor-pointer">
        <span
          onClick={() => setActiveTab("all")}
          className={`hover:text-red-500 hover:underline ${
            activeTab === "all" ? "text-red-500 underline" : ""
          }`}
        >
          all
        </span>

        <span
          onClick={() => setActiveTab("images")}
          className={`hover:text-red-500 hover:underline ${
            activeTab === "images" ? "text-red-500 underline" : ""
          }`}
        >
          images
        </span>

        <span
          onClick={() => setActiveTab("videos")}
          className={`hover:text-red-500 hover:underline ${
            activeTab === "videos" ? "text-red-500 underline" : ""
          }`}
        >
          videos
        </span>
      </div>



      {activeTab === "all" && (
        <div>
          <h1 className="text-2xl">All</h1>
          <p>all contents</p>
          <p>all contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
        </div>
      )}

      {activeTab === "videos" && (
        <div>
          <h1 className="text-2xl">Videos</h1>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
        </div>
      )}

      {activeTab === "images" && (
        <div>
          <h1 className="text-2xl">Images</h1>
          <p>images contents</p>
          <p>images contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
          <p>videos contents</p>
        </div>
      )}
    </>
  );
}