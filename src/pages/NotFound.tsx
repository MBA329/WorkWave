import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInVirew = useInView(ref);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        className="text-6xl font-bold text-indigo-800"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        404 error
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mt-5"
        initial={{ opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {" "}
        Oops! looks like The page you're looking for doesn't exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          to={"/"}
          className="px-6 py-3 mt-5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Go back to Home
        </Link>
      </motion.div>
      
    </div>
  );
};

export default NotFound;
