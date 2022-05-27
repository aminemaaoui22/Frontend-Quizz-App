import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { Game } from '../models/Game';
import { CreatedGame } from '../models/CreatedGame';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`${API_URL}/quizz`, {withCredentials : true});
  }

  getOneGame(gameId: string): Observable<Game>{
    return this.http.get<Game>(`${API_URL}/quizz/game?gameId=${gameId}`, {withCredentials : true});
  }

  doesExist(gameId: string) {
    return this.http.get<boolean>(`${API_URL}/quizz/exists?gameId=${gameId}`, {withCredentials : true});
  }

  createGame(withRegister: string, owner: string, joueurs_max: string, room: string): Observable<CreatedGame> {
    return this.http.post<CreatedGame>(`${API_URL}/quizz?with_register=${withRegister}&owner=${owner}&max_players=${joueurs_max}&room_type=${room}`, null, {withCredentials : true});
  }

  registerToGame(gameId: string) {
    return this.http.head(`${API_URL}/quizz/register?gameId=${gameId}`, {withCredentials : true});
  }
}
