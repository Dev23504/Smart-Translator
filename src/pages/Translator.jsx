import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [lang, setLang] = useState("hi");
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: "hi", name: "Hindi" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "zh", name: "Chinese" },
    { code: "ru", name: "Russian" },
    { code: "ar", name: "Arabic" },
    { code: "pt", name: "Portuguese" }
  ];

  const translate = async () => {
    if (!text) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://free-google-translator.p.rapidapi.com/external-api/free-google-translator?from=en&to=${lang}&query=${text}`,
        {
          method: "POST",
          headers: {
            "x-rapidapi-key": "830e1d2b20msh88e086be8ff2f2bp1948a1jsn18959ae6aa7e",
            "x-rapidapi-host": "free-google-translator.p.rapidapi.com"
          }
        }
      );

      const data = await res.json();
      setTranslated(data.translation || data.translatedText || "No result");
    } catch {
      setTranslated("Error in translation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-pink-300">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          🌐 Smart Translator
        </h1>

        <textarea
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text in English..."
        />

        <select
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setLang(e.target.value)}
        >
          {languages.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>

        <button
          onClick={translate}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg min-h-[80px] break-words">
          {translated}
        </div>

      </div>
    </div>
  );
}