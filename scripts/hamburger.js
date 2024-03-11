$("#nav-control").click(function() {
    showNav();
});

// $("#include-navigation").get("navigation.html"); 

function showNav() {
    if ($("#small-navigation").hasClass("hidden")) {
        $("#small-navigation").removeClass("hidden");
    } else {
        $("#small-navigation").addClass("hidden");
    }
}




