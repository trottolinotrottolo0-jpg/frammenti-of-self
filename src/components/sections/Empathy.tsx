const feelings = [
  "Ti senti sopraffatta da pensieri che non riesci a fermare",
  "Hai paura di non essere all'altezza come madre",
  "Provi ansia, ma intorno a te tutti dicono che dovresti essere felice",
  "Senti il peso di troppe responsabilità tutte insieme",
  "Hai perso il contatto con chi eri prima",
  "Non riesci a parlarne con nessuno senza sentirti giudicata",
];

const Empathy = () => {
  return (
    <section id="empatia" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-soft opacity-60" aria-hidden />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Ti capisco
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Non sei sbagliata. Sei in un momento delicato
            <span className="block text-lilac-deep">
              che va capito, non giudicato.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Se anche solo una di queste frasi ti suona familiare, sappi che non sei sola —
            e che chiedere aiuto è il primo gesto di forza.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {feelings.map((f) => (
            <li
              key={f}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card/80 p-5 backdrop-blur shadow-soft"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-lilac" aria-hidden />
              <p className="text-base leading-relaxed text-foreground">{f}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Empathy;
