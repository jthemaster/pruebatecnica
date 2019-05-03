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
public class TarjetaServiceImp implements TarjetaService{
    
@Autowired
private TarjetaRepository repositorio;

@Autowired
private TarjetaClienteRepository repositoriocliente;
/*@Autowired
private TarjetasClienteRepository repositoriocliente;*/

    @Override
    public List<Tarjeta> listar() {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
       return repositorio.findAll();
    }

    @Override
    public Tarjeta listarId(String id) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        return repositorio.findOne(id);
    }
    
    @Override
    public List<Tarjeta> listartarjetas_id(int cliente_id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        //return repositorio.findCardsbyCliente(cliente_id);
        //return repositoriocliente.findAllbycliente(cliente_id);
    }

    @Override
    public Tarjeta add(Tarjeta c) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        return repositorio.save(c);
    }

    @Override
    public Tarjeta edit(Tarjeta c) {
       // throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
         return repositorio.save(c);
    }

    @Override
    public Tarjeta delete(String id) {
        //throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
        Tarjeta c=repositorio.findOne(id);
        if(c!=null){
            repositorio.delete(c);
        }
        return c;
        
        
    }
    
}
