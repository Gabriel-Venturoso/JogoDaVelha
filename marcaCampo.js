

function jogo (){
    let tabela = document.querySelector(".jogo");
    let vezX = true;
    
    tabela.onclick = (event) => {
        let celula = event.target;
        if (celula.textContent == ""){
            if (vezX == true){
                celula.classList.add("x");
                celula.textContent = "X";
                vezX = false;
            }else{
                celula.textContent = "O";
                celula.classList.add("o");
                vezX = true;
            }
        }
        verificaVitoria(tabela);
    }
}


