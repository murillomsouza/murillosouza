import React, { useEffect, useRef, useState } from 'react';
import { Server, Database, Code2, Network } from 'lucide-react';

const planetarySystem = [
  {
    size: 220, 
    speedClass: 'spin-1',
    counterClass: 'counter-spin-1',
    planets: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', angle: 0 },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg', angle: 180 },
    ]
  },
  {
    size: 350, 
    speedClass: 'spin-2',
    counterClass: 'counter-spin-2',
    // 6 Planetas distribuídos (0, 60, 120, 180, 240, 300)
    planets: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', angle: 0 },
      { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', angle: 60 },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', angle: 120 },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', angle: 180 },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', angle: 240 },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', angle: 300 },
    ]
  },
  {
    size: 480, 
    speedClass: 'spin-3',
    counterClass: 'counter-spin-3',
    // 3 Planetas distribuídos
    planets: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', angle: 90 },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', angle: 210 },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', angle: 330 },
    ]
  }
];

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const getPlanetPosition = (angle) => ({
    top: `${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`,
    left: `${50 + 50 * Math.cos((angle * Math.PI) / 180)}%`,
    transform: 'translate(-50%, -50%)'
  });

  return (
    <section id="sobre" className="py-24 bg-slate-950 text-slate-200 overflow-hidden relative">
      
      <style>
        {`
          @keyframes orbit {
            100% { transform: rotate(360deg); }
          }
          @keyframes counter-orbit {
            100% { transform: rotate(-360deg); }
          }
          .orbit-ring {
            border-radius: 50%;
            border: 1px dashed rgba(16, 185, 129, 0.25);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .spin-1 { animation: orbit 25s linear infinite; }
          .spin-2 { animation: orbit 35s linear infinite; }
          .spin-3 { animation: orbit 50s linear infinite; }
          
          .counter-spin-1 { animation: counter-orbit 25s linear infinite; }
          .counter-spin-2 { animation: counter-orbit 35s linear infinite; }
          .counter-spin-3 { animation: counter-orbit 50s linear infinite; }
        `}
      </style>

      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Coluna da Esquerda: História */}
          <div className="flex flex-col space-y-6 relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Sobre Mim
              </h2>
              <div className="h-px bg-slate-700 flex-grow ml-4"></div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              Sempre fui um cara muito curioso — seja para entender como o universo funciona ou como um software roda por trás das telas. Atualmente sou estudante na Fatec e passo boa parte do meu tempo no meu ambiente Linux explorando novas tecnologias.
            </p>
            
            <p className="text-slate-400 text-lg leading-relaxed">
              Hoje, o que eu realmente curto fazer é construir sistemas bem estruturados. Minha praia é o Backend: adoro trabalhar com <strong className="text-emerald-400 font-medium">Java</strong>, desenhar <strong className="text-emerald-400 font-medium">Arquitetura em Camadas</strong> e criar APIs utilizando <strong className="text-emerald-400 font-medium">Python e Flask</strong>. Até brinco com ESP32 e C++ de vez em quando pela integração com o mundo físico, mas meu foco real está na engenharia de software e na modelagem de dados.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              Quando não estou com o terminal aberto pesquisando sobre padrões de arquitetura ou lendo algo sobre o espaço sideral, você provavelmente vai me encontrar maratonando Star Wars ou tentando codar enquanto meus gatos decidem que o meu teclado é o melhor lugar da casa para dormir.
            </p>

            {/* Destaques rápidos */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg shadow-inner">
                <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                  <Server size={16} /> Backend
                </h4>
                <p className="text-sm text-slate-400">Java, Spring Boot, Python, Flask</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg shadow-inner">
                <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                  <Network size={16} /> Arquitetura
                </h4>
                <p className="text-sm text-slate-400">Camadas, API REST, UML, Padrões</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg shadow-inner">
                <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                  <Database size={16} /> Bancos
                </h4>
                <p className="text-sm text-slate-400">MySQL, MongoDB, SQLAlchemy</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg shadow-inner">
                <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                  <Code2 size={16} /> Frontend
                </h4>
                <p className="text-sm text-slate-400">JavaScript, React, Tailwind</p>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Sistema Planetário */}
          <div className="hidden lg:flex justify-center items-center relative h-[550px]">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-900/10 rounded-full blur-[100px]"></div>

            {/* Núcleo (Core) */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900 border-2 border-emerald-500 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] z-10 flex items-center justify-center p-4 hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
              title="Linux"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" 
                alt="Linux Core" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Renderização Dinâmica das Órbitas */}
            {planetarySystem.map((orbit, index) => (
              <div 
                key={`orbit-${index}`}
                className="orbit-ring pointer-events-none" 
                style={{ width: `${orbit.size}px`, height: `${orbit.size}px` }}
              >
                <div className={`w-full h-full relative ${orbit.speedClass}`}>
                  
                  {orbit.planets.map((planet, pIndex) => (
                    <div 
                      key={`planet-${pIndex}`}
                      className="absolute pointer-events-auto"
                      style={getPlanetPosition(planet.angle)}
                      title={planet.name}
                    >
                      <div className={`w-12 h-12 ${orbit.counterClass}`}>
                        <div className="w-full h-full bg-slate-900 border border-slate-700 p-2.5 rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:border-emerald-400 transition-all cursor-pointer bg-slate-800/80 backdrop-blur-sm">
                          <img 
                            src={planet.icon} 
                            alt={planet.name} 
                            className="w-full h-full object-contain"
                            // Adicionado um filtro para ícones que são pretos nativamente (ex: Flask) ficarem visíveis no fundo escuro
                            style={planet.name === 'Flask' ? { filter: 'invert(1) brightness(2)' } : {}}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}