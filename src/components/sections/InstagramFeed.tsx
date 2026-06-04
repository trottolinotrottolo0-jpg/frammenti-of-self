import { Instagram, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM_HANDLE = "studioframmenti";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

/**
 * Per mostrare i post reali in automatico, incolla qui gli URL dei post Instagram
 * (es. "https://www.instagram.com/p/XXXXXXX/"). Verranno renderizzati con
 * l'embed ufficiale di Instagram.
 *
 * In alternativa, una volta connesso l'account Instagram tramite Lovable Cloud,
 * il feed verrà caricato automaticamente dalle API ufficiali.
 */
const POST_URLS: string[] = [
  // "https://www.instagram.com/p/XXXXXXX/",
];

// Placeholder mostrati finché l'account non è connesso o non sono stati
// aggiunti gli URL dei post.
const PLACEHOLDER_POSTS = [
  { caption: "Riflessioni sulla maternità", tag: "#maternità" },
  { caption: "Strumenti per l'ansia quotidiana", tag: "#ansia" },
  { caption: "Costruire autostima passo dopo passo", tag: "#autostima" },
  { caption: "Disturbi dell'apprendimento", tag: "#DSA" },
  { caption: "Cura di sé e fragilità emotiva", tag: "#curadisé" },
  { caption: "Piccoli gesti, grandi cambiamenti", tag: "#crescita" },
];

const InstagramFeed = () => {
  const hasRealPosts = POST_URLS.length > 0;

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
            Seguimi su{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              @{INSTAGRAM_HANDLE}
            </a>
            .
          </p>
        </div>

        {hasRealPosts ? (
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
          <>
            {/* Placeholder grid — sostituito dai post reali una volta connesso l'account */}
            <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PLACEHOLDER_POSTS.map((post, idx) => (
                <a
                  key={idx}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-3xl bg-gradient-card shadow-soft transition-smooth hover:shadow-card"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lilac-soft text-lilac-deep">
                      <ImageIcon className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium text-foreground">
                      {post.caption}
                    </p>
                    <span className="text-xs uppercase tracking-[0.2em] text-aqua-deep">
                      {post.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-smooth group-hover:opacity-100">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/90 text-background">
                      <Instagram className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-2xl text-center">
              <p className="text-sm text-muted-foreground">
                Anteprima dimostrativa. Una volta connesso l'account Instagram,
                qui appariranno automaticamente i post più recenti.
              </p>
              <div className="mt-6 flex justify-center">
                <Button asChild variant="hero" size="lg">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" /> Seguimi su Instagram
                  </a>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;
