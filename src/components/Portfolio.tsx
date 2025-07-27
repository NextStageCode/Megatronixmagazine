import React, { useState } from 'react';


export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Capinhas e Películas",
      category: "produtos",
      image: "https://i.ibb.co/q39CnCTq/Post-Instagram-Acess-rios-para-Celular-Branco-e-Laranja.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Modelos diversos de capinhas e películas com proteção, estilo e compatibilidade para várias marcas de celulares.",
      link: "#"
    },
    {
      title: "Fones de Ouvido",
      image: "https://images.pexels.com/photos/3756950/pexels-photo-3756950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Fones com e sem fio, ideais para curtir música com qualidade onde você estiver.",
    },
    {
      title: "Garrafinhas e Acessórios",
      category: "produtos",
      image: "https://i.ibb.co/1fMHXTV8/9f03484b95d235b4600bc15e30ab5827.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Garrafinhas térmicas, eletrônicos úteis para o dia a dia e acessórios modernos que facilitam sua rotina.",
      link: "#"
    },
    {
      title: "Carregadores e Cabos",
      category: "produtos",
      image: "https://images.pexels.com/photos/33061128/pexels-photo-33061128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Carregadores turbo, cabos resistentes e adaptadores para manter seus dispositivos sempre prontos.",
      link: "#"
    },
    {
      title: "Caixas de Som",
      category: "produtos",
      image: "https://i.ibb.co/99ShMnq6/2017-08-22-boombox-home-jbl.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Caixas de som portáteis e com bluetooth, perfeitas para levar o som a qualquer lugar.",
      link: "#"
    },
    {
      title: "Smartwatches e Eletrônicos Inteligentes",
      category: "produtos",
      image: "https://images.pexels.com/photos/5081424/pexels-photo-5081424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Relógios inteligentes, gadgets modernos e produtos que conectam você ao futuro.",
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nossos Produtos</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tudo o que você precisa em tecnologia e praticidade, em um só lugar.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
