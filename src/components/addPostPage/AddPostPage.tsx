// src/components/addPostPage/AddPostPage.tsx
import React from 'react';
import ImageDropdown from './ImageDropdown';

const AddPostPage: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Your Card</h1>
      <form className="space-y-4">
        <div className="flex items-center space-x-4">
          <ImageDropdown />
          <input
            type="text"
            placeholder="Tanggal?"
            className="border rounded-md p-2 flex-1"
          />
          <input
            type="text"
            placeholder="Topik?"
            className="border rounded-md p-2 flex-1"
          />
        </div>
        <input
          type="text"
          placeholder="Judul??"
          className="border rounded-md p-2 w-full"
        />
        <textarea
          placeholder="What's the memory??"
          className="border rounded-md p-2 w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
