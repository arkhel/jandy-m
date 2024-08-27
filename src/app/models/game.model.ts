// src/app/models/game.model.ts
export interface Game {
    id: number;
    name: string;
    description: string;
    participants: Participant[];
  }
  
  export interface Participant {
    id: number;
    name: string;
    score: number;
  }
  