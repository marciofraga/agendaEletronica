package com.islwyden.agendaeletronica.exception;

import java.io.Serializable;

public class TemplateError implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Integer status;
	private Long timeStamp;
	private String mensagem;
	
	public TemplateError(Integer status, Long timeStamp, String mensagem) {
		super();
		this.status = status;
		this.timeStamp = timeStamp;
		this.mensagem = mensagem;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Long getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Long timeStamp) {
		this.timeStamp = timeStamp;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
}
