import { getLanguageName } from "./languages";

export const mockTranslate = (text, sourceLang, targetLang) => {
  const mockTranslations = {
    en: {
      hi: {
        hello: "नमस्ते",
        "how are you": "आप कैसे हैं",
        "thank you": "धन्यवाद",
        "good morning": "सुप्रभात",
        welcome: "स्वागत है",
        "i am very tired": "मैं बहुत थक गया हूँ",
      },
      es: {
        hello: "hola",
        "how are you": "¿cómo estás?",
        "thank you": "gracias",
        "good morning": "buenos días",
        welcome: "bienvenido",
      },
    },
    hi: {
      en: {
        नमस्ते: "hello",
        "आप कैसे हैं": "how are you",
        धन्यवाद: "thank you",
        सुप्रभात: "good morning",
        "स्वागत है": "welcome",
        "मैं बहुत थक गया हूँ": "i am very tired",
      },
    },
  };

  const lowerText = text.toLowerCase();
  if (
    mockTranslations[sourceLang] &&
    mockTranslations[sourceLang][targetLang] &&
    mockTranslations[sourceLang][targetLang][lowerText]
  ) {
    return mockTranslations[sourceLang][targetLang][lowerText];
  }

  const fromLang = getLanguageName(sourceLang);
  const toLang = getLanguageName(targetLang);
  return `[${fromLang} to ${toLang} TRANSLATION] ${text}`;
};
