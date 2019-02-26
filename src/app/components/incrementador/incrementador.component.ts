import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @Input() porcentaje:number;
 
  @Input() leyenda:string= 'Leyanda';

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgres') txtProgres :ElementRef;
 
  constructor() { }

  ngOnInit() {
  }


  onChange(newValue:number){
    // let elemtHtml:any = this.txtProgres;

     if(newValue >= 100){
       this.porcentaje = 100;
     }else if (newValue <= 0  ){
      this.porcentaje = 0;

     }else{
       this.porcentaje  = newValue;
      }
      this.txtProgres.nativeElement.value= this.porcentaje;
      this.cambioValor.emit(this.porcentaje);
  }


  operacion(valor : number){
   
    
    if (this.porcentaje >= 100 && valor >0) {
    
      this.porcentaje = 100;
  return;
    }if(this.porcentaje <= 0 && valor < 0){
      this.porcentaje=0;
      return;
    }
    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgres.nativeElement.focus();
  }


}
