import SectionTitle from '../components/SectionTitle';
import MemberCard from '../components/MemberCard';
import { Users, Target } from 'lucide-react';
import { IMAGES } from '../config/images';

export default function NossaEquipe() {
  const members = [
    { name: 'Adam F.', image: IMAGES.team.members.adamF },
    { name: 'Álef S.', image: IMAGES.team.members.alefS },
    //  { name: 'Alexandre V.', image: IMAGES.team.members.alexandreV },
    { name: 'Eduardo C.', image: IMAGES.team.members.eduardoC },
    // { name: 'Isaac P.', image: IMAGES.team.members.isaacP },
    // { name: 'Igor S.', image: IMAGES.team.members.igorS },
    { name: 'Maximos P.', image: IMAGES.team.members.maximosP },
    { name: 'Natan S.', image: IMAGES.team.members.natanS },
    { name: 'Pietro D.', image: IMAGES.team.members.pietroD },
    { name: 'Sebastião P.', image: IMAGES.team.members.sebastiaoP },
    
  ];

  return (
    <section id="equipe" className="min-h-screen py-20 px-4 bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle>NOSSO TIME</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {members.map((member) => (
            <MemberCard key={member.name} name={member.name} image={member.image} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primaryRed to-primaryOrange rounded-lg flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">QUEM NÓS SOMOS</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Somos uma equipe apaixonada por robótica e inovação, formada por estudantes dedicados que buscam constantemente aprender e crescer juntos. Nossa missão é levar os valores da FIRST para nossa comunidade, inspirando jovens através da ciência, tecnologia, engenharia e matemática.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primaryRed to-primaryOrange rounded-lg flex items-center justify-center">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">NOSSO OBJETIVO</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Nosso objetivo é desenvolver soluções criativas e eficientes para os desafios do FIRST Tech Challenge, promovendo o trabalho em equipe, liderança e pensamento crítico. Buscamos não apenas competir, mas também inspirar outros jovens a descobrir o fascinante mundo da robótica e tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
