import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProvedorModel } from 'src/app/modelo/provedor-model';
import { ProvedoresService } from 'src/app/services/provedores-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.css']
})
export class ProvedoresComponent {

  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'telefono','compania','acciones'];
  public formControl:FormGroup;
  public listaProvedores:any= [];
  public resultLenght =0;

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator | undefined;

  constructor(private provedorSerice: ProvedoresService){

    this.listaProvedores = new MatTableDataSource([]);

    this.formControl = new FormGroup({
      idProvedor : new FormControl('',Validators.required),
      nombre : new FormControl('',Validators.required),
      apellido : new FormControl('',Validators.required),
      telefono : new FormControl('',[Validators.required,Validators.pattern("[+][0-9 ]{12}")]),
      compania : new FormControl('',Validators.required) 
    });

    this.initList();
    
  }
  

  initList(){
    this.provedorSerice.obtenerProvedores().subscribe(data =>{
      this.listaProvedores.data = data.data;
      this.listaProvedores.paginator = this.paginator;
      this.resultLenght = data.data.length;
    })
  }


  guardarProvedor(){
    console.log(this.formControl.invalid);

    Swal.fire({
      title: 'Provedores',
      text: "Esta seguro dar de alta?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.provedorSerice.altaProvedor(this.formControl.value).subscribe(data =>{
          Swal.fire(
            'Se dio de alta con éxito!',
            data.mensaje,
            'success'
          )
          this.initList();
        },error =>{
          Swal.fire(
            'Error!',
            error.error.mensaje,
            'error'
          )
        })
        
      }
    })
   
  }


  limpiarFormulario(){
    this.formControl.reset();
  }


  eliminarProvedor(provedor:ProvedorModel){
    Swal.fire({
      title: 'Provedores',
      text: "Esta seguro de eliminar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.provedorSerice.eliminarProvedor(provedor).subscribe(data =>{
          Swal.fire(
            'Eliminar provedor',
            data.mensaje,
            'success'
          )
          this.initList();
        },error =>{
          Swal.fire(
            'Error!',
            'Error al eliminar',
            'error'
          )
        })
        
      }
    })
  }

}
