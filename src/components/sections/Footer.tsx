import { Mail, MapPin, Instagram } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import logo from "@/assets/logo-frammenti.svg";

const navLinks = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#metodo", label: "Metodo" },
  { href: "#per-chi", label: "Per chi è" },
  { href: "#faq", label: "FAQ" },
  { href: "#contatti", label: "Contatti" },
];

const services = [
  { href: "#servizi", label: "Percorso Maternità" },
  { href: "#servizi", label: "Ansia, panico, depressione" },
  { href: "#servizi", label: "Autostima ed emozioni" },
  { href: "#servizi", label: "Disturbi del neurosviluppo" },
  { href: "#servizi", label: "Traumi e stress" },
  { href: "#servizi", label: "Disturbi alimentari" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-gradient-to-b from-background to-lilac-soft/40">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-4">
            <a href="#" className="flex items-center gap-3" aria-label="Studio Frammenti — Home">
              <img
                src={logo}
                alt="Studio Frammenti"
                width={88}
                height={88}
                className="h-32 w-32 object-contain"
              />
              <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Studio <span className="text-lilac-deep">Frammenti</span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Supporto psicologico per donne che attraversano momenti di cambiamento,
              maternità e fragilità emotive. Un percorso costruito su di te.
            </p>
            <p className="text-xs tracking-[0.25em] uppercase text-aqua-deep">
              Psicologia · Maternità · Ascolto
            </p>
          </div>

          {/* Navigazione */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Naviga
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-smooth hover:text-lilac-deep"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servizi */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Servizi
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-muted-foreground transition-smooth hover:text-lilac-deep"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Contatti
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="https://wa.me/393000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-smooth hover:text-aqua-deep"
                >
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-aqua-deep" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ciao@studioframmenti.net"
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-smooth hover:text-lilac-deep"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lilac-deep" />
                  <span>ciao@studioframmenti.net</span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lilac-deep" />
                  <span>Via Esempio 12, Milano</span>
                </span>
              </li>
              <li>
                <a
                  href="https://instagram.com/studioframmenti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-muted-foreground transition-smooth hover:text-lilac-deep"
                >
                  <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-lilac-deep" />
                  <span>@studioframmenti</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Studio Frammenti — Tutti i diritti riservati
          </p>
          <p className="text-xs text-muted-foreground">
            P.IVA 00000000000 · Iscr. Albo Psicologi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
