import { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    let btnCopy = document.getElementById("btnCopy");
    btnCopy.innerHTML = "Copy";
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);

    let btnCopy = document.getElementById("btnCopy");
    btnCopy.innerHTML = "Copied!";
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md px-3 py-4 mx-auto my-8 text-orange-500 bg-gray-700 rounded-lg shadow-md ">
      <h1 className="text-center text-white">Password Generator</h1>
      <div className="flex mb-4 overflow-hidden rounded-lg shadow">
        <input
          type="text"
          className="w-full px-3 py-1 outline-none"
          placeholder="password"
          value={password}
          id="password"
          ref={passwordRef}
          readOnly
        />
        <button
          onClick={copyPasswordToClipBoard}
          id="btnCopy"
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => setcharAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}
