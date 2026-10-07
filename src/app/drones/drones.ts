import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drones',
  imports: [CommonModule],
  templateUrl: './drones.html',
  styleUrl: './drones.css',
})
export class Drones {
  drones = [
    {
      codigo: 'DR001',
      nombre: 'Falcon X1',
      bateria: 85,
      autonomia: 45,
      valor: 5500,
      estado: 'disponible',
    },
    {
      codigo: 'DR002',
      nombre: 'Sky Explorer',
      bateria: 60,
      autonomia: 35,
      valor: 4200,
      estado: 'en mision',
    },
    {
      codigo: 'DR003',
      nombre: 'Eagle Pro',
      bateria: 25,
      autonomia: 50,
      valor: 6800,
      estado: 'mantenimiento',
    },
  ];
}
