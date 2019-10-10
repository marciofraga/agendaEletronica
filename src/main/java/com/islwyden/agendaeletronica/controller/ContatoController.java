package com.islwyden.agendaeletronica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.islwyden.agendaeletronica.repository.ContatoRepository;
import com.islwyden.agendaeletronica.resources.Contato;

@Controller
public class ContatoController {

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
}
