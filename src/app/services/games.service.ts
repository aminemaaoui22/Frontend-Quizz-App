import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Game[]>{
    return this.http.get<Game[]>(`${API_URL}/quizz`);
  }

  getOneGame(gameId: string): Observable<Game>{
    return this.http.get<Game>(`${API_URL}/quizz/game?gameId=${gameId}`);
  }

  doesExist(gameId: string) {
    return this.http.get<boolean>(`${API_URL}/quizz/exists?gameId=${gameId}`);
  }
}
