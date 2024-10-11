
function ContactSection() {
  return (
    <div id="contact" className="bg-brown text-cream py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">
          We would love to hear from you! For inquiries, please reach out using
          the contact form below.
        </p>
        <form className="mt-8 space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded border border-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded border border-gray-300"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 rounded border border-gray-300"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-cream text-brown py-2 px-4 rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
