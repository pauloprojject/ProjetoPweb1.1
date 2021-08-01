class ClienteController{
    private inputId: HTMLInputElement;
    private inputNome: HTMLInputElement;
    private inputCpfInserir: HTMLInputElement;
    private inputCpfPesquisar: HTMLInputElement;
    private inputCpfRemover: HTMLInputElement;
    private clientes:Clientes;

    constructor(){
        this.inputId = document.querySelector('#contaId');
        this.inputNome = document.querySelector('#nome');
        this.inputCpfInserir = document.querySelector('#cpf');
        this.inputCpfPesquisar = document.querySelector('#cpfPesquisar');
        this.inputCpfRemover = document.querySelector('#cpfRemover');
        this.clientes = new Clientes();
    }

    inserir1(e:Event){
        e.preventDefault();
        let conta = new Conta(this.inputId.value,0);
        let cliente = new Cliente(this.inputNome.value, this.inputCpfInserir.value, conta);
        this.clientes.inserir(cliente);
        this.listar1()
    }

    listar1(){
        let div = document.querySelector('#listar1');
        div.textContent = '';
        this.clientes.listar().forEach(cliente => div.insertAdjacentHTML('beforeend',`${cliente.nome}, ${cliente.cpf}, ${cliente.conta.numero}<br>`));
    }

    remover(){
        this.clientes.remover(this.inputCpfRemover.value);
        this.listar1()
    }

    pesquisar(){
        let div = document.querySelector('#listar1');
        div.textContent = '';
        let cliente = this.clientes.pesquisar(this.inputCpfPesquisar.value);
        div.insertAdjacentHTML('beforeend',`${cliente.nome}, ${cliente.cpf}, ${cliente.conta.numero}<br>`)
    }
}