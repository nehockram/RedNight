/**
 * Created by mark on 1/23/16.
 */
$(document).ready(function () {
    var curBkgc = "light-red";
    //  alert("Document ready");


    $("#diver").swipe(function () {
        speakTime();
    });

    $("#diver").dblclick(function () {
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
        console.log(curTime.toLocaleTimeString());
        var hour = curTime.toLocaleTimeString();
        //var minutes = curTime.getMinutes();
        var msg = new SpeechSynthesisUtterance();
        msg.lang = 'en-US';
        msg.rate = .8;
        msg.text = "It is " + hour;

        window.speechSynthesis.speak(msg);
        // alert(curTime.toLocaleTimeString());
    }


});
