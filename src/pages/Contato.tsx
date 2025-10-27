import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-curadoria.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Wedding Destination Lab - Contato"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Conecte-se com o WDL
          </h1>
          <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto">
            Estamos aqui para responder suas dúvidas e ajudá-lo a fazer parte do maior congresso 
            de destination wedding em Portugal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Envie Sua Mensagem</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        rows={6}
                        required
                        value={formData.mensagem}
                        onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                        placeholder="Como podemos ajudá-lo?"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato e Redes Sociais */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-8">Fale Diretamente Conosco</h2>
                
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-2">E-mail</h3>
                        <a
                          href="mailto:weddingdestinationlab@gmail.com"
                          className="font-sans text-foreground/80 hover:text-secondary transition-colors"
                        >
                          weddingdestinationlab@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-2">WhatsApp</h3>
                        <a
                          href="https://wa.me/5521977432356"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-foreground/80 hover:text-secondary transition-colors"
                        >
                          +55 21 97743-2356
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold mb-8">Siga-nos nas Redes Sociais</h2>
                
                <Card>
                  <CardContent className="pt-6">
                    <p className="font-sans text-foreground/80 mb-6">
                      Acompanhe as novidades, bastidores e conteúdos exclusivos sobre o mundo dos destination weddings.
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href="https://instagram.com/manoelacesar_weddings"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Instagram className="w-6 h-6 text-secondary" />
                        <div>
                          <p className="font-display font-semibold">Instagram</p>
                          <p className="font-sans text-sm text-foreground/60">@manoelacesar_weddings</p>
                        </div>
                      </a>

                      <a
                        href="https://facebook.com/ColherdeChaNoivas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Facebook className="w-6 h-6 text-secondary" />
                        <div>
                          <p className="font-display font-semibold">Facebook</p>
                          <p className="font-sans text-sm text-foreground/60">/ColherdeChaNoivas</p>
                        </div>
                      </a>

                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Linkedin className="w-6 h-6 text-secondary" />
                        <div>
                          <p className="font-display font-semibold">LinkedIn</p>
                          <p className="font-sans text-sm text-foreground/60">Wedding Destination Lab</p>
                        </div>
                      </a>

                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Youtube className="w-6 h-6 text-secondary" />
                        <div>
                          <p className="font-display font-semibold">YouTube</p>
                          <p className="font-sans text-sm text-foreground/60">Wedding Destination Lab</p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
