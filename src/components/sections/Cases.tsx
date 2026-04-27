import { Quote } from "lucide-react";

const stories = [
  {
    title: "Da blocco emotivo a chiarezza decisionale",
    body: "Sentivo di vivere in pausa. In pochi mesi ho ritrovato la voce per scegliere ciò che davvero conta per me.",
    tag: "Percorso individuale",
  },
  {
    title: "Da ansia costante a gestione consapevole",
    body: "Ho imparato a riconoscere le mie emozioni invece di subirle. Ora respiro, e finalmente mi sento al sicuro dentro di me.",
    tag: "Ansia e stress",
  },
];

const Cases = () => {
  return (
    <section id="casi" className="bg-gradient-soft py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Storie reali
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Percorsi reali, cambiamenti concreti
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <figure
              key={s.title}
              className="relative rounded-3xl bg-card p-10 shadow-soft transition-smooth hover:shadow-card hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-lilac" />
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
              <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground">
                "{s.body}"
              </blockquote>
              <figcaption className="mt-6 text-xs font-medium uppercase tracking-widest text-aqua-deep">
                {s.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
