/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.pantallasdeinformacion.model;

import java.util.ArrayList;

/**
 *
 * @author 2095499
 */
public class ServerMessage {
    
    ArrayList<String> content = new ArrayList();
    //private String content;
    public ServerMessage(){
    }
    public ServerMessage( ArrayList<String>  content) {
    this.content = content;
    }
    public  ArrayList<String>  getContent() {
    return content;
    }
}
