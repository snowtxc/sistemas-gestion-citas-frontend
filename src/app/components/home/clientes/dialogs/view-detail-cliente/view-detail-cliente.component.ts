import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClientData } from 'src/app/interfaces/Client';

@Component({
  selector: 'app-view-detail-cliente',
  templateUrl: './view-detail-cliente.component.html',
  styleUrls: ['./view-detail-cliente.component.scss']
})
export class ViewDetailClienteComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  celular: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public client_data: ClientData) {
    this.id = client_data.id;
      this.nombre = client_data.name;
      this.apellido = client_data.surname;
      this.celular = client_data.phone;
  }

  ngOnInit(): void {
  }

}
