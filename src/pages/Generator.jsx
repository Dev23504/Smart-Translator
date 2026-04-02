import { useState, useCallback, useEffect } from "react";

export default function Generator() {
  const [str, setStr] = useState("");

  const generate = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setStr(result);
  }, []);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Random Generator</h1>

      <p className="mb-4">{str}</p>

      <button
        onClick={generate}
        className="bg-green-500 text-white px-4 py-2"
      >
        Generate
      </button>
    </div>
  );
}