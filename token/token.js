import jwt from "jsonwebtoken";

const chaveSecreta = "O Bruce Wayne é o Batman";

const token = jwt.sign(
  {
    apelido: "Morcego",
    cidade: "Gothan",
  },
  chaveSecreta
);

console.log(token);


const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);