/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.pantallasdeinformacion.services;

import edu.eci.pantallasdeinformacion.logic.Computer;
import edu.eci.pantallasdeinformacion.logic.Laboratory;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author monitor
 */
public class laboratoryServicesImpl implements laboratoryServices {

    private List<Laboratory> laboratories;
    private static laboratoryServicesImpl labService=null;
    private static final int LAB_CANT=8;
    private static final String[] LAB_NAMES={"Software","Plataformas","Redes","Multimedia","B0","Interactiva", "Desarrollo de videojuegos", "Fundamentos de computacion"};
    private static final HashMap<String, Integer> CANT_COMPUTERS = new HashMap<String, Integer>() {
        {
            //TODO Actualizar la información de los laboratorios con el numero de computadores a disposicion correctos.
            put("Software",24);
            put("Plataformas",21);
            put("Redes",12);
            put("Multimedia",12);
            put("B0",24);
            put("Interactiva",7);
            put("Dessarrollo de videojuegos", 16);
            put("Fundamentos de computacion", 24);
        }
    };
    
            
    private laboratoryServicesImpl() {
        laboratories= new ArrayList<>();
    }

    @Override
    public laboratoryServices getInstance() {
        if(labService==null){
            labService= new laboratoryServicesImpl();
        }
        return labService;
    }

    @Override
    public void createLaboratories() {
        for(int i=0; i< LAB_CANT;i++){
            Laboratory lab=new Laboratory(LAB_NAMES[i]);
            for (int j=0;j < CANT_COMPUTERS.get(LAB_NAMES[i]);j++ ){
                lab.addComputer(new Computer(LAB_NAMES[i]+Integer.toString(j),0,0));
            }
        }
    }

}
