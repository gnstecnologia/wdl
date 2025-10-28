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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            A Imersão de Luxo que Conecta
          </h1>
          <p className="font-display text-xl md:text-2xl max-w-3xl mx-auto">
            O Mercado Global de Casamentos
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-sans text-lg text-center text-foreground/80 leading-relaxed">
            O Wedding Destination Lab é mais do que um congresso, é uma experiência completa que une 
            networking qualitativo, capacitação de alto nível e vivência internacional em Portugal. 
            Criado para profissionais que desejam expandir seus negócios no mercado de destination wedding, 
            o WDL oferece acesso direto aos principais players do mercado brasileiro e português.
          </p>
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

      {/* Local */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8">
            Pestana Palace Hotel
          </h2>
          <p className="font-display text-xl text-center text-muted-foreground mb-12">
            O Cenário da Sua Próxima Conexão
          </p>
          
          <div className="max-w-4xl mx-auto">
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
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-secondary font-sans text-lg px-8 py-6 border-2 border-green shadow-white hover:shadow-green transition-all duration-300">
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
