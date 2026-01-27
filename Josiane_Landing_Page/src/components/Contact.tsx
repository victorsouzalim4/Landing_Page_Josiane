import { MapPin, Phone, Instagram, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua das Flores, 123 - Sala 45",
    subtitle: "Belo Horizonte - MG",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(31) 99999-9999",
    subtitle: "WhatsApp disponível",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@dra.josianesoares",
    subtitle: "Siga-nos",
    link: "https://instagram.com/dra.josianesoares",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg a Sex: 8h às 19h",
    subtitle: "Sábado: 8h às 12h",
  },
];

export function Contact() {
  const whatsappLink = "https://wa.me/5531999999999?text=Olá! Gostaria de agendar uma consulta.";

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Agende sua consulta ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="bg-card border-border/50 rounded-xl overflow-hidden"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {item.title}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground">
                            {item.content}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-2 rounded-xl shadow-soft"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-card bg-muted h-[300px] lg:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8888147252!2d-43.9386!3d-19.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzAwLjEiUyA0M8KwNTYnMTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da clínica"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
