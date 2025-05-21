import Header from "./components/Header";
import TranslationPanel from "./components/TranslationPanel";
import HistoryPanel from "./components/HistoryPanel";
import { useTranslationHistory } from "./hooks/useTranslationHistory";
import "./App.css";

function App() {
  const { history, addToHistory, clearHistory } = useTranslationHistory();

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TranslationPanel addToHistory={addToHistory} />
          <HistoryPanel history={history} clearHistory={clearHistory} />
        </main>
      </div>
    </div>
  );
}

export default App;
