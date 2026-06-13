import { GraduationCap, BadgeCheck, Award, Sparkles } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Laurea Magistrale in Psicologia Clinica (LM-51)",
    sub: "Università degli Studi Kore di Enna, 2018 — 110 e lode",
  },
  {
    icon: GraduationCap,
    title: "Laurea Triennale in Scienze e Tecniche Psicologiche (L-24)",
    sub: "Università degli Studi Kore di Enna, 2012 — voto 106",
  },
  {
    icon: Award,
    title: "Specializzazione ASACOM — Assistente all'autonomia e alla comunicazione dei disabili",
    sub: "Struttura formativa Futura, 2019 — voto 100",
  },
  {
    icon: Sparkles,
    title: "Master Galton in Disturbi Specifici dell'Apprendimento (DSA)",
    sub: "In corso",
  },
  {
    icon: BadgeCheck,
    title: "Iscritta all'Albo degli Psicologi della Regione Siciliana — Sez. A",
    sub: "N. 10782 — dal 04/02/2022",
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
