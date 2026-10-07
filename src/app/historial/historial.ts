import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {
  historial = [
    {
      codigo: 'MS-001',
      mision: 'Inspeccion de Torre',
      drone: 'Falcon X1',
      fecha: '2026-09-20',
      distancia: 12.5,
      duracion: 42,
      resultado: 'completada',
    },
    {
      codigo: 'MS-002',
      mision: 'Monitoreo Agricola',
      drone: 'Sky Explorer',
      fecha: '2026-09-22',
      distancia: 18.75,
      duracion: 55,
      resultado: 'completada',
    },
    {
      codigo: 'MS-003',
      mision: 'Levantamiento Fotografico',
      drone: 'Eagle Pro',
      fecha: '2026-09-25',
      distancia: 9.4,
      duracion: 38,
      resultado: 'cancelada',
    },
  ];
}
