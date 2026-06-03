import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM_HANDLE = "studioframmenti";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

/**
 * Per mostrare i post reali in automatico, incolla qui gli URL dei post Instagram
 * (es. "https://www.instagram.com/p/XXXXXXX/"). Verranno renderizzati con
 * l'embed ufficiale di Instagram.
 */
const POST_URLS: string[] = [
  // "https://www.instagram.com/p/XXXXXXX/",
  // "https://www.instagram.com/p/YYYYYYY/",
  // "https://www.instagram.com/p/ZZZZZZZ/",
];

const InstagramFeed = () => {
  return (
    <section id="instagram" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-aqua-deep">
            Instagram
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Dal mio Instagram
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Riflessioni, spunti e strumenti quotidiani.
            Seguimi su <span className="font-semibold text-foreground">@{INSTAGRAM_HANDLE}</span>.
          </p>
        </div>

        {POST_URLS.length > 0 ? (
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POST_URLS.map((url) => (
              <div
                key={url}
                className="overflow-hidden rounded-3xl bg-card shadow-soft transition-smooth hover:shadow-card"
              >
                <iframe
                  src={`${url.replace(/\/$/, "")}/embed`}
                  title={`Post Instagram ${url}`}
                  className="h-[520px] w-full"
                  loading="lazy"
                  frameBorder={0}
                  scrolling="no"
                  allowTransparency
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-gradient-card p-10 text-center shadow-soft">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-lilac-soft text-lilac-deep">
              <Instagram className="h-7 w-7" />
            </span>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              I post più recenti sono sul mio profilo Instagram.
              Vieni a dare un'occhiata e fammi sapere cosa ne pensi.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="hero" size="lg">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" /> Seguimi su Instagram
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;
