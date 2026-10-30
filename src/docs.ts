import { bangs } from "./bang";

type Bang = { t: string; d: string; u: string; s?: string };
const input = document.querySelector<HTMLInputElement>("#filter")!;
const results = document.querySelector<HTMLTableSectionElement>("#results")!;
const count = document.querySelector<HTMLElement>("#count")!;
const empty = document.querySelector<HTMLElement>("#empty")!;
const all = [...(bangs as Bang[])].sort((a, b) => a.t.localeCompare(b.t));
const PAGE_SIZE = 100;
let shown = PAGE_SIZE;
let filtered = all;

function render() {
  const term = input.value.trim().toLowerCase();
  filtered = term
    ? all.filter((bang) => [bang.t, bang.d, bang.s ?? "", bang.u].some((value) => value.toLowerCase().includes(term)))
    : all;
  shown = PAGE_SIZE;
  draw();
}
function draw() {
  const fragment = document.createDocumentFragment();
  for (const bang of filtered.slice(0, shown)) {
    const row = document.createElement("tr");
    for (const value of ["!" + bang.t, bang.s || bang.d, bang.d]) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    }
    fragment.append(row);
  }
  results.replaceChildren(fragment);
  count.textContent = `Showing ${Math.min(shown, filtered.length).toLocaleString()} of ${filtered.length.toLocaleString()} matching bangs (${all.length.toLocaleString()} total)`;
  empty.hidden = filtered.length !== 0;
  more.hidden = shown >= filtered.length;
}
const more = document.createElement("button");
more.textContent = "Load more";
more.type = "button";
more.style.cssText = "margin:20px 0;padding:10px 18px;border-radius:8px;cursor:pointer";
document.querySelector("table")!.after(more);
more.addEventListener("click", () => { shown += PAGE_SIZE; draw(); });
input.addEventListener("input", render);
render();
