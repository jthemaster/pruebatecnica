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
public class ConsumoServiceImp implements ConsumoService{
    
@Autowired
private ConsumoRepository repositorio;

    @Override
    public List<Consumo> listar() {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
       return repositorio.findAll();
    }

    @Override
    public Consumo listarId(int id) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        return repositorio.findOne(id);
    }

    @Override
    public Consumo add(Consumo c) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        return repositorio.save(c);
    }

    @Override
    public Consumo edit(Consumo c) {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
         return repositorio.save(c);
    }

    @Override
    public Consumo delete(int id) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        Consumo c=repositorio.findOne(id);
        if(c!=null){
            repositorio.delete(c);
        }
        return c;
        
        
    }
}
