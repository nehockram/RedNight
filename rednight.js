/**
 * Created by mark on 1/23/16.
 */
$(document).ready(function () {
    var curBkgc = "light-red";
    //  alert("Document ready");

    $("#diver").click(function () {

        changeColor();
    });

    function changeColor() {
        var backgroundColor = $("#diver");

        switch (curBkgc) {
            case "dark-red":
                backgroundColor.css("background-color", "indianred");
                curBkgc = "light-red";
                break;
            case "red":
                backgroundColor.css("background-color", "darkred");
                curBkgc = "dark-red";
                break;
            case "light-red":
                backgroundColor.css("background-color", "red");
                curBkgc = "red";
                break;
        }


    }


});
