'use client';

import { useState } from 'react';
import Image from 'next/image';

const workOptions = [
  {
    id: 'staff-augmentation',
    title: 'IT Staff Augmentation',
    description: 'Quickly scale your team with our IT staff augmentation services. We provide skilled software developers, QA engineers, and technology experts who integrate smoothly with your workflow.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
  },
  {
    id: 'launch-scale',
    title: 'Launch & Scale Support',
    description: 'Accelerate your product launch and business growth with our expert launch and scale support. Our team helps you plan, deploy, and optimize your digital platforms from day one.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
  {
    id: 'built-teams',
    title: 'Built-for-You Teams',
    description: 'Get a dedicated team of developers, designers, and project managers focused on your goals. We handle everything from planning to delivery, using agile methods and strict quality control.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
  },
];

export default function WorkWithUs() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOptionChange = (index: number) => {
    if (index === selectedOption) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedOption(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentOption = workOptions[selectedOption];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white block">Work With Us, Your</span>
              <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent block">
                Way
              </span>
            </h2>
          </div>

          {/* Right Side - Tabs and Content */}
          <div>
            {/* Tabs */}
            <div className="flex gap-3 mb-8">
              {workOptions.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionChange(index)}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-xs transition-all duration-300 ${
                    selectedOption === index
                      ? 'bg-[#51CFDF]/20 border border-[#51CFDF] text-[#51CFDF]'
                      : 'bg-transparent border border-[#51CFDF]/30 text-gray-400 hover:border-[#51CFDF]/50 hover:text-gray-300'
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>

            {/* Image with Overlay Text Box */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <div 
                key={`image-${selectedOption}`}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <Image
                  src={currentOption.image}
                  alt={currentOption.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Overlay Text Box - Premium styling with proper radius */}
              <div 
                key={`text-${selectedOption}`}
                className={`absolute bottom-0 right-0 bg-white/95 backdrop-blur-sm border-t border-l border-[#51CFDF]/40 p-6 md:p-8 max-w-md transition-all duration-500 ${
                  isAnimating 
                    ? 'opacity-0 translate-y-4' 
                    : 'opacity-100 translate-y-0'
                }`}
                style={{
                  borderTopLeftRadius: '1rem',
                  borderBottomLeftRadius: '1rem',
                  borderTopRightRadius: '0',
                  borderBottomRightRadius: '0',
                  boxShadow: '0 -4px 20px rgba(81, 207, 223, 0.1), -4px 0 20px rgba(81, 207, 223, 0.08)'
                }}
              >
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {currentOption.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
