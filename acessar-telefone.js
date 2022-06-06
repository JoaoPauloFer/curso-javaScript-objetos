const cliente = {
    nome:"João Paulo",
    idade:20,
    cpf:"12543652266",
    email:"joaopaulo@email.com",
    fones:["5561981324567", "5561985672034"]
  }

  cliente.fones.forEach((fone, index) => console.log(`Telefone ${index + 1}. ${fone}`))