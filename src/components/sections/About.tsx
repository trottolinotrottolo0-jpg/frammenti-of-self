import { Heart, Compass, Sparkles } from "lucide-react";

const points = [
  { icon: Heart, text: "Psicologa specializzata nell'ascolto profondo" },
  { icon: Compass, text: "Approccio centrato sulla persona" },
  { icon: Sparkles, text: "Percorsi personalizzati e su misura" },
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
            Chi ti accompagnerà in questo percorso
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Credo che ogni persona porti con sé una storia unica, fatta di luci, ombre
              e frammenti che chiedono solo di essere ascoltati.
            </p>
            <p>
              Il mio lavoro nasce dal desiderio di offrire uno spazio sicuro, accogliente
              e libero da giudizio — dove poter rallentare, capire, e tornare a scegliere
              con consapevolezza.
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
