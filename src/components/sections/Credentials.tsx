import { GraduationCap, BadgeCheck } from "lucide-react";

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
