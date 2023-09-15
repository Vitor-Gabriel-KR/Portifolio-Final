document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("trocarBotao");
    var isSkills = true;

    button.addEventListener("click", function () {
        if (isSkills) {
            button.textContent = "Descrição";
            isSkills = false;
        } else {
            button.textContent = "Aptidões";
            isSkills = true;
        }
    });
});