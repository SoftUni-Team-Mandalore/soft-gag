$(document).ready(function () {
    var containers = $(".content");
    console.log(containers);
    $(".navigation-button").each(function() {
        this.addEventListener("click", function() {
            var page = $(this).attr("data-link");
            var id = "#" + page;
            $(id).removeClass("hidden");

            $(".content:not("+ id + ")").addClass("hidden");
        });
    });
});