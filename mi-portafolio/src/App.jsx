import React, { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      const sections = ['home', 'portafolio', 'acerca', 'contacto', 'curriculum'];
      const scrollPos = scrollPosition + 60;

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

  // Responsive menu display helper
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Estilos mejorados
  const gradientBg = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const cardShadow = '0 10px 30px rgba(0,0,0,0.1)';
  const hoverTransform = 'translateY(-5px)';

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#fafafa',
      color: '#333',
      lineHeight: '1.6'
    }}>
      {/* Enhanced Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70,
          padding: '0 20px'
        }}>
          <div style={{
            fontWeight: 800,
            fontSize: 24,
            background: gradientBg,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Niurka Yupanqui
          </div>

          {/* Desktop Menu */}
          <div style={{ display: isMobile ? 'none' : 'flex', gap: 12 }}>
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'portafolio', label: 'Portafolio' },
              { id: 'acerca', label: 'Sobre mí' },
              { id: 'contacto', label: 'Contacto' },
              { id: 'curriculum', label: 'CV' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: activeSection === item.id ? gradientBg : 'transparent',
                  color: activeSection === item.id ? '#fff' : '#333',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: 25,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: 14
                }}
                onMouseEnter={e => {
                  if (activeSection !== item.id) {
                    e.target.style.background = 'rgba(102, 102, 241, 0.1)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeSection !== item.id) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'none',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            padding: 20,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}>
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'portafolio', label: 'Portafolio' },
              { id: 'acerca', label: 'Sobre mí' },
              { id: 'contacto', label: 'Contacto' },
              { id: 'curriculum', label: 'CV' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '15px 0',
                  textAlign: 'left',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Enhanced HERO */}
      <section id="home" style={{
        minHeight: '100vh',
        background: gradientBg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: 100,
          height: 100,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: 150,
          height: 150,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <div style={{ zIndex: 2 }}>
          <h1 style={{
            fontSize: 56,
            fontWeight: 900,
            marginBottom: 15,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            Hola, soy Niurka
          </h1>
          <h2 style={{
            fontSize: 28,
            fontWeight: 300,
            marginBottom: 20,
            opacity: 0.9
          }}>
            Frontend Developer & AI Enthusiast
          </h2>
          <p style={{
            fontSize: 20,
            maxWidth: 500,
            margin: '0 auto 30px',
            opacity: 0.8,
            lineHeight: 1.6
          }}>
            Desarrolladora especializada en crear experiencias digitales innovadoras y soluciones de inteligencia artificial.
          </p>
          <div style={{ display: 'flex', gap: 15, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollToSection('portafolio')}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#fff',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: 30,
                padding: '15px 30px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: 16,
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Ver mis proyectos
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              style={{
                background: '#fff',
                color: '#667eea',
                border: '2px solid #fff',
                borderRadius: 30,
                padding: '15px 30px',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: 16,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Hablemos
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{
            width: 2,
            height: 30,
            background: 'rgba(255,255,255,0.5)',
            margin: '0 auto 10px',
            borderRadius: 2
          }}></div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Scroll</div>
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
              40% { transform: translateX(-50%) translateY(-10px); }
              60% { transform: translateX(-50%) translateY(-5px); }
            }
          `}
        </style>
      </section>

      {/* Enhanced PORTFOLIO */}
      <section id="portafolio" style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 42,
            fontWeight: 800,
            marginBottom: 15,
            background: gradientBg,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Portafolio
          </h2>
          <p style={{ color: '#666', marginBottom: 50, fontSize: 18 }}>
            Proyectos destacados en desarrollo Frontend e Inteligencia Artificial
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 30,
            justifyContent: 'center'
          }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 30,
                boxShadow: cardShadow,
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = hoverTransform;
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = cardShadow;
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
              }}></div>
              <div style={{
                width: 60,
                height: 60,
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24
              }}>
                🛒
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 24, marginBottom: 15, color: '#333' }}>
                RuralPOS
              </h3>
              <p style={{ color: '#666', fontSize: 16, marginBottom: 20, lineHeight: 1.6 }}>
                Sistema de punto de venta diseñado específicamente para tiendas rurales.
                Interfaz intuitiva y funciones adaptadas a las necesidades del sector rural.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
                marginBottom: 20
              }}>
                {['React', 'UX/UI', 'CSS', 'HTML', 'JavaScript'].map(tech => (
                  <span key={tech} style={{
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    padding: '6px 12px',
                    borderRadius: 15,
                    fontSize: 12,
                    fontWeight: 600
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <button style={{
                background: 'transparent',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: 25,
                padding: '10px 20px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Ver detalles
              </button>
            </div>

            <div
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: 30,
                boxShadow: cardShadow,
                transition: 'all 0.3s ease',
                border: '1px solid #f0f0f0',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = hoverTransform;
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = cardShadow;
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)'
              }}></div>
              <div style={{
                width: 60,
                height: 60,
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                borderRadius: '50%',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24
              }}>
                🤖
              </div>
              <h3 style={{ fontWeight: 700, fontSize: 24, marginBottom: 15, color: '#333' }}>
                Proyectos de IA
              </h3>
              <p style={{ color: '#666', fontSize: 16, marginBottom: 20, lineHeight: 1.6 }}>
                Investigación y desarrollo en inteligencia artificial, machine learning y ciencia de datos.
                Soluciones innovadoras para problemas complejos.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                justifyContent: 'center',
                marginBottom: 20
              }}>
                {['Python', 'TensorFlow', 'Machine Learning', 'Data Science'].map(tech => (
                  <span key={tech} style={{
                    background: 'rgba(168, 85, 247, 0.1)',
                    color: '#a855f7',
                    padding: '6px 12px',
                    borderRadius: 15,
                    fontSize: 12,
                    fontWeight: 600
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <button style={{
                background: 'transparent',
                color: '#a855f7',
                border: '2px solid #a855f7',
                borderRadius: 25,
                padding: '10px 20px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced ABOUT */}
      <section id="acerca" style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <h2 style={{
              fontSize: 36,
              fontWeight: 800,
              marginBottom: 20,
              background: gradientBg,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Sobre mí
            </h2>
            <p style={{ color: '#555', marginBottom: 25, fontSize: 18, lineHeight: 1.7 }}>
              ¡Hola! Soy Niurka Yupanqui, apasionada por la innovación tecnológica.
              Creo soluciones digitales que combinan diseño elegante y funcionalidad robusta,
              siempre buscando superar las expectativas del usuario.
            </p>

            <div style={{ marginBottom: 30 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: '#333' }}>
                Especialidades
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { skill: 'Frontend Development', level: 90 },
                  { skill: 'Innovación Tecnológica', level: 85 },
                  { skill: 'Problem Solving', level: 95 }
                ].map(item => (
                  <div key={item.skill}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontWeight: 600, color: '#333' }}>{item.skill}</span>
                      <span style={{ color: '#667eea', fontWeight: 600 }}>{item.level}%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: 8,
                      background: '#e2e8f0',
                      borderRadius: 4,
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${item.level}%`,
                        height: '100%',
                        background: gradientBg,
                        borderRadius: 4,
                        transition: 'width 1s ease-in-out'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 300, textAlign: 'center' }}>
            <div style={{
              width: 250,
              height: 250,
              borderRadius: 30,
              margin: '0 auto 20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              position: 'relative',
              background: gradientBg
            }}>
              {/* Placeholder for photo */}
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 80,
                color: 'white'
              }}>
                👩‍💻
              </div>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: 15,
              padding: 20,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'inline-block'
            }}>
              <div style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#333',
                marginBottom: 5
              }}>
                🚀 Mi Trayectoria
              </div>
              <div style={{ color: '#667eea', fontWeight: 600, fontSize: 16 }}>
                2+ Proyectos • 1+ Año • 100% Pasión
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CONTACTO */}
      <section id="contacto" style={{ padding: '80px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 15,
            background: gradientBg,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Contacto
          </h2>
          <p style={{ color: '#555', marginBottom: 50, fontSize: 18 }}>
            ¿Tienes un proyecto en mente? ¡Conversemos y hagámoslo realidad!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: 300, textAlign: 'left' }}>
              <div style={{
                background: '#f8fafc',
                borderRadius: 20,
                padding: 30,
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 25,
                  color: '#333',
                  textAlign: 'center'
                }}>
                  Información de Contacto
                </h3>

                <div style={{ marginBottom: 25 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 15,
                    padding: 15,
                    background: '#fff',
                    borderRadius: 10,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{
                      width: 50,
                      height: 50,
                      background: gradientBg,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20
                    }}>
                      📧
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#333', marginBottom: 5 }}>Email</div>
                      <a
                        href="mailto:vane321yupanqui@gmail.com"
                        style={{
                          color: '#667eea',
                          textDecoration: 'none',
                          fontWeight: 600
                        }}
                      >
                        vane321yupanqui@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 15,
                    padding: 15,
                    background: '#fff',
                    borderRadius: 10,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{
                      width: 50,
                      height: 50,
                      background: gradientBg,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20
                    }}>
                      📱
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#333', marginBottom: 5 }}>Teléfono</div>
                      <span style={{ color: '#555', fontWeight: 600 }}>09882425423</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULARIO DE CONTACTO */}
            <form style={{
              flex: 1,
              minWidth: 300,
              background: '#f8fafc',
              borderRadius: 20,
              padding: 30,
              textAlign: 'left',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 25,
                color: '#333',
                textAlign: 'center'
              }}>
                Envíame un mensaje
              </h3>

              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: 8
                }}>
                  Nombre
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: 15,
                    borderRadius: 10,
                    border: '2px solid #e2e8f0',
                    fontSize: 16,
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  type="text"
                  name="nombre"
                  onFocus={e => e.target.style.borderColor = '#667eea'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: 8
                }}>
                  Email
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: 15,
                    borderRadius: 10,
                    border: '2px solid #e2e8f0',
                    fontSize: 16,
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  type="email"
                  name="correo"
                  onFocus={e => e.target.style.borderColor = '#667eea'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: 8
                }}>
                  Asunto
                </label>
                <input
                  style={{
                    width: '100%',
                    padding: 15,
                    borderRadius: 10,
                    border: '2px solid #e2e8f0',
                    fontSize: 16,
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  type="text"
                  name="asunto"
                  onFocus={e => e.target.style.borderColor = '#667eea'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: 25 }}>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: 8
                }}>
                  Mensaje
                </label>
                <textarea
                  style={{
                    width: '100%',
                    padding: 15,
                    borderRadius: 10,
                    border: '2px solid #e2e8f0',
                    fontSize: 16,
                    resize: 'vertical',
                    minHeight: 120,
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  rows={4}
                  name="mensaje"
                  onFocus={e => e.target.style.borderColor = '#667eea'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  background: gradientBg,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 25,
                  padding: '15px 30px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 16,
                  width: '100%',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced CURRICULUM */}
      <section id="curriculum" style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 15,
            background: gradientBg,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Curriculum Vitae
          </h2>
          <p style={{ color: '#555', marginBottom: 40, fontSize: 18, lineHeight: 1.6 }}>
            Descarga mi CV para conocer más sobre mi experiencia profesional,
            habilidades técnicas y proyectos destacados.
          </p>

          <div style={{
            background: '#fff',
            borderRadius: 20,
            padding: 40,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            display: 'inline-block',
            minWidth: 350
          }}>
            <div style={{
              width: 80,
              height: 80,
              background: gradientBg,
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36
            }}>
              📄
            </div>

            <h3 style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 15,
              color: '#333'
            }}>
              Mi Curriculum
            </h3>

            <p style={{
              color: '#666',
              marginBottom: 25,
              fontSize: 16
            }}>
              Documento completo con mi experiencia y logros profesionales
            </p>

            <a
              href="/resources/CV_NiurkaYupanqui.pdf"
              download="CV_Niurka_Yupanqui"
              style={{
                background: gradientBg,
                color: '#fff',
                border: 'none',
                borderRadius: 25,
                padding: '18px 35px',
                fontWeight: 600,
                fontSize: 16,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              📥 Descargar CV
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced FOOTER */}
      <footer style={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        color: '#fff',
        padding: '60px 20px 30px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            fontWeight: 800,
            fontSize: 28,
            marginBottom: 10,
            background: 'linear-gradient(135deg, #fff 0%, #e2e8f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Niurka Yupanqui
          </div>
          <div style={{ color: '#a0aec0', fontSize: 18, marginBottom: 25, fontWeight: 300 }}>
            Frontend Developer & AI Enthusiast
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            marginBottom: 30,
            flexWrap: 'wrap'
          }}>
            {[
              { icon: '📧', label: 'Email', href: 'mailto:vane321yupanqui@gmail.com' },
              { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/niurka-vanesa-yupanqui-931a8122a/' },
              { icon: '🐙', label: 'GitHub', href:'https://github.com/NiurkaVane11?tab=overview&from=2025-04-01&to=2025-04-01'  },
              { icon: '📷', label: 'Instagram', href: 'https://www.instagram.com/niurka_50?igsh=MXNhY2wzbGF3bnd3YQ==' },
              { icon: '🌲', label: 'Linktree', href: 'https://linktr.ee/niurka_50'}
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#a0aec0',
                  textDecoration: 'none',
                  padding: '10px 15px',
                  borderRadius: 20,
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(160, 174, 192, 0.2)'
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#fff';
                  e.target.style.borderColor = '#667eea';
                  e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#a0aec0';
                  e.target.style.borderColor = 'rgba(160, 174, 192, 0.2)';
                  e.target.style.background = 'transparent';
                }}
              >
                <span style={{ fontSize: 16 }}>{social.icon}</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{social.label}</span>
              </a>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid rgba(160, 174, 192, 0.2)',
            paddingTop: 20,
            color: '#718096',
            fontSize: 14
          }}>
            © {new Date().getFullYear()} Niurka Yupanqui. Todos los derechos reservados.
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;