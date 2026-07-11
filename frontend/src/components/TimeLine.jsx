import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Calendar, Rocket, Database, Cpu, Download, GraduationCap, BriefcaseBusiness, Lock, Unlock } from 'lucide-react';

const logEntries = [
  {
    id: 1,
    date: 'Pré Pandemia / 2019',
    title: 'Onde tudo começou',
    icon: Database,
    description: 'Apaixonado por tecnologia e ciência, iniciei minha jornada cedo, explorando algoritmos em python, construindo interfaces com HTML e CSS, realizando cursos onlines gratuitos no youtube. Assim nascia um sonho.',
    status: 'Concluído'
  },
  {
    id: 2,
    date: 'Primeiro Semestre / 2025',
    title: 'Primeiras aprovações',
    icon: Terminal,
    description: 'Realizei o vestibular da Fatec com sucesso. Consegui minha vaga e comecei a cursar Desenvolvimento de Software Multiplataforma, onde pude aprofundar meus conhecimentos em programação, desenvolvimento web e mobile, além de participar de projetos acadêmicos desafiadores. Sendo meu primeiro passo em direção a uma carreira na área de tecnologia.',
    status: 'Concluído'
  },
  {
    id: 3,
    date: 'Segundo Semestre / 2025',
    title: 'Sistemas Embarcados & FETEPS',
    icon: Cpu,
    description: 'Tive a honra de participar de um projeto para a FETEPS em colaboração com duas colegas de outro curso de minha faculdade. Nesse projeto desenvolvi um sistema embarcado utilizando ESP32, sensor DHT11 e impressora 3D para fazer a case. O projeto consistia em um monitor de temperatura em tempo real para uma cadeia de produção de manteiga e sorvete. Dando ao operador a possibilidade de definir limtes maximos e mínimos de temperatura, em uma interface web, onde a mesma interface daria os alertas caso necessário.',
    status: 'Concluído'
  },
  {
    id: 4,
    date: 'Primeiro Semestre / 2026',
    title: 'Desenvolvimento Web de APIs com Java & SpringBoot',
    icon: GraduationCap,
    description: 'Durante o primeiro semestre de 2026, mergulhei de vez no desenvolvimento web de APIs com Java e SpringBoot, onde me dei bem com a linguagem, montando uma arquitetura em camadas, integrando com banco de dados NoSQL e Front-end com React. Além de entregar o projeto final Ceduca, que nasceu de um problema real, de uma instituição real da cidade em que moro, demonstrando o compromisso do meu grupo em fazer entregas de valor.',
    status: 'Concluído'
  },
  {
    id: 5,
    date: 'Primeiro Semestre / 2026',
    title: 'Freelancer',
    icon: BriefcaseBusiness,
    description: 'Pela primeira vez, tive a chance de trabalhar em um projeto freelancer, onde desenvolvi uma interface web para uma loja de perfumes de minha cidade. Realizando os passos de levantamento de requisitos, adaptando a solução para o cliente, indo do 0 (zero) ao Deploy no domínio próprio. Ao final do projeto, o cliente ficou satisfeito com o resultado, e eu saio realizado pela confiança que foi depositada em mim.',
    status: 'Concluído'
  },
  {
    id: 6,
    date: 'Atualmente (2026)',
    title: 'O Futuro',
    icon: Rocket,
    description: 'Com previsão de formação para Dezembro de 2027, estou focado em aprimorar minhas habilidades em desenvolvimento de software, explorando novas tecnologias e me empenhando para conquistar uma vaga no mercado de trabalho, seja ela Júnior ou Estágio, onde poderei aplicar meus conhecimentos e contribuir para projetos desafiadores, enquanto continuo a aprender e crescer como profissional.',
    status: 'Em progresso'
  }
];

export default function TimeLine() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLog, setActiveLog] = useState(6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id="trajetoria" className="py-24 bg-slate-950 text-slate-200 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div 
        ref={sectionRef}
        className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        } relative z-10`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Linha do Tempo
            </h2>
            <div className="h-px bg-slate-800 w-16 md:w-32 ml-4"></div>
          </div>

          <a 
            href="/curriculo Murillo de Souza.pdf" 
            download
            className="group relative px-6 py-3 bg-slate-900 border border-emerald-500/50 hover:border-emerald-400 rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] flex items-center gap-3 w-fit"
          >
            <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <Download size={18} className="text-emerald-500 group-hover:-translate-y-1 transition-transform" />
            <span className="font-mono text-sm text-slate-300 group-hover:text-emerald-400 transition-colors relative z-10">
              [./baixar_curriculo.sh]
            </span>
          </a>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-6 md:space-y-8">
          {logEntries.map((entry) => {
            const isActive = activeLog === entry.id;

            return (
              <div key={entry.id} className="relative pl-8 md:pl-12 group">
                
                <div className={`absolute -left-[21px] md:-left-[25px] top-1 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border-2 rounded-full transition-all duration-500 z-20 ${
                  isActive 
                    ? 'bg-emerald-950 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                    : 'bg-slate-950 border-slate-800 group-hover:border-slate-600'
                }`}>
                  <entry.icon size={18} className={`transition-colors duration-500 ${isActive ? 'text-emerald-400' : 'text-slate-600 group-hover:text-slate-400'}`} />
                </div>

                <div className={`absolute left-0 top-6 w-8 md:w-12 h-px origin-left transition-transform duration-500 z-10 ${isActive ? 'bg-gradient-to-r from-emerald-500 to-transparent scale-x-100' : 'bg-slate-800 scale-x-50 group-hover:scale-x-100'}`}></div>

                <div 
                  onClick={() => setActiveLog(isActive ? null : entry.id)} 
                  className={`relative z-30 backdrop-blur-md rounded-xl transition-all duration-500 transform-gpu cursor-pointer overflow-hidden border ${
                    isActive 
                      ? 'bg-slate-900/90 border-emerald-500/50 shadow-lg shadow-emerald-900/20' 
                      : 'bg-slate-950/50 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className={isActive ? 'text-emerald-500' : 'text-slate-600'} />
                        <span className={`font-mono text-xs uppercase tracking-wider ${isActive ? 'text-emerald-500' : 'text-slate-500'}`}>
                          {entry.date}
                        </span>
                        
                        {isActive && entry.status === 'Em progresso' && (
                          <span className="ml-2 w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className={`text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400'}`}>
                          {entry.title}
                        </h3>
                        
                        {/* NOVO: Legenda mais clara, maior e em maiúsculo */}
                        {!isActive && (
                          <div className="flex items-center mt-2 opacity-90 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-mono text-emerald-400 animate-pulse tracking-wider">
                              [{'>'} CLIQUE PARA EXPANDIR]
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border hidden sm:block ${
                        isActive 
                          ? 'text-emerald-400 border-emerald-900/50 bg-emerald-950/30' 
                          : 'text-slate-600 border-slate-800 bg-slate-900/50'
                      }`}>
                        {isActive ? 'ARQUIVO ABERTO' : 'CRIPTOGRAFADO'}
                      </span>
                      <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-emerald-950/50 text-emerald-400' : 'bg-slate-900 text-slate-500'}`}>
                        {isActive ? <Unlock size={16} /> : <Lock size={16} />}
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pt-2 border-t border-slate-800/50 mx-5 md:mx-6 mt-2">
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-4">
                        {entry.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}