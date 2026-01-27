import { Award, Heart, Users, Clock } from "lucide-react";
import portraitImage from "@/assets/physio-portrait.jpg";

const stats = [
  { icon: Clock, label: "Anos de Experiência", value: "10+" },
  { icon: Users, label: "Pacientes Atendidos", value: "2000+" },
  { icon: Award, label: "Especialização", value: "Ortopedia" },
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
                src={portraitImage}
                alt="Dra. Josiane - Fisioterapeuta"
                className="w-full aspect-square object-cover"
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
                  <p className="text-sm text-muted-foreground">Profissional Certificada</p>
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
              Dra. Josiane Soares
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de 10 anos de experiência, sou especializada em fisioterapia 
              ortopédica e traumatológica. Minha missão é proporcionar tratamentos 
              personalizados que não apenas aliviam a dor, mas restauram a qualidade 
              de vida dos meus pacientes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Formada pela Universidade Federal de Minas Gerais, com especialização 
              em RPG e Pilates Clínico. Busco constantemente atualização profissional 
              para oferecer os melhores tratamentos disponíveis.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
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
