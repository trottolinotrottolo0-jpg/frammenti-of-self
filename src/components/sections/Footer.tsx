const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 text-center">
        <p className="font-display text-lg font-semibold text-foreground">
          Studio Frammenti
        </p>
        <p className="text-sm tracking-widest text-muted-foreground">
          Psicologia · Maternità · Ascolto
        </p>
        <p className="text-xs text-muted-foreground">studioframmenti.net</p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Studio Frammenti — Tutti i diritti riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
