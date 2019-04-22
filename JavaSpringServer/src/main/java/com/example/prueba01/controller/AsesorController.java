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
/*@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)*/
@RestController
@RequestMapping( {"/asesores"})
@CrossOrigin(origins = "http://angular-env.dc33cxe7jv.us-west-1.elasticbeanstalk.com",maxAge = 3600)
public class AsesorController {
    
    @Autowired
    AsesorService service;
    
    @GetMapping
    public List<Asesor>listar(){
        return service.listar();
    }
    
    @PostMapping
    public Asesor agregar(@RequestBody Asesor c) {
        return service.add(c);
        
    }
    
    @GetMapping(path = {"/{id}"})
    public Asesor listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Asesor editar(@RequestBody Asesor c,@PathVariable("id") int id){
        c.setId(id);
        return service.edit(c);
        
    }
    
    @DeleteMapping(path = {"/{id}"})
    public Asesor delete(@PathVariable("id") int id){
        return service.delete(id);
        
    }
    
    
}
