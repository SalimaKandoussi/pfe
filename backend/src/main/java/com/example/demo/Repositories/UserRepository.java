package com.example.demo.Repositories;

import com.example.demo.Models.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface UserRepository extends MongoRepository<Users, String> {
    Optional<Users> findByEmail(String email);
}
