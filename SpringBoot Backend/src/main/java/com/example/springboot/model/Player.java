package com.example.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "volleyball_players")
public class Player {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "player_name")
	private String name;

	@Column(name = "team_name")
	private String team;

	@Column(name = "position")
	private String position;

	@Column(name = "height_cm")
	private int height;

	@Column(name = "age")
	private int age;

	public Player() {

	}

	public Player(int id, String name, String team, String position, int height, int age) {
		super();
		this.id = id;
		this.name = name;
		this.team = team;
		this.position = position;
		this.height = height;
		this.age = age;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Player [id=" + id + ", name=" + name + ", team=" + team + ", position=" + position + ", height="
				+ height + ", age=" + age + "]";
	}

}
