package com.example.demo.Models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "offres_emplois")
public class OffreEmploi {
    @Id
    private String id;
    private String region;
    private String ville;
    private String domaine;

    // Getters et Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }

    public String getVille() { return ville; }
    public void setVille(String ville) { this.ville = ville; }

    public String getDomaine() { return domaine; }
    public void setDomaine(String domaine) { this.domaine = domaine; }
}

