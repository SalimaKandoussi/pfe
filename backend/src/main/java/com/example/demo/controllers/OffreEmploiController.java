package com.example.demo.controllers;

import com.example.demo.Models.OffreEmploi;
import com.example.demo.Services.OffreEmploiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/offres")
public class OffreEmploiController {

    @Autowired
    private OffreEmploiService service;

    // Ajouter une offre d'emploi
    @PostMapping("/ajouter")
    public OffreEmploi ajouterOffre(@RequestBody OffreEmploi offre) {
        try {
            return service.ajouterOffre(offre);
        } catch (Exception e) {
            // Gérer les erreurs ici si nécessaire
            throw new RuntimeException("Erreur lors de l'ajout de l'offre d'emploi: " + e.getMessage());
        }
    }

    // Consulter toutes les offres d'emploi
    @GetMapping("/consulter")
    public List<OffreEmploi> consulterOffres() {
        try {
            return service.consulterOffres();
        } catch (Exception e) {
            // Gérer les erreurs ici si nécessaire
            throw new RuntimeException("Erreur lors de la récupération des offres d'emploi: " + e.getMessage());
        }
    }
}
