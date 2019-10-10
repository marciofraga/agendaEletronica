package com.islwyden.agendaeletronica.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.islwyden.agendaeletronica.resources.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long>{

	  List<Contato> findByNome(String nome);
	  
	  List<Contato> findByTelefone(String telefone);
	  
	  Contato findByEmail(String email);

}
