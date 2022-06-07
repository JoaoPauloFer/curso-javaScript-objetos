function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo = saldo + valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const joaopaulo = new ClientePoupanca("João Paulo", "55563563465754", "joaopaulo@gmail.com", 100, 200)

console.log(joaopaulo)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup = this.saldoPoup + valor
}

joaopaulo.depositarPoup(30)
console.log(joaopaulo.saldoPoup)

// function Estudante(nome, idade, curso) {
//     this.nome = nome
//     this.idade = idade
//     this.curso=curso
//   }
//   var estudante = new Estudante("Bob Drake", 32,"Curso de Javascript" );

//   console.log(estudante)