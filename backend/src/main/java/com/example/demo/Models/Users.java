package com.example.demo.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user") // Nom de la collection MongoDB

public class Users {

    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private double progression;
    private boolean se_diplome;
    private boolean se_bloque;
    private String type;
    private String localisation;

    // Getters et setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public double getProgression() {
        return progression;
    }
    public void setProgression(double progression) {
        this.progression = progression;
    }

    public boolean getSeDiplome() {
        return se_diplome;
    }
    public void setSeDiplome(boolean se_diplome) {this.se_diplome = se_diplome; }

    public boolean getSeBloque() {
        return se_bloque;
    }
    public void setSeBloque(boolean se_bloque) {this.se_bloque = se_bloque; }

    public String getType() {
        return type;
    }
    public void setType(String type) {this.type = type; }

    public String getLocalisation() {
        return localisation;
    }
    public void setLocalisation(String localisation) {this.localisation = localisation; }
}
