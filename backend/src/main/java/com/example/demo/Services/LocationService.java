package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class LocationService {

    private static final Logger logger = LoggerFactory.getLogger(LocationService.class);

    @Value("${here.api.key}")
    private String apiKey;

    public String getAddress(double latitude, double longitude) {
        String url = String.format(
                "https://revgeocode.search.hereapi.com/v1/revgeocode?at=%f,%f&lang=en-US&apikey=%s",
                latitude, longitude, apiKey
        );
        RestTemplate restTemplate = new RestTemplate();
        try {
            // Appel de l'API et récupération de la réponse complète
            String response = restTemplate.getForObject(url, String.class);

            // Extraction de l'adresse complète
            String address = extractAddress(response);

            // Log de l'adresse
            logger.info("Adresse obtenue : " + address);

            return address;
        } catch (Exception e) {
            // Log de l'erreur
            logger.error("Erreur lors de la récupération de la localisation : " + e.getMessage());
            return "Location not found";
        }
    }

    private String extractAddress(String jsonResponse) {
        // Cette méthode doit parser la réponse JSON pour extraire l'adresse.
        // Voici un exemple simple basé sur le format JSON. Tu peux utiliser un parser JSON comme Jackson ou Gson pour cela.

        // Exemple pour obtenir "label" depuis la réponse JSON:
        int labelStart = jsonResponse.indexOf("\"label\":\"") + 9;
        int labelEnd = jsonResponse.indexOf("\"", labelStart);
        return jsonResponse.substring(labelStart, labelEnd);
    }
}
