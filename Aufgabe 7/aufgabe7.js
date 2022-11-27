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
    de22();
});
function de22() {
    gesamt.innerHTML = populationDE22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in Deutschland in 2022 in Mio";
    relativ.innerHTML = populationDE20.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen in Deutschland im Jahr 2020 in Mio";
    wachstum.innerHTML = ProzentDE.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = WachstumgDE.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2020 und 2022 in Mio";
    document.getElementById("chart").className = "stylede";
}
document.querySelector("#fr").addEventListener("click", function () {
    fr22();
});
function fr22() {
    gesamt.innerHTML = populationFR22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in Frankreich in 2022 in Mio";
    relativ.innerHTML = populationFR20.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen in Frankreich im Jahr 2020 in Mio";
    wachstum.innerHTML = ProzentFR.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = WachstumgFR.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2020 und 2022 in Mio";
    document.getElementById("chart").className = "stylefr";
}
document.querySelector("#it").addEventListener("click", function () {
    it22();
});
function it22() {
    gesamt.innerHTML = populationIT22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in Italien in 2022 in Mio";
    relativ.innerHTML = populationIT20.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen in Italien im Jahr 2020 in Mio";
    wachstum.innerHTML = ProzentIT.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = WachstumgIT.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2020 und 2022 in Mio";
    document.getElementById("chart").className = "styleit";
}
document.querySelector("#es").addEventListener("click", function () {
    es22();
});
function es22() {
    gesamt.innerHTML = populationES22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen in Spanien in 2022 in Mio";
    relativ.innerHTML = populationES20.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen in Spanien im Jahr 2020 in Mio";
    wachstum.innerHTML = ProzentES.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = WachstumgES.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2020 und 2022 in Mio";
    document.getElementById("chart").className = "stylees";
}
document.querySelector("#eu").addEventListener("click", function () {
    eu22();
});
function eu22() {
    gesamt.innerHTML = populationEU22.toString();
    gesamttext.innerHTML = "Gesamtzahl EinwohnerInnen der EU in 2022 in Mio";
    relativ.innerHTML = populationEU20.toString();
    relativtext.innerHTML = "Gesamtzahl EinwohnerInnen der EU im Jahr 2020 in Mio";
    wachstum.innerHTML = ProzentEU.toFixed(2).toString();
    wachstumtext.innerHTML = "Wachstumsrate seit 2022 in Prozent";
    wachstumgesamt.innerHTML = WachstumgEU.toFixed(2).toString();
    wachstumgesamttext.innerHTML = "Wachstumsrate gesamt zwischen 2020 und 2022 in Mio";
    document.getElementById("chart").className = "styleeu";
}
//# sourceMappingURL=aufgabe7.js.map