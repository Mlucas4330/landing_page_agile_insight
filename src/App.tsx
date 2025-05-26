import { LucideX } from 'lucide-react';
import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  // Referência para o formulário com tipo explícito
  const formRef = useRef<HTMLElement>(null);

  // Estado para controlar a visibilidade do vídeo flutuante
  const [showFloatingVideo, setShowFloatingVideo] = useState(false);

  // Função para rolar até o formulário
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mostrar o vídeo flutuante após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingVideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black">
      {/* Cabeçalho com botões glassmorphism - fixo durante rolagem */}
      <header className="sticky-header">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <button className="glass-button p-3 flex items-center justify-center">
              <img src="/icone neon legnet.png" alt="Legnet" className="h-8 w-auto neon-glow" />
            </button>
            <button className="glass-button px-6 py-3 text-black font-normal text-lg">
              Agile Insight
            </button>
          </div>
          <button onClick={scrollToForm} className="neon-button px-6 py-3 font-medium">
            Fale Conosco
          </button>
        </div>
      </header>

      <div className="container flex flex-col lg:flex-row mx-auto py-16 px-4">
        {/* Hero Section com headline atualizada e botão grande */}
        <section>
          <div className="max-w-4xl mx-auto">
            {/* Headline atualizada com botão grande */}
            <div className="headline-container mb-16 relative">
              <div className="headline-agile">Agile</div>
              <div className="headline-insight relative">
                Insight
                {/* Botão grande posicionado mais abaixo sobre as letras H e T */}
                <button className="big-logo-button" style={{ right: "-10px", top: "45px" }}>
                  <img src="/icone neon legnet.png" alt="Legnet" className="neon-glow" />
                </button>
              </div>
            </div>

            <p className="text-xl font-light mb-8">
              <strong>
              O Insight é um Assistente 24h embarcado dentro do Agile que<br></br> automatiza a Conformidade Legal da sua empresa.
              </strong>
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <span className="text-[#c5ff00] font-normal">1.</span>
                <p className="font-light">Sugere e Cria planos de ação e documentos automaticamente</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#c5ff00] font-normal">2.</span>
                <p className="font-light">33 anos de evidências legais sugeridas em sua biblioteca</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#c5ff00] font-normal">3.</span>
                <p className="font-light">Atende múltiplos Requisitos Legais em apenas dois cliques</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#c5ff00] font-normal">4.</span>
                <p className="font-light">100% temático e amigável</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#c5ff00] font-normal">5.</span>
                <p className="font-light">A máquina trabalha para o usuário</p>
              </div>
            </div>
          </div>

          {/* Vídeo maior e reposicionado com autoplay */}
          {/* <div className="max-w-4xl mx-auto rounded-video mb-16">
          <div className="aspect-video rounded-video overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/U_SW-DeoiQU?controls=1&rel=0&autoplay=1&mute=1" 
              title="Agile Insight Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div> */}
        </section>

        {/* Formulário de Contato */}
        <section ref={formRef} className="container glass p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Solicite uma Proposta</h2>

          <a
            href="https://wa.me/5521997279076"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button w-full py-3 mb-6 flex items-center justify-center gap-2 text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            WhatsApp
          </a>

          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-normal mb-1">Nome</label>
              <input
                type="text"
                id="nome"
                className="w-full glass-button bg-opacity-30 p-3 text-black focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
                placeholder="*"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-normal mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full glass-button bg-opacity-30 p-3 text-black focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
                placeholder="*"
                required
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-normal mb-1">Telefone</label>
              <input
                type="tel"
                id="telefone"
                className="w-full glass-button bg-opacity-30 p-3 text-black focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
                placeholder="*"
                required
              />
            </div>

            <div>
              <label htmlFor="empresa" className="block text-sm font-normal mb-1">Nome da Empresa</label>
              <input
                type="text"
                id="empresa"
                className="w-full glass-button bg-opacity-30 p-3 text-black focus:outline-none focus:ring-2 focus:ring-[#c5ff00]"
                placeholder="*"
                required
              />
            </div>

            <button type="submit" className="neon-button w-full py-3 font-medium">
              Enviar
            </button>
          </form>
        </section>
      </div>

      {/* Seção de Benefícios */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Transformando a Gestão de Requisitos Legais com Automação
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-6 hover:shadow-lg transition-all">
            <div className="benefit-button mb-4">
              <span>Impacto na Performance</span>
              <span className="arrow">›</span>
            </div>
            <p className="font-light">
              O Insight elimina processos manuais e automatiza a conformidade legal, reduzindo drasticamente o tempo gasto em auditorias.
            </p>
          </div>

          <div className="glass p-6 hover:shadow-lg transition-all">
            <div className="benefit-button mb-4">
              <span>Taxa de Conformidade</span>
              <span className="arrow">›</span>
            </div>
            <p className="font-light">
              Evite riscos e multas! Com base em 33 anos de evidências legais, o Insight mantém sua empresa sempre alinhada com a legislação.
            </p>
          </div>

          <div className="glass p-6 hover:shadow-lg transition-all">
            <div className="benefit-button mb-4">
              <span>Acesso a Informações</span>
              <span className="arrow">›</span>
            </div>
            <p className="font-light">
              Acesse informações estratégicas em tempo real para garantir conformidade com rapidez e segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Carrossel de Logos dos Clientes - Reposicionado */}
      <section className="certifications-bg py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Clientes</h2>

          <div className="logo-carousel">
            <div className="logo-track">
              {/* Primeiro conjunto de logos */}
              <div className="logo-slide">
                <img src="/1.png" alt="Cliente 1" />
              </div>
              <div className="logo-slide">
                <img src="/2.png" alt="Cliente 2" />
              </div>
              <div className="logo-slide">
                <img src="/3.png" alt="Cliente 3" />
              </div>
              <div className="logo-slide">
                <img src="/4.png" alt="Cliente 4" />
              </div>
              <div className="logo-slide">
                <img src="/5.png" alt="Cliente 5" />
              </div>

              {/* Duplicação para criar o efeito de loop contínuo */}
              <div className="logo-slide">
                <img src="/1.png" alt="Cliente 1" />
              </div>
              <div className="logo-slide">
                <img src="/2.png" alt="Cliente 2" />
              </div>
              <div className="logo-slide">
                <img src="/3.png" alt="Cliente 3" />
              </div>
              <div className="logo-slide">
                <img src="/4.png" alt="Cliente 4" />
              </div>
              <div className="logo-slide">
                <img src="/5.png" alt="Cliente 5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Público-Alvo */}
      <section className="container mx-auto py-16 px-4 bg-white rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-6">
          Para empresas, gestores e profissionais de conformidade legal
        </h2>
        <p className="text-xl font-light text-center max-w-3xl mx-auto mb-12">
          Empresas que precisam garantir conformidade legal de forma simples, rápida e automatizada agora têm uma solução definitiva.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass p-6 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-4">Atendimento 24 Horas</h3>
            <p className="font-light">
              O Insight acessa a maior base de evidências legais do Brasil para indicar as melhores práticas e garantir conformidade sem esforço.
            </p>
          </div>

          <div className="glass p-6 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-4">Automação Inteligente</h3>
            <p className="font-light">
              Elimine processos manuais, gere planos de ação e atenda requisitos legais com apenas dois cliques.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais - Headline dividida em duas linhas */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          O Insight transforma a gestão de requisitos legais<br />
          em um processo simples e automatizado
        </h2>
        <p className="text-xl font-light text-center max-w-3xl mx-auto mb-12">
          Tudo isso dentro de um ambiente seguro e confiável para sua empresa.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-6 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                <path d="M12 3v12"></path>
                <path d="m8 11 4 4 4-4"></path>
                <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Automação sem complicações</h3>
            <p className="font-light text-center mb-4">
              Automação que qualquer equipe pode usar
            </p>
            <p className="font-light">
              O Insight automatiza a conformidade legal da sua empresa, eliminando processos manuais e reduzindo esforço, sem necessidade de expertise técnica.
            </p>
          </div>

          <div className="glass p-6 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                <path d="M12 22v-5"></path>
                <path d="M9 8V2"></path>
                <path d="M15 8V2"></path>
                <path d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M12 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M20 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M4 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M12 16a4 4 0 0 1 0-8"></path>
                <path d="M9 17.93a4 4 0 0 1-5 0"></path>
                <path d="M20 17.93a4 4 0 0 1-5 0"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Regularização com dois cliques</h3>
            <p className="font-light text-center mb-4">
              Acelere seus processos de regularização
            </p>
            <p className="font-light">
              O Insight utiliza 33 anos de evidências legais para criar planos de ação e indicar documentos necessários em segundos, garantindo conformidade sem incertezas.
            </p>
          </div>

          <div className="glass p-6 hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Decisões Seguras</h3>
            <p className="font-light text-center mb-4">
              Garanta segurança jurídica e evite multas
            </p>
            <p className="font-light">
              Com a maior base de evidências legais do Brasil, o Insight sugere as melhores práticas para garantir conformidade de forma automática e segura.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Certificações - Substituída pela imagem enviada com fundo mais escuro */}
      <section className="container mx-auto py-4  px-4 certifications-bg rounded-3xl">
        <p className="text-2xl font-bold text-center text-white max-w-3xl mx-auto mt-8 mb-2">
          Atuamos com padrões reconhecidos mundialmente, garantindo qualidade, segurança e eficácia em todos os processos.
        </p>

        <div className="flex justify-center ">
          <img
            src="/ISO s legnet ONU.png"
            alt="Certificações ISO e ONU"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* Nova seção com a imagem do tablet */}
      {/* <section className="container mx-auto py-16 px-4">
        <div className="flex justify-center">
          <img
            src="/imagem site3.png"
            alt="Interface do Agile Insight em tablet"
            className="max-w-full h-auto rounded-3xl shadow-lg"
          />
        </div>
      </section> */}

      {/* FAQ Expandido */}
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass p-6 mb-4">
            <details className="group">
              <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-4">
                <span className="text-lg font-bold">Como o Insight ajuda no atendimento à legislação?</span>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="p-4 font-light">
                O Insight automatiza a identificação de requisitos legais aplicáveis à sua empresa, sugere planos de ação e cria documentos necessários para garantir conformidade, tudo isso com base em uma extensa biblioteca de evidências legais acumuladas ao longo de 33 anos.
              </div>
            </details>
          </div>

          <div className="glass p-6 mb-4">
            <details className="group">
              <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-4">
                <span className="text-lg font-bold">O Insight realmente funciona para qualquer empresa?</span>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="p-4 font-light">
                Sim, o Insight foi desenvolvido para atender empresas de todos os portes e segmentos. Sua base de conhecimento abrangente permite adaptação às necessidades específicas de cada organização, independentemente do setor de atuação. O sistema é flexível e personaliza suas recomendações de acordo com o perfil da empresa, garantindo relevância e eficácia para qualquer negócio que precise gerenciar conformidade legal.
              </div>
            </details>
          </div>

          <div className="glass p-6">
            <details className="group">
              <summary className="flex justify-between items-center font-normal cursor-pointer list-none p-4">
                <span className="text-lg font-bold">Quais tipos de requisitos legais o Insight atende?</span>
                <span className="transition group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5ff00]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div className="p-4 font-light">
                O Insight atende a uma ampla gama de requisitos legais, incluindo normas trabalhistas, ambientais, de saúde e segurança ocupacional, regulamentações setoriais específicas, exigências fiscais e tributárias, entre outros. A plataforma é constantemente atualizada para incorporar novas legislações e mudanças regulatórias, garantindo que sua empresa esteja sempre em conformidade com as mais recentes exigências legais aplicáveis ao seu negócio.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Vídeo lateral flutuante com o novo vídeo local */}
      {showFloatingVideo && (
        <div className="fixed bottom-24 right-4 z-50 floating-video-container">
          <div className="relative">
            <video
              width="100%"
              height="100%"
              style={{ height: '280px', width: '180px' }}
              controls
              controlsList="nodownload nofullscreen"
              disablePictureInPicture
              autoPlay
              // loop
              // muted
              playsInline
              className="object-cover rounded-lg shadow-lg"
            >
              <source src="/criativo_02_vertical.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <button className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-6 h-6 p-1 flex items-center justify-center"
              onClick={() => setShowFloatingVideo(false)}><LucideX /></button>
          </div>
          <a
            href="https://wa.me/5521997279076"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-floating-button mt-2 flex items-center justify-center gap-2 bg-[#c5ff00] text-black font-medium py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            WhatsApp
          </a>
        </div>
      )}

      {/* Rodapé com barra verde limão e botão de WhatsApp */}
      <footer className="bg-[#f5f5f5] pt-12">
        <div className="container mx-auto px-4 pb-8">
          <div className="text-center">
            <p className="text-gray-600 font-light mb-4">© 2025 Agile Insight. Todos os direitos reservados.</p>
          </div>
        </div>

        {/* Barra verde limão com botão de WhatsApp */}
        <div className="bg-[#c5ff00] py-4 sticky bottom-0 left-0 right-0 z-40 shadow-lg">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p className="font-medium text-black">Precisa de ajuda? Fale conosco!</p>
            <a
              href="https://wa.me/5521997279076"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
