
    $(document).ready(function ()
    {
        var cookie = document.cookie;
        console.log("cokolwiek");
        if (cookie.includes("Bar-status"))
        {
            console.log("to działa")
            $("#right-arrow").show();
            $("#left-arrow").hide();
            $("#right-box").show();
            $("#main-bar").removeClass("col-lg-12");
            $("#main-bar").addClass("col-lg-10");
        };
        //console.log("napis");
    });
//document.getElementById('show-bar').onclick = function () { alert('WAKACJE!'); };
$("#hide-bar").click(function ()
{
        
    $("#right-arrow").hide();
    $("#left-arrow").show();
    $("#right-box").hide();
    //setTimeout(function () { $("#main-bar").addClass("col-lg-12"); }, 500);
    $("#main-bar").addClass("col-lg-12");
    $("#main-bar").removeClass("col-lg-10");
    $("#right-box").removeClass("hidden-sub-menu");
    document.cookie = "Bar-status=show; expires=Thu, 01 Jan 1970 00:00:00 UTC;  path=/";
    //console.log(document.cookie);
});
$("#show-bar").click(function () {
        
    $("#left-arrow").hide("slow");
    $("#right-arrow").show("slow");
    $("#right-box").show("slow");
    $("#main-bar").addClass("col-lg-10");
    $("#main-bar").removeClass("col-lg-12");
    $("#right-box").removeClass("hidden-sub-menu");
    document.cookie = "Bar-status=show ; path=/";
       
   
        

});

$("#nieuws-top-menu").click(function ()
{
    $("#nieuws-sub-menu").show("slow");
    $("#organisatie-sub-menu").hide("slow");
    $("#veiligheid-sub-menu").hide("slow");
    $("#medewerkers-sub-menu").hide("slow");
    $("#formulieren-sub-menu").hide("slow");
    $("#chat-sub-menu").hide("slow");
});
$("#organisatie-top-menu").click(function () {
    $("#nieuws-sub-menu").hide("slow");
    $("#organisatie-sub-menu").show("slow");
    $("#veiligheid-sub-menu").hide("slow");
    $("#medewerkers-sub-menu").hide("slow");
    $("#formulieren-sub-menu").hide("slow");
    $("#chat-sub-menu").hide("slow");
});
$("#veiligheid-top-menu").click(function () {
    $("#nieuws-sub-menu").hide("slow");
    $("#organisatie-sub-menu").hide("slow");
    $("#veiligheid-sub-menu").show("slow");
    $("#medewerkers-sub-menu").hide("slow");
    $("#formulieren-sub-menu").hide("slow");
    $("#chat-sub-menu").hide("slow");
});
$("#medewerkers-top-menu").click(function () {
    $("#nieuws-sub-menu").hide("slow");
    $("#organisatie-sub-menu").hide("slow");
    $("#veiligheid-sub-menu").hide("slow");
    $("#medewerkers-sub-menu").show("slow");
    $("#formulieren-sub-menu").hide("slow");
    $("#chat-sub-menu").hide("slow");
});
$("#formulieren-top-menu").click(function () {
    $("#nieuws-sub-menu").hide("slow");
    $("#organisatie-sub-menu").hide("slow");
    $("#veiligheid-sub-menu").hide("slow");
    $("#medewerkers-sub-menu").hide("slow");
    $("#formulieren-sub-menu").show("slow");
    $("#chat-sub-menu").hide("slow");
});
$("#chat-top-menu").click(function () {
    $("#nieuws-sub-menu").hide("slow");
    $("#organisatie-sub-menu").hide("slow");
    $("#veiligheid-sub-menu").hide("slow");
    $("#medewerkers-sub-menu").hide("slow");
    $("#formulieren-sub-menu").hide("slow");
    $("#chat-sub-menu").show("slow");
});
function updateTime() {
    var now = new Date();
    var minutes = now.getMinutes();
    if (minutes < 10) { minutes = "0" + minutes; }
    var time = now.getHours() + ":" + minutes;
    document.getElementById("Hour").innerHTML = time;
    setTimeout(updateTime, 1000);

}
$(document).ready(function () {
    updateTime();

});