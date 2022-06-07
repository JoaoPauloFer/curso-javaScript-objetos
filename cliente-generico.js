function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo = saldo + valor
    }
}

const joao = new Cliente("João Paulo", "1234567", "joao@gmail.com", 100)

console.log(joao)