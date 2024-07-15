import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");
  return (
    <div
      className="w-full flex justify-center duration-75 h-screen inset-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap bg-slate-700 rounded-lg py-3 px-5 bottom-12 gap-2">
        <button
          onClick={() => setBgColor("red")}
          className="bg-red-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor("green")}
          className="bg-green-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Green
        </button>
        <button
          onClick={() => setBgColor("orange")}
          className="bg-orange-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Orange
        </button>
        <button
          onClick={() => setBgColor("pink")}
          className="bg-pink-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Pink
        </button>
        <button
          onClick={() => setBgColor("blue")}
          className="bg-blue-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Blue
        </button>
        <button
          onClick={() => setBgColor("yellow")}
          className="bg-yellow-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Yellow
        </button>
        <button
          onClick={() => setBgColor("purple")}
          className="bg-purple-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Purple
        </button>
        <button
          onClick={() => setBgColor("gray")}
          className="bg-gray-500 py-1 px-3 rounded-xl text-white shadow-2xl"
        >
          Grey
        </button>
        <button
          onClick={() => setBgColor("#93E9BE")}
          className="bg-[#93E9BE] py-1 px-3 rounded-xl  shadow-2xl"
        >
          Sea foam
        </button>
        <button
          onClick={() => setBgColor("#F5F5F5")}
          className="bg-[#F5F5F5] py-1 px-3 rounded-xl shadow-2xl"
        >
          White smoke
        </button>
        <button
          onClick={() => setBgColor("#FBCEB1")}
          className="bg-[#FBCEB1] py-1 px-3 rounded-xl shadow-2xl"
        >
          Apricot
        </button>
      </div>
    </div>
  );
}

export default App;
