import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrente = new ContaCorrente(0, cliente1, 1001);

contaCorrente.depositar(500);
contaCorrente.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 9001);

console.log(contaCorrente);
console.log(contaPoupanca);