package com.example.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springboot.model.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

}
