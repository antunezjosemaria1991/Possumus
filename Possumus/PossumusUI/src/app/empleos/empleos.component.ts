import { Component, OnInit } from '@angular/core';
import { Empleos } from '../shared/empleos.models';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css']
})
export class EmpleosComponent implements OnInit {

  formData: Empleos;

  constructor() { }

  ngOnInit() {

    this.formData = {
      EmpleoId: 0,
      Nombre: "",
      PeriodoDesde: 0,
      PeriodoHasta: 0
    };

  }

}
