
function Admissions() {
  return (
    <div id="admissions" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brown">Admissions</h2>
        <p className="mt-4 text-brown-light max-w-2xl mx-auto">
          We welcome students from all backgrounds to join our school community.
          Our admissions process is designed to be simple and straightforward.
        </p>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Steps to Apply:</h3>
          <ol className="mt-4 text-left max-w-lg mx-auto space-y-2">
            <li>1. Complete the online application form.</li>
            <li>2. Submit required documents.</li>
            <li>3. Attend an interview with our admissions team.</li>
            <li>4. Receive your acceptance letter!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
