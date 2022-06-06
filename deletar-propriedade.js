const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

console.log(objPersonagem)

   delete objPersonagem.aliado

console.log(objPersonagem.aliado)

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado)
console.log(objPersonagem.status)

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp)
console.log(delPropInexistente)
console.log(objPersonagem)