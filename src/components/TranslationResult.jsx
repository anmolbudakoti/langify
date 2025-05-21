import { useState } from "react";
import { Copy, Check, Volume2Icon } from "lucide-react";

const TranslationResult = ({ text, targetLang }) => {
  const [copied, setCopied] = useState(false);

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = targetLang;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in your browser");
    }
  };

  const copyToClipboard = () => {
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
    <div className="p-4 bg-gray-700/50 rounded-md fade-in mt-6">
      <h3 className="text-lg font-medium text-gray-200 mb-2">Translation</h3>
      <div className="flex justify-between items-start">
        <p className="text-lg text-gray-200">{text}</p>
        <div className="flex space-x-2">
          <button
            onClick={copyToClipboard}
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-colors"
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={speakText}
            className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-full transition-colors"
            title="Speak"
          >
            <Volume2Icon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationResult;
