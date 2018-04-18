/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.persistencia;


import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Contabilidad
 */
public class base {
 
    Connection con ;
    Statement stmt = null;
    ResultSet rs = null;
    
    public base ()  {
       
    }
    
    public ArrayList<String> ejecutarSP(          ) {
        ArrayList<String> equipos = new ArrayList<>();
        try {
            
            Properties propiedades = new Properties();
            InputStream entrada = null;
            String servidor;
            String puerto;
            String namebd;
            String user;
            String password;

            

       entrada = new FileInputStream("C:\\Users\\Contabilidad\\Documents\\2016-2\\Pgr2\\pruebas html\\SQLQUERY\\conexion.txt");
       propiedades.load(entrada);
       
       servidor = propiedades.getProperty("servidor");
       puerto = propiedades.getProperty("puerto");
       namebd = propiedades.getProperty("namebd");
       user = propiedades.getProperty("user");
       password = propiedades.getProperty("password");
       
       System.out.println("jdbc:mysql://"+servidor+""+puerto+"/"+namebd+"?user="+user+"&password="+password);

            
            
           Class.forName("com.mysql.jdbc.Driver");
           con = DriverManager.getConnection("jdbc:mysql://"+servidor+""+puerto+"/"+namebd+"?user="+user+"&password="+password);
             //con = DriverManager.getConnection("jdbc:mysql://laboratorio.is.escuelaing.edu.co/control?user=controlr&password=PC-Libres@");
           
      
          
          Calendar c1 = Calendar.getInstance(); 
          String dia = Integer.toString(c1.get(Calendar.DATE));
          String mes = Integer.toString(c1.get(Calendar.MONTH));
          
            System.out.println(mes);
          String annio = Integer.toString(c1.get(Calendar.YEAR));
          int hora= c1.get(Calendar.HOUR_OF_DAY);
          int minutos= c1.get(Calendar.MINUTE);
          int segundos = c1.get(Calendar.SECOND);
          String hora1 = "";
          hora1 = String.valueOf(hora);
          String minutos1= "";
          minutos1 = String.valueOf(minutos);
          String segundos1 = "";
          segundos1 = String.valueOf(segundos);
  
            //Statement stmt = con.createStatement();
            //String rs = " {call SP_GETEQUIPOSOCUPADOS('2016-08-10 18:19:03')}" ;
            String rs = " {call SP_GETEQUIPOSOCUPADOS('"+annio+"-"+mes+"-"+dia+" "+hora1+":"+minutos1+":"+segundos1+"')}" ;
            System.out.println(rs);
            System.out.println("cada 10 segundos");
            CallableStatement cSP = con.prepareCall(rs);
            ResultSet r = cSP.executeQuery();
            
            while(r.next()){
                System.out.println(r.getString(1));
                equipos.add(r.getString(1));
            }
            
        } catch (Exception ex) {
            Logger.getLogger(base.class.getName()).log(Level.SEVERE, null, ex);
        }
        return equipos;
    }
}
