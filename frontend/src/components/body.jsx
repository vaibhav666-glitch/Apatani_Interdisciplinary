// App.js
import React from 'react';
import { motion } from 'framer-motion';

const Trial = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold text-gray-900">Animated Card</h2>
        <p className="text-gray-600">
          This is an example of a card component using Framer Motion for animations.
          Hover to see the effect!
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Click Me
        </button>
      </motion.div>
    </div>
  );
};

export default Trial;
