import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import donnaStranaImage from "@/assets/DONNA STRANISSIMA.png";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const heroPills = ["Maternità", "Ansia & Traumi", "Autostima"];

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden">

      <div className="container relative mx-auto grid min-h-[92vh] items-center gap-8 px-4 py-24 lg:grid-cols-[3fr_2fr] lg:gap-12 lg:py-28">
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

          <h1 className="hero-intro hero-intro-2 fluid-hero font-semibold leading-[1.15] tracking-tight text-foreground">
            C'è una versione di te
            <br />
            che aspetta di{" "}
            <span className="bg-gradient-to-r from-primary via-lilac-deep to-aqua-deep bg-clip-text text-transparent">
              essere ascoltata
            </span>
          </h1>

          <p className="hero-intro hero-intro-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            Supporto psicologico per donne che attraversano momenti di cambiamento,
            sovraccarico emotivo o perdita di sé. Niente protocolli standard: solo
            un percorso costruito su di te.
          </p>

          <div className="hero-intro hero-intro-4 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:flex-wrap">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto min-h-[44px]">
              <a href="#prenotazione">
                <Calendar /> Prenota un colloquio
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto min-h-[44px]">
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
