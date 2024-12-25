import React from "react";
import { motion } from "framer-motion";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      {/* Animasi pada wrapper modal */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }}
        exit={{ opacity: 0, y: 50 }}
        className="relative bg-gray-200 p-8 rounded-xl shadow-xl w-96"
      >
        {/* Tombol Close di dalam modal */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.3 } }}
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <span className="text-2xl font-bold drop-shadow-lg">&times;</span>
        </motion.button>

        {/* Heading dengan animasi bouncing */}
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1.1, 1],
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          className="font-quantico text-5xl font-bold mb-6 text-center text-black drop-shadow-lg"
        >
          Welcome
        </motion.h2>

        <form>
          {/* Input Field Animasi */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4"
          >
            <input
              type="text"
              placeholder="Username/Email"
              className="font-quantico w-full px-3 py-2 border border-gray-400 rounded shadow-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <input
              type="password"
              placeholder="Password"
              className="font-quantico w-full px-3 py-2 border border-gray-400 rounded shadow-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </motion.div>

          {/* Tombol dengan animasi dari bawah */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-around"
          >
            <button
              type="button"
              className="font-quantico py-2 px-6 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
            >
              Register
            </button>
            <button
              type="submit"
              className="font-quantico py-2 px-6 bg-blue-400 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginModal;
