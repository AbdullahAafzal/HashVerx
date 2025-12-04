export default function HireDevelopers() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Image Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-gray-900 to-black blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Hire{' '}
          <span className="bg-gradient-to-r from-[#51CFDF] to-[#6dd9e8] bg-clip-text text-transparent">
            Developers
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Access skilled talent, on your schedule. Whether you need one engineer or a dedicated team, we've got you covered.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl shadow-[#51CFDF]/30 hover:shadow-2xl hover:shadow-[#51CFDF]/40 hover:scale-105 transform"
        >
          <span>Hire Developers</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

