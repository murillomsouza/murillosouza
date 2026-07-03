import React, { useEffect, useRef, useState } from 'react';
import { Server, Database, Code2, Network, User, Target, Coffee, TerminalSquare } from 'lucide-react';

const planetarySystem = [
  {
    size: 220, speedClass: 'spin-1', counterClass: 'counter-spin-1',
    planets: [
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', angle: 0 },
      { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg', angle: 180 },
    ]
  },
  {
    size: 350, speedClass: 'spin-2', counterClass: 'counter-spin-2',
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
    size: 480, speedClass: 'spin-3', counterClass: 'counter-spin-3',
    planets: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', angle: 90 },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', angle: 210 },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', angle: 330 },
    ]
  }
];

// Dados fatiados para as abas do Datapad
const personalLogs = [
  {
    id: 'origem',
    title: '01. Origem',
    icon: User,
    content: 'Sempre fui um cara muito curioso — seja para entender como o universo funciona ou como um software roda por trás das telas. Atualmente sou estudante na Fatec e passo boa parte do meu tempo no meu ambiente Linux explorando novas tecnologias.'
  },
  {
    id: 'foco',
    title: '02. Foco Tático',
    icon: Target,
    content: 'Hoje, construir sistemas bem estruturados é a minha praia. O Backend é meu terreno: adoro trabalhar com Java, desenhar Arquitetura em Camadas e criar APIs utilizando Python e Flask. Até brinco com ESP32 e C++ pela integração com o mundo físico, mas meu foco real está na engenharia de software e na modelagem de dados.'
  },
  {
    id: 'offduty',
    title: '03. Off-Duty',
    icon: Coffee,
    content: 'Quando não estou com o terminal aberto pesquisando sobre padrões de arquitetura ou lendo algo sobre o espaço sideral, você provavelmente vai me encontrar maratonando Star Wars ou tentando codar enquanto meus gatos decidem que o meu teclado é o melhor lugar da casa para dormir.'
  }
];

export default function About() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLog, setActiveLog] = useState('origem');

  // Efeito Reveal on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Animação de Warp Speed (Apenas Mobile)
  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.2 
        });
      }
    };

    let scrollSpeedOffset = 0;
    const handleScroll = () => {
      scrollSpeedOffset = 2; 
      setTimeout(() => { scrollSpeedOffset = 0; }, 100);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.y += star.speed + scrollSpeedOffset;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 5 === 0 ? 'rgba(16, 185, 129, 0.8)' : 'rgba(255, 255, 255, 0.5)'; 
        ctx.fill();
        if (scrollSpeedOffset > 0) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x, star.y - 15);
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = star.radius;
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
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
          @keyframes orbit { 100% { transform: rotate(360deg); } }
          @keyframes counter-orbit { 100% { transform: rotate(-360deg); } }
          @keyframes radar-sweep { 100% { transform: rotate(360deg); } }
          
          .orbit-ring {
            border-radius: 50%; border: 1px dashed rgba(16, 185, 129, 0.25);
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          }
          .spin-1 { animation: orbit 25s linear infinite; }
          .spin-2 { animation: orbit 35s linear infinite; }
          .spin-3 { animation: orbit 50s linear infinite; }
          .counter-spin-1 { animation: counter-orbit 25s linear infinite; }
          .counter-spin-2 { animation: counter-orbit 35s linear infinite; }
          .counter-spin-3 { animation: counter-orbit 50s linear infinite; }
          
          .radar-sweep {
            background: conic-gradient(from 0deg, transparent 70%, rgba(16, 185, 129, 0.4) 100%);
            border-radius: 50%;
            animation: radar-sweep 4s linear infinite;
          }
        `}
      </style>

      {/* Canvas do Warp Speed - Mobile */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden pointer-events-none opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
          
          {/* Coluna da Esquerda: Textos / Abas */}
          <div className="flex flex-col space-y-8 relative z-20">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre Mim</h2>
              <div className="h-px bg-slate-700 flex-grow ml-4"></div>
            </div>

            {/* Radar Mobile (Exibido apenas em telas menores) */}
            <div className="flex lg:hidden justify-center items-center py-6">
              <div className="relative w-40 h-40 rounded-full border border-emerald-500/30 flex items-center justify-center bg-slate-900/50 backdrop-blur-md shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                {/* Feixe do Radar */}
                <div className="absolute inset-0 radar-sweep"></div>
                {/* Anéis internos */}
                <div className="absolute inset-4 rounded-full border border-dashed border-emerald-500/20"></div>
                <div className="absolute inset-10 rounded-full border border-emerald-500/10"></div>
                {/* Núcleo */}
                <div className="relative z-10 p-3 bg-slate-800 rounded-full border border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <TerminalSquare size={24} className="text-emerald-400" />
                </div>
                {/* Ping de elemento encontrado */}
                <div className="absolute top-4 right-8 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(16,185,129,1)] animate-pulse"></div>
              </div>
            </div>

            {/* Interface de Datapad (Abas) */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden shadow-xl">
              {/* Cabeçalho das Abas */}
              <div className="flex overflow-x-auto border-b border-slate-800 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {personalLogs.map((log) => (
                  <button
                    key={log.id}
                    onClick={() => setActiveLog(log.id)}
                    className={`flex items-center gap-2 px-5 py-4 text-sm font-mono whitespace-nowrap transition-colors border-b-2 ${
                      activeLog === log.id 
                        ? 'border-emerald-500 text-emerald-400 bg-slate-800/50' 
                        : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'
                    }`}
                  >
                    <log.icon size={16} />
                    {log.title}
                  </button>
                ))}
              </div>

              {/* Conteúdo da Aba Ativa */}
              <div className="p-6 md:p-8 min-h-[200px] flex items-start">
                <p className="text-slate-300 text-base md:text-lg leading-relaxed animate-fade-in">
                  {personalLogs.find(log => log.id === activeLog)?.content}
                </p>
              </div>
            </div>

            {/* Destaques rápidos (Arsenal Tático) */}
            <div>
              <p className="text-xs font-mono text-emerald-500/70 mb-4 uppercase tracking-widest">[{'>'}] Arsenal Tático</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg group hover:border-emerald-500/30 transition-colors">
                  <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                    <Server size={16} className="group-hover:text-emerald-400" /> Backend
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">Java, Spring Boot, Python, Flask</p>
                </div>
                <div className="p-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg group hover:border-emerald-500/30 transition-colors">
                  <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                    <Network size={16} className="group-hover:text-emerald-400" /> Arquitetura
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">Camadas, API REST, UML, Padrões</p>
                </div>
                <div className="p-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg group hover:border-emerald-500/30 transition-colors">
                  <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                    <Database size={16} className="group-hover:text-emerald-400" /> Bancos
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">MySQL, MongoDB, SQLAlchemy</p>
                </div>
                <div className="p-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg group hover:border-emerald-500/30 transition-colors">
                  <h4 className="text-emerald-500 font-mono mb-2 flex items-center gap-2">
                    <Code2 size={16} className="group-hover:text-emerald-400" /> Frontend
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">JavaScript, React, Tailwind</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Sistema Planetário (Apenas Desktop) */}
          <div className="hidden lg:flex justify-center items-center relative h-[600px] z-20">
            
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