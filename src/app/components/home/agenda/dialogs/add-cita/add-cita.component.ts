import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CitasService } from '@services/citas/citas.service';
import { ClientesService } from '@services/clientes/clientes.service';


//Interfaces
import { ClientData } from 'src/app/interfaces/Client';


@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.scss']
})
export class AddCitaComponent implements OnInit {

  clientes:ClientData []=  [];
  searchable:string = 'true';


  public formAdd:FormGroup;


  constructor(private fb:FormBuilder,private citaService:CitasService, private clienteService:ClientesService,private snack: MatSnackBar) {
    this.formAdd = this.fb.group({
      cliente: ['',Validators.required],
      title: ['',Validators.required],
      motivo: ['',Validators.required],
      fecha_hora: ['',Validators.required]

    })


  }

  ngOnInit(): void {
    this.getClientes();

  }



  getClientes(){
    this.clienteService.getClientes().subscribe((data) =>{
      this.clientes = data;
    })
  }

  onSubmitAdd(){
    const clienteID = this.formAdd.controls.cliente.value.id;
    const title = this.formAdd.controls.title.value;
    const motivo = this.formAdd.controls.motivo.value;
    const fecha_hora = this.formAdd.controls.fecha_hora.value;

    this.citaService.createCita(title,motivo,fecha_hora,clienteID).subscribe(data =>{

      this.citaService.emitUpdateCitas();
      this.snack.open(data.msg ,'', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['add-snackbar']});

    })

  }






}
