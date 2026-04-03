import { useState, useEffect, useCallback } from "react";

export default function Generator() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(10);

  const generate = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setText(result);
  }, [length]);

  useEffect(() => {
    generate();
  }, [generate]);

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 to-indigo-600">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          🔐 Random Generator
        </h1>

        <div className="bg-gray-100 p-4 rounded-lg text-lg text-center break-words mb-4">
          {text}
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-700">
            Length: {length}
          </label>
          <input
            type="range"
            min="5"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        <button
          onClick={generate}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition mb-3"
        >
          Generate
        </button>

        <button
          onClick={copyText}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
        >
          Copy
        </button>

      </div>
    </div>
  );
}