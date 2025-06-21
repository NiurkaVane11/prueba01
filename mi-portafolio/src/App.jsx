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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fafafa', color: '#222' }}>
      {/* Simple Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, background: scrolled ? '#fff' : 'transparent',
        boxShadow: scrolled ? '0 2px 8px #eee' : 'none', borderBottom: '1px solid #eee', zIndex: 1000
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, padding: '0 16px' }}>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Niurka Yupanqui</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'portafolio', label: 'Portfolio' },
              { id: 'acerca', label: 'Sobre mí' },
              { id: 'contacto', label: 'Contacto' },
              { id: 'curriculum', label: 'CV' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: activeSection === item.id ? '#6366f1' : 'none',
                  color: activeSection === item.id ? '#fff' : '#222',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: 6,
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', paddingTop: 56
      }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, marginBottom: 10 }}>Hola, soy Niurka</h1>
        <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 18 }}>Full Stack & IA Developer</h2>
        <p style={{ fontSize: 18, color: '#666', maxWidth: 400, textAlign: 'center', marginBottom: 24 }}>
          Desarrolladora especializada en crear experiencias digitales innovadoras y soluciones de IA.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={() => scrollToSection('portafolio')}
            style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, padding: '12px 26px', fontWeight: 600, cursor: 'pointer' }}
          >
            Ver mis proyectos
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            style={{ background: '#fff', color: '#6366f1', border: '1px solid #6366f1', borderRadius: 6, padding: '12px 26px', fontWeight: 600, cursor: 'pointer' }}
          >
            Hablemos
          </button>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portafolio" style={{ padding: '64px 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Portfolio</h2>
          <p style={{ color: '#666', marginBottom: 32 }}>Proyectos destacados en desarrollo Full Stack e Inteligencia Artificial</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            <div style={{
              background: '#f4f4f4', borderRadius: 12, padding: 24, minWidth: 240, maxWidth: 320, flex: 1
            }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 6 }}>RuralPOS</h3>
              <p style={{ color: '#555', fontSize: 15, marginBottom: 10 }}>
                Sistema de punto de venta para tiendas rurales, interfaz intuitiva y funciones adaptadas.
              </p>
              <div style={{ fontSize: 13, color: '#6366f1' }}>React, UX/UI, CSS, HTML, JavaScript</div>
            </div>
            <div style={{
              background: '#f4f4f4', borderRadius: 12, padding: 24, minWidth: 240, maxWidth: 320, flex: 1
            }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 6 }}>Proyectos de IA</h3>
              <p style={{ color: '#555', fontSize: 15, marginBottom: 10 }}>
                Investigación y desarrollo en inteligencia artificial, machine learning y ciencia de datos.
              </p>
              <div style={{ fontSize: 13, color: '#a855f7' }}>Python, TensorFlow, Machine Learning, Data Science</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="acerca" style={{ padding: '64px 0', background: '#f6f7fb' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Sobre mí</h2>
            <p style={{ color: '#555', marginBottom: 16 }}>
              ¡Hola! Soy Niurka Yupanqui, apasionada por la innovación tecnológica.
              Creo soluciones digitales que combinan diseño y funcionalidad.
            </p>
            <ul style={{ paddingLeft: 18 }}>
              <li>Full Stack Development</li>
              <li>Inteligencia Artificial</li>
              <li>Innovación</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: 260, textAlign: 'center' }}>
            <div style={{
              width: 180, height: 180, background: '#ddd', borderRadius: 20,
              margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80, color: '#aaa'
            }}>
              😊
            </div>
            <div style={{ marginTop: 10, fontWeight: 600, fontSize: 16 }}>15+ Proyectos • 3+ años • 100% Pasión</div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={{ padding: '64px 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Contacto</h2>
          <p style={{ color: '#555', marginBottom: 32 }}>
            ¿Tienes un proyecto en mente? ¡Conversemos!
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            <div style={{ flex: 1, minWidth: 240, textAlign: 'left' }}>
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontWeight: 700 }}>Email</div>
                <a href="mailto:vane321yupanqui@gmail.com" style={{ color: '#6366f1', textDecoration: 'underline' }}>
                  vane321yupanqui@gmail.com
                </a>
                <div style={{ fontSize: 13, color: '#888' }}>Respondo en menos de 24 horas</div>
              </div>
              <div>
                <div style={{ fontWeight: 700 }}>Teléfono</div>
                <span>09882425423</span>
                <div style={{ fontSize: 13, color: '#888' }}>Disponible de 9am a 6pm</div>
              </div>
            </div>
            <form style={{ flex: 1, minWidth: 240, background: '#f4f4f4', borderRadius: 10, padding: 18, textAlign: 'left' }}>
              <div style={{ marginBottom: 12 }}>
                <label>Nombre</label>
                <input style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} type="text" name="nombre" />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Email</label>
                <input style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} type="email" name="correo" />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Asunto</label>
                <input style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} type="text" name="asunto" />
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Mensaje</label>
                <textarea style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }} rows={4} name="mensaje"></textarea>
              </div>
              <button type="submit" style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 20px', fontWeight: 600, cursor: 'pointer' }}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" style={{ padding: '64px 0', background: '#f6f6fb', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Curriculum Vitae</h2>
          <p style={{ color: '#555', marginBottom: 24 }}>
            Descarga mi CV para conocer más sobre mi experiencia profesional, habilidades y proyectos.
          </p>
          <a
            href="/resources/CV_NiurkaYupanqui.pdf"
            download="CV_Niurka_Yupanqui"
            style={{ background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6, padding: '14px 30px', fontWeight: 600, fontSize: 17, textDecoration: 'none' }}
          >
            Descargar CV
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#23232b', color: '#fff', padding: '32px 0', textAlign: 'center' }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Niurka Yupanqui</div>
        <div style={{ color: '#bbb', fontSize: 15, marginBottom: 6 }}>Full Stack Developer & AI Researcher</div>
        <div style={{ color: '#bbb', fontSize: 13 }}>© {new Date().getFullYear()} Niurka Yupanqui. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

export default App;