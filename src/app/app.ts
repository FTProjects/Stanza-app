import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { StanzeDisponibili } from './components/stanze-disponibili/stanze-disponibili';
import { StanzePrenotate } from './components/stanze-prenotate/stanze-prenotate';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, StanzeDisponibili, StanzePrenotate, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'stanze-app';

}
