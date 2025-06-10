import { Component } from '@angular/core';
import { Card } from '../card/card';
import { StanzeService } from '../../services/stanze-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stanze-prenotate',
  imports: [Card, NgClass],
  templateUrl: './stanze-prenotate.html',
  styleUrl: './stanze-prenotate.css'
})
export class StanzePrenotate {

  constructor(public stanzeService: StanzeService){}

  get StanzeSortate(){
    return this.stanzeService.StanzePrenotate.slice().sort((a,b)=> a.id - b.id);
  }

  Cancella(cameraId: number){
    this.stanzeService.rimuoviPrenotazione(cameraId)
  }
}
