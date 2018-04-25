/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.pantallasdeinformacion.logic;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author monitor
 */
public class  Laboratory {
    private List<Computer> computers ;
    private String name;
    
    public Laboratory(String name){
        computers=new ArrayList<>();
        this.name=name;
    }
    
    public void addComputer(Computer comp){
        if(!computers.contains(comp)){
            computers.add(comp);
        }
    }
    public void removeComputer(Computer comp){
        if(computers.contains(comp)){
            computers.remove(comp);
        }
    }
    public String getName(){
        return name;
    }
    public List<Computer> getComputers(){
        return computers;
    }
    public void setName(String name){
        this.name=name;
    }
    public void setComputers(List<Computer> computers){
        this.computers=computers;
    }
}
