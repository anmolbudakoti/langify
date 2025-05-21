import { languages } from "../utils/languages";

const LanguageSelector = ({ id, label, value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor={id} className="text-gray-300 font-medium">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-gray-200 transition-colors duration-200"
      >
        {languages.map((lang) => (
          <option key={`${id}-${lang.code}`} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
