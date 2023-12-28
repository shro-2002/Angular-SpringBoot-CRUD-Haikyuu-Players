import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  id: number = 0;
  player: Player = new Player();
  constructor(
    private playerService: PlayerService, 
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe(data => {
      this.player = data;
    }
      , error => console.log(error));
  }

}
