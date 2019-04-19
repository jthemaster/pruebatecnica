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
public interface AsesorRepository extends Repository<Asesor, Integer > {
    List<Asesor>findAll();
    Asesor findOne(int id);
    Asesor save(Asesor c);
    Asesor delete(Asesor c);
    
}
