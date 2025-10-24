import SectionTitle from '../components/SectionTitle';
import { Bot, Video, Boxes } from 'lucide-react';
import { IMAGES } from '../config/images';

export default function NossoRobo() {
  return (
    <section id="robo" className="min-h-screen py-20 px-4 bg-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle>NOSSO ROBÔ</SectionTitle>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primaryRed to-primaryOrange rounded-lg flex items-center justify-center">
                  <Bot size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">PASCAL</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pascal é nosso robô competidor, projetado e construído com precisão para enfrentar os desafios da temporada. Com sistemas avançados de movimentação, manipulação e controle, Pascal representa o resultado de centenas de horas de trabalho em equipe, testes e refinamentos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada componente foi cuidadosamente selecionado e integrado para garantir máxima performance, confiabilidade e eficiência durante as competições.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg aspect-video overflow-hidden shadow-xl bg-gray-200">
              <img
                src={IMAGES.robot.pascal}
                alt="Robô Pascal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="14" text-anchor="middle" dy=".3em" fill="%23999"%3EPascal%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg aspect-video overflow-hidden shadow-xl bg-gray-200">
             <video
  src={IMAGES.robot.reveal}
  type="video/mp4"
  className="w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  onError={(e) => {
    e.currentTarget.src =
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="14" text-anchor="middle" dy=".3em" fill="%23999"%3EReveal%3C/text%3E%3C/svg%3E';
  }}
/>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primaryRed to-primaryOrange rounded-lg flex items-center justify-center">
                  <Video size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">ROBOT REVEAL</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Confira o vídeo de apresentação oficial do Pascal, onde mostramos todas as suas funcionalidades, mecanismos e capacidades em ação. O Robot Reveal é o momento em que compartilhamos com a comunidade FTC todo o trabalho e dedicação investidos em nosso robô.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Acompanhe demonstrações detalhadas de cada sistema e veja Pascal em movimento durante os testes de campo.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primaryRed to-primaryOrange rounded-lg flex items-center justify-center">
                  <Boxes size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">CAD</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Todo o design do Pascal começou no ambiente digital através de modelagem CAD 3D. Utilizamos softwares profissionais de engenharia para planejar cada peça, simular movimentos e prever possíveis problemas antes da construção física.
              </p>
              <p className="text-gray-600 leading-relaxed">
                O CAD nos permite visualizar o robô completo, calcular dimensões com precisão, testar diferentes configurações e garantir que todos os componentes se encaixem perfeitamente.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg aspect-video overflow-hidden shadow-xl bg-gray-200">
              <img
                src={IMAGES.robot.cad}
                alt="Modelo CAD"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" font-size="14" text-anchor="middle" dy=".3em" fill="%23999"%3ECAD%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
