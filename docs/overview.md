# Überblick
Ziel: Reproduzierbare k6-Tests für WordPress (Landingpage, später Login).

## Profile
- **Smoke:** schneller „Lebt die Seite?“-Check (5 VUs / 1m)
- **Load:** realistische Last (50–100 VUs, 10–15m)
- **Stress:** Ramp-up bis Fehler sichtbar

## Tipps
- Cache an/aus testen.
- `TARGET_URL` zeigt auf die **statische Landingpage** (nicht wp-admin).
- Ergebnisse/Screenshots in `results/` ablegen.
