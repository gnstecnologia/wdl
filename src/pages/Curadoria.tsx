import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Heart, Leaf, Sparkles, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-curadoria.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Curadoria = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Manoela Cesar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Manoela Cesar
          </h1>
          <p className="font-display text-2xl md:text-3xl mb-4 text-accent">
            A Curadora que Redefine o Mercado
          </p>
          <p className="font-display text-xl italic">
            "Ritualizar é preciso!"
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-center mb-8">
              Jornalismo, Etiqueta e 15 Anos de Expertise
            </h2>
            
            <Card>
              <CardContent className="pt-8">
                <div className="space-y-6 font-sans text-lg text-foreground/80 leading-relaxed">
                  <p>
                    <strong className="text-foreground">Manoela Cesar</strong> é jornalista formada em Cinema e Jornalismo pela 
                    Universidade Federal Fluminense (UFF), com especialização em Etiqueta pela British School of Etiquette Brasil. 
                    Sua trajetória no mercado de casamentos começou em 2012, quando fundou a <strong className="text-foreground">Colher de Chá Noivas</strong>, 
                    marca que se tornou referência em curadoria de fornecedores e experiências de luxo.
                  </p>
                  
                  <p>
                    Com colaborações publicadas em veículos de prestígio como <strong className="text-foreground">Vogue</strong>, 
                    <strong className="text-foreground"> O Globo</strong> e <strong className="text-foreground">Harper's Bazaar</strong>, 
                    Manoela consolidou sua autoridade no segmento de casamentos de alto padrão. Seu trabalho é pautado pela 
                    ética, sustentabilidade e pelo respeito aos rituais ancestrais que tornam cada celebração única.
                  </p>
                  
                  <p>
                    Como fundadora e curadora do <strong className="text-foreground">Wedding Destination Lab</strong>, 
                    Manoela aplica sua visão de mercado para conectar profissionais de excelência do Brasil e Portugal, 
                    promovendo um networking qualificado e sustentável. O WDL é fruto de sua expertise e compromisso com 
                    o crescimento ético da indústria de destination weddings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Autoridade Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            Evidências que Falam por Si
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-display text-3xl font-bold mb-2">1.200+</p>
                <p className="font-sans text-sm text-foreground/80">Empresas conectadas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-display text-3xl font-bold mb-2">15+</p>
                <p className="font-sans text-sm text-foreground/80">Anos de mercado</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-display text-3xl font-bold mb-2">Oficial</p>
                <p className="font-sans text-sm text-foreground/80">Parceiro Turismo de Portugal</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-display text-3xl font-bold mb-2">300+</p>
                <p className="font-sans text-sm text-foreground/80">Casamentos realizados</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            O Propósito que Move o WDL
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="w-16 h-16 mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Ancestralidade</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Valorizamos os rituais e tradições que tornam cada casamento uma celebração única e significativa. 
                Conectamos o passado ao presente através de experiências autênticas.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Sustentabilidade</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Promovemos práticas éticas e sustentáveis no mercado de casamentos, 
                incentivando escolhas conscientes que respeitam o meio ambiente e as comunidades locais.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Beleza com Propósito</h3>
              <p className="font-sans text-foreground/80 leading-relaxed">
                Acreditamos que a beleza deve ter significado. Cada detalhe é pensado para criar 
                experiências memoráveis que transcendem o estético e tocam o coração.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Para Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              O Perfil do Profissional WDL
            </h2>
            
            <Card className="bg-white border-2 border-green shadow-white hover:shadow-green transition-all duration-300">
              <CardContent className="pt-8">
                <p className="font-sans text-lg leading-relaxed mb-6 text-foreground">
                  O Wedding Destination Lab é ideal para <strong>profissionais de casamento bem posicionados</strong> que 
                  buscam investir em seu crescimento e expandir sua atuação internacional. São profissionais que 
                  entendem o valor do networking qualificado e estão atentos às questões atuais do mercado, 
                  como <strong>sustentabilidade</strong>, <strong>gestão de marcas</strong> e <strong>inovação</strong>.
                </p>
                
                <p className="font-sans text-lg leading-relaxed text-foreground">
                  Se você valoriza a curadoria ética, busca conexões verdadeiras e deseja fazer parte de uma 
                  comunidade comprometida com a excelência, o WDL é o seu lugar.
                </p>
              </CardContent>
            </Card>

            <div className="mt-12">
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-secondary font-sans text-lg px-8 py-6 border-2 border-green shadow-white hover:shadow-green transition-all duration-300">
                <Link to="/inscricao" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Faça Parte do WDL
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Curadoria;
