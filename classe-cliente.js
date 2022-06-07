class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo 
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const joaopaulo = new Cliente("João Paulo", "joaopaulo@email.com", "1234567", 100)

joaopaulo.depositar(150)

console.log(joaopaulo)