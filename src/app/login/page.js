"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      
      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-sm text-indigo-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold"
        >
          Login
        </motion.button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => setOpenModal(true)}
            className="text-indigo-600 font-medium hover:underline"
          >
            Create new account
          </button>
        </p>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]"
            >
              <h2 className="text-xl font-bold mb-4">Create Account</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <span className="label">Name</span>
                <input placeholder="Full Name" className="input" />

                </div>
                
                <input placeholder="Email" className="input" />
                <input placeholder="Phone Number" className="input" />
                <input placeholder="Aadhar Number" className="input" />

                <select className="input">
                  <option>Chef</option>
                  <option>Admin</option>
                </select>

                <input placeholder="Pincode" className="input-group" />
                <input placeholder="State" className="input" />
                <input placeholder="City" className="input" />
                
              </div>

              <textarea
                placeholder="Address"
                className="w-full mt-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 rounded-lg border"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Register
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reusable class */}
      <style jsx>{`
        .input {
          @apply w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400;
        }
      `}</style>
    </div>
  );
}