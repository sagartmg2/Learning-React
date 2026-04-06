import { useState } from "react";

export default function Theme() {
  const [isDark, setIsDark] = useState(false);

  const changeToDarkMode = () => {
    console.log("dark mode");
    setIsDark(true);
  };

  const changeToLightMode = () => {
    console.log("light mode");
    setIsDark(false);
  };

  return (
    <div
      className={`p-8 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* show only one button */}
      {!isDark && (
        <button
          onClick={changeToDarkMode}
          className="border bg-white px-3 py-2 text-black rounded-xl mr-3"
        >
          dark theme
        </button>
      )}

      {isDark && (
        <button
          onClick={changeToLightMode}
          className="border bg-white px-3 py-2 text-black rounded-xl"
        >
          light theme
        </button>
      )}

      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>

      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>

      {/* rest same */}
    </div>
 );
} 
      
      