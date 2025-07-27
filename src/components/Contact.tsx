import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quer saber mais sobre nossos produtos, serviços ou parcerias?<br />
            Estamos aqui para ajudar você!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.659711490175!2d-47.18758073808175!3d-23.544738552624995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf73c7ff6df119%3A0x975d630a6bb36e93!2sMegatronix%20Magazine!5e0!3m2!1spt-BR!2sbr!4v1753232924026!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Botão "Nos Avalie" */}
            <div className="mt-4 flex justify-center">
              <a
                href="https://g.page/r/CZNus2sKY12XEBI/review" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
              >
                ⭐ Nos Avalie
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div>
                  <p className="font-medium text-gray-700 mb-1">Email</p>
                  <a
                    href="mailto:megatronixmagazine@gmail.com?subject=Solicitação%20de%20Informações&body=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos%20e%20serviços."
                    className="text-blue-600 hover:underline"
                  >
                    megatronixmagazine@gmail.com
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-700 mb-1">Locação de Som ou Vitrine</p>
                  <a
                    href="https://wa.me/5515997731369?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +55 (15) 99773-1369
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-700 mb-1">Telefone</p>
                  <a
                    href="https://wa.me/551147083356?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos%20e%20servi%C3%A7os."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (11) 4708-3356
                  </a>
                </div>

                <div>
                  <p className="font-medium text-gray-700 mb-1">Endereço</p>
                  <a
                    href="https://www.google.com/search?q=endere%C3%A7o+megatronix"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-gray-600">
                      R. Monteiro Lobato, 300 - Centro, Mairinque - SP, 18120-000
                    </p>
                  </a>
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/551147083356"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-medium rounded-lg transition-all hover:bg-green-600 w-full"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Fale pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
