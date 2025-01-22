// src/components/addPostPage/ImageDropdown.tsx
import React, { useState } from 'react';

const ImageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploaded File:", file);
      // Lakukan sesuatu dengan file, misalnya simpan ke state atau kirim ke backend
    }
  };

  return (
    <div className="relative">
      <button
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={toggleDropdown}
      >
        📷
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
          <label
            htmlFor="fileInput"
            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            ➕ Import Image
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageDropdown;
