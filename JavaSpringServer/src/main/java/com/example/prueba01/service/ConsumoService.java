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
public interface ConsumoService {
    List<Consumo>listar();
    Consumo listarId(int id);
    Consumo add(Consumo c);
    Consumo edit(Consumo c);
    Consumo delete(int id);
}
