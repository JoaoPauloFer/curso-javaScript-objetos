const clientes = [{
    nome: 'João Paulo',
    cpf: '12543652266',
    dependentes: [{ 
        nome: 'Samira', 
        parentesco: 'filha', 
        dataNasc: '20/03/2010' 
        },
        {
        nome:"Katarina",
        parentesco: "filha",
        dataNasc: "04/01/2014"
        }]
},
{
    nome: 'Juliana',
    cpf: '832835862135',
    dependentes: [{ 
        nome: 'Seju', 
        parentesco: 'filha', 
        dataNasc: '20/03/2005' 
        },
        {
        nome:"Morgana",
        parentesco: "filha",
        dataNasc: "04/01/2007"
        }]
}
]

const listaDeDependentes = clientes

// const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDeDependentes)