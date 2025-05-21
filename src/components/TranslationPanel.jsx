import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import TranslationInput from "./TranslationInput";
import TranslationResult from "./TranslationResult";
import { translateText } from "../utils/api";
import { ArrowLeftRight } from "lucide-react";

const TranslationPanel = ({ addToHistory }) => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const result = await translateText(inputText, sourceLang, targetLang);
      setTranslatedText(result);

      addToHistory({
        sourceText: inputText,
        translatedText: result,
        sourceLang,
        targetLang,
      });
    } catch (err) {
      console.error("Translation error:", err);
      setError("Translation failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">
          Translate Text
        </h2>

        <TranslationInput
          value={inputText}
          onChange={setInputText}
          placeholder={`Enter text in ${
            sourceLang === "en"
              ? "English"
              : sourceLang === "hi"
              ? "Hindi"
              : sourceLang.toUpperCase()
          }`}
        />

        <div className="flex flex-wrap justify-between items-center gap-3 my-4">
          <LanguageSelector
            id="source-language"
            label="From:"
            value={sourceLang}
            onChange={setSourceLang}
          />

          <button
            onClick={swapLanguages}
            className="p-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-colors"
            title="Swap languages"
            aria-label="Swap languages"
          >
            <ArrowLeftRight className="h-5 w-5" />
          </button>

          <LanguageSelector
            id="target-language"
            label="To:"
            value={targetLang}
            onChange={setTargetLang}
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleTranslate}
            disabled={isLoading || !inputText.trim()}
            className={`px-6 py-2 rounded-md text-white font-medium transition-all transform hover:scale-105 ${
              isLoading || !inputText.trim()
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg"
            }`}
          >
            {isLoading ? "Translating..." : "Translate"}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-900/30 text-red-400 rounded-md text-center">
            {error}
          </div>
        )}

        {translatedText && (
          <TranslationResult text={translatedText} targetLang={targetLang} />
        )}
      </div>
    </div>
  );
};

export default TranslationPanel;
