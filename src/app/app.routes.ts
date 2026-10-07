import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Drones } from './drones/drones';
import { Misiones } from './misiones/misiones';
import { NuevaMision } from './nueva-mision/nueva-mision';
import { Historial } from './historial/historial';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'drones', component: Drones },
  { path: 'misiones', component: Misiones },
  { path: 'nueva-mision', component: NuevaMision },
  { path: 'historial', component: Historial },
];
