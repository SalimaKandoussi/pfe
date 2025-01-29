package com.example.demo.controllers;

import com.example.demo.Services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationController {

    @Autowired
    private LocationService hereService;

    @GetMapping("/api/reverse-geocode")
    public String getAddress(@RequestParam double latitude, @RequestParam double longitude) {
        return hereService.getAddress(latitude, longitude);
    }
}
