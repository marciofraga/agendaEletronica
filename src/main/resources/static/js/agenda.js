$(document).ready(function() {
	listarTodos();
	consultaContato(1); // 1 é o identificador do contato que deseja ser consultado
});


function listarTodos() {
	$.get( "http://localhost:8080/contatos", function(data){
		
		var contatos = data;
		data.forEach(function(contato, indice) {
			console.log(data);
			adicionar(data);
		});
		
	});	
}

function consultaContato(id) {
	$.get( "http://localhost:8080/contatos/" + id, function(data){
		console.log(data);
		adicionar(data);
	});	
}

function adicionar(contato) {
	var linha = $('#linha dt:last-child').clone();
		
	$('.nome', linha).html(contato.nome);
	$('.telefone', linha).html(contato.telefone);
	$('.email', linha).html(contato.email);
	
	$('#linha').append(linha);
};