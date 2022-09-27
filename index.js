function sequenciaLogica(){
	let palavra = prompt("Digite a palavra: ");
	let posicaoDaLetra = Number(prompt("Digite o numero da posição da letra: "))
	
	if(posicaoDaLetra % palavra.length === 0){
		return palavra.substr(palavra.length -1).toUpperCase();
	}else{
		let arrayDePalavra = palavra.split('');
		return arrayDePalavra[posicaoDaLetra % palavra.length -1].toUpperCase();
	}
	
}



function calculoJuros(){
	console.log("========================================");
	console.log("|      CALCULADORA DE PORCENTAGEM      |");
	console.log("========================================");
	console.log("|			ESCOLHA UMA OPÇÃO	        |");
	console.log("|	OPÇÃO [1] = VALOR É % DE QUANTO?    |");
	console.log("|	OPÇÃO [2] = QUANTO É % DE VALOR?    |");
	console.log("|	OPÇÃO [3] = QUANTO É VALOR + %?     |");
	console.log("|	OPÇÃO [4] = QUANTO É OPÇÃO [1] + %? |");
	console.log("========================================");
	console.log("DIGITE A OPÇÃO: ");
	
	let opcaoSelecionada = Number(prompt('Escolha entre [1 - 4]:'));
	let valorDecimal = Number(document.getElementById('valor-C2').value);
	let valorPercentual = Number(document.getElementById('porcentagem-C2').value);
	let valorPorcentagemAdicional;
	let mostrarResultado;  
	
	switch(opcaoSelecionada){
		case 3:
			resultadoPorcentagemCase3 = valorDecimal + (valorPercentual / 100 * valorDecimal);
			mostrarResultado = document.getElementById('mostrarResultado').innerHTML = resultadoPorcentagemCase3;
			break;
		case 4:
			resultado = 100 * (valorDecimal / valorPercentual);
			let valorPorcentagemAdicional = Number(prompt("Digite o valor da porcentagem"));
			let resultadoPorcentagemCase4 = resultado + ( valorPorcentagemAdicional / 100 * resultado);
			cmostrarResultado = document.getElementById('.mostrarResultado').innerHTML = resultadoPorcentagemCase4;
			break; 
		default:
		console.log('Digite um numero entre [1 - 4] ');
			
	}
}


const simuladorPorcentagemCalculo1 = () => {
	let inputValorDecimal = Number(document.querySelector('#valor-C1').value);
	let inputvalorPercentual = Number(document.querySelector('#porcentagem-C1').value);

	let resultadoPorcentagemCase1 = 100 * (inputValorDecimal / inputvalorPercentual);
	mostrarResultado = document.getElementById("mostrarResultado").innerHTML = `${resultadoPorcentagemCase1}`;
}
const simuladorPorcentagemCalculo2 = () => {
	let inputValorDecimal = Number(document.querySelector('#valor-C2').value);
	let inputvalorPercentual = Number(document.querySelector('#porcentagem-C2').value);

	let resultadoPorcentagemCase2 = inputvalorPercentual / 100 * inputValorDecimal;
		mostrarResultado = document.getElementById('mostrarResultado-C2').innerHTML =  `${resultadoPorcentagemCase2}`;
}