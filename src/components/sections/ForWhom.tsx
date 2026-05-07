import { Check, X } from "lucide-react";

const forYou = [
  "Sei in gravidanza o nei primi anni di maternità",
  "Vivi ansia, paure o sovraccarico emotivo",
  "Cerchi una guida concreta, non solo ascolto generico",
  "Vuoi un percorso costruito su misura per te",
  "Sei pronta a metterti in gioco, anche un piccolo passo alla volta",
];

const notForYou = [
  "Cerchi consigli rapidi o soluzioni miracolose",
  "Vuoi un protocollo standard uguale per tutti",
  "Non sei disposta a guardarti dentro con onestà",
  "Cerchi un confronto solo informativo, non un percorso",
];

const ForWhom = () => {
  return (
    <section id="per-chi" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Per chi è
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Questo percorso è per te se…
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Sono onesta fin dall'inizio: non lavoro con tutti. Solo così posso davvero aiutarti.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-aqua/40 bg-aqua-soft/50 p-5 shadow-soft sm:p-8">
            <h3 className="text-xl font-semibold text-aqua-deep">È per te se</h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua-deep text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8">
            <h3 className="text-xl font-semibold text-muted-foreground">Non è per te se</h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
