import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Users, Star, Utensils, Plane, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-evento.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OEvento = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Evento de networking WDL"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl mb-6 animate-fade-in-up">
            A Imersão de Luxo que Conecta
          </h1>
          <p className="font-display text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            O Mercado Global de Casamentos
          </p>
        </div>
      </section>

      {/* Local */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in-up">
            Pestana Palace Hotel
          </h2>
          <p className="font-display text-xl text-center text-muted-foreground mb-12 animate-fade-in-up animation-delay-200">
            O Cenário da Sua Próxima Conexão
          </p>
          
          <div className="max-w-4xl mx-auto">
            <img className="w-full h-64 md:h-80 object-cover rounded-lg mb-6 img-elegant animate-fade-in-up animation-delay-300" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/642958316.jpg?k=7ea4635c8e6785f1e97bd33f8af6e1ac72100875e300bc70669b67147134af02&o=" alt="Pestana Palace Hotel Lisboa" loading="lazy" />
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-12 h-12 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-4">Lisboa, Portugal</h3>
                    <p className="font-sans text-foreground/80 leading-relaxed">
                      Localizado em Lisboa, o Pestana Palace Hotel é um marco de luxo e sofisticação. 
                      Com jardins majestosos, arquitetura histórica e serviço de excelência, 
                      é o cenário perfeito para um evento que une tradição e modernidade. 
                      Realizar o WDL neste espaço reforça o compromisso com a qualidade e o prestígio 
                      que nossos participantes merecem.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <p className="font-sans text-sm font-medium">5 Estrelas</p>
                  </div>
                  <div className="text-center">
                    <Utensils className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <p className="font-sans text-sm font-medium">Gastronomia</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <p className="font-sans text-sm font-medium">Jardins</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <p className="font-sans text-sm font-medium">História</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mecanismo Único */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">
              A Rodada de Negócios WDL
            </h2>
            <p className="font-display text-xl text-center text-muted-foreground mb-12">
              Otimização de Tempo e Resultados
            </p>
            
            <Card className="bg-secondary/5">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-display font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">Cada expositor tem uma mesa</h3>
                      <p className="font-sans text-foreground/80">
                        Os fornecedores ficam posicionados em suas mesas, preparados para apresentar seus serviços.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-display font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">Buyers rotacionam por todas as mesas</h3>
                      <p className="font-sans text-foreground/80">
                        Cada cerimonialista senta à mesa por 10 minutos, conhecendo o fornecedor e estabelecendo conexões.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-display font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold mb-2">30 expositores + 30 cerimonialistas</h3>
                      <p className="font-sans text-foreground/80">
                        Em um único dia, você tem acesso a 30 potenciais parceiros de negócio, de forma organizada e eficiente.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programação */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            O Que Esperar: Congresso e Tour Técnico
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="font-display text-2xl font-bold mb-4">Participação como Buyer/Expositor</h3>
                <p className="font-sans text-foreground/80 mb-4">
                  Participe da exclusiva Rodada de Negócios B2B, onde expositores e compradores se conectam 
                  de forma otimizada e estratégica.
                </p>
                <ul className="font-sans text-foreground/80 space-y-2">
                  <li>• Meetings de 10 minutos com cada expositor</li>
                  <li>• Acesso a 30+ fornecedores selecionados</li>
                  <li>• Networking qualificado e direcionado</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Star className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="font-display text-2xl font-bold mb-4">Soluções Inclusas</h3>
                <p className="font-sans text-foreground/80 mb-4">
                  Uma experiência completa de imersão em Portugal, com todos os detalhes cuidados para você 
                  focar no que importa: fazer negócios.
                </p>
                <ul className="font-sans text-foreground/80 space-y-2">
                  <li className="flex items-center gap-2"><Star size={16} /> Hospedagem 5 estrelas</li>
                  <li className="flex items-center gap-2"><Utensils size={16} /> Todas as refeições inclusas</li>
                  <li className="flex items-center gap-2"><Plane size={16} /> Transfers aeroporto-hotel</li>
                  <li className="flex items-center gap-2"><MapPin size={16} /> Visitas técnicas guiadas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bastidores e Experiências (mosaico) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
            Bastidores e Experiências
          </h2>
          <p className="font-display text-xl text-center text-muted-foreground mb-12">
            O que acontece além do palco principal
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img className="w-full h-56 md:h-64 object-cover rounded-lg img-elegant animate-fade-in-up" src="https://storage.alboom.ninja/sites/53124/media/feb7a38c-fdda-490b-9329-822d6e22238a_fea6ff5b985d.JPG?t=1627156983" alt="Bastidores do evento" loading="lazy" />
            <img className="w-full h-56 md:h-64 object-cover rounded-lg img-elegant animate-fade-in-up" src="https://alfred.alboompro.com/resize/width/1280/type/jpeg/url/storage.alboom.ninja/sites/53124/media/9367fe2c-0cf6-4307-a9c8-096ee3778d15_edf75c8229ae.JPG?t=1627155415" alt="Experiências do evento" loading="lazy" />
            <img className="w-full h-56 md:h-64 object-cover rounded-lg img-elegant animate-fade-in-up" src="https://alfred.alboompro.com/resize/width/1280/type/jpeg/url/storage.alboom.ninja/sites/53124/media/img_1278_9a263663388e.JPG?t=1627156062" alt="Bastidores e networking" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            O Resultado da Sua Participação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Convivência de uma semana</h3>
              <p className="font-sans">
                Com quem realmente movimenta o mercado internacional de casamentos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Curadoria Manoela Cesar</h3>
              <p className="font-sans">
                15 anos de expertise garantindo networking qualificado e ético.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Único evento apoiado</h3>
              <p className="font-sans">
                Pelo governo português através do Turismo de Portugal.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-secondary font-sans text-lg px-8 py-6 border-2 border-green shadow-white hover:shadow-green transition-all duration-500 hover-lift">
              <Link to="/inscricao" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Garanta Sua Vaga
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OEvento;
