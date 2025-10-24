import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primaryRed to-primaryOrange text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <a
            href="mailto:outputftc@gmail.com"
            className="text-xl font-medium hover:underline transition-all duration-300"
          >
            OUTPUTFTC@GMAIL.COM
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/output.ftc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Instagram size={28} />
            </a>
          </div>
          <p className="text-sm font-light">
            © OutputFTC - FIRST Tech Challenge #21069
          </p>
        </div>
      </div>
    </footer>
  );
}
