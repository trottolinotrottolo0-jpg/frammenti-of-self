import { GraduationCap, BadgeCheck, ShieldCheck, HeartPulse, Languages } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Laurea Magistrale in Psicologia Clinica",
    sub: "Università degli Studi",
  },
  {
    icon: BadgeCheck,
    title: "Iscritta all'Albo degli Psicologi",
    sub: "Ordine Regionale",
  },
  {
    icon: ShieldCheck,
    title: "Corso di Formazione sulla Igiene e Sicurezza nei luoghi di lavoro",
    sub: "Ai sensi degli artt. 36-37 del D.lgs 81/08 — Gi One Sicurezza",
  },
  {
    icon: HeartPulse,
    title: "BLS – Corso di base al Primo Soccorso",
    sub: "Misericordia di Niscemi, 19 feb 2015 (Nov 2014 – Feb 2015)",
  },
  {
    icon: Languages,
    title: "Certificazione livello B2 lingua inglese (Q.C.E.R.)",
    sub: "Centro Linguistico Interfacoltà Kore di Enna",
  },
];

const Credentials = () => {
  return (
    <section id="formazione" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Credenziali
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Formazione e competenze
          </h2>
        </div>

        <ul className="mx-auto mt-16 max-w-3xl space-y-4">
          {items.map(({ icon: Icon, title, sub }) => (
            <li
              key={title}
              className="flex items-center gap-5 rounded-2xl border border-border/60 bg-card p-6 transition-smooth hover:border-lilac hover:shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-aqua-soft text-aqua-deep">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Credentials;
