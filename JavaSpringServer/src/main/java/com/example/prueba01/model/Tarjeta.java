/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.prueba01.model;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author Juan
 */
@Entity
@Table(name = "tarjetas")
public class Tarjeta {
    /*@GeneratedValue(strategy = GenerationType.IDENTITY)*/
   
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    @Column
    private int cliente_id;
    @Column
    private int ccv;
    @Column
    private String tipo;


    public String getId() {
        return id;
    }

    public void setId(String id) {
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
