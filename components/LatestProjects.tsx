"use client";

import { useState } from "react";
import Image from "next/image";
import codaImage from "../assets/projects/Coda.png";
import dramaPopImage from "../assets/projects/DramaPop.png";
import healthTapImage from "../assets/projects/HealthTap.png";
import mahbubiImage from "../assets/projects/Mahbubi.png";
import roadTrippersImage from "../assets/projects/RoadTrippers.png";
import snoonuImage from "../assets/projects/Snoonu.png";
import telegraphyImage from "../assets/projects/Telegraphy.png";
import wishImage from "../assets/projects/Wish.png";
import zedImage from "../assets/projects/Zed.png";
import zingImage from "../assets/projects/Zing.png";

const projects = [
  {
    id: "Yunuak",
    name: "Yunuak",
    description:
      "A powerful document collaboration platform that combines documents, spreadsheets, and applications into one unified workspace. We delivered a seamless user experience with real-time collaboration, advanced automation, and intuitive design that transforms how teams work together.",
    image: codaImage,
    type: "Productivity"
  },
  {
    id: "Forward-Thinking-Fitness",
    name: "Forward Thinking Fitness",
    description:
      "An immersive entertainment platform bringing the best of drama and pop culture to audiences worldwide. We built a streaming solution with personalized recommendations, social features, and seamless playback across all devices, creating an engaging viewing experience.",
    image: dramaPopImage,
    type: "Entertainment"
  },
  {
    id: "Hammers-Tounges",
    name: "Hammers & Tounges",
    description:
      "A comprehensive telemedicine platform connecting patients with healthcare providers. We developed a robust system featuring video consultations, health records management, prescription services, and AI-powered symptom checking to make healthcare accessible and convenient.",
    image: healthTapImage,
    type: "Healthcare"
  },
  {
    id: "Liberty91",
    name: "Liberty91",
    description:
      "A modern social platform designed to connect communities and foster meaningful relationships. We created an engaging user experience with real-time messaging, content sharing, and community features that bring people together in innovative ways.",
    image: mahbubiImage,
    type: "Social"
  },
  {
    id: "Spectra-Solar",
    name: "Spectra Solar",
    description:
      "The ultimate road trip planning platform that helps travelers discover amazing places along their route. We built an intuitive mapping system with route optimization, point-of-interest discovery, and trip planning tools that make every journey unforgettable.",
    image: roadTrippersImage,
    type: "Travel"
  },
  {
    id: "Luminary-Health",
    name: "Luminary Health",
    description:
      "A comprehensive delivery and logistics platform serving multiple markets. We developed a scalable solution with real-time tracking, multi-vendor support, payment integration, and efficient routing algorithms that ensure fast and reliable deliveries.",
    image: snoonuImage,
    type: "Logistics"
  },
  {
    id: "Palplug",
    name: "Palplug",
    description:
      "A modern communication platform revolutionizing how teams collaborate and share information. We created a secure messaging system with end-to-end encryption, file sharing, video calls, and team management features that keep organizations connected.",
    image: telegraphyImage,
    type: "Communication"
  },
  {
    id: "Dillon",
    name: "Dillon",
    description:
      "An innovative e-commerce platform that makes shopping fun and affordable. We built a mobile-first marketplace with personalized product discovery, social shopping features, and seamless checkout experiences that delight millions of users worldwide.",
    image: wishImage,
    type: "E-commerce"
  },
  {
    id: "Low-Coder",
    name: "Low Coder",
    description:
      "A next-generation code editor built for performance and collaboration. We developed a lightning-fast editor with real-time collaboration, AI-powered code assistance, and seamless Git integration that empowers developers to code more efficiently.",
    image: zedImage,
    type: "Developer Tools"
  }
  // {
  //   id: "zing",
  //   name: "Zing",
  //   description:
  //     "A dynamic music discovery and streaming platform that brings music lovers together. We created an immersive experience with personalized playlists, social sharing, live streaming capabilities, and high-quality audio that makes every listening session special.",
  //   image: zingImage,
  //   type: "Music"
  // }
];

export default function LatestProjects() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-24">
          Latest{" "}
          <span className="bg-gradient-to-r from-[#51CFDF] via-[#6dd9e8] to-[#51CFDF] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr_4fr] gap-12 items-start">
          {/* Left Side - Project List (20%) */}
          <div className="flex flex-col">
            <div className="space-y-1">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedProject === index
                      ? "bg-[#51CFDF]/20"
                      : "bg-transparent hover:bg-[#51CFDF]/8"
                  }`}
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      selectedProject === index
                        ? "text-[#51CFDF]"
                        : "text-gray-400"
                    }`}
                  >
                    {project.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Middle Section - Description (40%) */}
          <div className="flex flex-col justify-start space-y-6">
            <p className="text-base md:text-lg font-normal text-gray-300 leading-relaxed">
              {projects[selectedProject].description}
            </p>
            <button className="w-full md:w-auto px-5 py-2 bg-transparent border border-[#51CFDF]/60 text-[#51CFDF] rounded-lg font-medium hover:bg-[#51CFDF]/10 hover:border-[#51CFDF] transition-all duration-300 text-xs self-start">
              View project
            </button>
          </div>

          {/* Right Side - Project Showcase (40%) */}
          <div className="flex items-start">
            <div className="relative group w-full">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
