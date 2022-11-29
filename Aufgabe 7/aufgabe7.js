const x = 1;
const de = "Deutschland";
const fr = "Frankreich";
const it = "Italien";
const es = "Spanien";
const eu = "Europäische Union";
const populationDE22 = 83.2;
const populationFR22 = 67.8;
const populationIT22 = 59.0;
const populationES22 = 47.4;
const populationEU22 = 446.8;
const populationDE20 = 83.16;
const populationFR20 = 67.38;
const populationIT20 = 59.45;
const populationES20 = 47.36;
const populationEU20 = 447.7;
const gesamt = document.querySelector("#gesamt");
const gesamttext = document.querySelector("#gesamttext");
const relativ = document.querySelector("#relativ");
const relativtext = document.querySelector("#relativtext");
const wachstum = document.querySelector("#wachstum");
const wachstumtext = document.querySelector("#wachstumtext");
const wachstumgesamt = document.querySelector("#wachstumgesamt");
const wachstumgesamttext = document.querySelector("#wachstumgesamttext");
let ProzentDE = (1 - populationDE20 / populationDE22) * 100;
let WachstumgDE = (populationDE22 - populationDE20);
let ProzentFR = (1 - populationFR20 / populationFR22) * 100;
let WachstumgFR = (populationFR22 - populationFR20);
let ProzentIT = (1 - populationIT20 / populationIT22) * 100;
let WachstumgIT = (populationIT22 - populationIT20);
let ProzentES = (1 - populationES20 / populationES22) * 100;
let WachstumgES = (populationES22 - populationES20);
let ProzentEU = (1 - populationEU20 / populationEU22) * 100;
let WachstumgEU = (populationEU22 - populationEU20);
document.querySelector("#de").addEventListener("click", function () {
    changeTo(populationDE22, populationDE20, ProzentDE, WachstumgDE, "stylede");
});
document.querySelector("#fr").addEventListener("click", function () {
    changeTo(populationFR22, populationFR20, ProzentFR, WachstumgFR, "stylefr");
});
document.querySelector("#it").addEventListener("click", function () {
    changeTo(populationIT22, populationIT20, ProzentES, WachstumgIT, "styleit");
});
document.querySelector("#es").addEventListener("click", function () {
    changeTo(populationES22, populationES20, ProzentES, WachstumgES, "stylees");
});
document.querySelector("#eu").addEventListener("click", function () {
    changeTo(populationEU22, populationEU20, ProzentEU, WachstumgEU, "styleeu");
});
function changeTo(population22, population20, Prozent, Wachstumg, style) {
    gesamt.innerHTML = population22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in 2022 in Mio";
    relativ.innerHTML = population20.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen im Jahr 2020 in Mio";
    wachstum.innerHTML = Prozent.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = Wachstumg.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2020 und 2022 in Mio";
    document.getElementById("chart").className = style;
}
//# sourceMappingURL=aufgabe7.js.map