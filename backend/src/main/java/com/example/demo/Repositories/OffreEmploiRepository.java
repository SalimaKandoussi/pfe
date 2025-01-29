package com.example.demo.Repositories;



import com.example.demo.Models.OffreEmploi;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OffreEmploiRepository extends MongoRepository<OffreEmploi, String> {
}
