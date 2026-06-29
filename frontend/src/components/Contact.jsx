import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send, Terminal, Coffee } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState('idle');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    const API_BASE_URL = 'https://murillosouza.onrender.com';

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setFormState('success');
        e.target.reset(); 
      } else {
        console.error("O servidor rejeitou a requisição.");
        setFormState('idle'); 
        alert("Não foi possível enviar a mensagem. Verifique os dados inseridos.");
      }
    } catch (error) {
      console.error("Erro na comunicação com a API:", error);
      setFormState('idle');
      alert("O servidor de e-mails está indisponível no momento. Tente novamente mais tarde.");
    } finally {
      if (formState !== 'idle') {
        setTimeout(() => setFormState('idle'), 4000);
      }
    }
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 relative overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div 
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        } relative z-10`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Coluna da Esquerda */}
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
              <a href="mailto:murillosouza997@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono mb-1">E-mail</p>
                  <p className="text-lg font-medium">murillosouza997@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl group-hover:border-slate-700 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono mb-1">Base de Operações</p>
                  <p className="text-lg font-medium">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              
              <a href="https://github.com/murillomsouza" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-600 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
                </svg>
              </a>

              <a href="https://linkedin.com/in/murillo-de-souza" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna da Direita */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative group">
            
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                <Terminal size={14} /> contact.sh
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-mono text-emerald-500">~/nome $</label>
                <input 
                  type="text" 
                  id="name" 
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
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-mono text-emerald-500">~/mensagem $</label>
                <textarea 
                  id="message" 
                  required
                  rows="4"
                  placeholder="Como posso te ajudar?"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="mt-2 w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20"
              >
                {formState === 'idle' && (
                  <>
                    <Send size={18} /> Enviar Mensagem
                  </>
                )}
                {formState === 'loading' && (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    Processando...
                  </span>
                )}
                {formState === 'success' && (
                  <span className="text-emerald-400 flex items-center gap-2">
                    Mensagem enviada com sucesso!
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
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