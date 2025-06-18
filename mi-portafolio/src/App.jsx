import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink, 
  Code, Brain, User, Briefcase, MessageCircle, FileText, Instagram, 
  Star, ArrowRight 
} from 'lucide-react';
import yoImg from './assets/yo.jpg'; // Usa tu foto local

function App() {
  // ...tu lógica de estado y scroll igual que antes

  return (
    <div className="min-h-screen bg-white">
      {/* ...Navbar igual que antes... */}

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* ...texto igual... */}
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300"></div>
              <div className="absolute inset-4 bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                <img 
                  src={yoImg} // Usa tu foto local
                  alt="Niurka Yupanqui" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ...Portfolio, About, Contacto igual... */}

      {/* Resume Section */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Curriculum Vitae
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descarga mi CV para conocer más sobre mi experiencia y habilidades profesionales.
            </p>
            
            <div className="inline-flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mi Curriculum</h3>
                <p className="text-gray-600 mb-6">Experiencia completa y habilidades técnicas</p>
                <a
                  href="/resources/CV_NiurkaYupanqui.pdf"
                  download="CV_Niurka_Yupanqui"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ...Footer igual... */}
    </div>
  );
}

export default App;