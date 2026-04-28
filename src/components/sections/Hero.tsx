import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import brainImage from "@/assets/brain-fragments.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute top-20 -right-20 h-72 w-72 rounded-full bg-lilac/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-aqua/20 blur-3xl" aria-hidden />

      <div className="container relative mx-auto grid min-h-[92vh] items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div className="space-y-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-lilac/40 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-lilac-deep backdrop-blur">
            Studio Frammenti · Psicologa per la maternità
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Diventare madre non dovrebbe
            <span className="block bg-gradient-to-r from-primary via-lilac-deep to-aqua-deep bg-clip-text text-transparent">
              farti sentire persa.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Supporto psicologico sartoriale per donne in gravidanza e in maternità.
            Niente protocolli standard: una guida concreta, umana e su misura per te.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <Button asChild variant="hero" size="xl">
              <a href="#prenotazione">
                <Calendar /> Prenota un colloquio
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle /> Scrivimi su WhatsApp
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Primo colloquio conoscitivo · 50€ · in studio o online
          </p>
        </div>

        <div className="relative flex items-center justify-center animate-fade-in">
          <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-gradient-soft blur-2xl opacity-70" aria-hidden />
          <img
            src={brainImage}
            alt="Illustrazione Studio Frammenti — psicologia per la maternità"
            width={520}
            height={520}
            className="relative w-full max-w-md animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
