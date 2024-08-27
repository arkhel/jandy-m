import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Game } from '../models/game.model';
import { GameCardComponent } from '../game-card/game-card.component'; 
import { GameDetailsComponent } from '../game-details/game-details.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [GameCardComponent, GameDetailsComponent, CommonModule, MatCardModule] 
})
export class DashboardComponent {
  games: Game[] = [
    // Datos de ejemplo
    { id: 1, name: 'Juego 1', description: 'Descripción del juego 1', participants: [] },
    { id: 2, name: 'Juego 2', description: 'Descripción del juego 2', participants: [] },
    // Agrega más juegos según sea necesario
  ];

  selectedGame: Game | null = null;

  onSelectGame(game: Game) {
    this.selectedGame = game;
  }
}
