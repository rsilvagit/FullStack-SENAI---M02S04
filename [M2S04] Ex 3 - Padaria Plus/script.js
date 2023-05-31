
  class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.cliente = '';
      this.caixa = [];
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const produto = {
        codigoBarra: codigoBarra,
        preco: preco,
        nome: nome,
        quantidade: 0
      };
      this.estoque.push(produto);
    }
  
    iniciarAtendimento(cliente) {
      this.cliente = cliente;
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find(item => item.codigoBarra === codigoBarra);
      if (produto) {
        produto.quantidade += quantidade;
        this.caixa.push(produto);
      } else {
        console.log('Produto não encontrado no estoque.');
      }
    }
  
    calcularValorTotal() {
      let total = 0;
      for (const produto of this.caixa) {
        total += produto.preco * produto.quantidade;
      }
      return total;
    }
  
    listarProdutosComprados() {
      const produtosComprados = this.caixa.map(produto => produto.nome);
      return produtosComprados;
    }
  
    fecharConta(dinheiro) {
      const total = this.calcularValorTotal();
      const troco = dinheiro - total;
      if (troco >= 0) {
        console.log(`Cliente:${this.cliente}`);
        console.log('Produtos comprados:', this.listarProdutosComprados());
        console.log(`Total da Total: R$${total.toFixed(2)}`);
        console.log(`Dinheiro Recebido: R$${dinheiro.toFixed(2)}`);
        console.log(`Troco: R$${troco.toFixed(2)}`);
        this.caixa = [];
      } else {
        console.log('Dinheiro insuficiente para pagar a conta.');
      }
    }
  }
  
  const caixa = new CaixaRegistradora();
  caixa.adicionarProduto(1, 10.99, 'Torta Fria');
  caixa.adicionarProduto(2, 28.49, 'Torta Marta Rocha');
  caixa.adicionarProduto(3, 35.49, 'Torta Brigadeiro');
  caixa.adicionarProduto(4, 30.49, 'Torta Morango com Nata');
  caixa.adicionarProduto(5, 5.49, 'Café Expresso');
  caixa.iniciarAtendimento('Pedro');
  caixa.adicionarItem(1, 2);
  caixa.adicionarItem(3, 1);
  caixa.adicionarItem(2,4);
  caixa.adicionarItem(2, 5);
  
  caixa.fecharConta(650);
  