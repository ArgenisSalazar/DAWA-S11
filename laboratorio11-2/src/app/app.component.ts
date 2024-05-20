import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'laboratorio11-2'
  valor = "Argenis Poalo Salazar Sihuay"
  tipo = "password"
  img = "assets/angular.png"
  enlace = "https://elcomercio.pe"
  clase01 = "azul"
  clase02 = "rojo"
}
