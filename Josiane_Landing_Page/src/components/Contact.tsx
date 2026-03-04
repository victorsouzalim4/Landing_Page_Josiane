import { Car, Phone, Instagram, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { celular } from "@/info";

const contactInfo = [
  {
    icon: Car,
    title: "Atendimento",
    content: "A domicílio",
    subtitle: "Belo Horizonte e região",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(31) 99750-8668",
    subtitle: "WhatsApp disponível",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@josycsouza",
    subtitle: "Siga-nos",
    link: "https://www.instagram.com/_josycsouza/",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg a Sex: 8h às 19h",
    subtitle: "Sábado: 8h às 12h",
  },
];

export function Contact() {
  const whatsappLink = `https://wa.me/${celular}?text=Olá! Gostaria de agendar um atendimento a domicílio.`;

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Agende seu Atendimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leve o cuidado profissional para o conforto da sua casa. 
            Entre em contato para consultar disponibilidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border/50 rounded-xl overflow-hidden shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-0.5">
                        {item.title}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-lg text-foreground hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="font-semibold text-lg text-foreground">
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

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-3 rounded-xl shadow-soft px-8 py-6 text-lg"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Solicitar Agendamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}