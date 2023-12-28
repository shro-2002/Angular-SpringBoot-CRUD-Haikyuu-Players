import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = []

  constructor(private playerService: PlayerService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllPlayers();
  }

  getAllPlayers() {
    this.playerService.getAllPlayers().subscribe(data => {
      this.players = data;
      console.log(this.players);
    })
  }

  viewPlayer(id: number) {
    this.router.navigate(['player-details', id]);
  }

  updatePlayer(id: number) {
  this.router.navigate(['edit-players', id]);
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id).subscribe(data => {
      console.log(data);
      this.getAllPlayers();
    })
  }
}
