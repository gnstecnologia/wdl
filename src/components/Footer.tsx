import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">WDL</h3>
            <p className="font-sans text-sm text-primary-foreground/80">
              O congresso pioneiro de destination wedding em Portugal.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Navegação</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="font-sans text-sm hover:text-secondary transition-colors">
                Home
              </Link>
              <Link to="/o-evento" className="font-sans text-sm hover:text-secondary transition-colors">
                O Evento
              </Link>
              <Link to="/curadoria" className="font-sans text-sm hover:text-secondary transition-colors">
                Curadoria
              </Link>
              <Link to="/inscricao" className="font-sans text-sm hover:text-secondary transition-colors">
                Inscrição
              </Link>
              <Link to="/contato" className="font-sans text-sm hover:text-secondary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <a
                href="mailto:weddingdestinationlab@gmail.com"
                className="font-sans text-sm flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail size={16} />
                weddingdestinationlab@gmail.com
              </a>
              <a
                href="https://wa.me/5521977432356"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone size={16} />
                +55 21 97743-2356
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/manoelacesar_weddings"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/ColherdeChaNoivas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="font-sans text-sm text-center text-primary-foreground/60">
            © {new Date().getFullYear()} Wedding Destination Lab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
