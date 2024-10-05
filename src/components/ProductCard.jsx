import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-700 rounded-lg shadow-lg overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-300 mb-4">{product.description}</p>
        <a
          href={product.link}
          className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
