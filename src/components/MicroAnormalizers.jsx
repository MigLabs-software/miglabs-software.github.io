import { motion } from 'framer-motion';

const MicroAnormalizers = () => {
  return (
    <section id="microanormalizers" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-6">MicroAnormalizers</h2>
          <p className="mb-6">
            A cutting-edge solution from MigLab Software that revolutionizes data processing with Anormal Processing Units (APUs). MicroAnormalizers bring unparalleled efficiency and speed, optimized for both enterprise and personal computing.
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>APU-powered processing for enhanced performance</li>
            <li>Efficient energy consumption</li>
            <li>AI-driven algorithms for smart computing</li>
            <li>Seamless integration with MigLab Software products</li>
          </ul>
          <a
            href="#"
            className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-500 transition duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <img
            src="/assets/m808950.webp"
            alt="MicroAnormalizers"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MicroAnormalizers;
