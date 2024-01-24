import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvedorModel } from 'src/app/modelo/provedor-model';
import { ProvedoresService } from 'src/app/services/provedores-service.service';
 
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  currentToken:any;
  myDate = new Date();
  password?:string;
  conPassword?:string;
  candidato?:string;
  provedor?:ProvedorModel;  

  
  constructor(
    
    private router: Router,
    private provedorService: ProvedoresService
  ) { 
    this.provedorService.getProvedorById(1).subscribe(data => {
      this.provedor =data.data;
      this.candidato = this.provedor?.nombre; 
    });


  }

  mover(){
    this.router.navigate(['/Proveedor']);
  }
  

  


}