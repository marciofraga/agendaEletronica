package com.islwyden.agendaeletronica.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.islwyden.agendaeletronica.resources.Endereco;

@RestController
@RequestMapping (value = "/enderecos")
public class EnderecoController {

	@RequestMapping(method = RequestMethod.GET)
	public List<Endereco> listar() {
		List<Endereco> enderecos = new ArrayList<Endereco>();
		
		Endereco e1 = new Endereco("rua xpto", "2", 65012650, "São Luís", "Maranhão");
		Endereco e2 = new Endereco("rua abcd", "2A", 65012650, "São Luís", "Maranhão");
		
		enderecos.add(e1);
		enderecos.add(e2);
		return enderecos;
	}
}
