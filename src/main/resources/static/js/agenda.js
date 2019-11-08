var line;

function adicionar(contato) {
	var linha = $('#linha tr:last-child').clone();
		
	$('.nome', linha).html(contato.nome);
	$('.telefone', linha).html(contato.telefone);
	$('.email', linha).html(contato.email);
	$('.excluir', linha).attr('data-id', contato.id).attr('hidden', false).html('Excluir');
	$('.selecionar', linha).attr('hidden', false).html('Selecionar');
	$('#linha').append(linha);
};

$(document).ready(function() {
	
	$.ajax({
		type: 'GET',
		url: '/contatos',
		success: function(contatos) {
			contatos.forEach(function(contato, indice) {
				console.log(contato);
				adicionar(contato);
			})
		},
		error: function() {
			alert("Erro ao listar contatos");
		}
	});
	
	$('#enviar').on('click', function() {
		
		var contato = {
				nome: $('#nome').val(),
				email: $('#email').val(),
				telefone: $('#telefone').val()
		};
		
		$.ajax({
			type: 'POST',
			url: '/contatos',
			data: JSON.stringify(contato),
			dataType: 'json',
			contentType: 'application/json',
			success: function(contato) {
				adicionar(contato);
			},
			error: function() {
				alert("Erro ao cadastrar contato");
			}
		});
	});
	
	$('#lista').delegate('.excluir', 'click', function() {
		
		line = $(this).closest('tr');
		
		$.ajax({
			type: 'DELETE',
			url: '/contatos/' + $(this).attr('data-id'),
			success: function() {
				line.fadeOut(300, function() {
					line.remove();
				})
				
			},
			error: function() {
				alert("erro ao excluir contato");
			}
		});
	});
	
	$('#lista').delegate('.selecionar', 'click', function() {
		line = $(this).closest('tr');
		
		$('#nome').val(line.find('th.nome').html());
		$('#email').val(line.find('td.email').html());
		$('#telefone').val(line.find('td.telefone').html());
	});
	
	$('#editar').on('click', function() {
		
		var contato = {
			nome: $('#nome').val(),
			email: $('#email').val(),
			telefone: $('#telefone').val()
		};
		
		$.ajax({
			type: 'PUT',
			url: '/contatos/' + line.find('button.excluir').attr('data-id'),
			data: JSON.stringify(contato),
			contentType: 'application/json',
			success: function(contato) {
				line.find('th.nome').html(contato.nome);
				line.find('td.telefone').html(contato.telefone);
				line.find('td.email').html(contato.email);
			},
			error: function() {
				alert("erro ao editar contato");
			}
		});
	});
});