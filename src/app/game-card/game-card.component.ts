import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  standalone: true
})
export class GameCardComponent {
  @Input() game!: Game;
  @Output() selectGame = new EventEmitter<Game>();

  onSelectGame() {
    this.selectGame.emit(this.game);
  }
}
