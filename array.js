    // Array representando os itens do pedido
const pedido = [
    {nome:"Hambúrguer Artesanal", preço: 28.50, quantidade: 2},
    {nome:"Batata Frita Rustica", preço: 14.00, quantidade: 3},
    {nome:"Refrigerante 600ml", preço: 8.00, quantidade: 4},
    {nome:"Milk-shake de Ovomaltine", preço: 18.00, quantidade: 1}
]

    // Variáveis para controlar os totais
    let valorTotalPedido = 0;
    let itemMaiorValor = null;
    let maiorValorTotalItem = 0;

console.log("=== COMPROVANTE DO PEDIDO ===");

    // Percorrendo todos os itens com for...of
    for (const item of pedido){

    // Calculando o valor total do item
    const valorTotalItem = item.preço * item.quantidade;

    // Exibindo nome, quantidade e valor total no console
console.log(`${item.nome} x${item.quantidade} - R$ ${valorTotalItem.toFixed(2)}`);

    // Soma ao total geral do pedido
    valorTotalPedido += valorTotalItem;

    // Verificando qual item teve o maior valor total
    if (valorTotalItem > maiorValorTotalItem){
    maiorValorTotalItem = valorTotalItem;
    itemMaiorValor = item;
  }
}

    // Exibição dos resultados finais
console.log("------------------------------");
console.log(`Valor total do pedido: R$ ${valorTotalPedido.toFixed(2)}`);
console.log(`Item de maior valor total: ${itemMaiorValor.nome} (R$ ${maiorValorTotalItem.toFixed(2)})`);
