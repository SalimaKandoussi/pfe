package com.example.demo.Services;

import com.example.demo.Models.OffreEmploi;
import com.example.demo.Repositories.OffreEmploiRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OffreEmploiService {

    private static final Logger logger = LoggerFactory.getLogger(OffreEmploiService.class); // Création du logger

    @Autowired
    private OffreEmploiRepository repository;

    // Méthode pour ajouter une offre d'emploi
    public OffreEmploi ajouterOffre(OffreEmploi offre) {
        logger.info("Ajout de l'offre d'emploi : {}", offre);  // Log pour l'ajout d'offre
        try {
            OffreEmploi savedOffre = repository.save(offre);
            logger.info("L'offre d'emploi a été ajoutée avec succès : {}", savedOffre);  // Log après succès
            return savedOffre;
        } catch (Exception e) {
            logger.error("Erreur lors de l'ajout de l'offre d'emploi : {}", e.getMessage(), e);  // Log en cas d'erreur
            throw new RuntimeException("Erreur lors de l'ajout de l'offre d'emploi", e);
        }
    }

    // Méthode pour consulter toutes les offres d'emploi
    public List<OffreEmploi> consulterOffres() {
        logger.info("Consultation des offres d'emploi");  // Log pour la consultation
        try {
            List<OffreEmploi> offres = repository.findAll();
            logger.info("Nombre d'offres récupérées : {}", offres.size());  // Log du nombre d'offres récupérées
            return offres;
        } catch (Exception e) {
            logger.error("Erreur lors de la consultation des offres d'emploi : {}", e.getMessage(), e);  // Log en cas d'erreur
            throw new RuntimeException("Erreur lors de la consultation des offres d'emploi", e);
        }
    }
}
