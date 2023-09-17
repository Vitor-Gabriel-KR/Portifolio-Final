document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("trocarBotao");
    var descricao = document.getElementById("descricao");
    var aptidao = document.getElementById("aptidao");
    var isSkills = true;

    button.addEventListener("click", function () {
        if (isSkills) {
            button.textContent = "Descrição";
            descricao.style.display = "none";
            aptidao.style.display = "block";
            descricao1.style.display = "none";
            aptidao1.style.display = "block";
            isSkills = false;
        } else {
            button.textContent = "Aptidões";
            descricao.style.display = "block";
            aptidao.style.display = "none";
            descricao1.style.display = "block";
            aptidao1.style.display = "none";
            isSkills = true;
        }
    });
});