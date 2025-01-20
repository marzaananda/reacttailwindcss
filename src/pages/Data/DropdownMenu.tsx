import React from "react";

interface DropdownMenuProps {
  options: { label: string; onClick: () => void }[];
  isOpen: boolean;
  onClose: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="relative">
      {/* Lapisan Deteksi Klik di Luar */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Menu Dropdown */}
      <div
        className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {options.map((option, index) => (
          <button
            key={index}
            onClick={option.onClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
