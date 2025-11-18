import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Nossa Equipe', href: '#equipe' },
    { name: 'Robô', href: '#robo' },
    { name: 'Patrocinadores', href: '#patrocinadores' },
    { name: 'Conquistas', href: '#conquistas' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primaryRed to-primaryOrange bg-clip-text text-transparent">
              OUTPUT #21069
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primaryOrange transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="outmentor.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primaryOrange transition-colors duration-300 font-medium"
            >
              FTC Mentor
            </a>
            <a
              href="https://www.instagram.com/output.ftc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primaryOrange transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primaryOrange transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-primaryOrange transition-colors duration-300 font-medium py-2"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://www.firstinspires.org/robotics/ftc"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-700 hover:text-primaryOrange transition-colors duration-300 font-medium py-2"
          >
            FTC Mentor
          </a>
          <a
            href="https://www.instagram.com/outputftc/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-primaryOrange transition-colors duration-300 py-2"
          >
            <Instagram size={20} /> Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
