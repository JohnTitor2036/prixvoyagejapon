calculSousTotal();

$('input[type=radio][name=typeNuit]').change(calculNuit);
$('input[type=radio][name=typeNourriture]').change(calculNourriture);
$('input[type=radio][name=typeTransport]').change(calculTransport);
$('input[type=radio][name=typeVisit]').change(calculVisit);

$("#nbPersonne").keyup(calculNuit);
$("#nbPersonne").change(calculNuit);

$("#nbJour").keyup(calculSousTotal);
$("#nbJour").change(calculSousTotal);
$("#prixNuit").keyup(calculSousTotal);
$("#prixNuit").change(calculSousTotal);
$("#prixNourriture").keyup(calculSousTotal);
$("#prixNourriture").change(calculSousTotal);
$("#prixTransport").keyup(calculSousTotal);
$("#prixTransport").change(calculSousTotal);
$("#prixVisit").keyup(calculSousTotal);
$("#prixVisit").change(calculSousTotal);
$("#prixAvion").keyup(calculSousTotal);
$("#prixAvion").change(calculSousTotal);

var slider = document.getElementById("sliderPrixAvion");
slider.oninput = function () {
	$("#prixAvion").val(slider.value);
	$("#prixAvionSlider").text(slider.value);
	calculSousTotal();
}

function calculSousTotal() {
	const $nbJour = $("#nbJour").val();
	const $prixNuit = $("#prixNuit").val();
	const $prixNourriture = $("#prixNourriture").val();
	const $prixTransport = $("#prixTransport").val();
	const $prixVisit = $("#prixVisit").val();
	const $sousTotal = ($nbJour * $prixNuit) + ($nbJour * $prixNourriture) + ($nbJour * $prixTransport) + ($nbJour * $prixVisit);
	$("#sousTotal").val($sousTotal);
	$("#sousTotalFloteur").text($sousTotal);
	calculTotal();
}

function calculTotal() {
	const $sousTotal = $("#sousTotal").val();
	const $prixAvion = $("#prixAvion").val();
	const $total = parseInt($sousTotal) + parseInt($prixAvion);
	$("#total").val($total);
	$("#totalFloteur").text($total);
}

function calculNuit() {
	const $choix = $('input[type=radio][name=typeNuit]:checked').val();
	const nbPersonne = $("#nbPersonne").val();

	let prixNuit = 0;
	switch ($choix) {
		case '1':
			prixNuit = PRICES.NUIT.CAMPING;
			break;
		case '2':
			prixNuit = (nbPersonne == '1') ? PRICES.NUIT.AIRBNB_1_PERSON : (nbPersonne == '2') ? PRICES.NUIT.AIRBNB_2_PERSONS : PRICES.NUIT.AIRBNB_3_TO_5_PERSONS;
			break;
		case '3':
			prixNuit = (nbPersonne == '1') ? PRICES.NUIT.HOTEL_CHEAP_1_PERSON : (nbPersonne == '2') ? PRICES.NUIT.HOTEL_CHEAP_2_PERSONS : PRICES.NUIT.HOTEL_CHEAP_3_TO_5_PERSONS;
			break;
		case '4':
			prixNuit = (nbPersonne == '1') ? PRICES.NUIT.HOTEL_LUXE_1_PERSON : (nbPersonne == '2') ? PRICES.NUIT.HOTEL_LUXE_2_PERSONS : PRICES.NUIT.HOTEL_LUXE_3_TO_5_PERSONS;
			break;
	}

	$("#prixNuit").val(prixNuit);
	calculSousTotal();
}

function calculNourriture() {
	const $choix = $('input[type=radio][name=typeNourriture]:checked').val();
	$("#prixNourriture").val(PRICES.NOURRITURE[$choix]);
	calculSousTotal();
}

function calculTransport() {
	const $choix = $('input[type=radio][name=typeTransport]:checked').val();
	$("#prixTransport").val(PRICES.TRANSPORT[$choix]);
	calculSousTotal();
}

function calculVisit() {
	const $choix = $('input[type=radio][name=typeVisit]:checked').val();
	$("#prixVisit").val(PRICES.VISITE[$choix]);
	calculSousTotal();
}
