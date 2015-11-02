$(function () {
    $("#firstNum").focus();

    infoPageLoaded = false;
    contactPageLoaded = false;

    //navbar functionality 
    $('.container li').click(function () {
        $('.container li').removeClass('active');
        $(this).addClass('active');
    });

    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });

    $("#info").click(function () {

        $("#homePageMain, #result, #contactPar").hide();
        $("#result").empty();
        if (infoPageLoaded == false) {
            $("<p class='navClickPage' id='infoPar'>Kitchen Help is committed to making your time in the kitchen more enjoyable and less stressful. We believe that cooking should be a relaxing experience. Let's leave math to mathematicians and cashiers!</p>").appendTo($("#mainWrap"));
            infoPageLoaded = true;
        }
        else {
            $("#infoPar").show();
        }
    });


    $("#contact").click(function () {

        $("#homePageMain, #result, #infoPar").hide();
        $("#result").empty();
        if (contactPageLoaded == false) {
            $("<p class='navClickPage' id='contactPar'>We welcome your comments and suggestions!  Please send them to developerformer@gmail.com</p>").appendTo($("#mainWrap"));
            contactPageLoaded = true;
        }
        else {
            $("#contactPar").show();
        }
    });

    $("#home").click(function () {

        $("#infoPar, #contactPar").hide();

        $("#homePageMain, #result").show();

    });

    $('#submitButton').click(function () {
        $("#result").empty();
        if ($('#original option:selected').text() == 'tbs') {
            switch ($('#into option:selected').text()) {
                case "tsp":
                    var result = tbsTsp($('input').val());
                    break;
                case "cups":
                    var result = tbsCup($('input').val());
                    break;
                case "oz":
                    var result = tbsOz($('input').val());
                    break;
                case "quarts":
                    var result = tbsQuart($('input').val());
                    break;
            }
        }
        else if ($('#original option:selected').text() == 'tsp') {
            switch ($('#into option:selected').text()) {
                case "tbs":
                    var result = tspTbs($('input').val());
                    break;
                case "cups":
                    var result = tspCup($('input').val());
                    break;
                case "oz":
                    var result = tspOz($('input').val());
                    break;
                case "quarts":
                    var result = tspQuart($('input').val());
                    break;
            }
        }
        else if ($('#original option:selected').text() == 'quarts') {
            switch ($('#into option:selected').text()) {
                case "tsp":
                    var result = quartsTsp($('input').val());
                    break;
                case "cups":
                    var result = quartsCup($('input').val());
                    break;
                case "oz":
                    var result = quartsOz($('input').val());
                    break;
                case "tbs":
                    var result = quartsTbs($('input').val());
                    break;
            }
        }
        else if ($('#original option:selected').text() == 'oz') {
            switch ($('#into option:selected').text()) {
                case "tsp":
                    var result = ozTsp($('input').val());
                    break;
                case "cups":
                    var result = ozCup($('input').val());
                    break;
                case "tbs":
                    var result = ozTbs($('input').val());
                    break;
                case "quarts":
                    var result = ozQuart($('input').val());
                    break;
            }

        }
        else if ($('#original option:selected').text() == 'cups') {
            switch ($('#into option:selected').text()) {
                case "tsp":
                    var result = cupTsp($('input').val());
                    break;
                case "tbs":
                    var result = cupTbs($('input').val());
                    break;
                case "oz":
                    var result = cupOz($('input').val());
                    break;
                case "quarts":
                    var result = cupQuart($('input').val());
                    break;
            }
        }

        if ($('input').val() == '' || $.isNumeric($('input').val()) == false) {

            $("<h2 class='error'>please enter a number!!</h2>").appendTo('#result');//.fadeOut(6000);
            $("#firstNum").focus();
        }
        else if ($('#original option:selected').text() == $('#into option:selected').text()) {

            $("<h2 class='error'>please select different measurement types!!</h2>").appendTo('#result');//.fadeOut(6000);
        }
        else {

            if (result % 1 == 0 || result == 0) {
                $(this).addClass("rotate");
                setTimeout(function () {
                    $("#result").empty();
                    $("<div id='answer' class='fadeIn'><h1>" + $('input').val() + " " + $('#original option:selected').text() + " is equal to " + result + " " + $('#into option:selected').text() + "</h1></div>").appendTo('#result');
                }, 400);
                setTimeout(function () {
                    $("#submitButton").removeClass("rotate");
                }, 710);

            }
            else {
                $(this).addClass("rotate");
                setTimeout(function () {
                    $("#result").empty();
                    $("<div id='answer' class='fadeIn'><h1>" + $('input').val() + " " + $('#original option:selected').text() + " is equal to " + result.toFixed(1) + " " + $('#into option:selected').text() + "</h1></div>").appendTo('#result');
                }, 400);
                setTimeout(function () {
                    $("#submitButton").removeClass("rotate");
                }, 710);

            }
        }
    });

    function tspTbs(tsp) {
        tsp /= 3;
        return tsp;
    }
    ;
    function tspCup(tsp) {
        tsp /= 48;
        return tsp;
    }
    ;
    function tspQuart(tsp) {
        tsp /= 192;
        return tsp;
    }
    ;
    function tspOz(tsp) {
        tsp /= 6;
        return tsp;
    }
    ;
    function tbsTsp(tbs) {
        tbs *= 3;
        return tbs;
    }
    ;
    function tbsCup(tbs) {
        tbs /= 16;
        return tbs;
    }
    ;
    function tbsQuart(tbs) {
        tbs /= 64;
        return tbs;
    }
    ;
    function tbsOz(tbs) {
        tbs /= 2;
        return tbs;
    }
    ;
    function cupTsp(cup) {
        cup *= 48;
        return cup;
    }
    ;
    function cupTbs(cup) {
        cup *= 16;
        return cup;
    }
    ;
    function cupQuart(cup) {
        cup /= 4;
        return cup;
    }
    ;
    function cupOz(cup) {
        cup *= 8;
        return cup;
    }
    ;
    function quartsTbs(quart) {
        quart *= 64;
        return quart;
    }
    ;
    function quartsTsp(quart) {
        quart *= 192;
        return quart;
    }
    ;
    function quartsCup(quart) {
        quart *= 4;
        return quart;
    }
    ;
    function quartsOz(quart) {
        quart *= 32;
        return quart;
    }
    ;
    function ozTsp(oz) {
        oz *= 6;
        return oz;
    }
    ;
    function ozTbs(oz) {
        oz *= 2;
        return oz;
    }
    ;
    function ozCup(oz) {
        oz /= 8;
        return oz;
    }
    ;
    function ozQuart(oz) {
        oz /= 32;
        return oz;
    }
    ;
});




