import { Injectable } from '@angular/core';
import { Stanza, stanze } from '../types/stanze';

@Injectable({
  providedIn: 'root'
})
export class StanzeService {
  StanzeDisponibili: Stanza[] = stanze;
  StanzePrenotate: Stanza[] = [];
  TotCarrello: number = 0;
  constructor() {}

  aggiungiPrenotazione(cameraId:number){
    const camera = this.StanzeDisponibili.find(c => c.id === cameraId);
    if(camera){
      this.StanzePrenotate.push(camera)
      this.StanzeDisponibili = this.StanzeDisponibili.filter(d => d.id !== cameraId)
      this.TotCarrello += camera.prezzo;
    }
  }

  rimuoviPrenotazione(cameraId:number){
    const camera = this.StanzePrenotate.find(c => c.id === cameraId);
    if(camera){
      this.TotCarrello -= camera.prezzo;
      this.StanzeDisponibili.push(camera)
    }
    this.StanzePrenotate = this.StanzePrenotate.filter(c => c.id !== cameraId)
  }
}
