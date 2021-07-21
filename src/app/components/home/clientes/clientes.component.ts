import { AfterViewInit, Component, OnInit,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


//Dialog component
import { AddClientComponent } from '../clientes/dialogs/add-client/add-client.component';
import { ViewDetailClienteComponent } from './dialogs/view-detail-cliente/view-detail-cliente.component';
import { DeleteClienteComponent } from './dialogs/delete-cliente/delete-cliente.component';
import { EditClienteComponent } from './dialogs/edit-cliente/edit-cliente.component';

import { MatDialog } from '@angular/material/dialog';

//Interfaces
import { ClientData } from "../../../interfaces/Client";





@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'celular','acciones'];
  dataSource: MatTableDataSource<ClientData>;

  @ViewChild(MatPaginator) paginator: any ;
  @ViewChild(MatSort) sort: any;
  

  constructor(public dialog:MatDialog) {
  
    const users = this.loadClients();
    this.dataSource = new MatTableDataSource(users);
   
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  loadClients(): ClientData[] {

    let clients:ClientData[] =  [];

    for(let x = 0 ; x < 5; x ++){
       clients.push({
         id: 1,
         nombre:'Rodrigo',
         apellido: 'Castro',
         celular: '091234234' 
      })

      clients.push({
        id: 1,
        nombre: 'Mariana',
        apellido: 'Romero',
        celular: '091634134'
      })
    }

    return clients;

  }

  openDialogAddClient() {
    const dialogAdd = this.dialog.open(AddClientComponent);

   
  }

  openDialogEditClient(client:ClientData){
    
    const dialogEdit = this.dialog.open(EditClienteComponent,{
      data: client
    });

  


  }

  openDialogViewDetailClient(client:ClientData){
    
    const dialogView = this.dialog.open(ViewDetailClienteComponent, {
      data: client
    });



  }

  openDialogDeleteClient(client:ClientData){

    const dialogDelete = this.dialog.open(DeleteClienteComponent,{
      data: client
    });

  
  }



}


