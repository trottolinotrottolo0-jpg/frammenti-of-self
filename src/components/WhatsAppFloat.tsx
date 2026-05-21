import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/393896334243"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Scrivimi su WhatsApp"
    className="group fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-smooth hover:scale-110"
  >
    <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping" />
    <WhatsAppIcon className="h-7 w-7 animate-wink" />
  </a>
);

export default WhatsAppFloat;
