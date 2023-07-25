
$("#btn1").click(function () {

    $("#message").slideToggle("slow");

});

function survol() {
    $("#link1").hover(function () {

        $("#link1").toggleClass("down");
    });
}
$(document).ready(survol)

function survol1() {
    $("#link2").hover(function () {

        $("#link2").toggleClass("down");
    });
}
$(document).ready(survol1)

function survol2() {
    $("#link3").hover(function () {



        $("#link3").toggleClass("down");
    });
}
$(document).ready(survol2)


function survol3() {
    $("#link4").hover(function () {

        $("#link4").toggleClass("down");
    });
}
$(document).ready(survol3)

