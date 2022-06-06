const cliente = {
    nome:"João Paulo",
    idade:20,
    cpf:"12543652266",
    email:"joaopaulo@email.com",
    fones:["5561981324567", "5561985672034"]
  }

  cliente.dependentes = {
      nome: "Sara",
      parentesco: "filha",
      dataNasc: "20/03/2010"
  }

  console.log(cliente)

  cliente.dependentes.nome = "Sara Silva"

  console.log(cliente)