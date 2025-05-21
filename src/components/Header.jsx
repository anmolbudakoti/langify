import { Languages } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10 pb-5 border-b border-gray-200">
      <div className="text-4xl font-bold text-gray-800 flex items-center">
        <Languages className="mr-2 h-8 w-8 text-blue-500" />
        <span className="bg-clip-text p-2 text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Langify
        </span>
      </div>
    </header>
  );
};

export default Header;
