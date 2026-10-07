import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-mision',
  imports: [FormsModule],
  templateUrl: './nueva-mision.html',
  styleUrl: './nueva-mision.css',
})
export class NuevaMision {
  mision = {
    nombre: '',
    drone: '',
    piloto: '',
    tipo: '',
    fecha: '',
    hora: '',
    duracion: 0,
    distancia: 0,
    observaciones: '',
  };

  registrar() {
    alert('Misión registrada correctamente');
    console.log(this.mision);
  }
}
