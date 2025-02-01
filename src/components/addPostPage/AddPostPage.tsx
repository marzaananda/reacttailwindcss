import { useState } from "react";

const AddPostPage = () => {
  const [topic, setTopic] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [memory, setMemory] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ topic, date, title, memory, image });
    // Lakukan sesuatu dengan data, seperti mengirim ke API
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-quantico font-bold text-center mb-6 text-gray-800">Create Your Card</h1>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Topik */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Topik</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan topik"
              required
            />
          </div>

          {/* Input Tanggal */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Tanggal</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Input Judul */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Judul</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan judul"
              required
            />
          </div>

          {/* Input Deskripsi Memori */}
          <div>
            <label className="block text-sm font-medium text-gray-700">What's the memory?</label>
            <textarea
              value={memory}
              onChange={(e) => setMemory(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Deskripsikan memori Anda"
              required
            />
          </div>

          {/* Input Upload Gambar */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Gambar</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                      className="sr-only"
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Tombol Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostPage;