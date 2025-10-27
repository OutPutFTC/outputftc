import { IMAGES } from 'dist\assets\images';

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center px-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.home.background})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primaryRed/80 to-primaryOrange/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
          "FAZER A FIRST NA VIDA DA NOSSA COMUNIDADE"
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2 text-lg md:text-2xl font-light">
          <span className="hover:scale-110 transition-transform duration-300">DIVERSÃO</span>
          <span className="text-3xl">•</span>
          <span className="hover:scale-110 transition-transform duration-300">DESCOBERTA</span>
          <span className="text-3xl">•</span>
          <span className="hover:scale-110 transition-transform duration-300">INCLUSÃO</span>
          <span className="text-3xl">•</span>
          <span className="hover:scale-110 transition-transform duration-300">TRABALHO EM EQUIPE</span>
          <span className="text-3xl">•</span>
          <span className="hover:scale-110 transition-transform duration-300">IMPACTO</span>
          <span className="text-3xl">•</span>
          <span className="hover:scale-110 transition-transform duration-300">INOVAÇÃO</span>
        </div>
      </div>
    </section>
  );
}
