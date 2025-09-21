"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
        <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#services" className="hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-20">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex-1 min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative flex-1 text-center md:text-left z-10 px-4 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight animate-fadeInUp">
            Selamat Datang di{" "}
            <span className="text-yellow-300">Konsultasi Stroke</span>
          </h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto md:mx-0 text-gray-100 animate-fadeInUp delay-200">
            Dapatkan layanan konsultasi terpercaya untuk pencegahan, perawatan,
            dan pemulihan stroke. Tim dokter spesialis siap membantu Anda kapan
            saja dengan pendekatan yang profesional dan penuh empati.
          </p>
          <a
            href="#services"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-yellow-400 text-blue-900 font-semibold rounded-xl shadow-lg hover:scale-105 hover:bg-yellow-300 transition transform duration-300 animate-fadeInUp delay-300"
          >
            💬 Konsultasi Sekarang
          </a>
        </div>

        {/* Image */}
        <div className="relative flex-1 mt-8 md:mt-0 flex justify-center z-10">
          <Image
            src="/assets/image/doctor.jpg"
            alt="Dokter Konsultasi Stroke"
            width={400}
            height={400}
            className="w-72 md:w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 animate-fadeInRight"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Tentang Kami</h3>
        <p className="max-w-2xl mx-auto text-gray-600">
          Kami adalah tim medis dan konsultan kesehatan yang berfokus pada
          pencegahan, penanganan, dan pemulihan pasien stroke. Dengan pengalaman
          dari tenaga ahli, kami siap membantu pasien dan keluarga mendapatkan
          informasi serta pendampingan yang tepat.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Layanan Kami</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Konsultasi Stroke</h4>
            <p className="text-gray-600">
              Diskusi langsung dengan dokter spesialis saraf mengenai gejala,
              pencegahan, hingga pengobatan stroke.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">
              Rehabilitasi & Terapi
            </h4>
            <p className="text-gray-600">
              Program pemulihan pasca-stroke dengan fisioterapi, terapi wicara,
              dan dukungan psikologis.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Edukasi & Pencegahan</h4>
            <p className="text-gray-600">
              Informasi seputar gaya hidup sehat, diet, dan latihan untuk
              mengurangi risiko stroke berulang.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Hubungi Kami</h3>
        <p className="mb-6 text-gray-600">
          Konsultasi online maupun offline tersedia. Jangan tunda untuk
          mendapatkan penanganan terbaik.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Konsultasi via WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}
