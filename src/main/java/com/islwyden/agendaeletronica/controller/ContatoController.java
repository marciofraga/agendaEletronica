package com.islwyden.agendaeletronica.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.islwyden.agendaeletronica.resources.Contato;

@RestController
@RequestMapping(value="/contatos")
public class ContatoController {

	@RequestMapping(method = RequestMethod.GET)
	public List<Contato> listar() {
		List<Contato> contatos = new ArrayList<Contato>();
		
		Contato c1 = new Contato("marcio", "999999", "marcio@gmail.com");
		Contato c2 = new Contato("fraga", "8888888", "fraga@gmail.com");
		contatos.add(c1);
		contatos.add(c2);
		return contatos;
	}
	/*
	@Autowired
	private ContatoRepository cr;

	@RequestMapping(value = "/cadastrarAgenda", method = RequestMethod.POST)
    public String adicionaContato(Contato contato, BindingResult result, RedirectAttributes attributes) {
		cr.save(contato);
		return "redirect:/cadastrarAgenda";
	}
	
	@RequestMapping(value ="/cadastrarAgenda", method = RequestMethod.GET)
	public String listaContatos(Model model) {
			
		 List<Contato> listaContatos = cr.findAll();
	         if (listaContatos != null) {
	               model.addAttribute("contatos", listaContatos);
	         }
	         return "index";
	 }
	 */
}
