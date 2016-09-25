
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
        
    $("#left-arrow").hide();
    $("#right-arrow").show();
    $("#right-box").show();
    $("#main-bar").addClass("col-lg-10");
    $("#main-bar").removeClass("col-lg-12");
    $("#right-box").removeClass("hidden-sub-menu");
    document.cookie = "Bar-status=show ; path=/";
       
   
        

});

$("#nieuws-top-menu").click(function ()
{
    $("#nieuws-sub-menu").show();
    $("#organisatie-sub-menu").hide();
    $("#veiligheid-sub-menu").hide();
    $("#medewerkers-sub-menu").hide();
    $("#formulieren-sub-menu").hide();
    $("#chat-sub-menu").hide();
});
$("#organisatie-top-menu").click(function () {
    $("#nieuws-sub-menu").hide();
    $("#organisatie-sub-menu").show();
    $("#veiligheid-sub-menu").hide();
    $("#medewerkers-sub-menu").hide();
    $("#formulieren-sub-menu").hide();
    $("#chat-sub-menu").hide();
});
$("#veiligheid-top-menu").click(function () {
    $("#nieuws-sub-menu").hide();
    $("#organisatie-sub-menu").hide();
    $("#veiligheid-sub-menu").show();
    $("#medewerkers-sub-menu").hide();
    $("#formulieren-sub-menu").hide();
    $("#chat-sub-menu").hide();
});
$("#medewerkers-top-menu").click(function () {
    $("#nieuws-sub-menu").hide();
    $("#organisatie-sub-menu").hide();
    $("#veiligheid-sub-menu").hide();
    $("#medewerkers-sub-menu").show();
    $("#formulieren-sub-menu").hide();
    $("#chat-sub-menu").hide();
});
$("#formulieren-top-menu").click(function () {
    $("#nieuws-sub-menu").hide();
    $("#organisatie-sub-menu").hide();
    $("#veiligheid-sub-menu").hide();
    $("#medewerkers-sub-menu").hide();
    $("#formulieren-sub-menu").show();
    $("#chat-sub-menu").hide();
});
$("#chat-top-menu").click(function () {
    $("#nieuws-sub-menu").hide();
    $("#organisatie-sub-menu").hide();
    $("#veiligheid-sub-menu").hide();
    $("#medewerkers-sub-menu").hide();
    $("#formulieren-sub-menu").hide();
    $("#chat-sub-menu").show();
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