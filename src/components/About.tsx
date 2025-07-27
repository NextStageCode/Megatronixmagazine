
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-stretch md:space-x-10">
          
          {/* Coluna da Esquerda com Imagens */}
          <motion.div 
            className="md:w-1/2 w-full flex flex-col space-y-6 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Imagem 1 - sempre visível */}
            <div className="w-40 mx-auto relative block">
                <div className="w-full h-full bg-white/20 dark:bg-white/10 rounded-lg absolute -top-3 -right-3 z-0"></div>
                <img 
                    src="https://i.ibb.co/G4kbR94W/Imagem-do-Whats-App-de-2025-07-23-s-10-37-12-dd27853a.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Dono da empresa"
                    className="w-full h-auto rounded-lg shadow-lg relative z-10"
                />
            </div>
            <div className="mt-4 text-center">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Michel Camargo</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Empresário - Dono da Megatronix<br></br><br></br><br></br></p>
            </div>

            {/* Imagem 2 - só desktop */}

            <div className="relative hidden md:block w-full max-w-[500px] mx-auto">
              <div className="w-full h-full bg-white/20 dark:bg-white/10 rounded-lg absolute -top-3 -right-3 z-0"></div>
              <img 
                src="https://i.ibb.co/MDSP9rkt/Chat-GPT-Image-23-de-jul-de-2025-09-52-29.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Loja ou equipe"
                className="w-full h-auto max-w-[500px] rounded-lg shadow-lg relative z-10"
              />
            </div>
            <div className="mt-4 text-center relative hidden md:block">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">Nosso Escritório</p>
            </div>

            
          </motion.div>

          {/* Coluna da Direita com Texto */}
          <motion.div 
            className="md:w-1/2 w-full flex flex-col justify-center h-full text-gray-900 dark:text-white"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A história por trás do sucesso 
            </h1>
            <p className="text-lg mb-8 text-justify">
              A Megatronix nasceu em abril de 2018, quando seu fundador deu início à jornada empreendedora vendendo carregadores de celular, de porta em porta, nas ruas e bairros de diversas cidades. Com esforço e determinação, percorreu mais de 160 cidades, conquistando uma ampla base de clientes e formando, aos poucos, um pequeno estoque de produtos.<br /><br />
              Esse movimento marcou o início da primeira loja física, na cidade de Mairinque/SP, concretizando um sonho que começou com vendas diretas nas calçadas.<br /><br />
              Atualmente, a Megatronix Magazine expandiu sua atuação, trabalhando também com consignação de produtos em diversos tipos de estabelecimentos, como postos de gasolina, supermercados e lojas de conveniência. Sempre prezando por qualidade, confiança e garantia, a marca continua conectando pessoas com soluções tecnológicas acessíveis e eficientes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

