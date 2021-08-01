class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = new Array();
    }
    inserir(cliente) {
        this.dependentes.push(cliente);
    }
}
