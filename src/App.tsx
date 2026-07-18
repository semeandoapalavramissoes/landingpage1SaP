import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Play } from "lucide-react";
import "./index.css";
import logo from "./assets/logo.png";

function App() {
  // Links configuráveis
  const youtubeLiveUrl = "https://www.youtube.com/embed/9Bn15KC4-nU?si=UVabIStscd6k-cpb";
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
              Um projeto missionário dedicado a levar o Evangelho de Jesus Cristo aos povos menos alcançados e às nações que ainda não O conhecem, 
              através de missionários que dedicam suas vidas para tornar Cristo conhecido entre todos os povos.
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
                O Projeto Missionário Semeando a Palavra nasceu com a missão de apoiar missionários 
                que estão no campo, dedicando suas vidas à propagação do 
                Evangelho de Jesus Cristo através da evangelização,
                 discipulado e ações de amor prático.

              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8 text-justify">
              <p>
                Além de anunciar a Palavra de Deus,
                 o projeto também atua no cuidado social, contribuindo com
                  a alimentação de crianças e apoiando ações desenvolvidas em bases missionárias, 
                levando esperança, cuidado e transformação para muitas famílias.  </p>
              <p>
                O Semeando a Palavra tem como propósito fortalecer a obra missionária, levantando mantenedores e parceiros que adotem missionários em campo por meio de contribuições mensais, ajudando na continuidade do trabalho missionário 
                e no sustento de crianças atendidas pelos 
                projetos sociais nas bases missionárias. </p>
                <p> Cremos que cada semente plantada através da oração, contribuição e 
                  evangelização pode alcançar vidas e transformar nações. Por isso, 
                  o Projeto Missionário Semeando a Palavra existe com o propósito de semear
                   a Palavra de Deus até tornar Cristo conhecido entre todos os povos.
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
              <p className="text-muted-foreground text-lg">Programações sendo transmitidas abaixo</p>
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
          © Semeando a Palavra • Cristo conhecido entre todos os povos.
        </footer>
      </div>
    </Router>
  );
}

export default App;