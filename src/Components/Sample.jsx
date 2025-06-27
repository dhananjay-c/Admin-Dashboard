import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 w-40"
      >
        Click Me
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg transition duration-300">
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
