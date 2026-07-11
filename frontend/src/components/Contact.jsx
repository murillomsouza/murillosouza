import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Mail, MapPin, Send, Terminal, Coffee, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState('idle');
  const [easterEgg, setEasterEgg] = useState(null);

  // Efeito Reveal on Scroll
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

  const warpLines = useMemo(() => {
    return Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      height: `${Math.random() * 150 + 50}px`,
      width: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 0.3 + 0.1}s`,
      delay: `${Math.random() * 0.5}s`,
      opacity: Math.random() * 0.6 + 0.4,
    }));
  }, []);

  const handleTextareaChange = (e) => {
    const text = e.target.value.toLowerCase().trim();
    if (text === 'order 66') setEasterEgg('order66');
    else if (text === 'sudo logs') setEasterEgg('logs');
    else if (text === 'cat') setEasterEgg('cat');
    else setEasterEgg(null);
  };

  const closeEasterEgg = () => {
    setEasterEgg(null);
    document.getElementById('message').value = '';
  };

  const encodedEmail = 'bXVyaWxsb3NvdXphOTk3QGdtYWlsLmNvbQ==';
  
  const handleSecureEmailClick = (e) => {
    e.preventDefault();
    const decodedEmail = atob(encodedEmail);
    window.location.href = `mailto:${decodedEmail}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading'); 
    
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    const FORMSPREE_URL = import.meta.env.VITE_FORMS_URL;

    try {
      const sendEmailPromise = fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const animationTimerPromise = new Promise(resolve => setTimeout(resolve, 3500));

      const [response] = await Promise.all([sendEmailPromise, animationTimerPromise]);

      if (response.ok) {
        setFormState('success');
        e.target.reset(); 
      } else {
        throw new Error("Erro no Formspree");
      }
    } catch (error) {
      console.error("Erro na comunicação:", error);
      setFormState('idle');
      alert("Houve uma falha nos sistemas de comunicação. Tente novamente.");
    } finally {
      setTimeout(() => setFormState('idle'), 4000);
    }
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 relative overflow-hidden">

      <style>
        {`
          @keyframes engine-rumble {
            0%, 100% { transform: translate3d(0, 0, 0); }
            25% { transform: translate3d(-1px, 2px, 0); }
            50% { transform: translate3d(1px, -1px, 0); }
            75% { transform: translate3d(-2px, 1px, 0); }
          }
          @keyframes blast-off {
            0% { transform: translateY(0) scale(1); }
            10% { transform: translateY(10px) scale(0.95); } 
            100% { transform: translateY(-1200px) scale(1.1); } 
          }
          @keyframes fire-flicker {
            0%, 100% { height: 20px; opacity: 0.9; }
            50% { height: 40px; opacity: 1; }
          }
          @keyframes warp-speed {
            0% { transform: translateY(-200px) scaleY(1); opacity: 0; }
            10% { opacity: 1; }
            80% { transform: translateY(100vh) scaleY(1.5); opacity: 1; }
            100% { transform: translateY(120vh) scaleY(2); opacity: 0; }
          }

          .animate-rumble {
            animation: engine-rumble 0.1s ease-in-out infinite;
          }
          .animate-blast {
            animation: blast-off 1.5s cubic-bezier(0.5, 0, 0.1, 1) forwards;
            animation-delay: 1.5s; 
          }
          .animate-fire {
            animation: fire-flicker 0.05s ease-in-out infinite;
          }
        `}
      </style>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        } relative z-10`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Vamos Conversar?
                </h2>
                <div className="h-px bg-slate-700 flex-grow ml-4"></div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Tem um projeto em mente, precisa de ajuda com uma arquitetura de backend ou quer discutir as teorias do universo de Star Wars? Me mande uma mensagem!
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              
              <button 
                onClick={handleSecureEmailClick} 
                className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group text-left cursor-pointer"
                title="Protocolo Anti-Scraper Ativo"
              >
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono mb-1">E-mail</p>
                  <p className="text-lg font-medium">{atob(encodedEmail)}</p>
                </div>
              </button>

              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-slate-700 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono mb-1">Localização</p>
                  <p className="text-lg font-medium">Indaiatuba-SP, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative group">
            
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between z-20 relative">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                <Terminal size={14} /> contact.sh
              </div>
            </div>

            {/* EASTER EGG 1: O Gato */}
            {easterEgg === 'cat' && (
              <div className="absolute inset-0 z-40 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center font-mono text-emerald-400 p-6 text-center animate-fade-in">
                <pre className="text-sm sm:text-base leading-tight mb-4">
{` /\\_/\\
( o.o )
 > ^ < `}
                </pre>
                <p className="text-sm uppercase tracking-widest text-emerald-500 font-bold mb-2">Aviso Crítico de Hardware:</p>
                <p className="text-xs mt-2 text-slate-400 max-w-xs">Múltiplos felinos detectados repousando sobre o teclado. Operações de codificação suspensas.</p>
                <button onClick={closeEasterEgg} className="mt-6 px-4 py-2 border border-emerald-500/50 rounded hover:bg-emerald-900/30 text-xs transition-colors">Retomar Controle</button>
              </div>
            )}

            {/* EASTER EGG 2: Order 66 */}
            {easterEgg === 'order66' && (
              <div className="absolute inset-0 z-40 bg-red-950/95 backdrop-blur-md flex flex-col items-center justify-center font-mono text-red-500 p-6 text-center animate-fade-in">
                <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-xl font-bold mb-2 uppercase tracking-widest text-red-500">Diretriz Imperial Ativa</p>
                <p className="text-xs text-red-400 max-w-xs">Executando Ordem 66.<br/>Expurgando arquivos Jedi e assumindo controle total do terminal e dos diretórios do sistema.</p>
                <button onClick={closeEasterEgg} className="mt-6 px-4 py-2 border border-red-500/50 text-red-400 rounded hover:bg-red-900/30 text-xs transition-colors">Forçar Reinicialização</button>
              </div>
            )}

            {/* EASTER EGG 3: Sudo Logs da Fatec */}
            {easterEgg === 'logs' && (
              <div className="absolute inset-0 z-40 bg-slate-950/95 backdrop-blur-md flex flex-col font-mono text-emerald-500 p-6 text-left text-xs sm:text-sm overflow-hidden animate-fade-in">
                <div className="space-y-3 opacity-80 mt-4">
                   <p>[ OK ] Carregando Kernel Linux Keep-OS...</p>
                   <p>[ OK ] Montando diretórios SMB da rede Fatec...</p>
                   <p>[ OK ] Inicializando compilador C++ e ambiente Java...</p>
                   <p>[ OK ] Conectando ao microcontrolador ESP32 na porta serial...</p>
                   <p>[ OK ] Validando esquema de banco de dados NoSQL...</p>
                   <p className="text-amber-400">[ WARN ] Padrão de Arquitetura em Camadas detectado. Otimizando controllers e repositórios...</p>
                   <p>[ OK ] Deploy Ceduca finalizado com sucesso. Status 200.</p>
                   <p className="mt-6 animate-pulse text-emerald-400">Aguardando novos comandos de sistema...</p>
                </div>
                <button onClick={closeEasterEgg} className="absolute bottom-6 right-6 px-4 py-2 border border-emerald-500/50 rounded hover:bg-emerald-900/30 text-xs transition-colors">exit</button>
              </div>
            )}

            {formState === 'loading' && (
              <div className="absolute inset-0 z-30 bg-slate-950/80 backdrop-blur-md flex items-center justify-center overflow-hidden">
                
                <div className="absolute inset-0 pointer-events-none z-0">
                  {warpLines.map((line) => (
                    <div
                      key={line.id}
                      className="absolute top-0"
                      style={{
                        left: line.left,
                        width: line.width,
                        height: line.height,
                        opacity: line.opacity,
                        background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.9), #fff)',
                        animation: `warp-speed ${line.duration} linear infinite`,
                        animationDelay: line.delay,
                        willChange: 'transform'
                      }}
                    ></div>
                  ))}
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blast z-10 flex justify-center">
                  <div className="animate-rumble relative w-28 h-28 flex justify-center">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full relative z-20 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <path d="M 50 15 L 90 65 L 75 75 L 50 55 L 25 75 L 10 65 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.5"/>
                      <path d="M 50 10 L 60 70 L 40 70 Z" fill="#1e293b" stroke="#34d399" strokeWidth="2"/>
                      <polygon points="50,25 54,45 46,45" fill="#38bdf8" />
                      <rect x="43" y="70" width="14" height="6" fill="#020617" />
                      <rect x="20" y="65" width="8" height="5" fill="#020617" />
                      <rect x="72" y="65" width="8" height="5" fill="#020617" />
                    </svg>

                    <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-3.5 bg-gradient-to-t from-transparent via-cyan-400 to-white rounded-b-full animate-fire z-10 blur-[1px]"></div>
                    <div className="absolute bottom-[-5px] left-[25%] -translate-x-1/2 w-2 bg-gradient-to-t from-transparent via-orange-500 to-white rounded-b-full animate-fire z-10 blur-[1px]" style={{animationDelay: '0.05s'}}></div>
                    <div className="absolute bottom-[-5px] right-[25%] translate-x-1/2 w-2 bg-gradient-to-t from-transparent via-orange-500 to-white rounded-b-full animate-fire z-10 blur-[1px]" style={{animationDelay: '0.08s'}}></div>
                  </div>
                </div>

                <div className="absolute bottom-12 bg-slate-900/90 border border-emerald-500/50 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)] z-30 flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                  <p className="text-emerald-400 font-mono text-xs md:text-sm tracking-widest uppercase">
                    Enviando Mensagem...
                  </p>
                </div>
              </div>
            )}

            {formState === 'success' && (
              <div className="absolute inset-0 z-30 bg-emerald-950/90 backdrop-blur-md flex flex-col items-center justify-center animate-fade-in">
                <CheckCircle size={64} className="text-emerald-400 mb-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                <p className="text-white font-mono text-lg tracking-widest uppercase text-center px-4">
                  Mensagem Enviada com Sucesso!
                </p>
                <p className="text-emerald-500 text-sm mt-2 font-mono">Obrigado por entrar em contato!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className={`p-6 md:p-8 flex flex-col gap-6 relative z-10 transition-opacity duration-300 ${formState !== 'idle' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-mono text-emerald-500">~/nome $</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  placeholder="Seu nome ou empresa"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-mono text-emerald-500">~/email $</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-mono text-emerald-500">~/mensagem $</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4"
                  onChange={handleTextareaChange}
                  placeholder="Como posso te ajudar?"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="mt-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20"
              >
                <Send size={18} /> Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Murillo Souza. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Coffee size={14} className="text-amber-700 mx-1" /> e muita curiosidade.
          </p>
        </div>
      </div>
    </section>
  );
}