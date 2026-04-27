import { Button } from "@/components/ui/button";
import { Wind, Sprout, Users, HeartHandshake, Footprints } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Ansia e stress",
    desc: "Ritrovare calma, respiro e gestione delle emozioni quotidiane.",
  },
  {
    icon: Sprout,
    title: "Crescita personale",
    desc: "Conoscersi a fondo per sbloccare nuove possibilità di vita.",
  },
  {
    icon: Users,
    title: "Relazioni",
    desc: "Migliorare i legami con sé stessi e con gli altri.",
  },
  {
    icon: HeartHandshake,
    title: "Supporto emotivo",
    desc: "Uno spazio sicuro nei momenti di transizione o difficoltà.",
  },
  {
    icon: Footprints,
    title: "Percorsi individuali",
    desc: "Accompagnamento personalizzato passo dopo passo.",
  },
];

const Services = () => {
  return (
    <section id="servizi" className="bg-gradient-soft py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Servizi
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Come posso aiutarti
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Ogni percorso è costruito intorno a te. Ecco le aree in cui possiamo lavorare insieme.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-3xl bg-card p-8 shadow-soft transition-smooth hover:shadow-card hover:-translate-y-1"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac-soft text-lilac-deep transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild variant="hero" size="lg">
            <a href="#prenotazione">Prenota ora</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
