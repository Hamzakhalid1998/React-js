import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*()_+}{][|/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, charAllowed, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, length, passwordGenerator]);
  return (
    <div className="w-full flex flex-wrap justify-center">
      <div className=" bg-[#14b8a6] mx-auto mt-7 p-5">
        <h1 className="text-center mb-2 text-xl font-bold">
          Password Generator
        </h1>
        <div className="w-96 shadow-2xl">
          <input
            type="text"
            className="p-1 w-80 rounded-l-lg"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 text-white px-3 py-1 rounded-r-lg font-bold hover:bg-red-400 duration-75 "
          >
            Copy
          </button>
        </div>

        <div className="flex gap-3 mt-2">
          <div className="flex items-center gap-1">
            <input
              type="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              value={length}
              min={6}
              max={100}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className=""
              min={8}
              max={100}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              defaultChecked={charAllowed}
              className=""
              min={8}
              max={100}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
