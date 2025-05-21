import { useState } from "react";
import { Copy, ArrowRight, Volume2Icon, FileVolumeIcon } from "lucide-react";
import { getLanguageName } from "../utils/languages";

const HistoryItem = ({ item }) => {
  const [copied, setCopied] = useState(false);

  const speakText = (text, lang) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in your browser");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <li className="pb-3 border-b border-gray-700 last:border-0 fade-in transition-colors duration-200">
      <div className="flex justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">
              {getLanguageName(item.sourceLang)}
            </span>
            <ArrowRight className="h-3 w-3 text-gray-400" />
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded">
              {getLanguageName(item.targetLang)}
            </span>
          </div>
          <p className="font-medium text-gray-200">{item.sourceText}</p>
          <p className="text-gray-400">{item.translatedText}</p>
          <p className="text-xs text-gray-500">
            {new Date(item.timestamp).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <button
            onClick={() => copyToClipboard(item.translatedText)}
            className="p-2 text-gray-500 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-colors"
            title="Copy translation"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            onClick={() => speakText(item.sourceText, item.sourceLang)}
            className="p-2 text-gray-500 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-colors"
            title="Speak source text"
          >
            <FileVolumeIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => speakText(item.translatedText, item.targetLang)}
            className="p-2 text-gray-500 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-colors"
            title="Speak translated text"
          >
            <Volume2Icon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default HistoryItem;
