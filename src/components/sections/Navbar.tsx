import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-frammenti.svg";

const links = [
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#metodo", label: "Metodo" },
  { href: "#per-chi", label: "Per chi" },
  { href: "#faq", label: "FAQ" },
  { href: "#contatti", label: "Contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-32 items-center justify-between px-4">
        <a href="#" className="flex items-center" aria-label="Frammenti — Home">
          <img
            src={logo}
            alt="Frammenti"
            width={144}
            height={144}
            className="h-32 w-32 object-contain"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="hero" size="default">
            <a href="#prenotazione">Prenota</a>
          </Button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-smooth hover:bg-lilac-soft md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <ul className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-foreground hover:bg-lilac-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="hero" size="default" className="w-full">
                <a href="#prenotazione" onClick={() => setOpen(false)}>Prenota</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
