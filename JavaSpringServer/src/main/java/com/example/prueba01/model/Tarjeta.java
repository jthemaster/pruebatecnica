/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.model;

import javax.persistence.*;

/**
 *
 * @author Juan
 */
@Entity
@Table(name = "tarjetas")
public class Tarjeta {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column
    private int cliente_id;
    @Column
    private int ccv;
    @Column
    private String tipo;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public int getCliente_id() {
        return cliente_id;
    }

    public void setCliente_id(int cliente_id){
        this.cliente_id = cliente_id;
    }

    public int getCcv() {
        return ccv;
    }

    public void setCcv(int ccv) {
        this.ccv = ccv;
    }
    
    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

}
