import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import donnaStranaImage from "@/assets/DONNA STRANISSIMA.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const heroPills = ["Maternità", "Ansia & Traumi", "Autostima"];

const Hero = () => {
  return (
    <section className="hero-section relative">
      <div className="absolute -bottom-44 -left-20 h-[30rem] w-[30rem] rounded-full bg-aqua/25 blur-3xl" aria-hidden />

      <div className="container relative mx-auto grid min-h-[92vh] items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div className="space-y-8">
          <div className="hero-intro hero-intro-1 flex flex-wrap gap-2">
            {heroPills.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-full border border-lilac/40 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-lilac-deep backdrop-blur"
              >
                {label}
              </span>
            ))}
          </div>

          <h1 className="hero-intro hero-intro-2 max-w-4xl text-[2.35rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.45rem]">
            C'è una versione di te
            <br />
            che sta aspettando
            <br />
            <span className="inline-block bg-gradient-to-r from-primary via-lilac-deep to-aqua-deep bg-clip-text text-transparent">
              di essere ascoltata.
            </span>
          </h1>

          <p className="hero-intro hero-intro-3 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Supporto psicologico per donne che attraversano momenti di cambiamento,
            sovraccarico emotivo o perdita di sé. Niente protocolli standard: solo
            un percorso costruito su di te.
          </p>

          <div className="hero-intro hero-intro-4 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
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
                <WhatsAppIcon className="h-5 w-5" /> Scrivimi su WhatsApp
              </a>
            </Button>
          </div>

          <p className="hero-intro hero-intro-4 text-sm text-muted-foreground">
            Primo colloquio conoscitivo · 50€ · in studio o online
          </p>
        </div>

        <div className="hero-intro hero-intro-5 relative flex items-center justify-center overflow-visible border-0 bg-transparent shadow-none">
          <img
            src={donnaStranaImage}
            alt="Volto scultoreo con nebbia color lavanda e menta"
            width={520}
            height={520}
            className="hero-image-float relative w-full max-w-[33.6rem] border-0 bg-transparent shadow-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
