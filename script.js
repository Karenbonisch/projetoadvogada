function boxclick(event) {
    let box = event.currentTarget // variavel
    let text = box.querySelector("div") //suche div in der box
    text.classList.toggle("versteck") //esconde se clicar e mostra se clicar novamente
    let textweg =box.querySelector(".weg")
    textweg.classList.toggle("versteck")
    box.classList.toggle("gross") /* tamanho das caixas kind*/
}
/*qdo clicar na caixa div kind executa funcao para mostrar texto e esconder texto*/