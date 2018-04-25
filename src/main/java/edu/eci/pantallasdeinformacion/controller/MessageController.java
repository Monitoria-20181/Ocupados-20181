/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.pantallasdeinformacion.controller;

import edu.eci.pantallasdeinformacion.model.ClientMessage;
import edu.eci.pantallasdeinformacion.model.ServerMessage;
import edu.eci.persistencia.Base;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import java.util.ArrayList;
/**
 *
 * @author 2095499
 */

@Controller
public class MessageController {
    @MessageMapping("/message")
    @SendTo("/topic/messages")
    public ServerMessage serverMessage(ClientMessage message) throws Exception {
        Thread.sleep(3000); 
        
        Base b= new Base();
        ArrayList<String> s = b.ejecutarSP();
    
        return new ServerMessage(s);
    }
   }

