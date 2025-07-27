import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Desde 2018<br></br> conectando pessoas com tecnologia e soluções inteligentes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Na Megatronix, você encontra uma ampla variedade de acessórios e eletrônicos com qualidade e confiança.<br></br>
              Também atuamos com vitrines parceiras em comércios de diversos segmentos, locação de som para festas e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-500 transition-all hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-full bg-blue-100 dark:bg-blue-900/50 rounded-lg absolute -top-3 -right-3 z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Equipe de desenvolvimento trabalhando" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};