import SectionTitle from '../components/SectionTitle';
import SponsorCard from '../components/SponsorCard';
import { IMAGES } from '../config/images';

export default function Patrocinadores() {
  const sponsors = [
    { name: 'Patrocinador 1', image: IMAGES.sponsors.sponsor1 },
    { name: 'Patrocinador 2', image: IMAGES.sponsors.sponsor2 },
    { name: 'Patrocinador 3', image: IMAGES.sponsors.sponsor3 },
    { name: 'Patrocinador 4', image: IMAGES.sponsors.sponsor4 },
    { name: 'Patrocinador 5', image: IMAGES.sponsors.sponsor5 },
    { name: 'Patrocinador 6', image: IMAGES.sponsors.sponsor6 },
  ];

  return (
    <section id="patrocinadores" className="min-h-screen py-20 px-4 bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle>PATROCINADORES</SectionTitle>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Agradecemos imensamente a todos os nossos patrocinadores que tornam possível nossa participação no FIRST Tech Challenge. Seu apoio é fundamental para o sucesso da nossa equipe.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <SponsorCard key={index} name={sponsor.name} image={sponsor.image} />
          ))}
        </div>
      </div>
    </section>
  );
}
