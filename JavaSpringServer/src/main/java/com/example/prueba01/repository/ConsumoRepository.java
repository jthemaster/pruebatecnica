/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.repository;


import com.example.prueba01.model.*;
import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Juan
 */
public interface ConsumoRepository extends Repository<Consumo, Integer > {
    List<Consumo>findAll();
    Consumo findOne(int id);
    Consumo save(Consumo c);
    Consumo delete(Consumo c);
    
}
