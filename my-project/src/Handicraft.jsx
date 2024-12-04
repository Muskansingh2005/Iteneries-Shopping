import React from "react";
import { motion } from "framer-motion";
import Handicraft from "./assets/Handicraft.png";
const HandicraftPage = () => {
  return (
    <div className="bg-gray-50 text-center justify-center">
      {/* Header */}
      <header className="p-4 bg-white shadow-md flex  justify-center">
      <h1 className="text-2xl font-bold text-center"> Handicraft Treasures of India
</h1>
      </header>
      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="relative h-screen mb-8">
          {/* Hero Image */}
          <motion.img
            src={Handicraft}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          {/* Hero Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center text-white px-4">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Discover Artistry
            </motion.h2>
            <motion.p
              className="text-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Explore Indian Craftwork
            </motion.p>
          </div>
        </div>

        {/* Categories Section */}
        <section>
  <h2 className="text-center text-2xl font-semibold mb-6">
    Explore by Category
  </h2>
  <div className="flex items-center justify-evenly gap-6 overflow-x-auto lg:overflow-visible">
    {[
      { name: "Pottery", image: "/assets/img 1.png" },
      { name: "Textiles", image: "/assets/img 2.jpg" },
      { name: "Jewelry", image: "/assets/img 3.png" },
      { name: "Woodwork", image: "/assets/img 4.png" },
      { name: "Painting", image: "/assets/img 5.png" },
    ].map((category) => (
      <motion.div
        key={category.name}
        className="flex flex-col items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-20 h-20 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors shadow-md overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm font-medium">{category.name}</p>
      </motion.div>
    ))}
  </div>
</section>

        {/* Best Sellers Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Best Sellers</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {[{ name: "Terracotta Vase", rating: 4.7 }, { name: "Silk Saree", rating: 4.8 },{ name: "Silk Saree", rating: 4.8 }].map((item, index) => (
              <motion.div
                key={item.name}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="h-40 bg-gray-200 mb-4"></div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">⭐ {item.rating}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6">Special Offers</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {[{ name: "Brass Statue", discount: "25%" }, { name: "Pashmina Shawl", discount: "30%" },{ name: "Pashmina Shawl", discount: "30%" }].map((offer, index) => (
              <motion.div
                key={offer.name}
                className="bg-white p-4 rounded-lg shadow-md relative hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale {offer.discount}
                </div>
                <div className="h-40 bg-gray-200 mb-4"></div>
                <h3 className="font-semibold">{offer.name}</h3>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="p-4 bg-white shadow-md mt-10 flex justify-center">
        <p>© 2024 Handicraft Treasures. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HandicraftPage;
