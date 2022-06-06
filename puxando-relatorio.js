const cliente = {
    nome: 'João Paulo',
    idade: 20,
    cpf: '12543652266',
    email: 'joaopaulo@email.com',
    fones: [ '5561981324567', '5561985672034' ],
    dependentes: [{ nome: 'Sara Silva', 
        parentesco: 'filha', 
        dataNasc: '20/03/2010' 
        },
        {
        nome:"Katarina Silva",
        parentesco: "filha",
        dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente) {
    if( typeof cliente[info] === "object" || typeof cliente[info] === "function" ) {
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]} `
    }
    
}

console.log(relatorio)
