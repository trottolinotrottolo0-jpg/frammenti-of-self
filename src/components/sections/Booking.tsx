import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, Clock, Video } from "lucide-react";

const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const weekDays = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

const availableDays = [5, 10, 13, 18, 23];

const Booking = () => {
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(2026, 4, 1));

  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const leadingEmptyDays = (firstDay + 6) % 7;

  const goToPreviousMonth = () => {
    setVisibleMonth((currentMonth) => (
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    ));
  };

  const goToNextMonth = () => {
    setVisibleMonth((currentMonth) => (
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    ));
  };

  return (
    <section id="prenotazione" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
                  Prenotazione
                </span>
                <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Prenota il tuo spazio
                </h2>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Scegli giorno e orario. Il primo passo è semplice.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    { icon: Clock, t: "Primo colloquio conoscitivo · 50 minuti" },
                    { icon: Video, t: "Disponibile in studio o online" },
                    { icon: Calendar, t: "Conferma immediata via email" },
                  ].map(({ icon: Icon, t }) => (
                    <li key={t} className="flex items-center gap-3 text-foreground">
                      <Icon className="h-5 w-5 text-lilac-deep" />
                      <span className="text-base leading-relaxed">{t}</span>
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
                <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-gradient-soft blur-3xl" aria-hidden />
                <div className="relative w-full max-w-[28rem] rounded-2xl border border-border bg-background p-8 shadow-soft">
                  <div className="mb-7 flex items-center justify-between">
                    <button
                      type="button"
                      aria-label="Mese precedente"
                      className="flex h-10 w-10 items-center justify-center text-primary transition-smooth hover:text-lilac-deep"
                      onClick={goToPreviousMonth}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <p className="text-center text-lg font-semibold text-primary">
                      {monthNames[month]} {year}
                    </p>
                    <button
                      type="button"
                      aria-label="Mese successivo"
                      className="flex h-10 w-10 items-center justify-center text-primary transition-smooth hover:text-lilac-deep"
                      onClick={goToNextMonth}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="mb-3 grid grid-cols-7 gap-3">
                    {weekDays.map((day) => (
                      <span
                        key={day}
                        className="text-center text-[0.7rem] font-medium uppercase tracking-widest text-muted-foreground/60"
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-3">
                    {Array.from({ length: leadingEmptyDays }).map((_, i) => (
                      <span key={`empty-${i}`} className="h-11 w-11" aria-hidden />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const isActive = availableDays.includes(day);
                      return (
                        <span
                          key={day}
                          className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium transition-smooth ${
                            isActive
                              ? "border border-lilac bg-lilac-soft text-primary hover:bg-lilac/30"
                              : "text-primary hover:bg-lilac-soft"
                          }`}
                        >
                          {day}
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
