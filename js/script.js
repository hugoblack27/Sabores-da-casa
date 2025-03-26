document.addEventListener('DOMContentLoaded', function() {

    let textosOriginais = [];
    const itensLi = document.querySelectorAll('.li-receitas li');
    

    itensLi.forEach(li => {
        textosOriginais.push(li.textContent);
    });
    
    const textosPreparo = [
        " Comece refogando os cogumelos",
        " Adicione a cebola e o alho",
        " Acrescente o arroz arbóreo",
        " Adicione o vinho branco",
        " Adicione o caldo quente aos poucos",
        " Mexa constantemente",
        " Quando quase pronto, acrescente a manteiga",
        " Finalize com queijo parmesão"
    ];
    
   
    document.getElementById('botao-1').addEventListener('click', function() {
        itensLi.forEach((li, index) => {
            li.textContent = textosOriginais[index];
        });
    });
    
   
    document.getElementById('botao-2').addEventListener('click', function() {
        itensLi.forEach((li, index) => {
            
            li.textContent = textosPreparo[index] || textosOriginais[index];
        });
    });
});