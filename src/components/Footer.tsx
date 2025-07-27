
import { Logo } from './Logo';
import { Instagram} from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Tecnologia acessível e soluções inteligentes para impulsionar o seu dia a dia
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Conserto de Celulares</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Vitrine Parceira</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Acessórios e Eletrônicos</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Locação de Som para Festas</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/megatronix.br/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Megatronix | Powered by NextStage</p>
        </div>
      </div>
    </footer>
  );
};