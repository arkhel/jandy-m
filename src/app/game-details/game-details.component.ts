import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  standalone: true,
  imports: [CommonModule] 

})
export class GameDetailsComponent {
  @Input() game!: Game;

  startGame() {
    // Lógica para iniciar el juego
    console.log(`Iniciando el juego: ${this.game.name}`);
  }
}
