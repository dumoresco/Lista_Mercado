
var product = document.getElementById('product');
var price = document.getElementById('price');
var qtd = document.getElementById('qtd');
var texto = document.getElementById('texto');

var arrayProduct = new Array();
var arrayPrice = new Array();
var arrayQtd = new Array();

function adicionar(){

	arrayProduct.push(product.value);
	arrayPrice.push(price.value);
	arrayQtd.push(qtd.value);

	arrayProduct.sort();
	arrayPrice.sort();
	arrayQtd.sort();

	produto.value = '';
	price.value = '';
	qtd.value = '';

	texto.innerHTML = arrayProduct.join("<br>");
}