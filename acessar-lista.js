const cliente = {
  nome:"João Paulo",
  idade:20,
  cpf:"12543652266",
  email:"joaopaulo@email.com"
}

                //0     //1
const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])