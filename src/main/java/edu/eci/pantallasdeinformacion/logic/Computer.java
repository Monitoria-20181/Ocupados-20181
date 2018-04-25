/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.pantallasdeinformacion.logic;

/**
 *
 * @author monitor
 */
public class Computer {
    private String name;
    private int posX ;
    private int posY;   
    
    public Computer(String name,int posX,int posY){
        this.name=name;
        this.posX=posX;
        this.posY=posY;
    }
    
    public String getName(){
        return name;
    }
    public int getPosX(){
        return posX;
    }
    public int getPosY(){
        return posY;
    }
    public void setName(String name){
        this.name=name;
    }
    public void setPosX(int posX){
        this.posX=posX;
    }
    public void setPosY(int posY){
        this.posY=posY;
    }
}
