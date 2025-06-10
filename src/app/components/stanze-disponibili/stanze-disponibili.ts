import { Component } from '@angular/core';
import { Card } from '../card/card';
import { StanzeService } from '../../services/stanze-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stanze-disponibili',
  imports: [Card, NgClass],
  templateUrl: './stanze-disponibili.html',
  styleUrl: './stanze-disponibili.css'
})
export class StanzeDisponibili {

  constructor(public stanzeService: StanzeService){}

  get StanzeSortate(){
    return this.stanzeService.StanzeDisponibili.slice().sort((a,b)=> a.id - b.id)
  }

  Prenota(cameraId: number){
    this.stanzeService.aggiungiPrenotazione(cameraId)
  }
}
