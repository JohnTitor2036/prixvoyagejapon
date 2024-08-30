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

	let prixNourriture = 0;

	switch ($choix) {
		case '1':
			prixNourriture = PRICES.NOURRITURE.EPICERIE;
			break;
		case '2':
			prixNourriture = PRICES.NOURRITURE.KOMBINIS;
			break;
		case '3':
			prixNourriture = PRICES.NOURRITURE.RESTAURANT;
			break;
		case '4':
			prixNourriture = PRICES.NOURRITURE.JUSTE_RESTAURANT;
			break;
		case '5':
			prixNourriture = PRICES.NOURRITURE.HAUT_DE_GAMME;
			break;
	}

	$("#prixNourriture").val(prixNourriture);
	calculSousTotal();
}

function calculTransport() {
	const $choix = $('input[type=radio][name=typeTransport]:checked').val();

	let prixTransport = 0;

	switch ($choix) {
		case '1':
			prixTransport = PRICES.TRANSPORT.MARCHER;
			break;
		case '2':
			prixTransport = PRICES.TRANSPORT.MARCHER_ET_TRANSPORTS;
			break;
		case '3':
			prixTransport = PRICES.TRANSPORT.TRANSPORTS_COMMUN;
			break;
		case '4':
			prixTransport = PRICES.TRANSPORT.LOUER_VOITURE;
			break;
		case '5':
			prixTransport = PRICES.TRANSPORT.UBER_TAXI;
			break;
	}

	$("#prixTransport").val(prixTransport);
	calculSousTotal();
}

function calculVisit() {
	const $choix = $('input[type=radio][name=typeVisit]:checked').val();

	let prixVisit = 0;

	switch ($choix) {
		case '1':
			prixVisit = PRICES.VISITE.GRATUIT;
			break;
		case '2':
			prixVisit = PRICES.VISITE.MOYEN;
			break;
		case '3':
			prixVisit = PRICES.VISITE.CHER;
			break;
	}

	$("#prixVisit").val(prixVisit);
	calculSousTotal();
}
