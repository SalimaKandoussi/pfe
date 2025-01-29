package com.example.demo.controllers;

import com.example.demo.Models.Users;
import com.example.demo.Services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder; // Assurez-vous d'avoir le BCryptPasswordEncoder pour comparer les mots de passe hachés

    // Route d'inscription
    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody Map<String, Object> payload) {
        try {
            System.out.println("Requête d'inscription reçue : " + payload);

            // Extraire les informations utilisateur
            Map<String, String> userInfo = (Map<String, String>) payload.get("user");
            double latitude = Double.parseDouble(payload.get("latitude").toString());
            double longitude = Double.parseDouble(payload.get("longitude").toString());

            Users user = new Users();
            user.setUsername(userInfo.get("username"));
            user.setEmail(userInfo.get("email"));
            user.setPassword(userInfo.get("password"));
            user.setType(userInfo.get("type"));

            // Enregistrer l'utilisateur et obtenir la localisation
            Users registeredUser = authService.register(user, latitude, longitude);
            System.out.println("Utilisateur enregistré : " + registeredUser.getEmail());
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            System.out.println("Erreur lors de l'inscription : " + e.getMessage());
            return ResponseEntity.badRequest().body("Erreur lors de l'inscription : " + e.getMessage());
        }
    }

    // Route de connexion
    @PostMapping("/signin")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        try {
            System.out.println("Requête de connexion reçue : " + credentials);

            String email = credentials.get("email");
            String password = credentials.get("password");

            // Vérifier si l'utilisateur existe dans la base de données
            Users user = authService.login(email, password); // Appel avec email et mot de passe

            if (user == null) {
                return ResponseEntity.badRequest().body("Utilisateur non trouvé !");
            }

            // Vérification du mot de passe
            if (passwordEncoder.matches(password, user.getPassword())) {
                System.out.println("Mot de passe validé pour : " + email);

                // Vérification du type admin
                if ("admin123@gmail.com".equalsIgnoreCase(email)) {
                    System.out.println("Utilisateur admin détecté");
                    user.setType("admin");
                }

                System.out.println("Connexion réussie pour : " + email);
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.badRequest().body("Mot de passe incorrect !");
            }
        } catch (Exception e) {
            System.out.println("Erreur lors de la connexion : " + e.getMessage());
            return ResponseEntity.badRequest().body("Erreur lors de la connexion : " + e.getMessage());
        }
    }
}
