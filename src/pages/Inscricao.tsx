import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { DollarSign, Clock, TrendingUp, Award, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-inscricao.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Inscricao = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    whatsapp: "",
    email: "",
    tipoEmpresa: "",
    instagram: "",
    motivacao: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve com a proposta completa.",
    });
  };

  const handleMotivacaoChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      motivacao: checked 
        ? [...prev.motivacao, value]
        : prev.motivacao.filter(m => m !== value)
    }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Wedding Destination Lab - Inscrição"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-6xl mb-6">
            Garanta Sua Vaga
          </h1>
          <p className="font-display text-xl md:text-2xl max-w-3xl mx-auto">
            Na Próxima Edição do Wedding Destination Lab
          </p>
          <p className="font-sans text-lg mt-4">
            Lisboa, 24 e 25 de Março de 2026
          </p>
        </div>
      </section>

      {/* Quebrando Objeções */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            Quebrando as Barreiras para o Seu Crescimento
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <DollarSign className="text-secondary" />
                  <span className="font-display">Investimento Alto?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-foreground/80">
                  O valor reflete a qualidade: hospedagem 5 estrelas, todas as refeições, 
                  transfers, visitas técnicas e acesso a networking qualificado. O ROI vem através 
                  de conexões que geram negócios reais e duradouros.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="text-secondary" />
                  <span className="font-display">Já Conheço o Mercado?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-foreground/80">
                  Conhecer não adianta, precisa efetivamente fazer negócios. O WDL oferece 
                  o ambiente perfeito para transformar contatos em parcerias comerciais reais, 
                  com método exclusivo de rodada B2B.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="text-secondary" />
                  <span className="font-display">Falta de Tempo?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-foreground/80">
                  O formato B2B é desenhado para otimizar seu tempo: em 2 dias, você tem acesso 
                  a 30+ fornecedores de forma organizada e eficiente. É mais produtivo que meses 
                  tentando agendar reuniões individuais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="text-secondary" />
                  <span className="font-display">Retorno Efetivo?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-foreground/80">
                  Mais de 1.200 empresas já se conectaram através do WDL, gerando 300+ casamentos 
                  de brasileiros em Portugal. A prova social e o histórico de sucesso falam por si.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-center mb-4">
              Fale Conosco e Receba a Proposta Completa
            </h2>
            <p className="font-sans text-center text-foreground/80 mb-12">
              Preencha o formulário abaixo ou entre em contato diretamente via WhatsApp
            </p>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="sobrenome">Sobrenome *</Label>
                      <Input
                        id="sobrenome"
                        required
                        value={formData.sobrenome}
                        onChange={(e) => setFormData({...formData, sobrenome: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp com DDD *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="+55 21 99999-9999"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
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
                    <Label htmlFor="tipoEmpresa">Tipo de Empresa *</Label>
                    <Select value={formData.tipoEmpresa} onValueChange={(value) => setFormData({...formData, tipoEmpresa: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cerimonialista">Cerimonialista</SelectItem>
                        <SelectItem value="hotel">Hoteleiro</SelectItem>
                        <SelectItem value="turismo">Agente de Turismo</SelectItem>
                        <SelectItem value="fornecedor">Fornecedor de Casamento</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      placeholder="@seu_instagram"
                      value={formData.instagram}
                      onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>O que mais te motiva? (Múltipla escolha)</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="networking" 
                          onCheckedChange={(checked) => handleMotivacaoChange("networking", checked as boolean)}
                        />
                        <label htmlFor="networking" className="font-sans text-sm">
                          Networking
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="capacitacao"
                          onCheckedChange={(checked) => handleMotivacaoChange("capacitacao", checked as boolean)}
                        />
                        <label htmlFor="capacitacao" className="font-sans text-sm">
                          Capacitação
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="viagem"
                          onCheckedChange={(checked) => handleMotivacaoChange("viagem", checked as boolean)}
                        />
                        <label htmlFor="viagem" className="font-sans text-sm">
                          Viagem Internacional
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                    Enviar e Receber Proposta
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contato Direto */}
            <div className="mt-8 text-center">
              <p className="font-sans text-white mb-4">Ou entre em contato diretamente:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:weddingdestinationlab@gmail.com"
                  className="flex items-center justify-center gap-3 font-sans text-white hover:text-white/80 transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Mail size={16} className="text-secondary" />
                  </div>
                  weddingdestinationlab@gmail.com
                </a>
                <a
                  href="https://wa.me/5521977432356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 font-sans text-white hover:text-white/80 transition-colors"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-secondary" />
                  </div>
                  +55 21 97743-2356
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inscricao;
