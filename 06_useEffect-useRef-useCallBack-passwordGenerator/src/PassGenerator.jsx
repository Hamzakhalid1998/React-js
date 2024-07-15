import React, { useCallback, useEffect, useRef, useState } from "react";

export const PassGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [chartAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showAlter, setShowAlert] = useState(false);

  const passwordRef = useRef(null);

  // copy text function without useCallback Hook
  // const copyText = () => {
  //   passwordRef.current?.select();
  //   window.navigator.clipboard.writeText(password);
  // };

  // copy text function with useCallback hook for code optimization only
  const copyText = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (chartAllowed) str += "!@#$%^&*()_+=";
    if (numberAllowed) str += "01234567890";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, chartAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, chartAllowed, numberAllowed, passwordGenerator]);
  return (
    <div className="w-full flex flex-wrap h-screen justify-center  items-center">
      <div className=" bg-[#1d4ed8] mx-auto mt-7 p-5 rounded-lg ">
        <h1 className="text-center mb-2 text-xl font-bold text-white">
          Password Generator
        </h1>
        <div className="w-96 shadow-2xl mb-3">
          <input
            ref={passwordRef}
            type="text"
            className="p-1 w-80 rounded-l-lg outline-none"
            value={password}
            readOnly
          />
          <button
            onClick={copyText}
            className="bg-blue-500 text-white px-3 py-1 rounded-r-lg font-bold hover:bg-red-400 duration-75 "
          >
            Copy
          </button>
        </div>

        {showAlter && (
          <div className="flex justify-center">
            <div className="bg-green-400 p-2 rounded-lg fixed bottom-10  ">
              <p className="text-white">Copied</p>
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-2">
          <div className="flex items-center gap-1">
            <input
              type="range"
              value={length}
              min={1}
              max={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">Length{`(${length})`}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              type="checkbox"
            />
            <label className="text-white">Number</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              type="checkbox"
            />
            <label className="text-white">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};
