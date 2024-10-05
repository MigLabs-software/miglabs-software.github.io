import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Welcome to MigLab Software</h1>
        <p className="text-xl mt-4">Your Vision, Our Innovation</p>
        <div className="mt-8">
          <a href="#services" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">
            Explore Our Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
