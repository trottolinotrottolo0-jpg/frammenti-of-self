## Obiettivo
Convertire l'intera palette del sito in tonalità pastello mantenendo l'attuale famiglia cromatica (rosato/lilla/verde acqua/sabbia caldi) ma con saturazione più bassa e luminosità più alta, per un effetto morbido e delicato.

## Cosa cambia

Modifica unica a `src/index.css` sui token di design (variabili HSL). Nessun cambio nei componenti, perché tutto è già basato sui token semantici.

### Token aggiornati (pastello)

- **Background / card / popover**: bianchi crema leggermente più chiari e desaturati.
- **Primary (viola rosato)**: da `340 55% 44%` → pastello più chiaro tipo `340 50% 70%`, con `primary-foreground` scuro tenue per contrasto leggibile.
- **Lilac**: `310 55% 85%` (rosa cipria pastello), `lilac-deep` `320 40% 65%`.
- **Aqua**: `160 35% 80%` (verde menta pastello), `aqua-deep` `175 28% 58%`.
- **Bordeaux**: spostato a rosa antico pastello `350 40% 65%`.
- **Accent / secondary / muted**: tinte sabbia/pesca più chiare e ariose.
- **Border / input**: pastello caldo molto tenue.
- **Ring**: allineato al nuovo primary pastello.

### Gradienti

- `--gradient-hero`, `--gradient-soft`, `--gradient-primary`, `--gradient-card`: ricalibrati con gli stessi hue ma luminosità >88% e saturazione 40-60%, per un effetto "acquarello pastello".

### Ombre

- Ammorbidite ulteriormente (opacità ridotta) per coerenza con il look pastello.

## Note su leggibilità

Il `--primary` pastello viene usato anche per testi/icone in alcuni punti: verrà scelto un valore abbastanza saturo da garantire contrasto AA su sfondo crema (testato visivamente). Se necessario, introdurremo `--primary-ink` (versione leggermente più scura) per i testi, lasciando il pastello chiaro per superfici e bottoni.

## File modificati

- `src/index.css` (solo blocco `:root` + utilities gradienti/ombre)

Nessun altro file viene toccato.
