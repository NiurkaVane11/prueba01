import React, { useState, useEffect } from 'react';
import {
  Menu, X, Github, Linkedin, Mail, Phone, Download, ExternalLink,
  Code, Brain, User, Briefcase, MessageCircle, FileText, Instagram,
  Star, ArrowRight, Award, Zap, Target, Sparkles, ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      const sections = ['home', 'portafolio', 'acerca', 'contacto', 'curriculum'];
      const scrollPos = scrollPosition + 120;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      {/* NAVBAR MEJORADA */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Niurka Yupanqui
            </span>
          </div>
          
          {/* Desktop menu mejorado */}
          <div className="hidden md:flex gap-1">
            {[
              { id: 'home', label: 'Inicio', icon: User },
              { id: 'portafolio', label: 'Portfolio', icon: Briefcase },
              { id: 'acerca', label: 'Sobre mí', icon: Brain },
              { id: 'contacto', label: 'Contacto', icon: MessageCircle },
              { id: 'curriculum', label: 'CV', icon: FileText }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-30 -z-10"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu mejorado */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {[
                { id: 'home', label: 'Inicio', icon: User },
                { id: 'portafolio', label: 'Portfolio', icon: Briefcase },
                { id: 'acerca', label: 'Sobre mí', icon: Brain },
                { id: 'contacto', label: 'Contacto', icon: MessageCircle },
                { id: 'curriculum', label: 'CV', icon: FileText }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION MEJORADA */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* Background con gradiente y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge mejorado */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200">
              <Sparkles className="h-4 w-4 mr-2 text-indigo-600" />
              <span className="text-indigo-800 text-sm font-semibold">Full Stack & AI Developer</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Hola, soy </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Niurka
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Desarrolladora Full Stack especializada en crear 
                <span className="font-semibold text-indigo-600"> experiencias digitales innovadoras</span> y 
                <span className="font-semibold text-purple-600"> soluciones de IA</span> que transforman ideas en realidad.
              </p>
            </div>
            
            {/* Botones de acción mejorados */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('portafolio')}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center">
                  Ver mis proyectos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                Hablemos
              </button>
            </div>
            
            {/* Social links mejorados */}
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/NiurkaVane11", color: "gray" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/niurka-vanesa-yupanqui-931a8122a/", color: "blue" },
                { icon: Instagram, href: "https://www.instagram.com/niurka_50", color: "pink" },
                { icon: Mail, href: "mailto:vane321yupanqui@gmail.com", color: "red" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group`}
                >
                  <social.icon className={`h-5 w-5 text-${social.color}-600 group-hover:text-${social.color}-700`} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Imagen del perfil mejorada */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Elementos decorativos */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-30 animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-60"></div>
              
              {/* Contenedor de imagen */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* PORTFOLIO MEJORADO */}
      <section id="portafolio" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-6">
              <Briefcase className="h-4 w-4 mr-2 text-indigo-600" />
              <span className="text-indigo-800 text-sm font-semibold">Mis Proyectos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora mis proyectos más destacados en desarrollo Full Stack e Inteligencia Artificial
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Proyecto 1 - RuralPOS */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative p-10 rounded-3xl border border-gray-200 hover:border-indigo-300 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">RuralPOS</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sistema de punto de venta especializado para tiendas rurales, con interfaz intuitiva 
                    y funcionalidades adaptadas específicamente para las necesidades del sector rural.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'UX/UI', 'CSS', 'HTML', 'JavaScript'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-medium border border-indigo-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-2 transition-all duration-300">
                    Ver proyecto
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Proyecto 2 - IA */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
              <div className="relative p-10 rounded-3xl border border-gray-200 hover:border-purple-300 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Proyectos de IA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Investigación y desarrollo en inteligencia artificial, incluyendo machine learning, 
                    ciencia de datos y algoritmos de aprendizaje automático.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Python', 'TensorFlow', 'Machine Learning', 'Data Science'].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium border border-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a href="#" className="flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-all duration-300">
                    Ver proyectos
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT MEJORADO */}
      <section id="acerca" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
              <User className="h-4 w-4 mr-2 text-indigo-600" />
              <span className="text-indigo-800 text-sm font-semibold">Sobre mí</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Creando el futuro con 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"> código</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              ¡Hola! Soy Niurka Yupanqui, una desarrolladora apasionada por la innovación tecnológica. 
              Me especializo en crear soluciones digitales que combinan diseño excepcional con funcionalidad robusta.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Code, label: 'Full Stack Development', color: 'indigo' },
                { icon: Brain, label: 'Artificial Intelligence', color: 'purple' },
                { icon: Zap, label: 'Innovation Focus', color: 'yellow' },
                { icon: Target, label: 'Problem Solving', color: 'emerald' }
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${skill.color}-400 to-${skill.color}-600 rounded-xl flex items-center justify-center`}>
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-semibold">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Elementos decorativos */}
              <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl transform rotate-12 opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-70"></div>
              
              {/* Card principal */}
              <div className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Innovación Constante</h3>
                    <p className="text-gray-600">Siempre explorando nuevas tecnologías y metodologías</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">15+</div>
                      <div className="text-xs text-gray-500">Proyectos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">3+</div>
                      <div className="text-xs text-gray-500">Años</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">100%</div>
                      <div className="text-xs text-gray-500">Pasión</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO MEJORADO */}
      <section id="contacto" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <MessageCircle className="h-4 w-4 mr-2 text-emerald-600" />
              <span className="text-emerald-800 text-sm font-semibold">Hablemos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Me encantaría colaborar contigo para hacer realidad tus ideas. ¡Conversemos!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:vane321yupanqui@gmail.com" className="text-lg text-indigo-600 hover:text-indigo-700 font-semibold">
                      vane321yupanqui@gmail.com
                    </a>
                    <p className="text-gray-600 mt-1">Respondo en menos de 24 horas</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
                    <p className="text-lg text-gray-900 font-semibold">09882425423</p>
                    <p className="text-gray-600 mt-1">Disponible de 9am a 6pm</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Sígueme en redes</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/NiurkaVane11", color: "from-gray-500 to-gray-700" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/niurka-vanesa-yupanqui-931a8122a/", color: "from-blue-500 to-blue-700" },
                    { icon: Instagram, href: "https://www.instagram.com/niurka_50", color: "from-pink-500 to-rose-600" },
                    { icon: ExternalLink, href: "https://linktr.ee/niurka_50", color: "from-emerald-500 to-emerald-700" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gradient-to-br ${social.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110`}
                    >
                      <social.icon className="h-6 w-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Formulario mejorado */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Envíame un mensaje</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-3">Nombre</label>
                      <input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white" 
                        placeholder="Tu nombre completo" 
                      />
                    </div>
                    <div>
                      <label htmlFor="correo" className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                      <input 
                        type="email" 
                        id="correo" 
                        name="correo" 
                        className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white" 
                        placeholder="tu@email.com" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-semibold text-gray-700 mb-3">Asunto</label>
                    <input 
                      type="text" 
                      id="asunto" 
                      name="asunto" 
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white" 
                      placeholder="¿En qué puedo ayudarte?" 
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-3">Mensaje</label>
                    <textarea 
                      id="mensaje" 
                      name="mensaje" 
                      rows={5} 
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-300 bg-gray-50 focus:bg-white" 
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM MEJORADO */}
      <section id="curriculum" className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 mb-8">
            <FileText className="h-4 w-4 mr-2 text-indigo-600" />
            <span className="text-indigo-800 text-sm font-semibold">Mi CV</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curriculum Vitae
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Descarga mi CV para conocer más sobre mi experiencia profesional, habilidades técnicas y proyectos destacados.
          </p>
          
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-30 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mi Curriculum Profesional</h3>
                  <p className="text-gray-600 mb-8">Experiencia completa • Habilidades técnicas • Proyectos destacados</p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Award className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Experiencia</div>
                  </div>
                  <div className="text-center">
                    <Code className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Habilidades</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Proyectos</div>
                  </div>
                </div>
                
                <a
                  href="/resources/CV_NiurkaYupanqui.pdf"
                  download="CV_Niurka_Yupanqui"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download className="h-6 w-6 mr-3" />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MEJORADO */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Niurka Yupanqui</span>
            </div>
            
            <p className="text-gray-400 text-lg">Full Stack Developer & AI Researcher</p>
            
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/NiurkaVane11" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/niurka-vanesa-yupanqui-931a8122a/" },
                { icon: Instagram, href: "https://www.instagram.com/niurka_50" },
                { icon: Mail, href: "mailto:vane321yupanqui@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                >
                  <social.icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-8 mt-8">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Niurka Yupanqui. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;