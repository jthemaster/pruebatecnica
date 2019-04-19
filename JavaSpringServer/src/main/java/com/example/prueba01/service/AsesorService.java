/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.service;

import com.example.prueba01.model.*;
import java.util.List;

/**
 *
 * @author Juan
 */
public interface AsesorService {
    List<Asesor>listar();
    Asesor listarId(int id);
    Asesor add(Asesor c);
    Asesor edit(Asesor c);
    Asesor delete(int id);
}
