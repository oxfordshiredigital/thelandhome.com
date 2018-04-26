var menu = false;

function toggleMenu() {
    if(!menu) {
        $(".mobile-menu").animate({
            height: "170px"
        }, 300, function() {
            // Animation complete.
        });
        menu = true;
    } else {
        $(".mobile-menu").animate({
            height: "0px"
        }, 300, function() {
            // Animation complete.
        });
        menu = false;
    }
}
$(document).ready(function() {
    console.log("ready!");
    $('.loader').hide("slow", function() {
        //
    });
});
