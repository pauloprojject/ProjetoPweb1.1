let contaController = new ContaController();
//let clienteController = new ClienteController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const rep = new Clientes();

const cli1 = new Cliente('Gustavo', '111', c1);
const cli2 = new Cliente('Wagner', '222', p1);
const cli3 = new Cliente('Diniz', '333', cb1);

rep.inserir(cli1);
rep.inserir(cli2);
rep.inserir(cli3);

console.log(rep.listar());
rep.remover(cli3.cpf)
console.log(rep.listar());
console.log(rep.pesquisar(cli2.cpf))