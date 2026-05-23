import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Play } from "lucide-react";
import "./index.css";
import logo from "./assets/logo.png";

function App() {
  // Links configuráveis
  const youtubeLiveUrl = "https://www.youtube.com/embed/gWtWT3jy0MA?si=1FM51jeQ8-zNGPwY";
  const donationLink = "https://link.mercadopago.com.br/missemeandoapalavra";

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYoutubeId(youtubeLiveUrl);
  const isLive = Boolean(videoId);
 
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground font-body">

        {/* HERO - Sem header superior */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-earth overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:50px_50px]" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            
            {/* Logo grande centralizada */}
            <img 
              src={logo} 
              alt="Semeando a Palavra" 
              className="mx-auto h-56 w-auto mb-12 drop-shadow-2xl" 
            />

            <h1 className="text-6xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Semeando a Palavra<br />
              <span className="text-gold">para todas as nações</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-white/90 mb-12">
              Um ministério dedicado a levar o Evangelho de Jesus Cristo a povos e nações que ainda não o conhecem, 
              através de projetos práticos, discipulado e transmissões ao vivo.
            </p>

            {/* Botões grandes + "Sobre Nós" ao lado */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              <a 
                href="#sobre" 
                className="inline-block border-2 border-white/80 hover:bg-white/10 text-white px-10 py-5 rounded-3xl text-lg font-semibold transition-all"
              >
                Sobre Nós
              </a>

              <a 
                href="#tv" 
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-14 py-6 rounded-3xl text-xl font-semibold shadow-glow transition-all"
              >
                Assistir Ao Vivo <Play className="w-7 h-7" />
              </a>

              <a 
                href="#contribuir" 
                className="inline-flex items-center gap-3 border-2 border-white/80 hover:bg-white/10 text-white px-14 py-6 rounded-3xl text-xl font-semibold transition-all"
              >
                Contribuir com a Obra
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <section id="sobre" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-semibold mb-6">Quem Somos</h2>
              <p className="text-2xl text-muted-foreground leading-relaxed">
                Semeando a Palavra é um ministério missionário cristão que atua em várias nações, 
                levando não apenas a mensagem do Evangelho, mas também amor prático através de educação, 
                saúde, água potável e discipulado de líderes locais.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 text-justify">
              <p>
                Nossa visão é ver vidas transformadas pelo poder de Jesus Cristo em todos os cantos da Terra. 
                Trabalhamos lado a lado com igrejas locais, treinamos líderes e apoiamos missionários no campo.
              </p>
              <p>
                Acreditamos que a Grande Comissão não é apenas uma ordem, mas uma chamada diária para cada um de nós. 
                Por isso, convidamos você a fazer parte dessa história — seja através de oração, compartilhamento ou contribuição financeira.
              </p>
            </div>
          </div>
        </section>

        {/* TV ONLINE */}
        <section id="tv" className="py-20 bg-warm">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className={`inline-flex items-center gap-3 px-8 py-3 rounded-full mb-6 shadow-soft ${isLive ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                <div className={`w-4 h-4 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`} />
                <span className="font-semibold tracking-widest">{isLive ? "AO VIVO AGORA" : "TV SEMEANDO A PALAVRA"}</span>
              </div>
              <h2 className="text-5xl font-display font-semibold text-foreground mb-4">Semeando ao Vivo</h2>
              <p className="text-muted-foreground text-lg">Cultos, orações e mensagens missionárias em tempo real</p>
            </div>

            <div className="bg-white rounded-3xl shadow-card overflow-hidden">
              <div className="aspect-video bg-black relative">
                {videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                    className="w-full h-full"
                    allowFullScreen
                    title="Transmissão Ao Vivo - Semeando a Palavra"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60">
                    <Play className="w-24 h-24 mb-6 opacity-40" />
                    <p className="text-2xl font-medium">No momento não estamos ao vivo</p>
                    <p className="mt-4 text-center">Assim que a transmissão começar, o vídeo aparecerá aqui.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CONTRIBUIR */}
        <section id="contribuir" className="py-24 bg-gradient-to-br from-gold/10 to-warm">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-display font-semibold mb-6">Contribua com a Obra</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Sua doação ajuda a sustentar missionários no campo, projetos de transformação social 
              e a proclamação do Evangelho em nações distantes.
            </p>

            <a 
              href={donationLink} 
              target="_blank"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-16 py-7 rounded-3xl text-2xl font-semibold shadow-glow transition-all"
            >
              Quero Contribuir Agora
            </a>

            <p className="mt-8 text-sm text-muted-foreground">
              Você será redirecionado para uma plataforma segura de pagamento.<br />
              Qualquer valor é uma semente poderosa no Reino de Deus!
            </p>
          </div>
        </section>

        <footer className="py-16 text-center text-muted-foreground border-t bg-white">
          © 2026 Semeando a Palavra • Construído com fé e excelência técnica
        </footer>
      </div>
    </Router>
  );
}

export default App;