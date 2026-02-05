import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-physio.jpg";

const benefits = [
  "Avaliação Gratuita",
  "Ambiente Climatizado",
];

export function Hero() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.";

  return (
    <section id="inicio" className="bg-gradient-hero overflow-hidden">
      <div className="container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Recupere seu movimento e{" "}
              <span className="text-gradient">viva sem dor.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Transformando a dor em movimento e o movimento em liberdade para a sua melhor versão.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-xl shadow-soft text-base px-8"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Agendar Avaliação
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl text-base px-8 border-2"
                asChild
              >
                <a href="#sobre">Conhecer a Dra.</a>
              </Button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-elevated">
                <img
                  src={heroImage}
                  alt="Dra. Josiane - Fisioterapeuta realizando tratamento"
                  className="w-full max-w-md lg:max-w-lg object-cover aspect-[4/5]"
                />
                {/* Decorative Frame */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-primary/40 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-primary/40 rounded-bl-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
