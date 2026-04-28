import { Heart, Compass, Sparkles } from "lucide-react";

const points = [
  { icon: Heart, text: "8 anni di esperienza nel sostegno psicologico" },
  { icon: Compass, text: "Specializzata in maternità e fragilità emotive" },
  { icon: Sparkles, text: "Approccio sartoriale, mai standardizzato" },
];

const About = () => {
  return (
    <section id="chi-sono" className="py-24 lg:py-32">
      <div className="container mx-auto grid gap-16 px-4 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-6">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Chi sono
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Una guida concreta, accanto a te
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Sono una psicologa con otto anni di esperienza al fianco di donne che attraversano
              la gravidanza, la maternità e i momenti più fragili della vita.
            </p>
            <p>
              Credo nella relazione terapeutica come spazio reale: niente distanza clinica,
              niente protocolli rigidi. Solo ascolto profondo, parole oneste e strumenti
              che funzionano davvero nella tua quotidianità.
            </p>
            <p>
              Il mio obiettivo non è darti una risposta preconfezionata, ma aiutarti a costruire
              la <span className="font-semibold text-foreground">tua</span>.
            </p>
          </div>
        </div>

        <ul className="flex flex-col justify-center gap-5">
          {points.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="group flex items-start gap-5 rounded-2xl bg-gradient-card p-6 shadow-soft transition-smooth hover:shadow-card hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lilac-soft text-lilac-deep transition-smooth group-hover:bg-lilac group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <p className="pt-2.5 text-base font-medium text-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
