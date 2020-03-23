let num = document.querySelector('input#pnum') //id
let lista = document.querySelector('select#plista') //id list
let res = document.querySelector('div#res') //resultado
let valores = [] //add vetor

function isNumero(n) {  //verifica a entrada de dados *aceita somente de >= 1 e <=1000
    if (Number(n) >= 1 && Number(n) <= 1000) {
        return true
    } else {
        return false
    }
}

function adicionar() {      //evento do botão adicionar *verifica a entrada dos dados *não permite entrada vazia
    if (isNumero(num.value)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `${num.value} Kg adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {    //retorna se o valor é Inválido
        window.alert('Valor inválido!')
    }
    num.value = '' // apaga a campo de entrada de dados
    num.focus()  //foco do cursor
}

function finalizar() { //resultado final *finaliza toda a operação do codigo e retorna os resultados na tela
    if (valores.length == 0) {
        window.alert('Adicione o peso antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 99000
        
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        } 

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} novos tripulantes cadastrados.</p>`
        res.innerHTML += `<p>O maior peso informado foi ${maior} Kg.</p>`
        res.innerHTML += `<p>O menor peso informado foi ${menor} Kg.</p>`
        res.innerHTML += `<p>Somando todos os pesos informados, temos ${soma} Kg.</p>`
        
        if (soma > 100000) {
            window.alert(`A Millenium Falcon excedeu ${soma-100000} Kg a mais de sua carga maxima, a nave não podera decolar!`)
        }             
    }

    
}