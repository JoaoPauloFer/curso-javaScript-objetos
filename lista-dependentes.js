const cliente = {
    nome: 'João Paulo',
    idade: 20,
    cpf: '12543652266',
    email: 'joaopaulo@email.com',
    fones: [ '5561981324567', '5561985672034' ],
    dependentes: [{ nome: 'Sara Silva', 
        parentesco: 'filha', 
        dataNasc: '20/03/2010' 
    }]
}

cliente.dependentes.push({
    nome:"Katarina Silva",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(
    dependente => dependente.dataNasc == "04/01/2014"
)

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)