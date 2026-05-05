import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto costa una consulenza?",
    a: "Il primo colloquio conoscitivo ha un costo di 50€ e dura circa 50 minuti. Ti permette di capire se ci sono le condizioni per lavorare insieme, senza alcun impegno.",
  },
  {
    q: "Si svolge online o in studio?",
    a: "Entrambe le modalità sono disponibili. Online tramite videochiamata sicura, oppure in studio. Scegli ciò che ti fa sentire più a tuo agio.",
  },
  {
    q: "Quanto dura un percorso?",
    a: "Non esiste una durata standard: ogni percorso è sartoriale. In media i primi cambiamenti si percepiscono entro 6-8 incontri, ma definiamo insieme tempi e obiettivi.",
  },
  {
    q: "Devo già sapere cosa dire?",
    a: "Assolutamente no. Spesso si arriva con le idee confuse — ed è normale. Il mio lavoro è proprio aiutarti a mettere a fuoco ciò che senti, un passo alla volta.",
  },
  {
    q: "Posso iniziare anche se sono incinta?",
    a: "Sì, anzi: la gravidanza è uno dei momenti in cui un sostegno psicologico fa la differenza più grande, sia per te che per il legame con tuo figlio.",
  },
  {
    q: "Cosa significa 'approccio sartoriale'?",
    a: "Significa che non esiste un protocollo uguale per tutte. Costruisco gli strumenti, il ritmo e gli obiettivi del percorso a partire da chi sei tu, dalla tua storia e dai tuoi bisogni reali.",
  },
  {
    q: "Quello che dico resta riservato?",
    a: "Sempre. Sono vincolata al segreto professionale dell'Ordine degli Psicologi: tutto quello che condividi resta in uno spazio protetto.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Domande frequenti
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Le domande che ricevo più spesso
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Se hai un dubbio che non trovi qui, scrivimi su WhatsApp: ti rispondo io, personalmente.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-card p-4 shadow-soft sm:p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
