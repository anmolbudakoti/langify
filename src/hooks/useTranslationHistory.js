import { useState, useEffect } from "react";

export const useTranslationHistory = () => {
  const [history, setHistory] = useState([]);
  const STORAGE_KEY = "translationHistory";

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(STORAGE_KEY);

      if (savedHistory) {
        const parsedHistory = JSON.parse(savedHistory);

        if (Array.isArray(parsedHistory) && parsedHistory.length > 0) {
          setHistory(parsedHistory);
        } else {
          console.log("No valid history found in localStorage");
        }
      } else {
        console.log("No history found in localStorage");
      }
    } catch (e) {
      console.error("Failed to parse history from localStorage:", e);
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      try {
        const serializedHistory = JSON.stringify(history);
        localStorage.setItem(STORAGE_KEY, serializedHistory);
      } catch (e) {
        console.error("Failed to save history to localStorage:", e);
      }
    }
  }, [history]);

  const addToHistory = (translation) => {
    const newTranslation = {
      id: Date.now().toString(),
      ...translation,
      timestamp: new Date().toISOString(),
    };

    setHistory((prev) => {
      const newHistory = [newTranslation, ...prev].slice(0, 10);
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { history, addToHistory, clearHistory };
};
