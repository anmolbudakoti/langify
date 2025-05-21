const TranslationInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-y min-h-[150px] bg-gray-700 text-gray-200 transition-colors duration-200"
        rows={5}
      />
      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
        {value.length} characters
      </div>
    </div>
  );
};

export default TranslationInput;
