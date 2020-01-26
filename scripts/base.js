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

$("#staySameRegion").click(calculJapanRailPass);

var slider = document.getElementById("sliderPrixAvion");
slider.oninput = function () {
    $("#prixAvion").val(slider.value);
    $("#prixAvionSlider").text(slider.value);
    calculSousTotal();
}

function calculJapanRailPass() {
    if ($("#staySameRegion").prop("checked")) {
        //Plusieurs régions
        
    } else {
        //Même région
        // Afficher le choix de région
    }
}

function calculSousTotal() {
    $nbJour = $("#nbJour").val();
    $prixNuit = $("#prixNuit").val();
    $prixNourriture = $("#prixNourriture").val();
    $prixTransport = $("#prixTransport").val();
    $prixVisit = $("#prixVisit").val();
    $sousTotal = ($nbJour * $prixNuit) + ($nbJour * $prixNourriture) + ($nbJour * $prixTransport) + ($nbJour * $prixVisit)
    $("#sousTotal").val($sousTotal);
    $("#sousTotalFloteur").text($sousTotal);
    calculTotal();
}

function calculTotal() {
    $sousTotal = $("#sousTotal").val();
    $prixAvion = $("#prixAvion").val();
    $total = parseInt($sousTotal) + parseInt($prixAvion);
    $("#total").val($total);
    $("#totalFloteur").text($total);
}

function calculNuit() {
    $choix = $('input[type=radio][name=typeNuit]:checked').val();
    switch ($choix) {
        case '1':
            $("#prixNuit").val("5");
            break;
        case '2':
            switch ($("#nbPersonne").val()) {
                case '1':
                    $("#prixNuit").val("35");
                    break;
                case '2':
                    $("#prixNuit").val("30");
                    break;
                case '3':
                case '4':
                case '5':
                    $("#prixNuit").val("25");
                    break;
                default:
                    $("#prixNuit").val("25");
            }
            break;
        case '3':
            switch ($("#nbPersonne").val()) {
                case '1':
                    $("#prixNuit").val("60");
                    break;
                case '2':
                    $("#prixNuit").val("50");
                    break;
                case '3':
                case '4':
                case '5':
                    $("#prixNuit").val("40");
                    break;
                default:
                    $("#prixNuit").val("40");
            }
            break;
        case '4':
            switch ($("#nbPersonne").val()) {
                case '1':
                    $("#prixNuit").val("200");
                    break;
                case '2':
                    $("#prixNuit").val("170");
                    break;
                case '3':
                case '4':
                case '5':
                    $("#prixNuit").val("150");
                    break;
                default:
                    $("#prixNuit").val("150");
            }
            break;
    }
    calculSousTotal();
}

function calculNourriture() {
    $choix = $('input[type=radio][name=typeNourriture]:checked').val();
    switch ($choix) {
        case '1':
            $("#prixNourriture").val("10");
            break;
        case '2':
            $("#prixNourriture").val("15");
            break;
        case '3':
            $("#prixNourriture").val("30");
            break;
        case '4':
            $("#prixNourriture").val("60");
            break;
        case '5':
            $("#prixNourriture").val("150");
            break;
    }
    calculSousTotal();
}

function calculTransport() {
    $choix = $('input[type=radio][name=typeTransport]:checked').val();
    switch ($choix) {
        case '1':
            $("#prixTransport").val("0");
            break;
        case '2':
            $("#prixTransport").val("12");
            break;
        case '3':
            $("#prixTransport").val("20");
            break;
        case '4':
            $("#prixTransport").val("90");
            break;
        case '5':
            $("#prixTransport").val("120");
            break;
    }
    calculSousTotal();
}

function calculVisit() {
    $choix = $('input[type=radio][name=typeVisit]:checked').val();
    switch ($choix) {
        case '1':
            $("#prixVisit").val("3");
            break;
        case '2':
            $("#prixVisit").val("12");
            break;
        case '3':
            $("#prixVisit").val("30");
            break;
    }
    calculSousTotal();
}