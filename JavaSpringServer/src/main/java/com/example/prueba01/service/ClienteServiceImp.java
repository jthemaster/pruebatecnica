/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.service;

import com.example.prueba01.model.*;
import com.example.prueba01.repository.*;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Juan
 */
@Service
public class ClienteServiceImp implements ClienteService{
    
@Autowired
private ClienteRepository repositorio;

    @Override
    public List<Cliente> listar() {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
       return repositorio.findAll();
    }

    @Override
    public Cliente listarId(int id) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        return repositorio.findOne(id);
    }

    @Override
    public Cliente add(Cliente c) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        return repositorio.save(c);
    }

    @Override
    public Cliente edit(Cliente c) {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
         return repositorio.save(c);
    }

    @Override
    public Cliente delete(int id) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        Cliente c=repositorio.findOne(id);
        if(c!=null){
            repositorio.delete(c);
        }
        return c;
        
        
    }
    
}
