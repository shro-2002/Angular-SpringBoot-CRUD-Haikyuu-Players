package com.example.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.Player;
import com.example.springboot.repository.PlayerRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(path = "/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {

	@Autowired
	private PlayerRepository playerrepo;

	@GetMapping(path = "/players")
	public List<Player> getAllPlayers() {
		return playerrepo.findAll();
	}

	@PostMapping("/players")
	public Player createPlayer(@RequestBody Player player) {
		return playerrepo.save(player);
	}

	@GetMapping("/players/{id}")
	public ResponseEntity<Player> getPlayerById(@PathVariable(value = "id") Integer playerId) {

		Player player = playerrepo.findById(playerId)
				.orElseThrow(() -> new ResourceNotFoundException("Player not found for this id :: " + playerId));
		return ResponseEntity.ok(player);

	}

	@PutMapping("/players/{id}")
	public ResponseEntity<Player> updatePlayer(@PathVariable(value = "id") Integer playerId,
			@RequestBody Player player) {
		Player player1 = playerrepo.findById(playerId)
				.orElseThrow(() -> new ResourceNotFoundException("Player not found for this id :: " + playerId));

		player1.setName(player.getName());
		player1.setTeam(player.getTeam());
		player1.setPosition(player.getPosition());
		player1.setHeight(player.getHeight());
		player1.setAge(player.getAge());
		Player updatedPlayer = playerrepo.save(player1);
		return ResponseEntity.ok(updatedPlayer);

	}

	@DeleteMapping("/players/{id}")
	public ResponseEntity< Map<String, Boolean> >deletePlayer(@PathVariable(value = "id") Integer playerId) {
		Player player = playerrepo.findById(playerId)
				.orElseThrow(() -> new ResourceNotFoundException("Player not found for this id :: " + playerId));
		playerrepo.delete(player);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
