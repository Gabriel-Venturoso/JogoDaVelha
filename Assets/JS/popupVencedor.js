function anunciaVencedor (vencedor){
    let popup = document.querySelector("#popup");
    let texto = popup.querySelector("span");
    let botao = popup.querySelector("button");

    popup.classList.add("shadow");
    texto.innerHTML = vencedor;

    botao.onclick = () => {
        let celulas = document.querySelectorAll(".celula")
        for (celula of celulas){
            celula.innerHTML = "";
            celula.classList = ["celula"];
        }
        popup.classList.remove("shadow");
        jogo();
    }
}
jogo();