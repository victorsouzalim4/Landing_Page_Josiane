import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappLink = "https://wa.me/5531999999999?text=Olá! Gostaria de agendar uma consulta.";

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-elevated bg-whatsapp hover:bg-whatsapp-hover p-0 animate-pulse-soft"
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </Button>
  );
}
