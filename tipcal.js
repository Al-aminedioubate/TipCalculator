//Declaration et initialisation de nos variables
let bAmount = document.getElementById("bill_amt");
let tPercentage = document.getElementById("tip_per");

let btnTotal = document.getElementById("btn_cal");
let totalRes = document.getElementById("totalAmount");

//Fonction de traitement de calcul de pourcentage
function amountTotal(amnt1, amnt2) {
	let percentage = (amnt1 * amnt2) / 100;
	let total = amnt1 + percentage;

	return total;
}

//mettons notre fonction dans une variable pour facilité l'utilisation
btnTotal.addEventListener("click", () => {
	let val1 = Number(bAmount.value);
	let val2 = Number(tPercentage.value);

	if (isNaN(val1) || isNaN(val2)) {
		alert("Veuillez entrer des nombres valides");
		return;
	}

	let result = amountTotal(val1, val2);

	totalRes.textContent = `Total : $` + `${result}.00 `;
});
