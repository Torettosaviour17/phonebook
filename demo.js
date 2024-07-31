function toggleForm() {
    var form = document.getElementById("myForm");
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.direction = "block"
    }
}
function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
}