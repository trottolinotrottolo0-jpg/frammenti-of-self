import { MessageCircle, Mail, MapPin } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Scrivimi subito",
    href: "https://wa.me/393000000000",
    highlight: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "ciao@studiofrAmmenti.it",
    href: "mailto:ciao@studiofrAmmenti.it",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "Via Esempio 12, Milano",
    href: "#",
  },
];

const Contact = () => {
  return (
    <section id="contatti" className="bg-gradient-soft py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Contatti
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Parliamone, quando ti senti pronto
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {contacts.map(({ icon: Icon, label, value, href, highlight }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group flex flex-col items-start gap-4 rounded-3xl p-8 transition-smooth hover:-translate-y-1 ${
                highlight
                  ? "bg-gradient-primary text-primary-foreground shadow-card hover:shadow-glow"
                  : "bg-card shadow-soft hover:shadow-card"
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  highlight ? "bg-white/15" : "bg-lilac-soft text-lilac-deep"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p
                  className={`text-xs font-medium uppercase tracking-widest ${
                    highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </p>
                <p className="mt-2 text-lg font-semibold">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
