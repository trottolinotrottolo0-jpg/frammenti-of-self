const steps = [
  {
    n: "01",
    title: "Ascolto",
    desc: "Un primo colloquio per conoscerci. Tu racconti, io ascolto davvero — senza fretta e senza giudizio.",
  },
  {
    n: "02",
    title: "Mappatura",
    desc: "Diamo un nome ai frammenti: emozioni, paure, bisogni reali. Capiamo da dove partire.",
  },
  {
    n: "03",
    title: "Percorso sartoriale",
    desc: "Costruisco un percorso unico per te. Niente protocolli standard, solo strumenti che funzionano nella tua vita.",
  },
  {
    n: "04",
    title: "Ricostruzione",
    desc: "Passo dopo passo, torni a sentirti integra, sicura e protagonista delle tue scelte.",
  },
];

const Method = () => {
  return (
    <section id="metodo" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Il metodo
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Il Metodo Frammenti
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Un approccio sartoriale in quattro fasi: dalla confusione alla chiarezza,
            dalla solitudine a una guida concreta accanto a te.
          </p>
        </div>

        <ol className="relative mx-auto mt-20 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-smooth hover:shadow-card hover:-translate-y-1"
            >
              <span className="font-display text-5xl font-light text-lilac">
                {s.n}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-4 top-12 hidden text-2xl text-lilac/40 lg:block"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Method;
