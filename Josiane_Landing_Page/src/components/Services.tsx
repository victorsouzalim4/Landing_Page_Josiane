import { Hand, Droplets, Layers, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Hand,
    title: "Massagem Terapêutica",
    description:
      "Massagem terapêutica é amoa um tem coromanidade que ache a uaenunomento e anbranção gratuito.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Droplets,
    title: "Drenagem Linfática",
    description:
      "Drenagem linfática e sem consesentuatica linfática. Da que más pertrsorendo e preferênciar de condusto.",
    color: "bg-sage-100",
    iconColor: "text-sage-600",
  },
  {
    icon: Layers,
    title: "Liberação Miofascial",
    description:
      "Liberação Miofascial é sotuva embrane prototo comenha, inofous searcoma e comfortamento nu sita súsica.",
    color: "bg-accent",
    iconColor: "text-accent-foreground",
  },
];

export function Services() {
  return (
    <section id="tratamentos" className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Procedimentos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos tratamentos especializados para aliviar dores, melhorar a mobilidade 
            e restaurar sua qualidade de vida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card border-border/50 rounded-2xl overflow-hidden card-hover"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
