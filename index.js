
const simuladorPorcentagemCalculo1 = () => {
	let inputValorDecimal = Number(document.querySelector('#valor-C1').value);
	let inputvalorPercentual = Number(document.querySelector('#porcentagem-C1').value);

	let resultadoPorcentagemCase1 = (100 * (inputValorDecimal / inputvalorPercentual)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	mostrarResultado = document.getElementById("mostrarResultado-C1").innerHTML = `${resultadoPorcentagemCase1}`;
}

const simuladorPorcentagemCalculo2 = () => {
	let inputValorDecimal = Number(document.querySelector('#valor-C2').value);
	let inputvalorPercentual = Number(document.querySelector('#porcentagem-C2').value);

	let resultadoPorcentagemCase2 = (inputvalorPercentual / 100 * inputValorDecimal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	mostrarResultado = document.getElementById('mostrarResultado-C2').innerHTML =  `${resultadoPorcentagemCase2}`;
}

const simuladorPorcentagemCalculo3 = () => {
	let inputValorDecimal = Number(document.querySelector('#valor-C3').value);
	let inputvalorPercentual = Number(document.querySelector('#porcentagem-C3').value);

	let resultadoPorcentagemCase3 = (inputValorDecimal + (inputvalorPercentual / 100 * inputValorDecimal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	mostrarResultado = document.getElementById('mostrarResultado-C3').innerHTML = resultadoPorcentagemCase3;
}

const simuladorPorcentagemCalculo4 = () => {
	let inputValorDecimal = Number(document.querySelector('#valor-C4').value);
	let inputvalorPercentual = Number(document.querySelector('#porcentagem-C4').value);
	let valorPorcentagemAdicional = Number(document.querySelector('#porcentagem-adicional-C4').value)


	let resultado = 100 * (inputValorDecimal / inputvalorPercentual);
	let resultadoPorcentagemCase4 = (resultado + ( valorPorcentagemAdicional / 100 * resultado)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
	mostrarResultado = document.getElementById('mostrarResultado-C4').innerHTML = resultadoPorcentagemCase4;
}