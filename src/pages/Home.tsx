import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pestana Palace Hotel Lisboa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6" style={{textShadow: '3px 3px 12px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.7)'}}>
            Wedding Destination Lab
          </h1>
          <p className="font-display text-2xl md:text-3xl mb-4 text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
            O Futuro Ancestral do Mercado de Casamentos
          </p>
          <p className="font-sans text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)'}}>
            Congresso de Destination Wedding com foco em networking internacional, apoiado pelo Turismo de Portugal.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans text-lg px-8 py-6">
            <Link to="/inscricao" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Garanta sua Vaga para 2026
            </Link>
          </Button>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Pioneirismo e Confiança
          </h2>
          <p className="font-display text-xl text-center text-muted-foreground mb-12">
            Desde 2016 em Portugal
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-green-light shadow-green-soft hover:shadow-green transition-all duration-300">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-display text-3xl font-bold mb-2">1.200+</p>
                <p className="font-sans text-foreground/80">Empresas conectadas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-green-light shadow-green-soft hover:shadow-green transition-all duration-300">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-display text-3xl font-bold mb-2">300+</p>
                <p className="font-sans text-foreground/80">Casamentos realizados de brasileiros em Portugal</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-green-light shadow-green-soft hover:shadow-green transition-all duration-300">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-display text-3xl font-bold mb-2">Oficial</p>
                <p className="font-sans text-foreground/80">Apoio do Turismo de Portugal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para Quem Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            Seu Próximo Nível Começa Aqui
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-light shadow-green-soft hover:shadow-green transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-display text-2xl font-bold mb-4">Cerimonialistas</h3>
                <p className="font-sans text-foreground/80 mb-6">
                  Posicionamento e expansão internacional para profissionais que buscam crescer no mercado de destination weddings.
                </p>
                <Button asChild variant="outline" className="w-full border-2 border-green text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-green-soft hover:shadow-green transition-all duration-300">
                  <Link to="/inscricao" className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Saiba Mais
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-light shadow-green-soft hover:shadow-green transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-display text-2xl font-bold mb-4">Hoteleiros e Agentes</h3>
                <p className="font-sans text-foreground/80 mb-6">
                  Exposição e negócios B2B com profissionais de alto nível do mercado de casamentos.
                </p>
                <Button asChild variant="outline" className="w-full border-2 border-green text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-green-soft hover:shadow-green transition-all duration-300">
                  <Link to="/inscricao" className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Saiba Mais
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-light shadow-green-soft hover:shadow-green transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-display text-2xl font-bold mb-4">Fornecedores</h3>
                <p className="font-sans text-foreground/80 mb-6">
                  Networking qualitativo com profissionais do Brasil e Portugal para expandir sua rede de contatos.
                </p>
                <Button asChild variant="outline" className="w-full border-2 border-green text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-green-soft hover:shadow-green transition-all duration-300">
                  <Link to="/inscricao" className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Saiba Mais
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            Por Que o WDL é Único?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Curadoria Ética</h3>
              <p className="font-sans text-foreground/80">
                Pela Manoela Cesar, com 15 anos de experiência no mercado de casamentos de luxo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Imersão de Luxo</h3>
              <p className="font-sans text-foreground/80">
                Hospedagem 5 estrelas no Pestana Palace, visitas técnicas e gastronomia portuguesa inclusa.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Método Exclusivo</h3>
              <p className="font-sans text-foreground/80">
                Rodada de Negócios B2B: mecanismo único que otimiza tempo e maximiza conexões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Próxima Edição Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Lisboa, 24 e 25 de Março de 2026
          </h2>
          <p className="font-display text-2xl mb-4">Pestana Palace Hotel</p>
          <p className="font-sans text-lg mb-8 max-w-3xl mx-auto">
            Uma experiência completa de networking, capacitação e viagem internacional para transformar seu negócio.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-secondary font-sans text-lg px-8 py-6 border-2 border-green shadow-white hover:shadow-green transition-all duration-300">
            <Link to="/o-evento">Conheça a Programação</Link>
          </Button>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Transforme Seu Negócio
          </h2>
          <p className="font-sans text-xl mb-8 max-w-2xl mx-auto">
            Garanta sua vaga no congresso mais importante do mercado de destination wedding.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans text-lg px-8 py-6 border-2 border-white shadow-green hover:shadow-white transition-all duration-300">
            <Link to="/inscricao" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Inscreva-se Agora
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
