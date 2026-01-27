import { Activity, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold">Dra. Josiane Fisioterapeuta</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-background/60 flex items-center gap-1">
            © {currentYear} Todos os direitos reservados. Feito com
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
}
