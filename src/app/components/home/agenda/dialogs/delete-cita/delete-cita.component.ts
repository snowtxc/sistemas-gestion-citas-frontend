import { Component, OnInit,Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CitasService } from '@services/citas/citas.service';


@Component({
  selector: 'app-delete-cita',
  templateUrl: './delete-cita.component.html',
  styleUrls: ['./delete-cita.component.scss']
})
export class DeleteCitaComponent implements OnInit {
  citaID = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public cita_id: any,private _citaService:CitasService,private snackBar:MatSnackBar) {
    this.citaID = cita_id;
  }

  ngOnInit(): void {
  }

  onClickDelete(){
    this._citaService.deleteCita(this.citaID).subscribe(data =>{
      this.emitDeleteSucces();
      this.snackBar.open(data.msg,'',{duration : 3000});

    });
  }

  emitDeleteSucces(){
    this._citaService.eventCloseViewInformation.next();
  }

}
