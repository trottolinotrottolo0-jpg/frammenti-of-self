import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

const Booking = () => {
  return (
    <section id="prenotazione" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-primary p-1 shadow-card">
          <div className="rounded-[calc(2rem-4px)] bg-card p-10 sm:p-14">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
                  Prenotazione
                </span>
                <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  Prenota il tuo spazio
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Scegli giorno e orario. Il primo passo è semplice.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    { icon: Clock, t: "Primo colloquio conoscitivo · 50 minuti" },
                    { icon: Video, t: "Disponibile in studio o online" },
                    { icon: Calendar, t: "Conferma immediata via email" },
                  ].map(({ icon: Icon, t }) => (
                    <li key={t} className="flex items-center gap-3 text-foreground">
                      <Icon className="h-4 w-4 text-lilac-deep" />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg">
                    <a
                      href="https://calendly.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar /> Apri il calendario
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-gradient-soft blur-3xl" aria-hidden />
                <div className="relative grid grid-cols-7 gap-2 rounded-2xl border border-border bg-background p-6 shadow-soft">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const isActive = [4, 9, 12, 17, 22].includes(i);
                    return (
                      <span
                        key={i}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-medium transition-smooth ${
                          isActive
                            ? "bg-gradient-primary text-primary-foreground shadow-soft"
                            : "text-muted-foreground hover:bg-lilac-soft"
                        }`}
                      >
                        {i + 1}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
