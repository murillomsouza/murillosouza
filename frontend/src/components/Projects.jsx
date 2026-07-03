import React, { useState, useRef, useEffect } from 'react';
import { FolderGit2, X, ExternalLink, Globe, Orbit, Rocket, Satellite, Cpu, Telescope } from 'lucide-react';
import mmparfum from '../assets/logocircular.jpeg';
import ceduca from '../assets/ceduca.jpeg';
import vitaintegral from '../assets/vitaintegral.jpeg';
import feteps from '../assets/16-feteps.jpeg';

const projectsData = [
  {
    title: 'MM Parfum (Freelance)',
    planetIcon: Globe,
    description: 'Projeto de desenvolvimento voltado para o setor de perfumaria e aromas. Desenvolvido sob demanda como projeto freelance, com foco na usabilidade e exibição de catálogo.',
    techs: ['JavaScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/murillomsouza/mmparfum',
    image: mmparfum,
    liveUrl: 'https://www.mmparfum.com.br' 
  },
  {
    title: 'Ceduca',
    planetIcon: Orbit,
    description: 'Trabalho acadêmico semestral desenvolvido para a Fatec. Um sistema voltado para o setor educacional que consolida conceitos práticos de engenharia de software e modelagem de dados.',
    techs: ['Java', 'Spring Boot', 'MongoDB', 'UML', 'Arquitetura REST'],
    github: 'https://github.com/murillomsouza/ceduca',
    image: ceduca,
    liveUrl: null
  },
  {
    title: 'VitaIntegral',
    planetIcon: Telescope,
    description: 'Landing page focada no nicho de saúde e bem-estar. O sistema visa simular uma clinica real, dando detalhes do que fazem, onde estão localizados entre outras informações.',
    techs: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/murillomsouza/vitaintegral',
    image: vitaintegral,
    liveUrl: 'vitaintegral.vercel.app'
  },
  {
    title: 'Monitoramento IoT (ESP32)',
    planetIcon: Cpu,
    description: 'Projeto para a FETEPS 2025 de sistema embarcado utilizando o microcontrolador ESP32 e sensor DHT11. Focado em leitura de dados de hardware e processamento de baixo nível.',
    techs: ['C++', 'ESP32', 'Arduino', 'Embarcados'],
    github: 'https://github.com/murillomsouza',
    image: feteps,
    liveUrl: 'https://feteps.cps.sp.gov.br/projetos/logchain-4-0-cadeia-fria-inteligente/'
  },
  {
    title: 'Sistema de Reservas',
    planetIcon: Satellite,
    description: 'Plataforma estruturada para simular reservas. O foco da aplicação é garantir que seja possível criar conta, alugar quarto, editar e cancelar reserva.',
    techs: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/murillomsouza/sistema-reservas',
    image: null,
    liveUrl: null
  },
  {
    title: 'Sistema-Pedido-e-Produto',
    planetIcon: Rocket,
    description: 'API desenvolvida para o gerenciamento de fluxo de vendas. O projeto tem um forte foco em modelagem UML, padronização de arquitetura e aplicação de boas práticas de engenharia de software.',
    techs: ['Java', 'Spring Boot', 'MySQL', 'UML'],
    github: 'https://github.com/murillomsouza/Sistema-Pedido-e-Produto',
    image: null,
    liveUrl: null 
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Refs e States para o Carrossel e Animação de Scroll
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Reveal on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Auto Scroll do Carrossel (Pausa quando tocado no mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !selectedProject && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollWidth > clientWidth) {
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
          if (isAtEnd) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const cardWidth = carouselRef.current.children[0]?.clientWidth || 350;
            carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
          }
        }
      }
    }, 3500); 
    return () => clearInterval(interval);
  }, [isPaused, selectedProject]);

  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  // Função para calcular a posição do mouse no Efeito Lanterna
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200 overflow-hidden">
      
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Navegação de Projetos
          </h2>
          <div className="h-px bg-slate-700 flex-grow ml-4"></div>
        </div>

        {/* Grid Carrossel */}
        <div 
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
          className="flex md:grid flex-nowrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              onMouseMove={handleMouseMove}
              className="w-[85vw] sm:w-[350px] md:w-auto flex-none snap-center bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 flex flex-col group shadow-lg cursor-pointer relative overflow-hidden"
            >
              
              {/* Efeito Lanterna */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(16, 185, 129, 0.15), transparent 40%)'
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                
                {/* Identificador de Sistema */}
                <div className="flex items-center gap-3 mb-6 border-b border-slate-700/50 pb-4">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-900/40 group-hover:text-emerald-400 transition-colors">
                    <project.planetIcon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-emerald-500/70 tracking-widest uppercase">Sistema Mapeado</p>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Corpo do Card */}
                <div className="flex-grow">
                  <p className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">[{'>'}] Resumo da Missão:</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Footer do Card */}
                <div className="mt-auto pt-4">
                  <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">[{'>'}] Arsenal:</p>
                  <div className="flex flex-wrap gap-2">
                    {/*Mostra 3 para não poluir */}
                    {project.techs.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/50">
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 3 && (
                      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                        +{project.techs.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Botão de Expansão */}
                <div className="absolute top-4 right-4 bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity border border-slate-700 flex items-center gap-1 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Acessar Dados
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>
          
          <div className="relative bg-slate-900 border border-emerald-500/30 rounded-2xl w-full max-w-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col max-h-[90vh] ring-1 ring-white/10">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 rounded-full transition-colors z-20 backdrop-blur-sm"
            >
              <X size={20} />
            </button>

            {/* Imagem Holográfica */}
            {selectedProject.image ? (
              <div className="w-full h-48 md:h-72 bg-slate-800 border-b border-slate-800 relative group">
                <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10"></div>
                <img 
                  src={selectedProject.image} 
                  alt={`Preview do ${selectedProject.title}`} 
                  className="w-full h-full object-cover filter brightness-90 contrast-125"
                />
              </div>
            ) : (
              <div className="w-full h-32 md:h-48 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 border-b border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>
                <selectedProject.planetIcon size={64} className="text-emerald-500/30 animate-pulse" strokeWidth={1} />
              </div>
            )}

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="flex items-center gap-3 mb-6">
                <selectedProject.planetIcon size={28} className="text-emerald-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              
              <div className="mb-8 p-4 bg-slate-950/50 rounded-lg border border-slate-800/50">
                <p className="text-sm font-mono text-emerald-500 mb-2 uppercase tracking-wider">[{'>'}] Relatório da Missão</p>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-sm font-mono text-emerald-500 mb-3 uppercase tracking-wider">[{'>'}] Arsenal Utilizado</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techs.map((tech, i) => (
                    <span key={i} className="text-sm font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-md border border-emerald-800/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 border border-slate-600"
                >
                  <FolderGit2 size={18} />
                  Acessar Repositório
                </a>

                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-900/20"
                  >
                    <ExternalLink size={18} />
                    Iniciar Protocolo Web
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}