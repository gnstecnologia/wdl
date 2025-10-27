import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "O Evento", path: "/o-evento" },
    { name: "Curadoria", path: "/curadoria" },
    { name: "Inscrição", path: "/inscricao" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold text-foreground">
              WDL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-sans text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(item.path) ? "text-secondary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="bg-secondary hover:bg-secondary/90">
              <Link to="/inscricao">Garanta Sua Vaga</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block font-sans text-sm font-medium transition-colors hover:text-secondary ${
                  isActive(item.path) ? "text-secondary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" size="sm" className="w-full bg-secondary hover:bg-secondary/90">
              <Link to="/inscricao" onClick={() => setIsMenuOpen(false)}>
                Garanta Sua Vaga
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
