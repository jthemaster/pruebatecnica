/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.model;


import java.util.Date;
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
    private int id;
    @Column
    private String tarjeta_id;
    @Column
    private String descripcion;
    @Column
    private double monto;
    @Column
    private Date fecha;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
     public String getTarjeta_id() {
        return tarjeta_id;
    }

    public void setTarjeta_id(String tarjeta_id) {
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

    public Date getFecha() {
        return fecha;
    }

    public void setCiudad(Date fecha) {
        this.fecha = fecha;
    }
    
}
