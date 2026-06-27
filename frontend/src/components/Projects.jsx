import React, { useState, useRef, useEffect } from 'react';
import { FolderGit2, X, ExternalLink } from 'lucide-react';
import mmparfum from '../assets/logocircular.jpeg'
import ceduca from '../assets/ceduca.jpeg'
import vitaintegral from '../assets/vitaintegral.jpeg'
import feteps from '../assets/16-feteps.jpeg'

const projectsData = [
  {
    title: 'MM Parfum (Freelance)',
    description: 'Projeto de desenvolvimento voltado para o setor de perfumaria e aromas. Desenvolvido sob demanda como projeto freelance, com foco na usabilidade e exibição de catálogo.',
    techs: ['JavaScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/murillomsouza/mmparfum',
    image: mmparfum,
    liveUrl: 'https://www.mmparfum.com.br' 
  },
  {
    title: 'Ceduca',
    description: 'Trabalho acadêmico semestral desenvolvido para a Fatec. Um sistema voltado para o setor educacional que consolida conceitos práticos de engenharia de software e modelagem de dados.',
    techs: ['Java', 'Spring Boot', 'MongoDB', 'UML', 'Arquitetura REST'],
    github: 'https://github.com/murillomsouza/ceduca',
    image: ceduca,
    liveUrl: null
  },
  {
    title: 'VitaIntegral',
    description: 'Landing page focada no nicho de saúde e bem-estar. O sistema visa simular uma clinica real, dando detalhes do que fazem, onde estão localizados entre outras informações.',
    techs: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/murillomsouza/vitaintegral',
    image: vitaintegral,
    liveUrl: 'vitaintegral.vercel.app'
  },
  {
    title: 'Monitoramento IoT (ESP32)',
    description: 'Projeto para a FETEPS 2025 de sistema embarcado utilizando o microcontrolador ESP32 e sensor DHT11. Focado em leitura de dados de hardware e processamento de baixo nível.',
    techs: ['C++', 'ESP32', 'Arduino', 'Embarcados'],
    github: 'https://github.com/murillomsouza',
    image: feteps,
    liveUrl: 'https://feteps.cps.sp.gov.br/projetos/logchain-4-0-cadeia-fria-inteligente/'
  },
  {
    title: 'Sistema de Reservas',
    description: 'Plataforma estruturada para simular reservas. O foco da aplicação é garantir que seja possível criar conta, alugar quarto, editar e cancelar reserva.',
    techs: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/murillomsouza/sistema-reservas',
    image: null,
    liveUrl: null
  },
  {
    title: 'Sistema-Pedido-e-Produto',
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

  // Efeito 1: Reveal on Scroll (Repetitivo)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualiza a visibilidade dependendo se está na tela ou não
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 } // Dispara quando 15% da seção está visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Efeito 2: Auto Scroll do Carrossel
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
    }, 3000); 

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
    // bg-gradient-to-b cria a transição suave de cor do Hero (slate-950) para Projetos (slate-900)
    <section id="projetos" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200 overflow-hidden">
      {/* Wrapper animado da seção inteira */}
      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        
        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Meus Projetos
          </h2>
          <div className="h-px bg-slate-700 flex-grow ml-4"></div>
        </div>

        {/* Grid / Carrossel Container */}
        <div 
          ref={carouselRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 2000);
          }}
          className="flex md:grid flex-nowrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              onMouseMove={handleMouseMove}
              className="w-[85vw] sm:w-[350px] md:w-auto flex-none snap-start bg-slate-950 border border-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-emerald-900/20 transition-all duration-300 flex flex-col group shadow-lg cursor-pointer relative overflow-hidden"
            >
              
              {/* Efeito Lanterna (Glow Dinâmico) */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(16, 185, 129, 0.12), transparent 40%)'
                }}
              />

              {/* Todo o conteúdo do card deve estar dentro de uma div com z-10 para ficar acima do brilho */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="absolute top-[-10px] right-[-10px] bg-emerald-600 text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver detalhes
                </div>

                <div className="flex justify-between items-start mb-4">
                  <FolderGit2 size={36} className="text-emerald-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-emerald-500/80 bg-emerald-950/30 px-2 py-1 rounded-md border border-emerald-900/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Projeto */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-950/50 hover:bg-slate-800 text-slate-300 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            {selectedProject.image ? (
              <div className="w-full h-48 md:h-72 bg-slate-800 border-b border-slate-700">
                <img 
                  src={selectedProject.image} 
                  alt={`Preview do ${selectedProject.title}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-32 md:h-40 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-700 flex items-center justify-center">
                <FolderGit2 size={64} className="text-slate-700" strokeWidth={1} />
              </div>
            )}

            <div className="p-6 md:p-8 overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.techs.map((tech, i) => (
                  <span key={i} className="text-sm font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-md border border-emerald-800/50">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  < FolderGit2 size={18} />
                  Código Fonte
                </a>

                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-emerald-900/20"
                  >
                    <ExternalLink size={18} />
                    Acessar Site
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