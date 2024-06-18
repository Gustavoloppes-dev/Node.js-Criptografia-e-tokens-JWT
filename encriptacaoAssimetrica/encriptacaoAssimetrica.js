import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,

  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

// console.log("chave publica: ", publicKey);
// console.log("chave privada: ", privateKey);

const dadosCriptografados = publicEncrypt(
  publicKey,
  Buffer.from("Mensagem Secreta...")
);

console.log(dadosCriptografados.toString("hex"));

// ---------- Transmissão ----------

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados: ${dadosDecifrados.toString('utf-8')}`);