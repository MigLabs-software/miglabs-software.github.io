export default function Contact() {
    return (
      <section id="contact" className="py-12 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
          <form className="mt-8 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 mb-4 bg-gray-700 border-none rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 mb-4 bg-gray-700 border-none rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 mb-4 bg-gray-700 border-none rounded h-32"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  