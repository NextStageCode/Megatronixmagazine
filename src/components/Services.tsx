import { Check, Store, Speaker, Wrench, TabletSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: 'Conserto de Celulares',
      description: 'Oferecemos consertos rápidos e de qualidade para diversos modelos de celulares, garantindo funcionalidade, segurança e atendimento especializado.',
      features: [
        'Troca de tela e bateria com peças de qualidade',
        'Reparo de sistema e problemas de software',
        'Manutenção preventiva e limpeza interna',
        'Atendimento ágil com garantia de serviço'
      ]
    },
    {
      icon: <Store className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: 'Vitrine Parceira',
      description: 'Leve nossos produtos até o seu estabelecimento e aumente seus lucros. Colocamos vitrines com acessórios e eletrônicos direto na sua loja, sem complicação.',
      features: [
        'Instalação de vitrine personalizada no seu espaço',
        'Produtos atualizados com alta procura',
        'Ganho por comissão em cada venda',
        'Sem custos para o estabelecimento parceiro'
      ]
    },
    {
      icon: <TabletSmartphone className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: 'Acessórios e Eletrônicos',
      description: 'Alugue equipamentos de som potentes e de qualidade para sua festa, evento ou confraternização. Cuidamos da entrega, instalação e retirada.',
      features: [
        'Capinhas, películas, carregadores e fones de ouvido',
        'Caixas de som, smartwatches e eletrônicos modernos',
        'Uma variedade de acessórios, como garrafinhas, chaveiros e muito mais.',
        'Produtos testados e de alta durabilidade'
      ]
    },
    {
      icon: <Speaker className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: 'Locação de Som para Festas',
      description: 'Alugue equipamentos de som potentes e de qualidade para sua festa, evento ou confraternização. Cuidamos da entrega, instalação e retirada.',
      features: [
        'Caixas de som com alta potência e qualidade sonora',
        'Ideal para festas, aniversários e eventos em geral',
        'Entrega e retirada no local',
        'Fácil de usar e com suporte técnico, se necessário'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Oferecemos mais do que produtos, entregamos soluções completas para você e para potencializar o seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>{service.icon}</div>

                {service.title === 'Vitrine Parceira' && (
                  <a
                    href="https://wa.me/5515997731369?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20como%20ter%20a%20vitrine%20de%20produtos%20no%20meu%20com%C3%A9rcio." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    Vire Parceiro
                  </a>
                )}

               {service.title === 'Locação de Som para Festas' && (
                  <a
                    href="https://wa.me/5515997731369?text=Ol%C3%A1!%20Gostaria%20de%20informações%20sobre%20a%20locação%20de%20som." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    Contrate já
                  </a>
                )}

              </div>

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};