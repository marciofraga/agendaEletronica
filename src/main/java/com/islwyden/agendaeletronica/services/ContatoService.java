package com.islwyden.agendaeletronica.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.islwyden.agendaeletronica.exception.ObjectNotFoundException;
import com.islwyden.agendaeletronica.repository.ContatoRepository;
import com.islwyden.agendaeletronica.resources.Contato;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;
	
	public List<Contato> buscarTodos() {
		List<Contato> contatos = repository.findAll();
		if(contatos.isEmpty())
			Optional.empty().orElseThrow(() -> new ObjectNotFoundException("Nenhum contato encontrado"));
		return contatos;
	}
	
	public Contato buscar(Long id)  {
		Optional<Contato> obj = repository.findById(id);
		//return obj.orElse(null);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Contato não encontrado"));
	}
	
	public Contato inserir(Contato obj) {
		obj.setId(null);
		return repository.save(obj);
	}
	
	public Contato atualizar(Contato obj) {
		return repository.save(obj);
	}
	
	public void excluir(Long id) {
		repository.deleteById(id);
	}
}
