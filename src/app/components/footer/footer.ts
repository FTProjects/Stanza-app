import { Component, Input } from '@angular/core';
import { StanzeService } from '../../services/stanze-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CurrencyPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  constructor(public stanzeService: StanzeService){}
}
