package com.common.webapp.controller;

import javax.xml.ws.http.HTTPException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.common.webapp.entity.TestEntity;



@Controller
@RequestMapping("/home")
public class HomeController{
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value="/test", method=RequestMethod.GET)
	public @ResponseBody TestEntity test() throws HTTPException{
		TestEntity te = new TestEntity();
		te.setTest("Testing Succeeded, Backend Ready for Development!!!");
		return te;
	}
	
	public Logger getLogger(){
		return logger;
	}
}
