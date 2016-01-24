/**
 * Created by mark on 1/23/16.
 */
$(document).ready(function () {
    var curBkgc = "light-red";
    //  alert("Document ready");


    $("#diver").on("swipe", (function () {
        speakTime();
    }));

    $("#diver").tap(function () {
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

    function speakTime() {
        var curTime = new Date();

        var time = curTime.toLocaleTimeString();

        console.log("It is " + time);
        var msg = new SpeechSynthesisUtterance();
        msg.lang = 'en-US';
        msg.rate = .8;
        msg.text = "It is " + time;

        window.speechSynthesis.speak(msg);
        // alert(curTime.toLocaleTimeString());
    }


});
