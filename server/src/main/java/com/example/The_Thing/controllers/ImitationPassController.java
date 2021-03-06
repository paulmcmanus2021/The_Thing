package com.example.The_Thing.controllers;

import com.example.The_Thing.models.ImitationBlocked;
import com.example.The_Thing.models.ImitationPassed;
import com.example.The_Thing.models.Player;
import com.example.The_Thing.repositories.ImitationPassedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ImitationPassController {

    @Autowired
    ImitationPassedRepository imitationPassRepository;

    @GetMapping(value = "/imitation-passes")
    ResponseEntity<List<ImitationPassed>> findAllImitationPassed() {
        return new ResponseEntity<>(imitationPassRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/imitation-passes")
    public ResponseEntity<ImitationPassed> postPlayer(@RequestBody ImitationPassed imitationPass) {
        imitationPassRepository.save(imitationPass);
        return new ResponseEntity<>(imitationPass, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/imitation-passes")
    void deleteAllImitationPasses() {
        imitationPassRepository.deleteAll();
    }

}

