import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl: string = "http://localhost:8080/api/v1/players";

  constructor(private httpClient: HttpClient) { }

  getAllPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.baseUrl);
  }

  createPlayer(player: Player): Observable<Object> {
    return this.httpClient.post(this.baseUrl, player);
  }

  getPlayerById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${this.baseUrl}/${id}`);
  }

  updatePlayer(id: number, player: Player): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, player);
  }

  deletePlayer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
