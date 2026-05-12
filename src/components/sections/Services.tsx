import { Button } from "@/components/ui/button";
import { Baby, Wind, HeartHandshake, Brain, Sparkles, Utensils } from "lucide-react";
import maternita from "@/assets/maternita.jpg";
import ansia from "@/assets/ansia.jpg";
import autostima from "@/assets/autostima ed emozioni.jpg";
import disturbiNeurosviluppo from "@/assets/disturbi del neurosviluppo.jpg";
import traumiStress from "@/assets/traumi e stress.jpg";
import disturbiAlimentari from "@/assets/disturbi alimentari.jpg";

const services = [
  {
    icon: Baby,
    title: "Percorso Maternità",
    desc: "Un percorso dedicato che ti accompagna dalla gravidanza al post parto: incontri individuali, supporto emotivo e strumenti pratici per vivere ogni fase con consapevolezza.",
    img: maternita,
  },
  {
    icon: Wind,
    title: "Ansia, panico, depressione",
    desc: "Strumenti concreti per gestire emozioni intense, anche pre e post parto.",
    img: ansia,
  },
  {
    icon: HeartHandshake,
    title: "Autostima ed emozioni",
    desc: "Tornare a riconoscerti, fidarti di te e ricostruire un dialogo gentile con te stessa.",
    img: autostima,
  },
  {
    icon: Brain,
    title: "Disturbi del neurosviluppo",
    desc: "Valutazione e supporto per genitori che affrontano difficoltà evolutive nei figli.",
    img: disturbiNeurosviluppo,
  },
  {
    icon: Sparkles,
    title: "Traumi e stress",
    desc: "Spazio sicuro per elaborare ferite, blocchi e sovraccarichi emotivi.",
    img: traumiStress,
  },
  {
    icon: Utensils,
    title: "Disturbi alimentari",
    desc: "Lavoro sul rapporto con il corpo, il cibo e l'immagine di sé.",
    img: disturbiAlimentari,
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Servizi
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Come posso aiutarti
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Consulenze 1:1 costruite intorno a te. In studio o online.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, img }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-smooth hover:shadow-card hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>

              <div className="p-5 sm:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lilac-soft text-lilac-deep transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button asChild variant="hero" size="lg">
            <a href="#prenotazione">Prenota il primo colloquio · 50€</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
