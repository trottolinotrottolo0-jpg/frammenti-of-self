import { Button } from "@/components/ui/button";
import { Baby, Wind, HeartHandshake, Brain, Sparkles, Utensils } from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Sostegno alla maternità",
    desc: "Gravidanza, post parto, genitorialità: ti accompagno nel passaggio più trasformativo della tua vita.",
  },
  {
    icon: Wind,
    title: "Ansia, panico, depressione",
    desc: "Strumenti concreti per gestire emozioni intense, anche pre e post parto.",
  },
  {
    icon: HeartHandshake,
    title: "Autostima ed emozioni",
    desc: "Tornare a riconoscerti, fidarti di te e ricostruire un dialogo gentile con te stessa.",
  },
  {
    icon: Brain,
    title: "Disturbi del neurosviluppo",
    desc: "Valutazione e supporto per genitori che affrontano difficoltà evolutive nei figli.",
  },
  {
    icon: Sparkles,
    title: "Traumi e stress",
    desc: "Spazio sicuro per elaborare ferite, blocchi e sovraccarichi emotivi.",
  },
  {
    icon: Utensils,
    title: "Disturbi alimentari",
    desc: "Lavoro sul rapporto con il corpo, il cibo e l'immagine di sé.",
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
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-3xl bg-card p-5 shadow-soft transition-smooth hover:shadow-card hover:-translate-y-1 sm:p-8"
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
            <a href="#prenotazione">Prenota il primo colloquio · 50€</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
