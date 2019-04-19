/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.model;

import java.text.DateFormat;
import javax.persistence.*;

/**
 *
 * @author Juan
 */
@Entity
@Table(name = "consumos")
public class Consumo {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int tarjeta_id;
    @Column
    private String descripcion;
    @Column
    private double monto;
    @Column
    private DateFormat fecha;


    public int getId() {
        return tarjeta_id;
    }

    public void setId(int tarjeta_id) {
        this.tarjeta_id = tarjeta_id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getMonto() {
        return monto;
    }

    public void setMonto(double monto) {
        this.monto = monto;
    }

    public DateFormat getFecha() {
        return fecha;
    }

    public void setCiudad(DateFormat fecha) {
        this.fecha = fecha;
    }

    
}