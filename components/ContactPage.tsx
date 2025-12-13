'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const steps = [
    {
      number: '1',
      description: "Once we've received and processed your request, we'll get back to you to detail your project needs and sign an NDA to ensure confidentiality."
    },
    {
      number: '2',
      description: "After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates."
    },
    {
      number: '3',
      description: "We'll arrange a meeting with you to discuss the offer and nail down the details."
    },
    {
      number: '4',
      description: "Finally, we'll sign a contract and start working on your project right away."
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-white min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Contact Form */}
          <div className="flex flex-col p-6 lg:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0859B2] mb-2">
              Contact us
            </h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Fill out the form below and we'll get back to you once we've processed your request.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              {/* Name and Company in one row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Name
                    </label>
                    <span className="text-red-500 text-sm">*</span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#51CFDF] outline-none py-1.5 text-gray-900 placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Company */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      Company
                    </label>
                    <span className="text-red-500 text-sm">*</span>
                  </div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#51CFDF] outline-none py-1.5 text-gray-900 placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              {/* Corporate email and Phone in one row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Corporate email */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Corporate email
                    </label>
                    <span className="text-red-500 text-sm">*</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#51CFDF] outline-none py-1.5 text-gray-900 placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone
                    </label>
                    <span className="text-red-500 text-sm">*</span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-gray-300 focus:border-[#51CFDF] outline-none py-1.5 text-gray-900 placeholder-gray-400 transition-colors bg-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Project budget */}
              <div>
                <label htmlFor="budget" className="text-sm font-semibold text-gray-700 mb-1 block">
                  Project budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-[#51CFDF] outline-none py-1.5 text-gray-900 placeholder-gray-400 transition-colors bg-transparent"
                  placeholder="Enter project budget"
                />
              </div>

              {/* Describe your needs */}
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    Describe your needs in detail
                  </label>
                  <span className="text-red-500 text-sm">*</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full border-b-2 border-gray-300 focus:border-[#51CFDF] outline-none py-1.5 text-gray-900 placeholder-gray-400 transition-colors resize-none bg-transparent"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {/* Consent Text */}
              <p className="text-xs text-gray-500 leading-relaxed mt-3">
                By clicking Send, you consent to HashVerx processing your personal data per our{' '}
                <a href="/privacy-policy" className="text-[#0859B2] hover:text-[#51CFDF] underline">
                  Privacy Policy
                </a>{' '}
                to provide you with relevant information. By submitting your phone number, you agree that we may contact you via voice calls, SMS, and messaging apps. Calling, message, and data rates may apply.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0859B2] to-[#51CFDF] hover:from-[#51CFDF] hover:to-[#6dd9e8] text-white px-6 py-3 rounded-lg font-semibold text-base transition-all shadow-lg shadow-[#51CFDF]/20 hover:shadow-xl hover:shadow-[#51CFDF]/30 hover:scale-105 transform mt-4"
              >
                Send
              </button>

              {/* Alternative Contact */}
              <p className="text-xs text-gray-600 mt-3">
                You can also send us your request to{' '}
                <a href="mailto:contact@hashverx.com" className="text-[#0859B2] hover:text-[#51CFDF] underline font-semibold">
                  contact@hashverx.com
                </a>
              </p>
            </form>
          </div>

          {/* Right Side - What happens next */}
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 h-fit">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0859B2] mb-6">
              What happens next?
            </h2>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0859B2] to-[#51CFDF] flex items-center justify-center text-white font-bold text-base shadow-lg shadow-[#51CFDF]/30">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div 
                        className="w-0.5 h-6 mt-2"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, #d1d5db 4px, #d1d5db 8px)'
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

