# WP k6 Loadtests – Landingpage & Login (Starter)

Realistische Lasttests für **WordPress**  
Ziel: **Sichtbare Performance-Arbeit** (PageSpeed/Core Web Vitals) mit leichtgewichtigen k6-Skripten.

---

## Testen

```bash
# Ziel-URL (Landingpage) setzen
export TARGET_URL="https://example.com/"

# Smoke-Test (5 VUs / 1 Minute)
k6 run scripts/landingpage.js

```

## Ohne k6 installiert? Mit Docker:
```bash
docker run --rm -e TARGET_URL=$TARGET_URL -v "$PWD":/src -w /src grafana/k6 run scripts/landingpage.js

```

## Inhalt

- scripts/ – k6-Skripte (Start: landingpage.js)
- docs/ – Überblick & Hinweise
- results/ – Platz für Reports/Artefakte (enthält .gitkeep)
- env.example – Beispiel für Umgebungsvariablen
- .gitignore, .editorconfig – Entwickler-Hygiene
- LICENSE – MIT

## Konfiguration

TARGET_URL: Ziel-URL der (statischen) Landingpage, nicht wp-admin.  
Beispiel: https://deine-domain.tld/

Thresholds (im Script):
- http_req_duration: p(95) < 800ms
- http_req_failed: rate < 1%

Tipp: Tests mit und ohne Cache, um reale Szenarien abzudecken.

## Profile (Empfehlung)

- Smoke: schneller „Lebt die Seite?“-Check (5 VUs / 1m) → implementiert
- Load: realistische Last (z. B. 50–100 VUs / 10–15m)
- Stress: Obergrenze finden (progressiver Ramp-up, bis Fehler sichtbar)

Mehr Details siehe [docs/overview.md](./docs/overview.md)

## Kontakt
Internet Agentur Scherer – Webdesign, Online-Marketing & digitale Transformation (seit 1998)  
https://www.internetagentur-scherer.de

## Lizenz
MIT – siehe LICENSE
