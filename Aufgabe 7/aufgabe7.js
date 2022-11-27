const x = 1;
const de = "Deutschland";
const fr = "Frankreich";
const it = "Italien";
const es = "Spanien";
const populationDE22 = 83.2;
const populationFR22 = 67.8;
const populationIT22 = 59.0;
const populationES22 = 47.4;
const populationDE20 = 83.16;
const populationFR20 = 67.38;
const populationIT20 = 59.45;
const populationES20 = 47.36;
const gesamt = document.querySelector("#gesamt");
const gesamttext = document.querySelector("#gesamttext");
let ProzentDE = (1 - populationDE20 / populationDE22) * 100;
let ProzentFR = (1 - populationFR20 / populationFR22) * 100;
let ProzentIT = (1 - populationIT20 / populationIT22) * 100;
let ProzentES = (1 - populationES20 / populationES22) * 100;
document.querySelector("#de").addEventListener("click", function () {
    de22();
});
function de22() {
    gesamt.innerHTML = populationDE22.toString();
    gesamttext.innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022 in Mio";
}
console.log("Die Einwohnerzahl in" + de + "betrug im Jahr 2020" + populationDE20);
console.log("Die Einwohnerzahlin" + de + "ist die letzten 2 Jahre um" + ProzentDE + "gestiegen");
console.log("Die Einwohnerzahl in" + fr + "beträgt in diesem Jahr" + populationFR22);
console.log("Die Einwohnerzahl in" + fr + "betrug im Jahr 2020" + populationFR20);
console.log("Die Einwohnerzahlin" + fr + "ist die letzten 2 Jahre um" + ProzentFR + "gestiegen");
console.log("Die Einwohnerzahl in" + it + "beträgt in diesem Jahr" + populationIT22);
console.log("Die Einwohnerzahl in" + it + "betrug im Jahr 2020" + populationIT20);
console.log("Die Einwohnerzahlin" + it + "ist die letzten 2 Jahre um" + ProzentIT + "gestiegen");
console.log("Die Einwohnerzahl in" + es + "beträgt in diesem Jahr" + populationES22);
console.log("Die Einwohnerzahl in" + es + "betrug im Jahr 2020" + populationES20);
console.log("Die Einwohnerzahlin" + es + "ist die letzten 2 Jahre um" + ProzentES + "gestiegen");
//# sourceMappingURL=aufgabe7.js.map