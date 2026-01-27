import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Paciente há 2 anos",
    content:
      "Depois de meses com dor nas costas, finalmente encontrei alívio com a Dra. Josiane. Seu tratamento personalizado mudou minha qualidade de vida.",
    rating: 5,
  },
  {
    name: "João Oliveira",
    role: "Paciente há 1 ano",
    content:
      "Excelente profissional! A drenagem linfática ajudou muito na minha recuperação pós-cirúrgica. Recomendo de olhos fechados.",
    rating: 5,
  },  
  {
    name: "Ana Paula Lima",
    role: "Paciente há 6 meses",
    content:
      "Ambiente acolhedor e atendimento humanizado. A Dra. Josiane realmente se importa com seus pacientes. Resultados incríveis!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos pacientes é nosso maior objetivo.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 rounded-2xl overflow-hidden card-hover"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-semibold text-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
