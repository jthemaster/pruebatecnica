/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.controller;


import com.example.prueba01.model.*;
import com.example.prueba01.service.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Juan
 */

@RestController
@RequestMapping( {"/clientes"})
@CrossOrigin(origins = {"http://angular-env.dc33cxe7jv.us-west-1.elasticbeanstalk.com", "http://localhost:4200","http://localhost:8080","http://localhost:80"},maxAge = 3600)
public class ClienteController {
    
    @Autowired
    ClienteService service;
    
    @GetMapping
    public List<Cliente>listar(){
        return service.listar();
    }
    
    @PostMapping
    public Cliente agregar(@RequestBody Cliente c) {
        return service.add(c);
        
    }
    
    @GetMapping(path = {"/{id}"})
    public Cliente listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Cliente editar(@RequestBody Cliente c,@PathVariable("id") int id){
        c.setId(id);
        return service.edit(c);
        
    }
    
    @DeleteMapping(path = {"/{id}"})
    public Cliente delete(@PathVariable("id") int id){
        return service.delete(id);
        
    }
    
    
}
