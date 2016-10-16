$(document).ready(function() {
    $("option").click(function() {
        $(this).addClass("selected");
        alert("Selected");
    });
});

