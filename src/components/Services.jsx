export default function Services() {
    const services = [
      { title: 'Web Development', description: 'We build responsive, scalable web solutions.' },
      { title: 'Software Consulting', description: 'Expert advice for your business needs.' },
      { title: 'Custom Software', description: 'Tailored software to meet your specifications.' },
    ];
  
    return (
      <section id="services" className="py-12 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="p-6 bg-gray-700 rounded">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  