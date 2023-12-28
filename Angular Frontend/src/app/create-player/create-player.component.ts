import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  player: Player = new Player();
  constructor(private playerService: PlayerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePlayer() {
    this.playerService.createPlayer(this.player).subscribe(data => {
      console.log(data);
      this.goToList();
    },
      error => console.log(error));
  }

  goToList() {
    console.log("Going back to list");
    this.router.navigate(['/players']);
  }
  OnSubmit() {
    console.log(this.player);
    this.savePlayer();
  }

}
