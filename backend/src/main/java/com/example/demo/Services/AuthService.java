package com.example.demo.Services;

import com.example.demo.Models.Users;
import com.example.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LocationService locationService;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Enregistrement d'un utilisateur avec la géolocalisation et mot de passe encodé
    public Users register(Users user, double latitude, double longitude) {
        // Vérifier si l'email existe déjà dans la base
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Cet email est déjà utilisé !");
        }

        // Encoder le mot de passe avant de l'enregistrer
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Récupérer l'adresse en fonction de la latitude et longitude
        String address = locationService.getAddress(latitude, longitude);
        user.setLocalisation(address);

        // Enregistrer l'utilisateur dans la base de données
        return userRepository.save(user);
    }

    // Connexion d'un utilisateur avec vérification du mot de passe
    public Users login(String email, String password) {
        // Chercher l'utilisateur dans la base par son email
        Users user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé !"));

        // Vérifier si le mot de passe fourni correspond au mot de passe encodé dans la base
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Mot de passe incorrect !");
        }

        return user; // Retourner l'utilisateur connecté
    }
}
