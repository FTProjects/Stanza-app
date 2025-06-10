import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stanza } from '../../types/stanze';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass, CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
@Input() listaStanze!: Stanza[];
@Input() btnText!: string;
@Input() btnVariant!: "btn-aggiungi" | "btn-cancella";

@Output() onAction: EventEmitter<number> = new EventEmitter();

onClick(cameraId: number){
  this.onAction.emit(cameraId)
}
}
