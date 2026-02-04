import { Award, Heart, Users, Clock } from "lucide-react";
import profilePic from "@/assets/profilePic.jpeg"


const stats = [
  { icon: Clock, label: "Anos de Experiência", value: String(new Date().getFullYear() - 2020) },
  { icon: Users, label: "Pacientes Atendidos", value: "1000+" },
  { icon: Award, label: "Especialização", value: "Tratamento da Dor" },
  { icon: Heart, label: "Satisfação", value: "98%" },
];

export function About() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent rounded-3xl transform -rotate-3" />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={profilePic}
                alt="Dra. Josiane - Fisioterapeuta"
                className="w-full aspect-square object-cover object-top"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-elevated border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">CREFITO</p>
                  <p className="text-sm text-muted-foreground">
                    Profissional Certificada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              Sobre a Profissional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dra. Josiane Souza
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou fisioterapeuta especializada no tratamento da dor, com atuação
              focada em terapias manuais avançadas, reabilitação funcional e
              recuperação do movimento.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Meu trabalho é direcionado a pessoas que já tentaram outros
              tratamentos, convivem com dor crônica ou limitações físicas e
              buscam alívio real, funcional e duradouro. Atendo de forma
              individualizada, com escuta ativa, avaliação criteriosa e técnicas
              baseadas em evidência científica.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
