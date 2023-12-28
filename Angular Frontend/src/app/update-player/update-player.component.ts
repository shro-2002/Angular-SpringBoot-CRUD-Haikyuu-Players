import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {

  id: number = 0;
  updatePlayer: Player = new Player();
  constructor(private playerService: PlayerService, private router: ActivatedRoute,private router1: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe(data => {
      this.updatePlayer = data;
    }
      , error => console.log(error));
  }

  onSubmit() {
    this.playerService.updatePlayer(this.id, this.updatePlayer).subscribe(data => {
      this.goToList();
    }
      , error => console.log(error));
  }
  goToList() {
    console.log("Going back to list");
    this.router1.navigate(['/players']);
  }

}
