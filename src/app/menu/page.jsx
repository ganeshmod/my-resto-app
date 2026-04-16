"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // if using Next.js image

export default function MenuPage() {
  const [showModal, setShowModal] = useState(true);
  const [IsActive, setIsActive] = useState(0);

  return (
    <div className="relative">
      {/* ✅ POPUP */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-white flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{ backgroundColor: "#eedfdf" }}
              className=" p-6 rounded-xl w-80 text-center shadow-lg"
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-2 text-black">
                Welcome to Our Restaurant
              </h2>
              <div className="flex justify-center mb-3">
                <Image
                  src="/thali.jpg.jpg"
                  alt="Thali"
                  width={120}
                  height={120}
                  className="rounded-xl object-cover"
                />
              </div>

              <p className="text-gray-600 mb-4">Ready to explore our menu?</p>

              <div className="flex justify-between">
                <button
                  className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ MENU (only show after modal closed) */}
      {!showModal && (
        <div>
          <header className="bg-white p-4 flex sticky top-0 z-50 shadow-md">
            <div className="flex items-center gap-2 px-4">
              <Image
                src="/logo.jpg"
                alt="logo"
                width={50}
                height={50}
                className="rounded-tl-lg rounded-br-lg"
              />
              <h1 className="text-2xl font-semibold text-black">My Resto</h1>
            </div>
            <div className="gap-2.5 flex items-center mx-auto">
              <button className={`${IsActive==0?"bg-green-500":"bg-white border"} rounded-full px-4 cursor-pointer`}
              onClick={()=>setIsActive(0)}>All</button>
               <button className={`${IsActive==1?"bg-green-500":"bg-white border"} rounded-full px-4 cursor-pointer`}
              onClick={()=>setIsActive(1)}>Starters</button>
               <button className={`${IsActive==2?"bg-green-500":"bg-white border"} rounded-full px-4 cursor-pointer`}
              onClick={()=>setIsActive(2)}>Main Course</button>
              <button className={`${IsActive==3?"bg-green-500":"bg-white border"} rounded-full px-4 cursor-pointer`}
              onClick={()=>setIsActive(3)}>Drinks</button>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="search items by name"
                className="border rounded-2xl text-black px-2"
              />
            </div>
          </header>

          <section className="bg-white  px-3">
            <h1 className="text-amber-600 font-bold px-5 text-3xl mt-3 mb-0">
              All Categories
            </h1>
            <div className="h-auto   p-4 grid grid-cols-4  gap-4">
              <article className="border-amber-50 rounded-lg shadow-lg p-4  text-center">
                {/* Image */}
                <div className="relative w-full h-42 mb-2">
                  <Image
                    src="/logo.jpg"
                    alt="Pizza"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">Pizza</h3>
                <p className="text-gray-600 mb-2">₹199</p>
                <button className="bg-green-500 p-1 rounded-sm">
                  Add Item
                </button>
              </article>
              <article className="border-amber-50 rounded-lg shadow-lg p-4  text-center">
                {/* Image */}
                <div className="relative w-full h-42 mb-2">
                  <Image
                    src="/logo.jpg"
                    alt="Pizza"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">Pizza</h3>
                <p className="text-gray-600 mb-2">₹199</p>
                <button className="bg-green-500 p-1 rounded-sm">
                  Add Item
                </button>
              </article>
              <article className="border-amber-50 rounded-lg shadow-lg p-4  text-center">
                {/* Image */}
                <div className="relative w-full h-42 mb-2">
                  <Image
                    src="/logo.jpg"
                    alt="Pizza"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">Pizza</h3>
                <p className="text-gray-600 mb-2">₹199</p>
                <button className="bg-green-500 p-1 rounded-sm">
                  Add Item
                </button>
              </article>
              <article className="border-amber-50 rounded-lg shadow-lg p-4  text-center">
                {/* Image */}
                <div className="relative w-full h-42 mb-2">
                  <Image
                    src="/logo.jpg"
                    alt="Pizza"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">Pizza</h3>
                <p className="text-gray-600 mb-2">₹199</p>
                <button className="bg-green-500 p-1 rounded-sm">
                  Add Item
                </button>
              </article>
              <article className="border-amber-50 rounded-lg shadow-lg p-4  text-center">
                {/* Image */}
                <div className="relative w-full h-42 mb-2">
                  <Image
                    src="/logo.jpg"
                    alt="Pizza"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">Pizza</h3>
                <p className="text-gray-600 mb-2">₹199</p>
                <button className="bg-green-500 p-1 rounded-sm">
                  Add Item
                </button>
              </article>
              <article className="border-amber-50 rounded-lg shadow-lg p-4  text-center">
                {/* Image */}
                <div className="relative w-full h-42 mb-2">
                  <Image
                    src="/logo.jpg"
                    alt="Pizza"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">Pizza</h3>
                <p className="text-gray-600 mb-2">₹199</p>
                <button className="bg-green-500 p-1 rounded-sm">
                  Add Item
                </button>
              </article>
              <article className="border-amber-50 rounded-lg shadow-lg p-4  text-center">
                {/* Image */}
                <div className="relative w-full h-42 mb-2">
                  <Image
                    src="/logo.jpg"
                    alt="Pizza"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">Pizza</h3>
                <p className="text-gray-600 mb-2">₹199</p>
                <button className="bg-green-500 p-1 rounded-sm">
                  Add Item
                </button>
              </article>
            </div>
          </section>
          <footer className="bg-white flex bottom-0 sticky z-50 shadow-lg p-5">
            <p className="mx-auto">@get order in minimal time </p>
          </footer>
        </div>
      )}
    </div>
  );
}
