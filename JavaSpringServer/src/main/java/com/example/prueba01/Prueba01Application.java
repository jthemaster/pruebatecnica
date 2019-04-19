package com.example.prueba01;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Prueba01Application extends SpringBootServletInitializer { 
	public static void main(String[] args) {
		SpringApplication.run(Prueba01Application.class, args);
	}

}