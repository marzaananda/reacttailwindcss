import React from "react";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <div className="bg-gray-200 p-8 rounded shadow-lg w-96 relative">
        <h2 className="font-quantico text-6xl font-bold mb-6 text-center text-black drop-shadow-lg">Welcome</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username/Email"
              className="font-quantico w-full px-4 py-2 border rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="font-quantico w-full px-4 py-2 border rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="font-quantico px-4 py-2 bg-gray-700 text-white rounded shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Register
            </button>
            <button
              type="submit"
              className="font-quantico px-4 py-2 bg-gray-700 text-white rounded shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Log In
            </button>
          </div>
        </form>
        <button
          onClick={onClose}
          className="font-quantico absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <span className="text-2xl font-bold drop-shadow-lg">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
