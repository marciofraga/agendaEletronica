// variável que representa a linha selecionada
var $dt;

//função para criar uma nova linha
function adicionar(contato) {
	var linha = $('#linha dt:last-child').clone();
		
	$('.nome', linha).html(contato.nome);
	$('.telefone', linha).html(contato.telefone);
	$('.email', linha).html(contato.email);
	$('.excluir', linha).attr('data-id', contato.id).attr('hidden', false).html('Excluir');
	$('.selecionar', linha).attr('hidden', false).html('Selecionar');
	$('#linha').append(linha);
};

// JQuery CRUD para o recurso contato
$(document).ready(function() {
	// realiza a listagem de todos os contatos
	$.ajax({
		type:'GET',
		url: '/contatos',
		success: function(contatos) {
			contatos.forEach(function(contato, indice) {
				console.log(contato);
				adicionar(contato);
			});
		},
		error: function() {
			alert("erro ao listar contatos");
		}
	});
	
	// realiza o cadastro de um contato
	$('#enviar').on('click', function() {
		var contato = {
			nome: $('#nome').val(),
			telefone: $('#telefone').val(),
			email: $('#email').val()
		};
		
		$.ajax({
			method: 'POST',
			url: '/contatos',
			contentType: 'application/json',
			data: JSON.stringify(contato),
			success: function(contato) {
				console.log(contato);
				adicionar(contato);
			},
			error: function() {
				console.log(contato);
				alert('erro ao cadastrar contato');
			}
		});
	});
	
	// realiza a exclusão de um contato
	$('#lista').delegate('.excluir', 'click', function() {
		
		$dt = $(this).closest('dt');
		
		$.ajax({
			method: 'DELETE',
			url: '/contatos/' + $(this).attr('data-id'),
			success: function() {
				$dt.fadeOut(200, function() {
					$(this).remove();
				});
			},
			error: function() {
				alert("Erro ao excluir contato");
			}
		});
	});
	
	// realiza a seleção de um contato a ser alterado
	$('#lista').delegate('.selecionar', 'click', function() {
		
		$dt = $(this).closest('dt');
		
		$('#nome').val($dt.find('span.nome').html());
		$('#telefone').val($dt.find('span.telefone').html());
		$('#email').val($dt.find('span.email').html());
		$('#editar').attr('data-id', $dt.find('button.excluir').attr('data-id'));
	});
	
	//envia a requisição para alterar um contato em específico
	$('#editar').on('click', function() {
		var $editar = $(this).closest('button');
		
		var contato = {
				nome: $('#nome').val(),
				telefone: $('#telefone').val(),
				email: $('#email').val()
			};
		
		$.ajax({
			method: 'PUT',
			url: '/contatos/' + $(this).attr('data-id'),
			contentType: 'application/json',
			data: JSON.stringify(contato), 
			success: function(contato) {
				
				$dt.find('span.nome').html(contato.nome);
				$dt.find('span.telefone').html(contato.telefone);
				$dt.find('span.email').html(contato.email);
				$dt.find('button.excluir').attr('data-id', contato.id);
				
				$('#nome').val("");
				$('#telefone').val("");
				$('#email').val("");
				$('#editar').attr("");
				
			},
			error: function() {
				alert("Erro ao alterar contato");
			}
	});
	});
});