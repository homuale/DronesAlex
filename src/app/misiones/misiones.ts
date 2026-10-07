import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-misiones',
  imports: [CommonModule],
  templateUrl: './misiones.html',
  styleUrl: './misiones.css',
})
export class Misiones {
  misiones = [
    {
      codigo: 'MS-101',
      nombre: 'Inspeccion de Torre',
      drone: 'Falcon X1',
      fecha: '2026-09-30',
      estado: 'programada',
    },
    {
      codigo: 'MS-102',
      nombre: 'Monitoreo Agricola',
      drone: 'Sky Explorer',
      fecha: '2026-10-01',
      estado: 'en proceso',
    },
    {
      codigo: 'MS-103',
      nombre: 'Levantamiento Fotografico',
      drone: 'Eagle Pro',
      fecha: '2026-10-03',
      estado: 'programada',
    },
  ];
}
