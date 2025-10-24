import SectionTitle from '../components/SectionTitle';
import AchievementCard from '../components/AchievementCard';
import { IMAGES } from '../config/images';

export default function Conquistas() {
  const achievements = [
    {
      year: '2025',
      title: 'Control Award',
      description:
        'Nossa equipe demonstrou um excelente uso de sensores e softwares para aumentar a funcionalidade do robô na arena.',
      image: IMAGES.achievements.achievement1,
    },
    {
      year: '2024',
      title: 'Think Award',
      description:
        'Recebemos reconhecimento pela maestria na apresentação do processo de engenharia vivenciado durante a temporada. Este prêmio reflete nossa busca constante por excelência e pensamento fora da caixa.',
      image: IMAGES.achievements.achievement2,
    },
    {
      year: '2023',
      title: 'Motivate Award',
      description:
        'Nessa temporada, cumprimos a missão de levar a cultura FIRST para as comunidades e a essência da FIRST.',
      image: IMAGES.achievements.achievement3,
    },
    {
      year: '2022',
      title: 'Inspire Award',
      description:
        'Marcamos nossa entrada oficial no FIRST Tech Challenge com grande entusiasmo e determinação. Foi o início de uma jornada incrível de aprendizado, superação e construção de uma equipe unida.',
      image: IMAGES.achievements.achievement4,
    },
  ];

  return (
    <section id="conquistas" className="min-h-screen py-20 px-4 bg-gray-50 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <SectionTitle>CONQUISTAS</SectionTitle>
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              year={achievement.year}
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
