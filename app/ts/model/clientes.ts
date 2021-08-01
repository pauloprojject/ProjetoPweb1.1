class Clientes{
    private _clientes:Array<Cliente>;

    inserir(cliente:Cliente):void{
        this._clientes.push(cliente);
    }
    
    pesquisar(cpf:string): Cliente{
        return this._clientes.find(cliente => cliente.cpf === cpf)
    }

    listar():Array<Cliente>{
        return this._clientes;
    }

    remover(cpf:string):void{
        const clienteRemover = this.pesquisar(cpf);
        if(clienteRemover){
            const indiceCliente = this._clientes.indexOf(clienteRemover);
            if(indiceCliente > -1){
                this._clientes.splice(indiceCliente,1);
            }
        }
    }
    constructor(){
        this._clientes = new Array<Cliente>();
    }
}