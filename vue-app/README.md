# Vue ukážky – Telefónny zoznam

Ukážkový projekt k prednáške **Front-end frameworky** (Webové technológie I., 2026/2027).
Vue 3.5 + Vite 8, Composition API so `<script setup>`.

## Požiadavky

- [Node.js](https://nodejs.org/) LTS – minimálne **20.19** alebo **22.12** (vyžaduje Vite 8)
- odporúčaný editor: VS Code + rozšírenie **Vue – Official** (projekt ho sám navrhne)
- voliteľne: [Vue DevTools](https://devtools.vuejs.org/) – v tomto projekte sú zapnuté cez Vite plugin (`Alt+Shift+D`)

## Spustenie

```bash
npm install     # nainštaluje závislosti
npm run dev     # vývojový server na http://localhost:5173
npm run build   # produkčný build do dist/
npm run preview # lokálne spustenie produkčného buildu
npm run lint    # kontrola kódu (ESLint), opravy: npm run lint:fix
```

## Príklady

Každý krok je samostatný priečinok v `src/examples/` (vlastný `ExampleView.vue` + `ProfileCard.vue`),
takže sa dajú porovnať vedľa seba. V aplikácii sa medzi nimi prepína tlačidlami (alebo `#1` … `#5` v URL).

| # | Priečinok | Čo ukazuje |
|---|-----------|------------|
| 1 | `01-staticky-komponent` | komponent s natvrdo zapísanými dátami – **takto nie** |
| 2 | `02-props` | `defineProps`, `:prop` vs. `prop`, `ref()` vs. `reactive()`, `onMounted` |
| 3 | `03-v-for-v-if` | `v-for` + `:key`, `v-if` / `v-else`, class binding |
| 4 | `04-emits` | `defineEmits`, `$emit`, rodič mení svoje dáta, kópia objektu |
| 5 | `05-computed` | `computed()` v dieťati aj v rodičovi, automatický prepočet |

## Štruktúra

```
public/imgs/              obrázky (servírujú sa ako /imgs/...; fungujú aj po builde)
src/assets/data/          JSON s kontaktmi
src/assets/profile-card.css  spoločné štýly kartičky
src/components/AlertInfo.vue spoločný komponent pre všetky príklady
src/examples/0X-*/        jednotlivé kroky
src/App.vue               prepínač príkladov (<component :is>)
```
