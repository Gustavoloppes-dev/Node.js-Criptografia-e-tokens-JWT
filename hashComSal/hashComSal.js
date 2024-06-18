import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString("hex");

  const senhaHasheada = scryptSync(senha, sal, 64).toString("hex");

//   console.log(`${sal}:${senhaHasheada}`);
  return `${sal}:${senhaHasheada}`;
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(":");
  }
  autentica(nome, senha) {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      const hashReal = Buffer.from(this.hash, "hex");

      const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

      if (hashesCorrespondem) {
        console.log("Usuário autenticado com sucesso");
        return true;
      }
    }
    console.log("Usuário ou senha incorretos.");
    return false;
  }
}

const gl = new Usuario("Gustavo Lopes", "senhaSecreta");

console.log(gl);

//Teste true
gl.autentica("Gustavo Lopes", "senhaSecreta");

//Teste false
gl.autentica("Gustavo Lopes", "senhaSecretas")
