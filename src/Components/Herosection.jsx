
function HeroSection() {
  return (
    <div className="bg-brown text-cream h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold">
        Welcome to Great Foundation Schools
      </h1>
      <p className="mt-4 text-lg max-w-xl">
        Building the leaders of tomorrow through excellence in education.
      </p>
      <div className="mt-8">
        <a
          href="#admissions"
          className="bg-cream text-brown py-2 px-6 rounded-full text-lg font-semibold hover:bg-brown-light"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
