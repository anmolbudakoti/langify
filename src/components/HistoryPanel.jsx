import HistoryItem from "./HistoryItem";
import { Plus, Trash2 } from "lucide-react";

const HistoryPanel = ({ history, clearHistory }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 h-full transition-colors duration-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-200">
          Translation History
        </h2>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="flex items-center px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
            title="Clear history"
          >
            <Trash2 className="w-4 h-4 mr-1" />
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <Plus className="w-16 h-16 mb-4 text-gray-600" />
          <p className="text-gray-400">No translation history yet</p>
          <p className="text-sm text-gray-500 mt-1">
            Translations will appear here after you translate text
          </p>
        </div>
      ) : (
        <ul className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
          {history.map((item) => (
            <HistoryItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryPanel;
